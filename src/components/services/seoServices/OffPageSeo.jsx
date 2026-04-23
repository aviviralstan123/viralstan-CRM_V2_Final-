import React from 'react';
import { 
  Zap, 
  Link2, 
  Star,
  TrendingUp,
  Globe, 
  MousePointer2, 
  BarChart3, 
  Play,
   BookOpen,
   Megaphone,
   Radio,
   FolderTree,
   Search,
   Compass,
   Share2,
   ShieldCheck,
   BarChart,
   ChevronLeft,
   ChevronRight,
  
} from 'lucide-react';
import search from '../../../assets/seoImage/search.png'
import growth from '../../../assets/seoImage/growth.png'
import link from '../../../assets/seoImage/link.png'
import monitoring from '../../../assets/seoImage/monitoring.png'
import planning from '../../../assets/seoImage/planning.png'
import person from '../../../assets/person.png'
import saas from '../../../assets/seoImage/SaaS.png'
import ecommerce from '../../../assets/seoImage/E-commercee.png'
import LocalBussines from '../../../assets/seoImage/Local-Businesses.png'
import Agencies from '../../../assets/seoImage/Agencies.png'
import Startups from '../../../assets/seoImage/Startups.png'



// --- . HERO SECTION ---
const Hero = () => {
  return (
    <section className="relative w-full min-h-screen  pt-24 pb-20 px-6 overflow-hidden">
      {/* Background Radial Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_20%,rgba(0,80,212,0.06)_0%,transparent_40%),radial-gradient(circle_at_85%_80%,rgba(112,42,225,0.06)_0%,transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#DDE9FF] px-4 py-1.5 rounded-full mb-8 border border-blue-100/50">
          <Star size={14} className="fill-[#0050D4] text-[#0050D4]" />
          <span className="text-[#0050D4] text-[12px] font-['Inter'] font-extrabold tracking-[1.2px] uppercase">
            Authority & Reach
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-[800] text-4xl md:text-6xl lg:text-7xl text-[#1F2F46] text-center leading-[1.1] mb-8 tracking-[-0.03em]">
          Build Authority & Rank Higher <br className="hidden md:block" />
          with <span className="text-[#0050D4]">Off-Page SEO</span>
        </h1>

        {/* Subtext */}
        <p className="font-sans font-normal text-base md:text-lg text-[#4C5C75] text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          We help your website gain trust, authority, and backlinks so search engines 
          rank you higher and your brand becomes more credible online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button className="w-full sm:w-auto bg-[#0050D4] text-white px-8 py-4 rounded-xl font-sans font-bold text-sm shadow-xl shadow-blue-200 hover:scale-[1.02] transition-transform active:scale-95">
            Get Free SEO Audit
          </button>
          <button className="w-full sm:w-auto bg-white border border-gray-100 text-[#0050D4] px-8 py-4 rounded-xl font-sans font-bold text-sm shadow-sm hover:bg-gray-50 transition-colors">
            Build Backlinks
          </button>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="relative w-full max-w-[960px] mx-auto">
          {/* Main Dashboard Visual */}
          <div className="relative bg-white/60 backdrop-blur-md p-4 md:p-6 rounded-[40px] shadow-2xl border border-white/40 overflow-hidden">
            <div className="bg-[#111827] w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl border border-slate-800 p-4 md:p-8 flex flex-col gap-6">
              {/* Fake Dashboard Content */}
              <div className="flex justify-between items-center">
                <div className="h-4 w-32 bg-slate-800 rounded" />
                <div className="flex gap-2">
                  <div className="h-6 w-12 bg-slate-800 rounded-md" />
                  <div className="h-6 w-12 bg-slate-700 rounded-md" />
                </div>
              </div>
              <div className="flex-1 w-full grid grid-cols-12 gap-2 items-end">
                {[40, 65, 45, 90, 55, 80, 45, 70, 85, 50, 60, 75].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="bg-[#0050D4] rounded-t opacity-80" />
                ))}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-slate-800/50 rounded-xl" />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Badge 1 - Left */}
          <div className="absolute -left-4 md:-left-12 top-[35%] z-10 hidden sm:flex bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white items-center gap-4 animate-bounce-slow">
            <div className="bg-blue-100 p-2 rounded-full text-[#0050D4]">
              <Link2 size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-['Inter']">Efficiency</div>
              <div className="text-sm font-bold text-[#1F2F46] font-['Plus_Jakarta_Sans']">High Authority Links</div>
            </div>
          </div>

          {/* Floating Badge 2 - Right */}
          <div className="absolute -right-4 md:-right-12 bottom-[20%] z-10 hidden sm:flex bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white items-center gap-4 animate-bounce-slow delay-700">
            <div className="bg-purple-100 p-2 rounded-full text-[#702AE1]">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-['Inter']">Result</div>
              <div className="text-sm font-bold text-[#1F2F46] font-['Plus_Jakarta_Sans']">Improved Domain Authority</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// --- . EXPLAINER SECTION ---
