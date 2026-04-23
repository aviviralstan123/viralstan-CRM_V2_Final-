import React from 'react';
import { 
  Zap, Shield, Smartphone, Globe, 
  BarChart, CheckCircle, Code, Search, 
  TrendingUp,    AlertCircle, Map, 
  FileText, Activity, Link, Waypoints, 
  Timer,
  CheckSquare,
  Star,
  Smile,
  Play
} from 'lucide-react';



const TechnicalSeo = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <HeroSection />
      <ValueProposition />
      <FeaturesGrid />
      <ProtocolSection />
      <OutcomesSection />
      <TestimonialSection />
      <IndustriesSection />
      <CTASection />
    </div>
  );
};



// 2. Hero Section

const HeroSection = () => {
  return (
    <section 
      className="
        relative
        flex flex-col items-center /* This centers the children horizontally */
        w-full
        pt-[64px] pb-12 
        px-6 md:px-24 lg:px-[192px] 
        isolate 
        bg-white
        min-h-fit /* Keeps height tight to content */
      "
    >
      {/* Container with mx-auto and text-center to guarantee centering */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-display text-[#1F2F46] leading-tight mb-6">
          Fix Your Website’s <span className="text-[#0050D4]">Technical Issues</span> & Improve Rankings
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-10 font-sans">
          We audit, optimize, and monitor your site’s speed, security, and structure to ensure 
          search engines crawl, index, and rank your content perfectly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-sans font-[600] hover:bg-blue-700 transition-colors">
            Get Free SEO Audit
          </button>
          <button className="w-full sm:w-auto border text-[#1F2F46] bg-[#CBDEFF] border-slate-300 text-slate-700 px-8 py-3 rounded-xl font-sans font-[600] hover:bg-slate-50 transition-colors">
Fix My Webiste          </button>
        </div>

        {/* Speedometer Image */}
        <div className="relative mx-auto max-w-2xl group">
          <div className="relative rounded-[2.5rem] border-[10px] border-slate-100 bg-black overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1032" 
              alt="Performance Dashboard" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Badges - Centered logic maintained */}
          <div className="absolute -top-4 -left-4 md:-left-10 flex items-center gap-2 bg-white border border-slate-100 px-4 py-2.5 rounded-xl shadow-lg">
            <Zap size={16} className="text-blue-600 fill-blue-600" />
            <span className="text-xs md:text-sm font-bold text-blue-900 whitespace-nowrap">Faster Website Speed</span>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 flex items-center gap-2 bg-white border border-slate-100 px-4 py-2.5 rounded-xl shadow-lg">
            <Search size={16} className="text-blue-600" />
            <span className="text-xs md:text-sm font-bold text-blue-900 whitespace-nowrap">Better Crawlability</span>
          </div>

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-slate-100 px-4 py-2.5 rounded-xl shadow-lg">
            <TrendingUp size={16} className="text-blue-600" />
            <span className="text-xs md:text-sm font-bold text-blue-900 whitespace-nowrap">Improved SEO Score</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />
    </section>
  );
};

const ValueProposition = () => {
  return (
    <section 
      className="
        flex flex-col items-center justify-center
        w-full
        py-16 md:py-24 
        px-6 md:px-12 lg:px-24
        -mt-0 /* Pulls it up closer to the hero image */
        bg-[#EBF1FF] 
        text-center
        relative
        z-20
      "
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display text-[#1a2b4b] mb-8 ">
          The Foundation of Digital Visibility
        </h2>

        <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6 max-w-4xl mx-auto">
          Technical SEO isn't just about code; it's about making your digital architecture accessible 
          to those who crawl it. We focus on the <span className="text-blue-600 font-semibold underline decoration-2 underline-offset-4">backend structure</span>, 
          ensuring every page is logically connected and perfectly indexed.
        </p>

        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          From the way your server responds to how a mobile browser interprets your layout, 
          we eliminate the friction between your content and your potential customers.
        </p>
      </div>
    </section>
  );
};

// 4. Features Grid (We Eliminate Friction)


const FeaturesGrid = () => {
  const features = [
    {
      title: "Website speed",
      desc: "Minifying code and optimizing assets for sub-second load times across all devices.",
      icon: <Zap size={20} />,
    },
    {
      title: "Mobile responsiveness",
      desc: "Guaranteeing a seamless experience on any screen size to satisfy Google's mobile-first indexing.",
      icon: <Smartphone size={20} />,
    },
    {
      title: "Crawl errors",
      desc: "Identifying and fixing 404s and redirect chains that drain your crawl budget.",
      icon: <AlertCircle size={20} />,
    },
    {
      title: "XML sitemap",
      desc: "Creating dynamic maps that guide search bots to your most valuable content instantly.",
      icon: <Map size={20} />,
    },
    {
      title: "Robots.txt",
      desc: "Fine-tuning bot permissions to ensure only the right parts of your site are indexed.",
      icon: <FileText size={20} />,
    },
    {
      title: "Core Web Vitals",
      desc: "Optimizing LCP, FID, and CLS scores to meet modern user experience standards.",
      icon: <Activity size={20} />,
    },
    {
      title: "Broken links",
      desc: "Cleaning up internal and external link structures to maintain link equity flow.",
      icon: <Link size={20} />,
    },
    {
      title: "URL structure",
      desc: "Designing clean, descriptive, and hierarchical URLs for better user comprehension.",
      icon: <Waypoints size={20} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-[150
      px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2F46] mb-4">
            We Eliminate Friction
          </h2>
          <p className="text-slate-500 text-lg">
            Every technical detail matters in the race for the first page.
          </p>
        </div>

        {/* Responsive Grid - 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 group">
              {/* Icon Wrapper: Matches the light-blue professional theme */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-[#1F2F46] mb-1 group-hover:text-blue-600 transition-colors">
                  {f.title}
                </h4>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. The Protocol (Step-by-Step)
const ProtocolSection = () => {
  const steps = [
    {
      num: 1,
      title: "Audit",
      desc: "Deep-dive technical scan of 200+ ranking factors.",
    },
    {
      num: 2,
      title: "Prioritization",
      desc: "Mapping tasks by impact on rankings and ROI.",
    },
    {
      num: 3,
      title: "Implementation",
      desc: "Expert engineers executing the technical fixes.",
    },
    {
      num: 4,
      title: "Testing",
      desc: "Rigorous quality assurance and performance validation.",
    },
    {
      num: 5,
      title: "Monitoring",
      desc: "Continuous tracking of crawl health and index status.",
    },
  ];

  return (
    <section className="bg-[#DDE9FF] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Centered and Bold */}
        <h2 className="text-3xl md:text-5xl font-display text-[#1a2b4b] text-center mb-20">
          The VIRALSTAN Protocol
        </h2>

        {/* Process Container */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-300 -z-0" />

          {/* Grid Layout: 1 column on mobile, 5 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col font-sans text-[#4C5C75] items-center group">
                
                {/* Number Circle Construction */}
                <div className="relative flex items-center justify-center w-[88px] h-[88px] mb-6">
                  {/* Outer Glow/Ring */}
                  <div className="absolute inset-0 rounded-full bg-white shadow-sm" />
                  
                  {/* Inner Blue Ring */}
                  <div className="absolute inset-[6px] rounded-full border-[3px] border-[#0050D4] flex items-center justify-center bg-white group-hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl font-sans font-[700] text-[#0050D4]">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Text Content - Center Aligned */}
                <div className="text-center px-2">
                  <h4 className="text-xl font-bold text-[#1a2b4b] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



//6
const OutcomesSection = () => {
  const outcomes = [
    {
      title: "Faster load time",
      desc: "Reduce bounce rates with lightning-fast speed.",
      icon: <Timer size={28} className="text-blue-600" />,
    },
    {
      title: "Better indexing",
      desc: "Get all your content discovered by search bots.",
      icon: <CheckSquare size={28} className="text-blue-600" />,
    },
    {
      title: "Improved rankings",
      desc: "Climb the SERPs with a solid base.",
      icon: <Star size={28} className="text-purple-600" />,
    },
    {
      title: "Higher UX",
      desc: "Delight users with a smooth browsing journey.",
      icon: <Smile size={28} className="text-blue-500" />,
    },
  ];

  return (
    <section className="bg-[#F4F6FF] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b4b] mb-4">
            Measured Outcomes
          </h2>
          <p className="text-slate-500 text-lg">
            What technical excellence looks like for your business.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300"
            >
              {/* Icon Wrapper */}
              <div className="mb-6">
                {item.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-[#1a2b4b] mb-3">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. Testimonial
const TestimonialSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Testimonial Card */}
        <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl bg-black aspect-video md:aspect-[21/9] flex items-center justify-center">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000" // Replace with your Sarah Jenkins/CEO asset
              alt="Testimonial Background" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
            
            {/* Play Button - Centered */}
            <button className="mb-8 w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 hover:scale-110 transition-all shadow-lg shadow-blue-600/40 mx-auto group/btn">
              <Play size={32} fill="currentColor" className="ml-1" />
            </button>

            {/* Quote Heading */}
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              "VIRALSTAN fixed technical errors we didn't even know existed. Our organic traffic doubled in just 3 months."
            </h3>

            {/* Attribution */}
            <div className="flex flex-col items-center">
              <span className="text-blue-400 font-bold tracking-widest text-xs md:text-sm uppercase">
                Sarah Jenkins, CEO of Techstream
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    "SaaS",
    "E-commerce",
    "Blogs",
    "Service businesses",
    "Startups"
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-display text-[#1F2F46] text-center mb-12">
          Trusted Across Industries
        </h2>

        {/* Industry Badges Container */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="
                /* Layout */
                px-8 py-4 md:px-10 md:py-6
                flex items-center justify-center
                
                /* Appearance */
                bg-[#CBDEFF] 
                rounded-[1.2rem]
                transition-all duration-300
                hover:bg-[#BBD6FF]
                hover:translate-y-[-2px]
                cursor-default
              "
            >
              <span className="text-[#4C5C75] font-sans text-lg md:text-xl whitespace-nowrap">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. Bottom CTA
const CTASection = () => (
  <section className="py-20 px-4">
    <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Fix Your Website & Boost Your Rankings</h2>
      <p className="mb-8 opacity-90">Stop losing potential customers to technical errors.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold duration-150 hover:scale-105 hover:active-95 hover:shadow-indigo-200">Get Free Audit</button>
        <button className="bg-transparent border border-white px-8 py-3 rounded-xl font-bold duration-150 hover:shadow-indigo-200 hover:scale-105 hover:active-95">Contact Sales</button>
      </div>
    </div>
  </section>
);


export default TechnicalSeo;