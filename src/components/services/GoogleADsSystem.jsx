import { ArrowRight, Layout, MousePointer2, Search, UserPlus } from "lucide-react";
import searchAdsImg from "../../assets/MataADsPackagesImg/GoogleAds1.png";
import displayYoutubeImg from "../../assets/MataADsPackagesImg/GoogleAds2.png";
import trackingImg from "../../assets/MataADsPackagesImg/GoogleAds3.png";
import React from "react";

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary flex-shrink-0">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 10L9 12.5L13.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="hsl(235, 72%, 55%)" strokeWidth="2.5" />
        <path d="M12 16C12 13 14 10 16 10" stroke="hsl(235, 72%, 55%)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" fill="hsl(235, 72%, 55%)" />
      </svg>
    ),
    title: "Search Ads",
    subtitle: "HIGH INTENT",
    subtitleColor: "text-primary",
    items: ["Keyword Targeting", "Ad Copy Optimization", "Top Position Placement", "Lead Generation Focus"],
    image: searchAdsImg,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="4" stroke="hsl(235, 72%, 55%)" strokeWidth="2.5" />
        <path d="M13 12L20 16L13 20V12Z" fill="hsl(235, 72%, 55%)" />
      </svg>
    ),
    title: "Display & YouTube",
    subtitle: "BRAND AWARENESS",
    subtitleColor: "text-accent",
    items: ["Banner Ads", "Video Ads", "Audience Targeting", "Visual Storytelling"],
    image: displayYoutubeImg,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="4" stroke="hsl(235, 72%, 55%)" strokeWidth="2.5" />
        <rect x="9" y="14" width="4" height="8" rx="1" fill="hsl(235, 72%, 55%)" />
        <rect x="14" y="10" width="4" height="12" rx="1" fill="hsl(235, 72%, 55%)" opacity="0.6" />
        <rect x="19" y="12" width="4" height="10" rx="1" fill="hsl(235, 72%, 55%)" />
      </svg>
    ),
    title: "Tracking",
    subtitle: "ROI OPTIMIZATION",
    subtitleColor: "text-accent",
    items: ["Conversion Tracking Setup", "Call & Form Tracking", "A/B Testing", "Data-Driven Decisions"],
    image: trackingImg,
  },
];

const steps = [
    {
      title: "User searches",
      desc: "Looking for a specific service or product they need right now.",
      icon: <Search className="w-6 h-6 text-[#1e40af]" />, // Darker blue icon
      iconBg: "bg-[#abc2ff]", // Light blue-purple
    },
    {
      title: "Your ad appears",
      desc: "Strategic placement at the absolute top of search results.",
      icon: <Layout className="w-6 h-6 text-[#4338ca]" />, // Darker purple icon
      iconBg: "bg-[#d1d5ff]", // Pale lavender
    },
    {
      title: "User clicks",
      desc: "Directed immediately to your high-converting landing page.",
      icon: <MousePointer2 className="w-6 h-6 text-[#4338ca]" />, // Darker purple icon
      iconBg: "bg-[#c7b8ff]", // Soft purple
    },
    {
      title: "High Conversion",
      desc: "High intent traffic leads to significantly higher ROI.",
      icon: <UserPlus className="w-6 h-6 text-white" />, // White icon
      iconBg: "bg-[#0055d4]", // Strong blue (solid)
      shadow: "shadow-[0_8px_20px_rgba(0,85,212,0.4)]" // Specific shadow for last icon
    },
  ];

const flowSteps = ["Search", "Click", "Landing Page", "Conversion"];