const Explainer = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 bg-[#EBF1FF] overflow-hidden">
      {/* Decorative background element for a subtle premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,80,212,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Heading Section */}
        <h2 className="font-display  text-3xl md:text-[40px] text-[#1F2F46] leading-tight mb-8 md:mb-10 tracking-tight">
          What is Off-Page SEO?
        </h2>

        {/* Content Section */}
        <div className="space-y-6 max-w-3xl">
          <p className="font-sans font-normal text-lg md:text-[20px] leading-relaxed md:leading-[32px] text-[#4C5C75]">
            Off-page SEO refers to actions taken outside of your own website to impact your
            rankings within search engine results pages (SERPs). While on-page SEO focuses 
            on optimizing things like content and site structure, off-page SEO is about 
            {' '}
            <span className="font-semibold text-[#0050D4]">
              building authority
            </span>
            . This is achieved through backlink acquisition, strategic brand mentions, 
            and external signals that tell search engines your site is a credible leader in its niche.
          </p>
        </div>

        {/* Optional: Subtle divider or decorative line */}
        <div className="mt-12 w-12 h-1 bg-[#0050D4]/20 rounded-full" />
      </div>
    </section>
  );
};

// --- . EXPERTISE GRID SECTION ---



const Expertise = () => {
  const services = [
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "High-quality backlink building",
      desc: "Acquiring links from reputable sites to boost your ranking power and trust scores.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Guest posting on authority sites",
      desc: "Strategic content placement on high-traffic blogs to drive referral traffic and authority.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Digital PR placements",
      desc: "Securing mentions in major news outlets and industry publications for maximum reach.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Brand mentions",
      desc: "Managing and increasing unlinked brand mentions across the web for organic awareness.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: <FolderTree className="w-6 h-6" />,
      title: "Niche directory submissions",
      desc: "Listing your business in highly relevant, high-DA directories to solidify local and niche relevance.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Competitor backlink analysis",
      desc: "Dissecting competitor profiles to uncover new link opportunities and gap strategies.",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600"
    }
  ];

  return (
    <section className="w-full py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] font-[800] text-3xl md:text-4xl text-[#1F2F46] mb-4">
            Our Off-Page Expertise
          </h2>
          <p className="font-['Inter'] text-[#4C5C75] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Targeted strategies designed to expand your digital footprint and cement your industry standing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[32px] border border-gray-100 bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0px_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Icon Container */}
              <div className={`shrink-0 w-14 h-14 rounded-2xl ${service.bgColor} ${service.iconColor} flex items-center justify-center transition-transform group-hover:scale-110`}>
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-['Plus_Jakarta_Sans'] font-[700] text-xl text-[#1F2F46]">
                  {service.title}
                </h3>
                <p className="font-['Inter'] text-sm md:text-base text-[#4C5C75] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};





const AuthorityBlueprint = () => {
  const steps = [
    {
      icon: <img src={search} className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Backlink Audit",
      description: "Evaluating your current link profile health."
    },
    {
      icon: <img src={planning}  className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Strategy Planning",
      description: "Developing a custom outreach roadmap."
    },
    {
      icon: <img src={link} className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Link Building",
      description: "High-impact execution and outreach."
    },
    {
      icon: <img src={growth} className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Authority Growth",
      description: "Domain authority steadily climbs higher."
    },
    {
      icon: <img src={monitoring}  className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Monitoring",
      description: "Continuous tracking and reporting."
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 px-6 bg-[#F4F6FF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-['Plus_Jakarta_Sans'] font-[800] text-3xl md:text-5xl text-[#1F2F46] text-center mb-20 md:mb-32">
          The Authority Blueprint
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gray-200 z-0" />

          {/* Steps Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon Circle */}
                <div className="relative mb-6">
                  {/* Outer Glow/Shadow */}
                  <div className="absolute inset-0 bg-white rounded-full shadow-[0px_10px_30px_rgba(0,80,212,0.1)] scale-110 md:scale-125" />
                  
                  {/* Main Circle */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-[#0050D4] border border-gray-50 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="max-w-[200px]">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-[700] text-lg md:text-xl text-[#1F2F46] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-['Inter'] text-sm md:text-base text-[#4C5C75] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connecting Line (Vertical) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden mt-8 w-[1px] h-12 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const PerformanceMetrics = () => {
  const stats = [
    {
      value: "94%",
      title: "Strong domain authority",
      description: "Average increase in DA scores for our long-term partners.",
      color: "text-[#0050D4]"
    },
    {
      value: "Top 3",
      title: "Higher keyword rankings",
      description: "Achieving podium positions for competitive industry keywords.",
      color: "text-[#4647D3]"
    },
    {
      value: "+240%",
      title: "Increased organic traffic",
      description: "Scalable traffic growth driven by reliable off-site signals.",
      color: "text-[#702AE1]"
    },
    {
      value: "Trust",
      title: "Better trust signals",
      description: "Improving search engine E-E-A-T scores through quality PR.",
      color: "text-[#7B9CFF]"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 overflow-hidden group">
      {/* Specific Radial Gradient Background with Hover Animation */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-1000 ease-in-out group-hover:scale-110"
        style={{
          background: `
            radial-gradient(93.62% 290.67% at 90% 80%, rgba(112, 42, 225, 0.05) 0%, rgba(112, 42, 225, 0) 40%),
            radial-gradient(93.62% 290.67% at 10% 20%, rgba(0, 80, 212, 0.05) 0%, rgba(0, 80, 212, 0) 40%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-[32px] bg-white/80 backdrop-blur-sm border border-gray-100 shadow-[0px_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0px_20px_60px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Metric Value */}
              <div className={`font-['Plus_Jakarta_Sans'] font-[800] text-4xl md:text-5xl mb-4 ${stat.color} tracking-tight`}>
                {stat.value}
              </div>

              {/* Metric Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] font-[700] text-lg md:text-xl text-[#1F2F46] mb-3">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="font-['Inter'] text-sm md:text-base text-[#4C5C75] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const ImpactTestimonial = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-['Plus_Jakarta_Sans'] font-[800] text-3xl md:text-5xl text-[#1F2F46] mb-6 tracking-tight">
            See the Impact Firsthand
          </h2>
          <p className="font-['Inter'] text-[#4C5C75] text-base md:text-lg leading-relaxed">
            Hear how our link-building campaigns transformed digital growth for our clients.
          </p>
        </div>

        {/* Testimonial Card Container */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Main Video/Image Frame */}
          <div className="relative w-full aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer bg-slate-900 border border-white/20">
            {/* Play Button Overlay (Glassmorphism effect) */}
            <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105">
              <button className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center shadow-2xl border border-white/20 text-white group-hover:bg-white group-hover:text-[#0050D4]">
                <Play fill="currentColor" size={36} className="ml-1" />
              </button>
            </div>
            
            {/* Main Testimonial Image/Video Placeholder */}
            {/* Replace with your actual media source */}
            <img 
              src="/api/placeholder/1200/800" 
              alt="Sarah Chen, Head of Growth at SaaS Pulse" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
            />

            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
          </div>

          {/* Testimonial Controls & Info Bar */}
          <div className="relative z-10 w-full mt-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            
            {/* Client Information */}
            <div className="flex items-center gap-4">
              {/* Client Avatar/Profile Pic */}
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-xl overflow-hidden shrink-0">
                <img 
                  src={person} 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name & Title */}
              <div className="text-left">
                <p className="font-['Plus_Jakarta_Sans'] font-[700] text-lg text-[#1F2F46]">
                  Sarah Chen
                </p>
                <p className="font-['Inter'] text-sm text-[#4C5C75]">
                  Head of Growth, SaaS Pulse
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-[#4C5C75] hover:bg-gray-50 hover:text-[#0050D4] transition-all">
                <ChevronLeft size={24} />
              </button>
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-[#4C5C75] hover:bg-gray-50 hover:text-[#0050D4] transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const IndustriesDominate = () => {
  const industries = [
    { name: "SaaS", image: saas, bgClass: "bg-[#0A4DA1]" },
    { name: "E-commerce", image: ecommerce, bgClass: "bg-[#4B6CB7]" },
    { name: "Local", image: LocalBussines, bgClass: "bg-[#421A79]" },
    { name: "Agencies", image: Agencies, bgClass: "bg-[#3F5287]" },
    { name: "Startups", image: Startups, bgClass: "bg-[#0F2D52]" }
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-['Plus_Jakarta_Sans'] font-[800] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F2F46] tracking-tight">
            Industries We Dominate
          </h2>
          <div className="h-1.5 w-20 bg-[#0050D4] mx-auto mt-6 rounded-full" />
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((item, index) => (
            <div 
              key={index}
              className={`group relative min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${item.bgClass}`}
            >
              {/* Background Visual/Image */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover mix-blend-overlay scale-105 group-hover:scale-115 transition-transform duration-1000 ease-out"
                />
              </div>

              {/* Bottom Label Container with Glassmorphism */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl transition-all duration-500 group-hover:bg-white/20">
                  <h3 className="font-['Inter'] font-[700] text-white text-lg md:text-xl xl:text-2xl tracking-tight text-center">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[700px]">
      {/* Main Background Wrapper */}
      <div 
        className="relative w-full max-w-7xl min-h-[532px] flex items-center justify-center p-6 md:p-12 isolation-isolate rounded-[48px] overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(114.79deg, #0050D4 0%, #4647D3 50%, #702AE1 100%)',
        }}
      >
        {/* CENTERED SMALL CONTAINER: 
           Implemented with fixed dimensions and centered flex alignment.
        */}
        <div 
          className="relative z-[2] flex flex-col items-center justify-center text-center transition-all duration-300 mx-auto"
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px',
            gap: '24px',
            width: '100%',
            maxWidth: '992px',
            minHeight: '372px',
            background: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(6px)',
            borderRadius: '32px',
            flex: 'none',
            zIndex: '2',
          }}
        >
          {/* Heading - Plus Jakarta Sans */}
          <h2 className="font-['Plus_Jakarta_Sans'] font-[800] text-3xl md:text-5xl text-[#1F2F46] leading-tight tracking-tight max-w-3xl">
            Strengthen Your Website Authority Today
          </h2>

          {/* Subtext - Inter */}
          <p className="font-['Inter'] text-[#4C5C75] text-base md:text-lg leading-relaxed max-w-2xl">
            Start building powerful backlinks and improve your rankings with our proven authority blueprint.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <button className="w-full sm:w-auto bg-[#0050D4] text-white px-10 py-4 rounded-xl font-['Inter'] font-bold text-base shadow-lg shadow-blue-900/20 hover:scale-[1.02] transition-transform active:scale-95">
              Get Free Audit
            </button>
            <button className="w-full sm:w-auto bg-white border border-white text-[#1F2F46] px-10 py-4 rounded-xl font-['Inter'] font-bold text-base shadow-sm hover:bg-gray-50 transition-all active:scale-95">
              Talk to Expert
            </button>
          </div>
        </div>

        {/* Decorative Background Elements for Depth */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />
      </div>
    </section>
  );
};



const BgStyle = {
    background: `
      radial-gradient(141.42% 141.42% at 0% 100%, #F4F6FF 0%, rgba(244, 246, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 100% 100%, #F4F6FF 0%, rgba(244, 246, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 100% 0%, #DDE9FF 0%, rgba(221, 233, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 0% 0%, #EBF1FF 0%, rgba(235, 241, 255, 0) 50%)
    `,
    backgroundColor: '#FFFFFF' // Fallback
  };

// --- MAIN PAGE COMPONENT ---
const OffPageSeo = () => {
  return (
    <div className="min-h-screen bg-[#F7FAFF] selection:bg-[#0050D4] selection:text-white"  style={BgStyle}>
      <Hero />
      <Explainer />
      <Expertise />
      <AuthorityBlueprint />
      <PerformanceMetrics />
      <ImpactTestimonial />
      <IndustriesDominate />
      <FinalCTA />
    </div>
  );
};

export default OffPageSeo;