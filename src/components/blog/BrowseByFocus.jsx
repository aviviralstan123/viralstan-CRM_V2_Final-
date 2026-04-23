import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

;

const BrowseByFocus = () => {
  // 1. Saara data ek array mein (Aap isme aur items add kar sakte hain)
  const focusItems = [
    { label: 'SEO', bg: 'bg-[#0F172A]', glow: 'shadow-blue-500/20' },
    { label: 'SOCIAL', bg: 'bg-[#1E293B]', glow: 'shadow-indigo-500/20' },
    { label: 'GROWTH', bg: 'bg-[#020617]', glow: 'shadow-emerald-500/20' },
    { label: 'STRATEGY', bg: 'bg-[#171717]', glow: 'shadow-purple-500/20' },
    // Extra items for "Load More" test
    { label: 'ADS', bg: 'bg-[#1e1b4b]', glow: 'shadow-blue-500/20' },
    { label: 'EMAIL', bg: 'bg-[#312e81]', glow: 'shadow-indigo-500/20' },
    { label: 'BRAND', bg: 'bg-[#1e1b4b]', glow: 'shadow-emerald-500/20' },
    { label: 'DATA', bg: 'bg-[#0f172a]', glow: 'shadow-purple-500/20' },
  ];

  // 2. State to handle visible cards (Shuru mein 4 dikhenge)
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // Har click par 4 aur dikhayega
  };

  return (
    <section className="max-w-[1232px] mx-auto mb-20 px-4">
      <div className="mb-10">
        <h2 className="font-jakarta font-extrabold text-3xl mb-2 text-brand-dark">Browse by Focus</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {focusItems.slice(0, visibleCount).map((item, i) => (
          <div 
            key={i} 
            className={`relative h-40 ${item.bg} rounded-2xl flex items-center justify-center overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all shadow-xl ${item.glow}`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30 group-hover:scale-110 transition-transform duration-700 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            {/* Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-600/20 to-transparent`} />

            {/* Text Content */}
            <div className="relative z-10 text-center">
              <h3 className="font-jakarta font-black text-4xl tracking-tighter text-white/20 group-hover:text-white transition-colors duration-300">
                {item.label}
              </h3>
              <p className="text-[10px] text-white/40 font-bold tracking-[3px] uppercase mt-1 group-hover:text-blue-400 transition-colors">
                Safe Inner Work
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Load More Button (Sirf tab dikhega jab aur items baaki honge) */}
      {visibleCount < focusItems.length && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95 hover:-translate-y-1"
          >
            Load More Articles <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BrowseByFocus;
