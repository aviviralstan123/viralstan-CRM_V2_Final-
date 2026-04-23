import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * BrowseByFocus — Category cards with "Load More" functionality.
 * Uses dynamic categories from API data, styled same as original.
 */

// Consistent dark styling per category
const STYLE_POOL = [
  { bg: 'bg-[#0F172A]', glow: 'shadow-blue-500/20' },
  { bg: 'bg-[#1E293B]', glow: 'shadow-indigo-500/20' },
  { bg: 'bg-[#020617]', glow: 'shadow-emerald-500/20' },
  { bg: 'bg-[#171717]', glow: 'shadow-purple-500/20' },
  { bg: 'bg-[#1e1b4b]', glow: 'shadow-blue-500/20' },
  { bg: 'bg-[#312e81]', glow: 'shadow-indigo-500/20' },
  { bg: 'bg-[#0f172a]', glow: 'shadow-emerald-500/20' },
  { bg: 'bg-[#1e1b4b]', glow: 'shadow-purple-500/20' },
];

const BrowseByFocus = ({ categories = [], onCategoryClick }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter out "All Topics" — only real categories
  const realCategories = categories.filter((c) => c !== 'All Topics');

  if (realCategories.length === 0) return null;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="max-w-[1232px] mx-auto mb-20 px-4">
      <div className="mb-10">
        <h2 className="font-display font-extrabold text-3xl mb-2 text-brand-dark">Browse by Focus</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {realCategories.slice(0, visibleCount).map((cat, i) => {
          const style = STYLE_POOL[i % STYLE_POOL.length];
          return (
            <div
              key={cat}
              onClick={() => onCategoryClick?.(cat)}
              className={`relative h-40 ${style.bg} rounded-2xl flex items-center justify-center overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all shadow-xl ${style.glow}`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30 group-hover:scale-110 transition-transform duration-700 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-600/20 to-transparent" />

              {/* Text Content */}
              <div className="relative z-10 text-center">
                <h3 className="font-display font-black text-4xl tracking-tighter text-white/20 group-hover:text-white transition-colors duration-300">
                  {cat.toUpperCase()}
                </h3>
                <p className="text-[10px] text-white/40 font-bold tracking-[3px] uppercase mt-1 group-hover:text-blue-400 transition-colors">
                  Explore Articles
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      {visibleCount < realCategories.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95 hover:-translate-y-1"
          >
            Load More Topics <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BrowseByFocus;
