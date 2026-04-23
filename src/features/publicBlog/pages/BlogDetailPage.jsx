import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useBlogDetail } from '../hooks/useBlogDetail';
import { useBlogs } from '../hooks/useBlogs';
import { formatDate } from '../utils/formatDate';
import BlogError from '../components/BlogError';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80';

/**
 * BlogDetailPage — /blog/:slug route.
 * Preserves the existing BlogDetail premium layout,
 * now powered by live API data.
 */
const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { blog, loading, error } = useBlogDetail(slug);
  const { blogs } = useBlogs();

  // Related blogs — same category, different slug
  const relatedBlogs = React.useMemo(() => {
    if (!blog || !blogs.length) return [];
    return blogs
      .filter((b) => b.slug !== blog.slug && b.category === blog.category)
      .slice(0, 3);
  }, [blog, blogs]);

  // ------- Loading State -------
  if (loading) {
    return (
      <div className="bg-[#F7FAFF] min-h-screen">
        {/* Hero skeleton */}
        <section className="relative w-full min-h-[420px] sm:min-h-[520px] md:min-h-[620px] lg:h-[716px] flex flex-col justify-end overflow-hidden animate-pulse">
          <div className="absolute inset-0 bg-[#0B1220]" />
          <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="h-6 bg-white/10 rounded-full w-40 mb-6" />
            <div className="h-16 bg-white/10 rounded-2xl w-3/4 mb-4" />
            <div className="h-10 bg-white/10 rounded-2xl w-1/2 mb-8" />
            <div className="h-12 bg-white/10 rounded-full w-80" />
          </div>
        </section>
        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="space-y-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-full" />
            <div className="h-6 bg-gray-200 rounded w-5/6" />
            <div className="h-6 bg-gray-200 rounded w-4/6" />
            <div className="h-40 bg-gray-200 rounded-2xl w-full" />
            <div className="h-6 bg-gray-200 rounded w-full" />
            <div className="h-6 bg-gray-200 rounded w-3/4" />
          </div>
        </main>
      </div>
    );
  }

  // ------- Error State -------
  if (error) {
    return (
      <div className="bg-[#F7FAFF] min-h-screen pt-20">
        <BlogError message={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  if (!blog) return null;

  const heroImage = blog.featured_image?.startsWith('http')
    ? blog.featured_image
    : FALLBACK_IMG;

  // ------- Main Render -------
  return (
    <div className="bg-[#F7FAFF] min-h-screen">
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative w-full min-h-[420px] sm:min-h-[520px] md:min-h-[620px] lg:h-[716px] flex flex-col justify-end overflow-hidden font-display">
        <div className="absolute inset-0 z-0 bg-[#0B1220]">
          <img
            src={heroImage}
            className="w-full h-full object-cover opacity-50"
            alt={blog.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7FAFF] via-[#F7FAFF]/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          {/* Back button */}
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>

          {/* Category badge */}
          {blog.category && (
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-[12px] font-bold tracking-widest text-white uppercase">
                {blog.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="max-w-[900px] font-display text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-[800] leading-[1.1] tracking-tight text-[#0B1220] mb-6 sm:mb-8">
            {blog.title}
          </h1>

          {/* Meta info */}
          <div className="inline-flex flex-wrap items-center gap-3 sm:gap-6 p-3 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-sm font-bold">
            <div className="flex items-center gap-2 px-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                {blog.author_name?.charAt(0) || 'A'}
              </div>
              {blog.author_name || 'Viralstan'}
            </div>
            <div className="text-slate-400 hidden sm:inline">|</div>
            <div>{formatDate(blog.published_at || blog.created_at)}</div>
            {blog.word_count > 0 && (
              <>
                <div className="text-slate-400 hidden sm:inline">|</div>
                <div>{Math.ceil(blog.word_count / 200)} min read</div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ===== 2. ARTICLE CONTENT ===== */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Excerpt highlight */}
            {blog.excerpt && (
              <div className="relative p-6 sm:p-10 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-blue-500/30">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B1220]">Quick Summary</h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                  {blog.excerpt}
                </p>
              </div>
            )}

            {/* Blog HTML Content */}
            <article
              className="blog-content font-sans text-base sm:text-lg text-slate-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* CTA */}
            <div className="p-8 sm:p-12 md:p-16 bg-[#F8FAFF] border border-white rounded-[40px] text-center my-16 sm:my-20 shadow-inner">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1220] mb-3 font-display">
                Ready to Apply This Strategy?
              </h2>
              <p className="text-slate-500 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
                Join 500+ high-growth companies using Viralstan Insights.
              </p>
              <button
                onClick={() => navigate('/contact-us')}
                className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] rounded-2xl text-white font-bold text-lg sm:text-xl shadow-lg hover:shadow-indigo-500/40 transition-all hover:scale-105 active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Sidebar - Desktop only */}
          <div className="hidden lg:block lg:col-span-4">
            <aside className="sticky top-24 space-y-10 lg:space-y-12 shrink-0">
              {/* Share / Info */}
              <nav className="font-sans">
                <h3 className="text-[12px] font-[900] tracking-[2px] text-slate-400 uppercase mb-6">
                  Article Info
                </h3>
                <ul className="space-y-3">
                  {blog.category && (
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="font-bold">Category:</span> {blog.category}
                    </li>
                  )}
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    <span className="font-bold">Published:</span> {formatDate(blog.published_at || blog.created_at)}
                  </li>
                  {blog.word_count > 0 && (
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      <span className="font-bold">Words:</span> {blog.word_count.toLocaleString()}
                    </li>
                  )}
                </ul>
              </nav>

              {/* Sidebar CTA card */}
              <div className="w-full rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#7C3AED] p-6 lg:p-8 shadow-2xl shadow-blue-500/10">
                <h4 className="text-lg lg:text-[20px] font-extrabold text-white leading-tight font-display mb-2">
                  Custom Growth Audit
                </h4>
                <p className="text-[13px] lg:text-[14px] text-white/80 leading-relaxed font-sans mb-6 lg:mb-8">
                  Let our experts analyze your digital presence for free.
                </p>
                <button
                  onClick={() => navigate('/contact-us')}
                  className="w-full px-4 py-3 lg:py-4 bg-white text-[#2563EB] text-sm lg:text-[16px] font-[800] rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Request Audit
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* ===== 3. CONTINUE READING SECTION ===== */}
        {relatedBlogs.length > 0 && (
          <section className="w-full mx-auto py-12 sm:py-16 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-12">
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-4xl md:text-[40px] font-[900] text-[#0B1220] font-display tracking-tight leading-none">
                  Continue Reading
                </h2>
                <p className="text-sm sm:text-base text-slate-500 font-sans">
                  More articles in {blog.category || 'this category'}
                </p>
              </div>
              <Link
                to="/blog"
                className="text-[#2563EB] font-bold text-sm sm:text-base flex items-center gap-1 hover:underline group font-sans"
              >
                View All <span className="group-hover:translate-x-1 transition-transform italic">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {relatedBlogs.map((related) => {
                const relImg = related.featured_image?.startsWith('http')
                  ? related.featured_image
                  : FALLBACK_IMG;

                return (
                  <div
                    key={related.id}
                    onClick={() => navigate(`/blog/${related.slug}`)}
                    className="group cursor-pointer relative h-[280px] sm:h-[320px] rounded-[32px] overflow-hidden bg-[#0B1220] shadow-xl border border-white/10"
                  >
                    <img
                      src={relImg}
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                      alt={related.title}
                      loading="lazy"
                    />
                    {related.category && (
                      <div className="absolute top-6 left-6 z-20">
                        <span className="px-4 py-1.5 bg-[#2563EB] text-white text-[10px] font-[900] rounded-full uppercase tracking-[2px] shadow-lg">
                          {related.category}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <h3 className="text-lg sm:text-xl font-[800] text-white leading-[1.2] tracking-tight group-hover:text-blue-200 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 z-10" />
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default BlogDetailPage;
