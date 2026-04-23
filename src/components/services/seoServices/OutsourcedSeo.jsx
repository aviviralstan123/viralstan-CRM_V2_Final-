import React from 'react';
import { 
  Search, Target, Layout, Link as LinkIcon, 
  Settings, FileText, BarChart3, RefreshCw,
  ShoppingBag, Landmark, HeartPulse, Building2, Rocket,
  ShieldCheck,
  TrendingUp,
  Zap,
  Star,Play,
  Briefcase,
  Cloud
} from 'lucide-react';

const OutsourcedSeo = () => {
  return (
    <div className="min-h-screen w-full font-['Inter'] selection:bg-blue-100">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ResultsSection />
    <VisionVideoSection />

      <IndustriesSection />
      <CTASection />
    </div>
  );
};

// --- Section 1: Hero ---
const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#e5ebfc] flex flex-col items-center pt-24 pb-12 px-6 overflow-hidden">
      
      {/* Background Radial Gradients - Premium Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.12)_0%,_transparent_70%)] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.08)_0%,_transparent_70%)] opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
          <ShieldCheck className="w-4 h-4 text-[#0050D4]" />
          <span className="text-[12px] font-sans text-[#0050D4] uppercase tracking-wider font-[600]">
            Premium Outsourced SEO
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-[#1F2F46] tracking-tight leading-[1.1] mb-6">
          Complete SEO Managed by <br />
          <span className="text-[#1F2F46]">Experts — </span>
          <span className=" text-[#0050D4] font-display ">
            So You Can Focus on Growth
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-[#4C5C75] text-base md:text-lg mb-10 leading-relaxed font-sans">
          Let our team handle your entire SEO strategy, execution, and optimization 
          while you focus on running your business.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0061FF] hover:bg-blue-600 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95">
            Get Free SEO Audit
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-[#DBEAFE] hover:bg-blue-100 text-[#1e293b] rounded-xl font-bold text-sm transition-all active:scale-95">
            Manage My SEO
          </button>
        </div>

        {/* Mockup Container with Floating Badges */}
        <div className="relative max-w-4xl mx-auto">
          {/* Floating Badge: Left */}
          <div className="absolute -top-6 -left-4 md:-left-12 z-20 flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-xl border border-slate-100 animate-bounce-slow">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <span className="text-[13px] font-bold text-[#1e293b]">Full SEO Management</span>
          </div>

          {/* Floating Badge: Right */}
          <div className="absolute top-12 -right-4 md:-right-8 z-20 flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-xl border border-slate-100 animate-pulse-slow">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
            </div>
            <span className="text-[13px] font-bold text-[#1e293b]">Done For You System</span>
          </div>

          {/* Floating Badge: Bottom */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-5 py-2.5 bg-[#F5F3FF] rounded-xl shadow-lg border border-purple-100 whitespace-nowrap">
            <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
            <span className="text-[13px] font-bold text-[#1e293b]">Consistent Growth</span>
          </div>

          {/* Main Mockup Card */}
          <div className="rounded-[32px] border-[1.5px] border-white/20 p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm">
            <div className="rounded-[24px] bg-[#111827] border border-white/5 overflow-hidden shadow-2xl">
              <div className="aspect-[16/10] w-full p-8 flex flex-col gap-6 opacity-40">
                {/* Visual Placeholder for Dashboard Content */}
                <div className="h-8 w-1/3 bg-white/10 rounded-lg" />
                <div className="h-px w-full bg-white/5" />
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="h-4 w-1/2 bg-white/5 rounded" />
                      <div className="h-4 w-8 bg-white/5 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// --- Section 2: What is Outsourced SEO ---
const AboutSection = () => (
  <section className="py-24 bg-[#FFFFFF] px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-display text-[#1F2F46] mb-8 font-[700]">
        What is Outsourced SEO?
      </h2>
      <p className="text-lg leading-relaxed font-sans text-[#4C5C75]">
        Our managed SEO services take the heavy lifting off your plate. We handle everything from technical audits 
        to high-authority link building, allowing you to scale your business while we handle the 
        complex, ever-changing world of search engine algorithms.
      </p>
    </div>
  </section>
);

// --- Section 3: What You Get (Bento Grid) ---
const ServicesSection = () => {
  const services = [
    { title: "Complete SEO strategy", icon: Target, desc: "Custom roadmap designed specifically for your industry benchmarks." },
    { title: "Keyword research & planning", icon: Search, desc: "Identification of high-intent, profitable keywords your competitors miss." },
    { title: "On-page optimization", icon: Layout, desc: "Meticulous refinement of every page element for maximum relevance." },
    { title: "Off-page link building", icon: LinkIcon, desc: "Ethical, high-authority backlink acquisition for digital reputation." },
    { title: "Technical SEO fixes", icon: Settings, desc: "Core Web Vitals and site architecture optimization for peak performance." },
    { title: "Content strategy", icon: FileText, desc: "Scalable production that informs users and satisfies search intent." },
    { title: "Monthly reporting", icon: BarChart3, desc: "Transparent dashboards showing exactly where your budget goes." },
    { title: "Continuous optimization", icon: RefreshCw, desc: "Iterative improvements based on real-time data and updates." },
  ];

  return (
    <section className="py-24 bg-[#EEF2FF] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1F2F46] text-center mb-16 font-['Plus_Jakarta_Sans']">What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl shadow-[0_12px_30px_rgba(11,18,32,0.06)] hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6">
                <s.icon className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2F46] mb-3 font-['Plus_Jakarta_Sans']">{s.title}</h3>
              <p className="text-[#4C5C75] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 5: Results (Stats) ---
const ResultsSection = () => {
  const results = [
    {
      value: "10x",
      title: "Organic Traffic",
      description: "Consistent, high-quality visitor volume.",
    },
    {
      value: "Top 3",
      title: "Higher Rankings",
      description: "Dominate competitive industry terms.",
    },
    {
      value: "42%",
      title: "Better ROI",
      description: "Lower acquisition costs than paid ads.",
    },
    {
      value: "Long",
      title: "Term Growth",
      description: "Built to last through algorithm changes.",
    },
  ];

  return (
    <section className="bg-[#EEF2FF] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] text-center mb-16 font-display">
          Results We Deliver
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-2xl shadow-blue-900/10 border border-slate-100 transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Big Metric */}
              <div className="text-[44px] md:text-[52px] font-extrabold text-[#0050D4] leading-none mb-4 font-display">
                {item.value}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#1F2F46] mb-3 font-sans">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#4C5C75] text-[15px] leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 7: Industries (Glassmorphism Cards) ---
const IndustriesSection = () => {
  const industries = [
    { name: "SaaS", icon: Cloud },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Service", icon: Briefcase },
    { name: "Agencies", icon: Building2 },
    { name: "Startups", icon: Rocket },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2F46] text-center mb-16 font-['Plus_Jakarta_Sans']">
          Industries We Dominate
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-10 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-100"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-600">
                <item.icon className="w-8 h-8 text-blue-600 transition-colors group-hover:text-white" />
              </div>
              
              {/* Industry Name */}
              <span className="text-xl font-bold text-[#1F2F46] font-['Plus_Jakarta_Sans']">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 8: CTA (Gradient) ---
const CTASection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white flex justify-center">
      {/* Responsive Container 
        - Height: 414px (fixed desktop) vs auto (mobile)
        - Background: Multi-point linear gradient #0050D4 -> #4647D3 -> #702AE1
        - Border Radius: 40px
      */}
      <div className="
        relative w-full max-w-[1024px] min-h-[414px]
        flex flex-col items-center justify-center text-center
        p-8 md:p-20 isolation-isolate
        bg-[linear-gradient(112.01deg,#0050D4_0%,#4647D3_50%,#702AE1_100%)]
        rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/20
      ">
        
        {/* Subtle Background Pattern (Optional to match the "compounding" aesthetic) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans'] leading-[1.2] tracking-tight">
            Let Experts Handle Your SEO Growth
          </h2>
          
          <p className="text-blue-100/90 text-lg md:text-xl mb-12 font-medium leading-relaxed">
            Join 200+ companies that have outsourced their search strategy to VIRALSTAN for compounding results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Action Button */}
            <button className="
              w-full sm:w-auto px-10 py-4 
              bg-white text-[#0050D4] 
              rounded-2xl font-bold text-lg 
              transition-all hover:shadow-lg hover:scale-105 active:scale-95
            ">
              Get Free Audit
            </button>

            {/* Secondary Action Button */}
            <button className="
              w-full sm:w-auto px-10 py-4 
              bg-transparent text-white border-2 border-white/30
              rounded-2xl font-bold text-lg 
              backdrop-blur-sm transition-all
              hover:bg-white/10 hover:border-white/50 active:scale-95
            ">
              Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Placeholder for remaining sections: Process
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Business Analysis",
      desc: "Deep dive into your niche and competitors.",
      active: false,
    },
    {
      number: "02",
      title: "SEO Strategy",
      desc: "Data-backed plan for keyword dominance.",
      active: false,
    },
    {
      number: "03",
      title: "Implementation",
      desc: "Executing on-site and technical optimizations.",
      active: false,
    },
    {
      number: "04",
      title: "Authority Building",
      desc: "Growing backlink profile and trust signals.",
      active: false,
    },
    {
      number: "05",
      title: "Growth Scaling",
      desc: "Analyzing results and expanding reach.",
      active: true, // This step is highlighted in your design
    },
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[40px] font-bold text-[#1F2F46] text-center mb-24 font-['Plus_Jakarta_Sans'] tracking-tight">
          Our Process
        </h2>

        <div className="relative">
          {/* Desktop Connecting Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[1.5px] bg-[#E2E8F0]" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-[28px] font-bold transition-all shadow-xl shadow-slate-200/50 ${
                      step.active
                        ? "bg-[#0050D4] text-white"
                        : "bg-white text-[#0050D4] border border-[#F1F5F9]"
                    }`}
                  >
                    {step.number}
                  </div>
                  
                  {/* Subtle highlight for active step */}
                  {step.active && (
                    <div className="absolute -inset-2 rounded-full border border-blue-100 animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-[20px] font-display font-[700] text-[#1F2F46] mb-3 font-['Plus_Jakarta_Sans']">
                  {step.title}
                </h3>
                <p className="text-[#4C5C75] text-[15px] leading-relaxed max-w-[220px] font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionVideoSection = () => {
  return (
    <section className="bg-[#EEF2FF] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Container to hold both the video and the floating card */}
      <div className="relative w-full max-w-[1152px] mx-auto group">
        
        {/* Main Video Container - Keep overflow-hidden here */}
        <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/10 cursor-pointer aspect-video z-10">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 z-10" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play fill="currentColor" className="ml-1 w-6 h-6 md:w-8 md:h-8" />
            </div>
          </div>

          {/* Video Thumbnail */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
            alt="Results We Deliver Video"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Floating Vision Card - Moved outside the overflow container */}
        <div
          className="
            absolute 
            bottom-0 
            left-4 
            md:left-8
            translate-y-1/2 
            w-[240px] sm:w-[280px]
            p-6 sm:p-8
            z-30 
            bg-[#1657C8] 
            rounded-[28px] 
            shadow-[0_20px_50px_rgba(22,87,200,0.3)]
          "
        >
          <p className="text-[11px] font-semibold text-blue-100 uppercase tracking-[3px] mb-3 opacity-80">
            OUR VISION
          </p>

          <p className="text-[18px] sm:text-[20px] font-semibold text-white leading-[26px]">
            Watch how we scaled <span className="uppercase">Viralstan</span> to 1M+ views.
          </p>
        </div>
      </div>
    </section>
  );
};




export default OutsourcedSeo;