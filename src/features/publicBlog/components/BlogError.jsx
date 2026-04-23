import React from 'react';

/**
 * BlogError — Error & empty state display for blog pages.
 */
const BlogError = ({ message, onRetry }) => (
  <section className="max-w-[1232px] mx-auto px-4 py-32 text-center">
    <div className="max-w-md mx-auto">
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <h3 className="font-display font-extrabold text-2xl text-brand-dark mb-3">
        Something went wrong
      </h3>
      <p className="text-brand-body mb-8 text-sm">
        {message || 'We couldn\'t load the content. Please check your connection and try again.'}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-200"
        >
          Try Again
        </button>
      )}
    </div>
  </section>
);

/**
 * BlogEmpty — Shown when no blogs match filters.
 */
export const BlogEmpty = ({ message }) => (
  <section className="max-w-[1232px] mx-auto px-4 py-24 text-center">
    <div className="max-w-md mx-auto">
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>
      <h3 className="font-display font-extrabold text-2xl text-brand-dark mb-3">
        No articles found
      </h3>
      <p className="text-brand-body text-sm">
        {message || 'Try adjusting your search or filter to find what you\'re looking for.'}
      </p>
    </div>
  </section>
);

export default BlogError;
