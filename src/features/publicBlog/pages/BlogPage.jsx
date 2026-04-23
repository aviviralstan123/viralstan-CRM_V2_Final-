import React, { useState, useMemo } from 'react';
import { useBlogs } from '../hooks/useBlogs';
import { extractCategories } from '../utils/extractCategories';

// Components
import BlogFeaturedCard from '../components/BlogFeaturedCard';
import BlogCard from '../components/BlogCard';
import BlogFilters from '../components/BlogFilters';
import BlogSkeleton from '../components/BlogSkeleton';
import BlogError, { BlogEmpty } from '../components/BlogError';
import TrendingSection from '../components/TrendingSection';
import BrowseByFocus from '../components/BrowseByFocus';

// Reuse existing HeroSection from original blog
import HeroSection from '../../../components/blog/HeroSection';

const BLOGS_PER_PAGE = 6;

/**
 * BlogPage — Main /blog route.
 * Preserves original layout: Hero → Filters → Featured → Grid → Trending → BrowseByFocus → CTA
 * Now powered by live API data.
 */
const BlogPage = () => {
  const { blogs, loading, error } = useBlogs();
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

  // Derived data
  const categories = useMemo(() => extractCategories(blogs), [blogs]);

  const filteredBlogs = useMemo(() => {
    let result = blogs;

    // Category filter
    if (activeCategory !== 'All Topics') {
      result = result.filter((b) => b.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.category?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [blogs, activeCategory, searchQuery]);

  // Featured = first blog, rest go to grid
  const featuredBlog = filteredBlogs[0] || null;
  const gridBlogs = filteredBlogs.slice(1);
  const visibleGridBlogs = gridBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < gridBlogs.length;

  // Reset visible count when filters change
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(BLOGS_PER_PAGE);
  };

  const handleSearchChange = (q) => {
    setSearchQuery(q);
    setVisibleCount(BLOGS_PER_PAGE);
  };

  // Error state
  if (error && !loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] font-sans text-brand-dark">
        <HeroSection />
        <BlogError message={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-brand-dark">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. FILTER BAR */}
      <BlogFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* 3. FEATURED & GRID */}
      {loading ? (
        <BlogSkeleton />
      ) : filteredBlogs.length === 0 ? (
        <BlogEmpty />
      ) : (
        <section className="max-w-[1232px] mx-auto space-y-8 pb-32 px-4">
          {/* Featured Big Card */}
          {featuredBlog && <BlogFeaturedCard blog={featuredBlog} />}

          {/* Blog Grid */}
          {visibleGridBlogs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {visibleGridBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center pt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + BLOGS_PER_PAGE)}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-200"
              >
                Load More Articles
              </button>
            </div>
          )}
        </section>
      )}

      {/* 4. TRENDING SECTION */}
      {!loading && blogs.length > 0 && <TrendingSection blogs={blogs} />}

      {/* 5. BROWSE BY FOCUS */}
      {!loading && categories.length > 1 && (
        <BrowseByFocus
          categories={categories}
          onCategoryClick={(cat) => {
            handleCategoryChange(cat);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* 6. CTA SECTION */}
      <section className="flex flex-col items-start isolate relative w-full max-w-[1232px] min-h-[350px] md:h-[396px] mx-auto my-10 md:my-20 rounded-3xl md:rounded-[40px] overflow-hidden bg-white border border-gray-100 shadow-sm px-4 md:px-0">
        <div
          className="absolute inset-0 z-0 opacity-[0.1]"
          style={{ background: 'linear-gradient(107.82deg, #2563EB 0%, #6366F1 50%, #7C3AED 100%)' }}
        />
        <div className="flex flex-col items-center justify-center w-full h-full py-16 md:py-[80px] z-30">
          <div className="flex flex-col items-center gap-6 md:gap-[32px] w-full max-w-[672px]">
            <h2 className="w-full font-display font-[800] text-3xl md:text-[48px] leading-tight md:leading-[48px] text-center tracking-tight text-[#181C20] px-2">
              Turn Insights Into Growth
            </h2>
            <p className="w-full max-w-[620px] font-manrope font-[400] text-base md:text-[18px] leading-relaxed md:leading-[28px] text-center text-[#434655] px-4">
              Stop guessing and start dominating. Our insights give you a competitive advantage built for high-scale digital brands.
            </p>
            <button
              className="flex justify-center items-center py-4 md:py-[20px] px-8 md:px-[48px] w-auto min-w-[180px] h-auto md:h-[68px] rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-white font-display font-extrabold text-lg"
              style={{ background: 'linear-gradient(107.82deg, #2563EB 0%, #6366F1 50%, #7C3AED 100%)' }}
            >
              Start Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
