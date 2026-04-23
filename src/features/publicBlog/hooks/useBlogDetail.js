/**
 * useBlogDetail.js
 * Custom hook for fetching a single blog by slug.
 */
import { useState, useEffect, useRef } from 'react';
import { fetchBlogBySlug } from '../api/blogApi';

export function useBlogDetail(slug) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lastSlug = useRef(null);

  useEffect(() => {
    if (!slug || slug === lastSlug.current) return;
    lastSlug.current = slug;

    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogBySlug(slug);
        if (!cancelled) setBlog(data);
      } catch (err) {
        if (!cancelled) {
          if (err?.status === 404) {
            setError('Blog not found.');
          } else {
            setError(err?.message || 'Failed to load blog. Please try again.');
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [slug]);

  return { blog, loading, error };
}
