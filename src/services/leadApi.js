/**
 * leadApi.js
 * Handles public lead form submission to the backend.
 * Uses the existing VITE_API_URL environment variable.
 */

import { getApiBaseUrl } from '../features/publicBlog/utils/getApiBaseUrl';

const API_BASE = getApiBaseUrl();

/**
 * Submit a new lead from the public Contact Us / Strategy form.
 *
 * @param {Object} payload
 * @param {string} payload.name
 * @param {string} payload.email
 * @param {string} payload.phone
 * @param {string} payload.company
 * @param {string} payload.service_interested - comma-separated services
 * @param {string} payload.budget
 * @param {string} payload.message
 * @returns {Promise<{success: boolean, message: string, data?: object}>}
 */
export async function submitLead(payload) {
  const res = await fetch(`${API_BASE}/api/leads/public`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      source: 'website',
    }),
  });

  const json = await res.json();

  if (!res.ok) {
    // Server returns { success: false, message: "..." }
    throw new Error(json.message || 'Something went wrong. Please try again.');
  }

  return json;
}
