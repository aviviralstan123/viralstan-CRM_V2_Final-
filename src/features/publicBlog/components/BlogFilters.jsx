import React from 'react';
import { Search } from 'lucide-react';

/**
 * BlogFilters — Filter bar with search + category pills.
 * Matches existing glassmorphism filter bar design.
 */
const BlogFilters = ({ categories, activeCategory, onCategoryChange, searchQuery, onSearchChange }) => {
  return (
    <section className="max-w-[1232px] mx-auto mb-10 px-4 md:mb-16">
      <div className="bg-white/60 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            className="w-full bg-gray-100 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 ring-blue-100 text-sm"
            placeholder="Search insights..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-200/50 text-brand-body hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;
