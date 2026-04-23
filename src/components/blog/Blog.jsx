import React from 'react';
import { Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import TrendingSection from './TrendingSection';
import HeroSection from './HeroSection';
import BrowseByFocus from './BrowseByFocus';
import { useNavigate } from "react-router-dom"
import mlImage from "../../assets/blogImage/ML.png"

const Blog = ({blogId}) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-manrope text-brand-dark font-sans">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. FILTER BAR */}
      <section className="max-w-[1232px] mx-auto mb-10 px-4 md:mb-16">
        <div className="bg-white/60 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              className="w-full bg-gray-100 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 ring-blue-100" 
              placeholder="Search insights..."
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {['All Topics', 'SEO', 'Ads', 'Social Media', 'Growth', 'Strategy'].map((tag, i) => (
              <button key={tag} className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-200/50 text-brand-gray hover:bg-gray-200'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED & GRID */}
      <section className="max-w-[1232px] mx-auto space-y-8 pb-32 px-4">
        {/* Featured Big Card - Fixed for Mobile */}
        <div className="relative min-h-[500px] md:h-[450px] bg-white rounded-[32px] shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="w-full md:w-2/3 bg-gray-900 h-64 md:h-auto">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 w-full md:w-[500px] bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-50 mt-[-40px] md:mt-0 mx-auto max-w-[90%] md:max-w-none">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4 block">Featured Strategy</span>
            <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl leading-tight text-brand-dark mb-4">The Psychology of Virality: Why Content Sprints in 2024</h2>
            <p className="text-brand-gray mb-6 md:mb-8 text-sm md:text-base">Discover the hidden triggers that drive massive organic distribution across TikTok, Reels, and YouTube Shorts.</p>
            <button className="flex items-center gap-2 text-blue-600 font-bold group cursor-pointer "onClick={() => navigate("/blog-detail")}>
              Read Full Insight <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3-Column Grid - Responsive Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="h-60 md:h-80 overflow-hidden relative">
                <img src={mlImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold">Data Science</div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-jakarta font-bold text-xl md:text-2xl mb-3">Machine Learning in Modern Ad Targeting</h3>
              <p className="text-brand-gray text-sm md:text-base">How to leverage AI models to reduce customer acquisition costs by 40%.</p>
            </div>
          </div>

          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                <div className="h-40 bg-gray-200 overflow-hidden">
                    <img src={i === 1 ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" : "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80"} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-jakarta font-bold text-lg">{i === 1 ? 'Retaining SaaS Users in a Crowded Market' : 'The Art of Conversion Copywriting'}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Small Cards - Responsive Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {[
    {
      title: 'Scaling Agencies: From 0 to $1M ARR',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Zero-Click SEO: Optimizing for AI Overviews',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Building for the Modern Web: Headless CMS',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600'
    }
  ].map((item, i) => (
    <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
      <div className="h-56 bg-gray-900 overflow-hidden">
        <img 
          src={item.img} 
          alt={item.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
        />
      </div>
      <div className="p-6">
        <h4 className="font-jakarta font-bold text-xl text-brand-dark group-hover:text-blue-600 transition-colors">
          {item.title}
        </h4>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* 4. TRENDING SECTION */}
      <TrendingSection />

      {/* BROWSE BY FOCUS SECTION */}
      <BrowseByFocus />

      {/* CTA SECTION - Full Responsive Overhaul */}
      <section className="flex flex-col items-start isolate relative w-full max-w-[1232px] min-h-[350px] md:h-[396px] mx-auto my-10 md:my-20 rounded-3xl md:rounded-[40px] overflow-hidden bg-white border border-gray-100 shadow-sm px-4 md:px-0">
        <div className="absolute inset-0 z-0 opacity-[0.1]" style={{ background: 'linear-gradient(107.82deg, #2563EB 0%, #6366F1 50%, #7C3AED 100%)' }} />
        <div className="flex flex-col items-center justify-center w-full h-full py-16 md:py-[80px] z-30">
          <div className="flex flex-col items-center gap-6 md:gap-[32px] w-full max-w-[672px]">
            <h2 className="w-full font-jakarta font-[800] text-3xl md:text-[48px] leading-tight md:leading-[48px] text-center tracking-tight text-[#181C20] px-2">
              Turn Insights Into Growth
            </h2>
            <p className="w-full max-w-[620px] font-manrope font-[400] text-base md:text-[18px] leading-relaxed md:leading-[28px] text-center text-[#434655] px-4">
              Stop guessing and start dominating. Our insights give you a competitive advantage built for high-scale digital brands.
            </p>
            <button 
              className="flex justify-center items-center py-4 md:py-[20px] px-8 md:px-[48px] w-auto min-w-[180px] h-auto md:h-[68px] rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-white font-jakarta font-extrabold text-lg"
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

export default Blog;