import React from 'react';

/**
 * BlogSkeleton — Loading placeholder for blog cards.
 * Animated pulse matching the existing card dimensions.
 */
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
    <div className="h-56 bg-gray-200" />
    <div className="p-6 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-1/4" />
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-3 bg-gray-200 rounded w-1/3" />
    </div>
  </div>
);

const FeaturedSkeleton = () => (
  <div className="relative min-h-[500px] md:h-[450px] bg-white rounded-[32px] shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-100 animate-pulse">
    <div className="w-full md:w-2/3 bg-gray-200 h-64 md:h-auto" />
    <div className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 w-full md:w-[500px] bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-50 mt-[-40px] md:mt-0 mx-auto max-w-[90%] md:max-w-none">
      <div className="space-y-4">
        <div className="h-3 bg-gray-200 rounded w-1/4" />
        <div className="h-8 bg-gray-200 rounded w-full" />
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-5 bg-gray-200 rounded w-1/3 mt-4" />
      </div>
    </div>
  </div>
);

/**
 * Full blog page skeleton — shows featured + grid placeholders.
 */
const BlogSkeleton = () => (
  <section className="max-w-[1232px] mx-auto space-y-8 pb-32 px-4">
    <FeaturedSkeleton />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </section>
);

export default BlogSkeleton;
export { SkeletonCard, FeaturedSkeleton };
