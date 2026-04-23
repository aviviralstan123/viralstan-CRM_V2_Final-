/**
 * getApiBaseUrl.js
 * Centralized API base URL from Vite environment variables.
 */

export function getApiBaseUrl() {
  // Use Vite's environment variable
  return import.meta.env.VITE_API_URL || '';
}
