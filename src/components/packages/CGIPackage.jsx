import bgImage from "../../assets/cgi-bg.png";

import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


import { Building2, Wand2 } from 'lucide-react';



import {
  Play,
  Layers,

  ArrowRight,
  Check
  ,
  Clapperboard,
  Sparkles,
  ArrowUpRight, Eye, Zap
} from 'lucide-react';
import { form } from 'framer-motion/client';



const GradientButton = ({ children, variant = 'primary', className = '' }) => {
  const styles = {
    primary: '  shadow-[0_20px_50px_rgba(37,99,235,0.3)]',
    glass: 'bg-white/10 backdrop-blur-md border  text-white hover:bg-white/20',
    white: 'bg-white text-[#181C20] shadow-xl hover:shadow-2xl'
  };

  return (
    <button className={`group px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

const FloatingBadge = ({ text }) => (
  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 mb-6">
    <span className="text-[#004AC6] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
      {text}
    </span>
  </div>
);

// --- Sections ---

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#181C20] px-6 py-20">

      {/* 1. BACKGROUND IMAGE LAYER */}
      {/* Note: In your actual project, ensure this URL points to your static asset */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `url(${bgImage})`, // Replace with actual asset path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen', // Optional: Helps dark colors blend with the bg
        }}
      />

      {/* 2. OPTIONAL VIGNETTE / DEPTH LAYER */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#181C20]/20 via-transparent to-[#181C20]" />

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* FLOAT BADGE (Premium Tag) */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 mb-6 backdrop-blur-sm">
          <span className="text-[#004AC6] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
            The Next Dimension of Advertising
          </span>
        </div>

        {/* MAIN HEADING (jakarta font weight: 800) */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-[800] text-black tracking-tighter leading-[0.95] mb-8">
          Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">Viral CGI Ads</span> <br className="hidden md:block" />
          That Stop the Scroll
        </h1>

        {/* DESCRIPTION (Manrope weight: 400) */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 leading-relaxed">
          Move beyond traditional video. We engineer hyper-realistic 3D experiences
          that blur the line between digital art and commerce.
        </p>

        {/* BUTTON GROUP */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* PRIMARY BUTTON */}
          <button className="group px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#7C3AED] text-white shadow-xl hover:shadow-[#2563EB]/25 w-full sm:w-auto">
            Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* SECONDARY BUTTON */}
          <button className="flex items-center gap-3 font-bold text-white hover:text-blue-500 transition-colors p-4">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:border-blue-600 transition-all backdrop-blur-sm">
              <Play size={18} fill="currentColor" />
            </div>
            Watch Showreel
          </button>
        </div>
      </div>
    </section>
  );
};


const GalleryGrid = () => {
  const scrollRef = useRef(null);

  // Function to handle button clicks manually
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by 80% of the container width
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left'
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const cards = [
    { title: "Luxury Product Reveal", category: "CGI Craftsmanship", color: "from-amber-500/20" },
    { title: "Urban Tech Visuals", category: "Metropolitan Motion", color: "from-blue-500/20" },
    { title: "Interior Etherealism", category: "Aesthetic Precision", color: "from-purple-500/20" },
    { title: "Automotive Dynamics", category: "High-Speed Rendering", color: "from-red-500/20" },
    { title: "Cyberpunk Apparel", category: "Future Fashion", color: "from-emerald-500/20" }
  ];

  return (
    <section className="py-24 bg-[#F1F4F9] w-full overflow-hidden">
      {/* Header with Navigation Buttons on the Right */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-[800] text-[#181C20] font-['Plus_Jakarta_Sans'] tracking-tight">
            Immersive Reel Previews
          </h2>
        </div>

        {/* --- NAVIGATION BUTTONS --- */}
        <div className="flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center text-[#181C20] hover:bg-white hover:shadow-lg transition-all active:scale-95 bg-white/50 backdrop-blur-sm"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full bg-[#181C20] flex items-center justify-center text-white shadow-xl hover:bg-[#2563EB] transition-all active:scale-95"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* --- SCROLLABLE CONTAINER --- */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-8 px-6 pb-20 overflow-x-auto no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative flex-none w-[85vw] sm:w-[450px] aspect-[3/4] rounded-[48px] overflow-hidden bg-slate-900 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 hover:-translate-y-4 snap-center group"
          >
            {/* Background & Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${card.color} to-transparent z-10 opacity-50`} />
            <div className="absolute inset-0 bg-slate-800 transition-transform duration-1000 group-hover:scale-110" />

            {/* Text Content */}
            <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end bg-gradient-to-t from-black/95 via-transparent to-transparent text-left">
              <span className="text-white/50 font-['Manrope'] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {card.category}
              </span>
              <h3 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans'] flex items-center justify-between">
                {card.title}
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 transition-all group-hover:bg-[#2563EB] group-hover:border-[#2563EB]">
                  <ArrowUpRight size={24} className="text-white" />
                </div>
              </h3>
            </div>
          </div>
        ))}

        {/* End Spacer */}
        <div className="flex-none w-12" />
      </div>

      {/* CSS to keep scrollbar hidden */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};







