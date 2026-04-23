import React from 'react';
import { 
  Type, Layout, Key, Link as LinkIcon, Image as ImageIcon, 
  Globe,  Zap, TrendingUp, Users, Target, MousePointer2,FileText,Smile,
  Play, Building2, Briefcase, ShoppingCart, HeartPulse, Scale 
} from 'lucide-react';


const OnPageSeo = () => {
  
  // --- Section Components ---

const Hero = () => {
  // Exact mapping for the 4 containers based on the UI layout
  const leftBadges = [
    { id: 1, text: "SEO Optimized Pages", icon: <FileText className="text-blue-600" size={18} />, top: "12%" },
    { id: 2, text: "Higher Rankings", icon: <TrendingUp className="text-purple-600" size={18} />, top: "24%" },
  ];


  const rightBadges = [
    { id: 3, text: "Better User Experience", icon: <Smile className="text-indigo-600" size={18} />, top: "18%" },
    { id: 4, text: "Improved Conversions", icon: <Target className="text-red-500" size={18} />, top: "30%" },
  ];

  // Reusable Badge Component
  const FloatingBadge = ({ item, side }) => (
    <div 
      className={`absolute hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-xl border border-white z-20 transition-transform hover:scale-105`}
      style={{ 
        top: item.top, 
        [side]: '-60px' 
      }}
    >
      <div className="bg-gray-50 p-2 rounded-lg shadow-inner">
        {item.icon}
      </div>
      <span className="font-['Inter'] font-semibold text-[14px] text-slate-800 whitespace-nowrap">
        {item.text}
      </span>
    </div>
  );
 const heroBgStyle = {
    background: `
      radial-gradient(141.42% 141.42% at 0% 100%, #F4F6FF 0%, rgba(244, 246, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 100% 100%, #F4F6FF 0%, rgba(244, 246, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 100% 0%, #DDE9FF 0%, rgba(221, 233, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 0% 0%, #EBF1FF 0%, rgba(235, 241, 255, 0) 50%)
    `,
    backgroundColor: '#FFFFFF' 
  };
  return (
    <section className="relative w-full min-h-screen  flex flex-col items-center pt-24 px-6 overflow-hidden" style={heroBgStyle}>
      
      {/* Text Content */}
      <div className="max-w-4xl text-center z-10 mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-[#0050D4] text-[11px] font-bold tracking-[2px] uppercase mb-6 border border-blue-500/20">
          Master Your On-Page SEO
        </span>
        
        <h1 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-[68px] font-[800] leading-[1.05] text-[#1F2F46] mb-8">
          Optimize Your Website to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0050D4] to-[#702AE1]">
            Rank Higher & Convert Better
          </span>
        </h1>
        
        <p className="font-['Inter'] text-lg text-[#4C5C75] max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
          We improve your website content, structure, and performance so search engines rank you higher and users convert faster.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="bg-[#0050D4] hover:bg-blue-700 text-white font-bold py-4.5 px-10 rounded-xl shadow-lg transition-all">
            Get Free SEO Audit
          </button>
          <button className="bg-white hover:bg-gray-50 text-[#0050D4] font-bold py-4.5 px-10 rounded-xl shadow-sm transition-all border border-gray-100">
            Optimize My Website
          </button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full max-w-[900px] mt-8 group">
        
        {/* Left Badges */}
        {leftBadges.map(item => (
          <FloatingBadge key={item.id} item={item} side="left" />
        ))}

        {/* Right Badges */}
        {rightBadges.map(item => (
          <FloatingBadge key={item.id} item={item} side="right" />
        ))}

        {/* Main Dashboard Box */}
        <div className="relative bg-[#1F2F46] p-4 md:p-6 rounded-[32px] shadow-2xl border-[1px] border-white/20">
          <div className="overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
              alt="Analytics Dashboard" 
              className="w-full h-auto opacity-95 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Reflection/Glow under image */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[#0050D4]/20 blur-[80px] -z-10" />
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-400/10 blur-[120px] rounded-full translate-x-1/3" />
      
    </section>
  );
};

  const InfoSection = () => (
    <section className="bg-[##EBF1FF] py-24 px-6 md:px-48 flex justify-center">
      <div className="max-w-4xl text-center">
        <h2 className="text-[48px] font-[800] leading-[48px] text-[#1F2F46] mb-8 font-['Plus_Jakarta_Sans']">
          The Foundation of Digital Visibility
        </h2>
        <p className="text-[20px] leading-[32px] text-[#4C5C75] font-medium font-['Inter']">
          On-Page SEO is the practice of optimizing individual web pages to rank higher and earn more 
          relevant traffic in search engines. Unlike Off-Page SEO, which focuses on external signals like 
          backlinks, On-Page SEO addresses elements of the site content and HTML source code that can be 
          optimized. It's about making your site user-friendly and search engine friendly at the same time.
        </p>
      </div>
    </section>
  );

  const OptimizationGrid = () => {
    const items = [
      { title: "Title Tags", desc: "Crafting unique, keyword-rich titles for every page to improve click-through rates.", icon: <Type />, color: "#7B9CFF", iconColor: "#0050D4" },
      { title: "Content Optimization", desc: "Ensuring your content is valuable, high-quality, and naturally incorporates targets.", icon: <Layout />, color: "#CDCDFF", iconColor: "#4647D3" },
      { title: "Keyword Placement", desc: "Strategic positioning of primary and secondary keywords in headers and first paragraphs.", icon: <Key />, color: "#C0A0FF", iconColor: "#702AE1" },
      { title: "Internal Linking", desc: "Connecting your pages to distribute link equity and help search engines crawl your site.", icon: <LinkIcon />, color: "#CBDEFF", iconColor: "#1F2F46" },
      { title: "Image Optimization", desc: "Using descriptive alt text and compressed file sizes for faster loading and accessibility.", icon: <ImageIcon />, color: "#7B9CFF", iconColor: "#0050D4" },
      { title: "URL Structure", desc: "Creating clean, descriptive, and SEO-friendly permalinks that users and bots love.", icon: <Globe />, color: "#CDCDFF", iconColor: "#4647D3" },
    //   { title: "Heading Hierarchy", desc: "Organizing content with proper H1-H6 tags for better readability and SEO structure.", icon: <Hierarchy />, color: "#C0A0FF", iconColor: "#702AE1" },
      { title: "Page Speed", desc: "Technical improvements to reduce load times, which is a critical ranking factor for mobile.", icon: <Zap />, color: "#CBDEFF", iconColor: "#1F2F46" },
    ];

    return (
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-[#1F2F46] mb-4">What We Optimize</h2>
          <div className="w-24 h-1.5 bg-[#0050D4] rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#FFFFFF] p-8 rounded-[24px] shadow-[12px_12px_24px_rgba(11,18,32,0.04)] flex gap-6 hover:translate-y-[-4px] transition duration-300">
              <div className="flex-shrink-0 w-[54px] h-[54px] rounded-2xl flex items-center justify-center" style={{ backgroundColor: item.color, color: item.iconColor }}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-sans font-[700] text-[#1F2F46] mb-3">{item.title}</h3>
                <p className="text-[#4C5C75] text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

 const ProcessSection = () => {
  const steps = [
    { step: "01", label: "Audit", borderColor: "border-[#0050D4]", textColor: "text-[#0050D4]" },
    { step: "02", label: "Mapping", borderColor: "border-[#4647D3]", textColor: "text-[#4647D3]" },
    { step: "03", label: "Optimization", borderColor: "border-[#702AE1]", textColor: "text-[#702AE1]" },
    { step: "04", label: "Check",borderColor: "border-[#B31B25]", textColor: "text-[#B31B25]" },
    { step: "05", label: "Reporting", borderColor: "border-[#1F2F46]", textColor: "text-[#1F2F46]" }
  ];

  return (
    <section className="bg-white py-24 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-extrabold text-[#1F2F46] mb-16 text-center">
          Our Seamless Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((item, i) => (
            <div key={i} className="text-center group">
              {/* Circle: Dynamic Border & Text Color */}
              <div 
                className={`
                  w-16 h-16 border-4 rounded-full flex items-center justify-center mx-auto mb-4 
                  transition-all duration-300 group-hover:bg-gray-50 group-hover:scale-110
                  ${item.borderColor} ${item.textColor} font-display font-[900] text-xl
                `}
              >
                {item.step}
              </div>

              {/* Label: Inter Font */}
              <p className="font-sans font-bold text-[#1F2F46] text-lg tracking-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  const ResultsSection = () => {
    const results = [
      { title: "Higher Rankings", icon: <TrendingUp />, text: "Climb to the first page for the search terms that truly matter.", color: "#0050D4" },
      { title: "Better UX", icon: <Users />, text: "Users enjoy a smoother, faster, and more intuitive experience.", color: "#4647D3" },
      { title: "Increased Conversions", icon: <MousePointer2 />, text: "Convert browsing visitors into loyal, paying customers.", color: "#702AE1" },
      { title: "Lower Bounce Rate", icon: <Target />, text: "Keep users engaged longer with high-quality content structure.", color: "#B31B25" },
    ];

    return (
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1F2F46] mb-4">Results You Can Feel</h2>
          <p className="text-[#4C5C75] max-w-2xl mx-auto">Our data-driven approach ensures that every optimization serves a purpose: growing your business.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((res, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="mb-6" style={{ color: res.color }}>{res.icon}</div>
              <h4 className="text-lg font-bold text-[#1F2F46] mb-4">{res.title}</h4>
              <p className="text-sm text-[#4C5C75] leading-relaxed">{res.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const VideoSection = () => (
    <section className="px-6 py-12">
      <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group cursor-pointer">
        <img 
          src="https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=786" 
          alt="Video Preview" 
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
            <Play fill="white" size={32}/>
          </div>
          <p className="text-xl font-bold">Watch How We Deliver SEO Excellence</p>
        </div>
      </div>
    </section>
  );

  const Industries = () => (
    <section className="bg-[#F4F6FF] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1F2F46] mb-4">Industries We Dominate</h2>
          <p className="text-[#4C5C75]">Tailored strategies for various sectors.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { icon: <Briefcase />, label: "SaaS" },
            { icon: <ShoppingCart />, label: "E-commerce" },
            { icon: <Building2 />, label: "B2B" },
            { icon: <HeartPulse />, label: "Healthcare" },
            { icon: <Scale />, label: "Legal" }
          ].map((ind, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-md transition">
              <div className="flex justify-center text-blue-600 mb-4">{ind.icon}</div>
              <span className="font-bold text-[#1F2F46]">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const CTA = () => (
    <section className="p-12">
      <div className="max-w-7xl mx-auto bg-[#1F2F46] to-[#0050D4] rounded-[40px] p-16 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Make Your Website <br /> SEO-Ready Today</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition">Get Free Audit</button>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">Contact Expert</button>
        </div>
      </div>
    </section>
  );
const BgStyle = {
    background: `
      radial-gradient(141.42% 141.42% at 0% 100%, #F4F6FF 0%, rgba(244, 246, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 100% 100%, #F4F6FF 0%, rgba(244, 246, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 100% 0%, #DDE9FF 0%, rgba(221, 233, 255, 0) 50%),
      radial-gradient(141.42% 141.42% at 0% 0%, #EBF1FF 0%, rgba(235, 241, 255, 0) 50%)
    `,
    backgroundColor: '#FFFFFF' // Fallback
  };
  return (
    <div className="min-h-screen bg-white font-['Inter']" style={BgStyle}>
      <Hero />
      <InfoSection />
      <OptimizationGrid />
      <ProcessSection />
      <ResultsSection />
      <VideoSection />
      <Industries />
      <CTA />
      
   
    </div>
  );
};

export default OnPageSeo;