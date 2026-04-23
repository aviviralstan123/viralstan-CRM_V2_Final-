import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80';

/**
 * BlogFeaturedCard — Large hero-style featured blog card.
 * Matches the existing "Featured Big Card" layout exactly.
 */
const BlogFeaturedCard = ({ blog }) => {
  const navigate = useNavigate();

  if (!blog) return null;

  const image = blog.featured_image?.startsWith('http')
    ? blog.featured_image
    : FALLBACK_IMG;

  return (
    <div className="relative min-h-[500px] md:h-[450px] bg-white rounded-[32px] shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-100">
      {/* Image side */}
      <div className="w-full md:w-2/3 bg-gray-900 h-64 md:h-auto">
        <img
          src={image}
          alt={blog.title}
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
        />
      </div>

      {/* Content overlay */}
      <div className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 w-full md:w-[500px] bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-50 mt-[-40px] md:mt-0 mx-auto max-w-[90%] md:max-w-none">
        <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4 block">
          {blog.category || 'Featured'}
        </span>
        <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-tight text-brand-dark mb-4 line-clamp-3">
          {blog.title}
        </h2>
        <p className="text-brand-body mb-6 md:mb-8 text-sm md:text-base line-clamp-3">
          {blog.excerpt || 'Read this featured article to discover expert insights and strategies.'}
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(`/blog/${blog.slug}`)}
            className="flex items-center gap-2 text-blue-600 font-bold group/btn cursor-pointer"
          >
            Read Full Insight
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
          </button>
          <span className="text-xs text-gray-400 hidden sm:block">
            {formatDate(blog.published_at)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedCard;
