import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600';

/**
 * BlogCard — Grid card matching the existing site design.
 * Renders blog title, category badge, image, and excerpt.
 */
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  if (!blog) return null;

  const image = blog.featured_image?.startsWith('http')
    ? blog.featured_image
    : FALLBACK_IMG;

  return (
    <div
      onClick={() => navigate(`/blog/${blog.slug}`)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
    >
      {/* Image */}
      <div className="h-56 bg-gray-900 overflow-hidden relative">
        <img
          src={image}
          alt={blog.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        {blog.category && (
          <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-brand-dark">
            {blog.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="font-display font-bold text-xl text-brand-dark group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
          {blog.title}
        </h4>
        {blog.excerpt && (
          <p className="text-brand-body text-sm line-clamp-2 mb-3">
            {blog.excerpt}
          </p>
        )}
        <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
          {blog.author_name && <span>{blog.author_name}</span>}
          {blog.author_name && blog.published_at && <span>·</span>}
          {blog.published_at && <span>{formatDate(blog.published_at)}</span>}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