const ComparisonLayout = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F6F9FE] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* --- LEFT CONTENT: Text & Features --- */}
        <div className="w-full lg:w-1/2 text-left space-y-8">
          <h2 className="text-4xl md:text-6xl font-[800] text-[#181C20] leading-[1.1] font-['Plus_Jakarta_Sans'] tracking-tight">
            Beyond The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Traditional Frame
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#434655] leading-relaxed font-['Manrope'] max-w-xl">
            Traditional video is limited by physics and budget. CGI breaks those
            boundaries, creating impossible scenarios that command immediate attention.
          </p>

          {/* Feature List (Vertical Stack) */}
          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4 p-2">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100/50">
                <Eye className="text-[#2563EB]" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#181C20] mb-1">Impossible Visuals</h4>
                <p className="text-[#434655] text-sm leading-snug">
                  Products floating through skylines or liquid diamonds? No problem.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100/50">
                <Zap className="text-[#7C3AED]" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#181C20] mb-1">Viral Potential</h4>
                <p className="text-[#434655] text-sm leading-snug">
                  CGI content is shared 4x more often than standard live-action ads.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT CONTENT: Comparison Visuals --- */}
        <div className="w-full lg:w-1/2 relative">
          {/* Decorative Background Glow */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 blur-[100px] rounded-full z-0" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center lg:items-start justify-center gap-6 md:gap-8">

            {/* 1. TRADITIONAL CARD */}
            <div className="w-full max-w-[280px] bg-white rounded-[32px] p-4 shadow-xl border border-slate-100 flex-none self-center lg:self-start transition-transform hover:-translate-y-2 duration-500">
              <div className="aspect-[4/5] bg-slate-200 rounded-2xl mb-4 overflow-hidden grayscale">
                <img src="https://plus.unsplash.com/premium_photo-1684107940034-a860aae8cb20?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
                <div className="w-full h-full bg-gradient-to-b from-slate-300 to-slate-400 opacity-50" />
              </div>
              <p className="text-center font-bold text-slate-400 text-xs tracking-widest uppercase">
                Standard Video
              </p>
            </div>

            {/* 2. VIRAL CGI CARD */}
            <div className="w-full max-w-[300px] bg-[#2563EB] rounded-[32px] p-4 shadow-[0_40px_80px_-15px_rgba(37,99,235,0.4)] flex-none relative mt-8 sm:mt-12 transition-transform hover:-translate-y-3 duration-500">
              {/* Viral Badge */}
              <div className="absolute top-6 right-6 z-20 bg-[#F43F5E] text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter animate-pulse">
                Viral
              </div>

              <div className="aspect-[4/5] bg-blue-600 rounded-2xl mb-4 relative overflow-hidden group shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-300" />
                <Sparkles className="absolute bottom-4 right-4 text-white/40" size={32} />
                <img src="https://images.unsplash.com/photo-1690233665012-5e09d72c74ea?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover mix-blend-overlay" />
              </div>

              <p className="text-center font-bold text-white text-xs tracking-[0.2em] uppercase">
                AetherVFX CGI
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};



