/**
 * useBlogs.js
 * Custom hook for fetching blog list with caching.
 * Controlled fetch — no unnecessary refetches.
 */
import { useState, useEffect, useRef } from 'react';
import { fetchBlogs } from '../api/blogApi';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetched = useRef(false);

  useEffect(() => {
    // Prevent double-fetch in StrictMode
    if (fetched.current) return;
    fetched.current = true;

    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogs();
        if (!cancelled) setBlogs(data);
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || 'Failed to load blogs. Please try again.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return { blogs, loading, error };
}
