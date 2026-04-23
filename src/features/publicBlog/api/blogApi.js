/**
 * blogApi.js
 * Centralized API calls for the public blog feature.
 * Uses native fetch + in-memory cache to respect rate limits.
 * No axios dependency needed.
 */
import { getApiBaseUrl } from '../utils/getApiBaseUrl';

const BASE_URL = getApiBaseUrl();

// Simple in-memory cache
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCached(key) {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.ts < CACHE_TTL) return entry.data;
  cache.delete(key);
  return null;
}

function setCache(key, data) {
  cache.set(key, { data, ts: Date.now() });
}

/**
 * Fetch all published blogs.
 * API returns: { success, message, data: Blog[] }
 * @returns {Promise<Blog[]>}
 */
export async function fetchBlogs() {
  const cacheKey = 'blogs_all';
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const response = await fetch(`${BASE_URL}/api/blogs`);

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  const blogs = json?.data || [];
  setCache(cacheKey, blogs);
  return blogs;
}

/**
 * Fetch a single blog by slug.
 * API returns: { success, message, data: Blog }
 * @param {string} slug
 * @returns {Promise<Blog>}
 */
export async function fetchBlogBySlug(slug) {
  const cacheKey = `blog_${slug}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const response = await fetch(`${BASE_URL}/api/blogs/${slug}`);

  if (!response.ok) {
    const error = new Error(`Failed to fetch blog: ${response.status}`);
    error.status = response.status;
    throw error;
  }

  const json = await response.json();
  const blog = json?.data || null;
  if (blog) setCache(cacheKey, blog);
  return blog;
}

/**
 * Invalidate all blog caches.
 */
export function clearBlogCache() {
  cache.clear();
}