const BentoGrid = () => {
  const cardStyle = "group relative rounded-[40px] overflow-hidden bg-white shadow-xl transition-all duration-700 hover:-translate-y-3";

  return (
    <section className="py-24 bg-[#F8FAFF] px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-[800] text-[#181C20] font-['Plus_Jakarta_Sans'] tracking-tight leading-[0.95] mb-6">
            Our <span className="text-[#2563EB]">Visual Universe</span>
          </h2>
          <p className="text-[#434655] font-['Manrope'] text-lg md:text-xl max-w-lg">
            Diverse capabilities tailored for high-growth brands.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-12 gap-8 min-h-[850px]">

          {/* 1. Product CGI (Large - Spans 8/12) - Dark Moody Product Render */}
          <div className={`${cardStyle} col-span-12 lg:col-span-8 lg:row-span-2 bg-slate-950 relative min-h-[400px] md:min-h-[500px] group overflow-hidden`}>
            {/* Background Image - Responsive focus */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=2070')`
              }}
            />

            {/* Overlay - Bottom se thoda dark taaki text dikhe */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

            {/* Content Area - Responsive Padding and Text sizes */}
            <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-['Plus_Jakarta_Sans'] leading-tight">
                Product CGI Masterpieces
              </h3>
              <p className="text-white/80 text-base md:text-lg max-w-md font-['Manrope'] line-clamp-3 md:line-clamp-none">
                Hyper-realistic renders that make your physical products feel like legendary artifacts.
              </p>
            </div>
          </div>

          {/* 2. Viral Reels (Tall) - Dark Cinematic Reels Background */}
          <div className={`${cardStyle} col-span-12 lg:col-span-4 row-span-2 bg-[#2563EB] p-12 flex flex-col justify-between shadow-[0_40px_80px_-15px_rgba(37,99,235,0.4)] overflow-hidden`}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-40"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070')`
              }}
            />

            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-md z-10">
              <Sparkles className="text-white" size={28} />
            </div>

            <div className="text-white relative z-10">
              <h3 className="text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Viral Reels</h3>
              <p className="text-white/80 font-['Manrope']">
                Tailored for TikTok and Instagram algorithms to maximize shareability.
              </p>
            </div>
          </div>

          {/* 3. Real Estate (Small) - Dark Luxury Interior */}
          <div className={`${cardStyle} col-span-12 md:col-span-6 lg:col-span-4 h-[300px]`}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a9c?q=80&w=2070')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-8 flex items-end">
              <h4 className="font-bold text-white flex items-center gap-2 font-['Manrope']">
                <Building2 size={20} className="text-[#2563EB]" />
                Real Estate Visualization
              </h4>
            </div>
          </div>

          {/* 4. Motion Graphics (Small) - Dark Abstract Motion */}
          <div className={`${cardStyle} col-span-12 md:col-span-6 lg:col-span-4 h-[300px] bg-[#7C3AED] p-10 flex flex-col justify-center text-white overflow-hidden`}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-50"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2071')`
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 font-['Plus_Jakarta_Sans']">Motion Graphics</h3>
              <p className="text-white/70 text-sm font-['Manrope']">Dynamic typography and identity motion.</p>
            </div>
          </div>

          {/* 5. Brand Identity (Small) - Dark Gold Luxury */}
          <div className={`${cardStyle} col-span-12 lg:col-span-4 h-[300px] bg-slate-900`}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-3c7f5e9e8d0f?q=80&w=2070')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 p-8 flex items-end">
              <h4 className="font-bold text-white flex items-center gap-2 font-['Manrope']">
                <Wand2 size={20} className="text-blue-400" />
                Brand Identity Videos
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const InvestmentPackages = () => {
  const plans = [
    {
      name: "Silver",
      tag: "ESSENTIAL",
      price: "₹50,000",
      features: ["15s High-End CGI Reel", "4K Ultra HD Export", "Licensed Sound Design", "1 Revision Round"],
      button: "Get Started",
      isPopular: false
    },
    {
      name: "Gold",
      tag: "POPULAR",
      price: "₹1,20,000",
      features: ["30s Immersive Commercial", "Complex Liquid/Physics FX", "Custom 3D Environments", "3 Revision Rounds", "Source File Delivery"],
      button: "Select Gold",
      isPopular: true
    },
    {
      name: "Platinum",
      tag: "MASTERY",
      price: "₹3,00,000",
      features: ["Full Campaign Suite (3 Ads)", "Hyper-Realistic Character Anim", "Viral Narrative Strategy", "Unlimited Revisions", "Dedicated Creative Director"],
      button: "Contact Us",
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFF] px-6 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-[800] text-[#181C20] font-['Plus_Jakarta_Sans'] tracking-tight mb-4">
            Investment <span className="text-[#7C3AED]">Packages</span>
          </h2>
          <p className="text-[#434655] font-['Manrope'] text-lg md:text-xl">
            Scalable solutions for startups and global enterprises.
          </p>
        </div>

        {/* Unified Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-10 rounded-[48px] transition-all duration-700 hover:-translate-y-4 ${plan.isPopular
                  ? 'bg-[#181C20] text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] lg:scale-110 z-10'
                  : 'bg-white text-[#181C20] border border-slate-100 shadow-xl'
                }`}
            >
              {/* Tagging Logic */}
              <span className={`text-[10px] font-bold tracking-[0.2em] mb-4 uppercase ${plan.isPopular ? 'text-blue-400' : 'text-slate-400'
                }`}>
                {plan.tag}
              </span>

              <h3 className="text-3xl font-bold mb-6 font-['Plus_Jakarta_Sans']">{plan.name}</h3>

              <div className="mb-10">
                <span className="text-4xl font-black font-['Plus_Jakarta_Sans']">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>/ project</span>
              </div>

              {/* Feature List */}
              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-medium font-['Manrope']">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${plan.isPopular ? 'border-blue-500/50' : 'border-blue-100'
                      }`}>
                      <Check size={12} className="text-[#2563EB]" />
                    </div>
                    <span className={plan.isPopular ? 'text-slate-300' : 'text-[#434655]'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-95 ${plan.isPopular
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40'
                  : 'border-2 border-slate-200 text-[#181C20] hover:border-[#2563EB] hover:text-[#2563EB]'
                }`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ProcessSection = () => {
  const steps = [
    { id: "01", title: "Conceptual Blueprint", desc: "We define the viral hook and storyboard the 3D sequence for maximum engagement.", color: "bg-[#0052CC]" },
    { id: "02", title: "3D Sculpting & Physics", desc: "Our artists build the digital assets, simulating complex physics and textures.", color: "bg-[#4452CC]" },
    { id: "03", title: "Cinematic Rendering", desc: "High-powered compute farms bring the scene to life with realistic lighting and bokeh.", color: "bg-[#6E32CC]" },
    { id: "04", title: "Post & Viral Polish", desc: "Final color grading, sound design, and optimization for social platforms.", color: "bg-[#000000]" }
  ];

  return (
    <section className="py-24 bg-[#F8FAFF] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#181C20] mb-20 font-['Plus_Jakarta_Sans']">
          The <span className="text-[#2563EB]">Aether</span> Process
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-blue-100 -translate-y-[100px] z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 bg-white p-8 rounded-[32px] shadow-xl border border-slate-50 transition-all hover:-translate-y-2">
              <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white font-bold mb-8 shadow-lg`}>
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-[#181C20] mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-[#434655] text-sm leading-relaxed font-['Manrope']">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MetricsSection = () => {
  const stats = [
    { value: "5X", label: "Engagement Rate", sub: "Vs static creative" },
    { value: "3X", label: "Click Through Rate", sub: "Direct conversion lift" },
    { value: "Viral", label: "Global Reach", sub: "Organic sharing mechanics" }
  ];

  return (
    <section className="py-32 bg-[#121417] text-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
            Data Driven <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Aesthetics</span>
          </h2>
          <p className="text-xl text-slate-400 font-['Manrope'] max-w-md">
            We don’t just make pretty pictures. We engineer content that converts based on deep consumer psychology.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {stats.map((stat, i) => (
            <div key={i} className={i === 2 ? "sm:col-span-2" : ""}>
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-600 block mb-2">
                {stat.value}
              </span>
              <h4 className="text-2xl font-bold mb-1">{stat.label}</h4>
              <p className="text-slate-500 uppercase text-xs tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrategySessionForm = () => {
  return (
    <section className="py-24 bg-[#F8FAFF] px-6">
      <div className="max-w-[1000px] mx-auto bg-white rounded-[48px] p-8 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-50">

        {/* --- Form Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[800] text-[#181C20] font-['Plus_Jakarta_Sans'] tracking-tight mb-4">
            Book Your <span className="text-[#2563EB]">CGI Strategy Session</span>
          </h2>
          <p className="text-[#434655] font-['Manrope'] text-lg">
            Transform your brand vision into a digital reality.
          </p>
        </div>

        {/* --- Form Content --- */}
        <form className="space-y-8">

          {/* Row 1: Flex container that stacks on small screens */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-4">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-8 py-5 rounded-2xl bg-[#F1F4F9] border-transparent focus:bg-white focus:border-[#2563EB] focus:ring-0 transition-all outline-none text-[#181C20] font-medium"
              />
            </div>
            <div className="flex-1 space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-4">Business Phone</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="w-full px-8 py-5 rounded-2xl bg-[#F1F4F9] border-transparent focus:bg-white focus:border-[#2563EB] focus:ring-0 transition-all outline-none text-[#181C20] font-medium"
              />
            </div>
          </div>

          {/* Row 2: Brand & Video Type */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-4">Brand / Business Name</label>
              <input
                type="text"
                placeholder="AetherVFX Studios"
                className="w-full px-8 py-5 rounded-2xl bg-[#F1F4F9] border-transparent focus:bg-white focus:border-[#2563EB] focus:ring-0 transition-all outline-none text-[#181C20] font-medium"
              />
            </div>
            <div className="flex-1 space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-4">Video Type</label>
              <select className="w-full px-8 py-5 rounded-2xl bg-[#F1F4F9] border-transparent focus:bg-white focus:border-[#2563EB] focus:ring-0 transition-all outline-none text-[#181C20] font-medium appearance-none">
                <option>Product Reveal</option>
                <option>Viral Commercial</option>
                <option>Real Estate Viz</option>
                <option>Brand Identity</option>
              </select>
            </div>
          </div>

          {/* Row 3: Project Vision (Textarea) */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-4">Project Vision (Optional)</label>
            <textarea
              placeholder="Tell us about your product..."
              rows="4"
              className="w-full px-8 py-6 rounded-[32px] bg-[#F1F4F9] border-transparent focus:bg-white focus:border-[#2563EB] focus:ring-0 transition-all outline-none text-[#181C20] font-medium resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-6 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold text-lg shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)] transition-all active:scale-95 mt-4"
          >
            Schedule My Session
          </button>
        </form>
      </div>
    </section>
  );
};


const HeroCTA = () => (
  <section className="py-24 px-6 text-center bg-white">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-[800] text-[#181C20] font-['Plus_Jakarta_Sans'] leading-[1.1] mb-10 tracking-tight">
        Create <span className="text-[#2563EB]">Viral Videos</span> for Your Brand
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <GradientButton className="bg-[#181C20] text-white border-white/20 ">Get Started Today</GradientButton>
        <GradientButton className="text-[#004AC6] border-amber-300">View All Packages</GradientButton>
      </div>
    </div>
  </section>
);
const FinalCTA = () => (
  <section className="py-32 bg-[#F6F9FE] px-6 text-center">
    <div className="max-w-4xl mx-auto bg-[#181C20] rounded-[60px] p-12 md:p-24 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px]" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          Ready to <span className="text-[#2563EB]">Viralize</span> Your Brand?
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Join the elite circle of brands using CGI to dominate the attention economy.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <GradientButton className="w-full md:w-auto">Book Strategy Call</GradientButton>
          <GradientButton variant="glass" className="w-full md:w-auto">Explore Pricing</GradientButton>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 opacity-40 grayscale contrast-125">
          <span className="text-white font-black italic">CLIENT_A</span>
          <span className="text-white font-black italic">CLIENT_B</span>
          <span className="text-white font-black italic">CLIENT_C</span>
        </div>
      </div>
    </div>

    <div className="mt-12 text-slate-400 text-xs font-medium tracking-[0.3em] uppercase">
      © 2026 Viralstan Media — Infinite Creativity
    </div>
  </section>
);

// --- Main App Entry ---

export default function CGIPackage() {
  return (
    <div className="bg-[#F6F9FE] selection:bg-[#2563EB] selection:text-white antialiased">
      <main>
        <Hero />
        <GalleryGrid />
        <ComparisonLayout />
        <BentoGrid />
        <InvestmentPackages />
        <ProcessSection />
        <MetricsSection />
        <StrategySessionForm />
        <HeroCTA />

      </main>
    </div>
  );
}