const GoogleADsSystem = () => {
  return (
    <>
      <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-mesh-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="flex-1 z-10">
            <span className="inline-block bg-[#7e96f1] text-[#1F2F46] text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-8">
              Intelligent Search Marketing
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-8">
              <span className="text-[#3a3a3a]">Capture People</span><br />
              <span className="text-[#3a3a3a]">Who Are Already</span><br />
              <span className="bg-gradient-to-r from-[#2563eb] to-[#9333ea] bg-clip-text text-transparent">
                Ready To Buy
              </span>
            </h1>

            <p className="text-[#4C5C75] text-lg leading-relaxed mb-10 max-w-lg">
              Google Ads targets users who are actively searching. We place your business exactly where buying decisions are happening.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#0055d4] hover:bg-[#0044aa] text-white px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,85,212,0.3)]">
                Get a Free Audit
              </button>
              <button className="bg-[#cbdcf7] hover:bg-[#b5cdf2] text-[#1a1a1a] px-8 py-4 rounded-xl text-sm font-bold transition-all">
                View Pricing
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              {/* Conversion Rate Card */}
              <div className="bg-white rounded-[2rem] p-8 aspect-square flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <svg className="text-[#2563eb] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Conversion Rate</span>
                </div>
                <div className="relative h-32 w-full mt-4">
                  <div className="absolute inset-0 bg-[#e0e7ff] rounded-2xl opacity-50"></div>
                  <svg viewBox="0 0 200 100" className="absolute bottom-0 w-full h-24 overflow-visible">
                    <path
                      d="M0 80 Q25 85 50 70 T100 60 T150 40 T200 20"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Live Search Results Card */}
              <div className="bg-white rounded-[2rem] p-8 aspect-square flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <svg className="text-[#2563eb] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth="2.5" />
                    <path d="M21 21l-4.35-4.35" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Live Search Results</span>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-[#f0f4ff] rounded-full w-full"></div>
                  <div className="h-3 bg-[#f0f4ff] rounded-full w-[90%]"></div>
                  <div className="h-3 bg-[#f0f4ff] rounded-full w-full"></div>
                  <div className="h-3 bg-[#f0f4ff] rounded-full w-[70%]"></div>
                </div>
              </div>
            </div>

            {/* Keyword Targeting Card */}
            <div className="bg-[#0a0f1a] border border-white/5 rounded-[2rem] p-10 relative overflow-hidden group">
              {/* Decorative concentric circles */}
              <div className="absolute -right-12 -bottom-12 pointer-events-none">
                <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-white/10"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">Keyword Targeting</h3>
              <p className="text-gray-500 mb-8 max-w-sm">
                Optimizing for high-intent search phrases that drive actual revenue.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#161b26] text-gray-300 text-xs font-semibold px-5 py-3 rounded-full border border-white/5">
                  "best solar installer"
                </span>
                <span className="bg-[#161b26] text-gray-300 text-xs font-semibold px-5 py-3 rounded-full border border-white/5">
                  "emergency plumber near me"
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
   <section className="w-full px-6 md:px-12 lg:px-20 py-24 bg-[#ebf2ff] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2F46] mb-6">
            How Google Ads Works
          </h2>
          <div className="w-20 h-1.5 bg-[#0055d4] mx-auto rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="relative mb-20">
          {/* Horizontal Connection Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-[#d0e0ff] -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-[2.5rem] p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner`}>
                  {step.icon}
                </div>
                <h3 className="font-bold text-[#1e293b] text-xl mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Bar */}
        <div className="flex justify-center">
          <div className="bg-[#1e293b] text-white rounded-full px-10 py-5 flex flex-wrap justify-center items-center gap-4 md:gap-6 shadow-xl">
            {flowSteps.map((step, i) => (
              <React.Fragment key={i}>
                <span className="text-sm md:text-base font-bold tracking-wide">
                  {step}
                </span>
                {i < flowSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-500" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>

      <section className="w-full px-6 md:px-12 lg:px-20 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 group transition-shadow flex flex-col"
              >
                {/* Icon */}
                <div className="mb-5 ">{service.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-foreground mb-1">{service.title}</h3>
                <span className={`text-blue-400 font-bold tracking-[0.2em] uppercase ${service.subtitleColor} mb-6`}>
                  {service.subtitle}
                </span>

                {/* Checklist */}
                <div className="space-y-4 mb-8 flex-1">
                  {service.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Preview Image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="w-full h-44 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-br from-[hsl(230,60%,97%)] via-[hsl(235,55%,96%)] to-[hsl(270,50%,95%)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-14 text-[#1F2F46]">
            Ready to own the search<br />results?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-7 text-left shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 group">
              <h3 className="text-primary font-bold text-blue-600 mb-3">Free Performance Audit</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-[#1F2F46]">
                We'll analyze your current account and show exactly where you're wasting budget.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 text-left shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 group]">
              <h3 className="text-primary font-bold text-blue-600 mb-3">Sales-Ready Strategy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-[#1F2F46]">
                A customized roadmap built to capture users at their peak decision moment.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default GoogleADsSystem;