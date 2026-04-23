import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200';

/**
 * TrendingSection — Horizontal scrollable cards of recent/trending blogs.
 * Mirrors the existing TrendingSection design with live data.
 */
const TrendingSection = ({ blogs = [] }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Show up to 8 most recent blogs as "trending"
  const trendingBlogs = blogs.slice(0, 8);

  if (trendingBlogs.length === 0) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollTo = direction === 'left'
        ? scrollRef.current.scrollLeft - 300
        : scrollRef.current.scrollLeft + 300;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1232px] mx-auto px-4">
        {/* Header with Nav Buttons */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-display font-extrabold text-3xl mb-2">Trending Now</h2>
            <p className="text-brand-body">What everyone is reading this week</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-brand-dark" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-brand-dark" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trendingBlogs.map((blog) => {
            const image = blog.featured_image?.startsWith('http')
              ? blog.featured_image
              : FALLBACK_IMG;

            return (
              <div
                key={blog.id}
                onClick={() => navigate(`/blog/${blog.slug}`)}
                className="flex-shrink-0 w-[300px] flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden">
                  <img
                    src={image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h5 className="font-bold text-sm leading-tight text-brand-dark group-hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
