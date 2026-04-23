import React from 'react';
import { 
  BarChart3, 
  MousePointer2, 
  Target, 
  ShoppingCart, 
  Zap, 
  Users, 
  TrendingUp, 
  Layers,
  Layout,
  Video,
  Image as ImageIcon,
  UserPlus,
  Eye,
  Heart,
  RefreshCw,
  Search
} from 'lucide-react';



function HeroSection() {
  return (
    <section className="relative w-full bg-[#F4F6FF]  text-white overflow-hidden">

      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-40 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1E293B] text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            ⚡ NEW META SYSTEM 2024
          </div>

          {/* Heading */}
          <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold leading-tight mb-6">

            <span className="text-[#1E3A8A] font-display font-extrabold">
              Turn Scroll
            </span>

            <br />

            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-display font-extrabold">
              Into Sales
            </span>

          </h1>

          {/* Description */}
          <p className="text-[#4C5C75] font-sans  text-lg max-w-[520px] mb-10 leading-relaxed">
            We use reels, creatives, and targeting to stop attention and convert
            it into customers on Instagram & Facebook.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-sans font-bold text-[#FFFFFF] hover:scale-105 transition">
              Launch Campaign
            </button>

            <button className="px-8 py-4 rounded-full bg-[#FFFFFF] text-gray-800 font-bold font-sans hover:scale-105 transition">
              View Case Studies
            </button>

          </div>
        </div>


        {/* RIGHT IMAGE AREA */}
        <div className="relative flex justify-center">

          {/* Phone */}
          <div className="w-[260px] sm:w-[320px] lg:w-[360px] h-[520px] lg:h-[600px] bg-gradient-to-b from-purple-700 via-pink-600 to-gray-400 rounded-[40px] border-[10px] border-[#1F2937] shadow-2xl relative overflow-hidden">

            {/* Fake UI */}
            <div className="absolute bottom-16 left-6 text-white text-sm opacity-80">
              viralstan_ads
            </div>

          </div>

          {/* Conversion Card */}
          <div className="absolute top-10 left-0 sm:left-10 bg-white/80 backdrop-blur-lg text-black p-5 rounded-2xl shadow-xl w-[220px]">

            <p className="text-sm font-semibold mb-2">
              Conversion Rate
            </p>

            <p className="text-3xl font-bold">
              +342%
            </p>

            <p className="text-xs text-gray-500">
              Last 30 days active scaling
            </p>

          </div>


          {/* Impression Card */}
          <div className="absolute bottom-16 right-0 sm:right-10 bg-[white/80] backdrop-blur-lg text-black p-5 rounded-2xl shadow-xl w-[220px]">

            <p className="text-sm font-semibold mb-2">
              Ad Impressions
            </p>

            <p className="text-3xl font-bold">
              1.2M+
            </p>

            <p className="text-xs text-gray-500">
              Verified reach per campaign
            </p>

          </div>

        </div>

      </div>


      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 200" className="w-full h-[140px] lg:h-[200px]">
          <path
            fill="#EBF1FF"
            d="M0,160L80,170C160,180,320,200,480,186.7C640,173,800,128,960,112C1120,96,1280,112,1360,120L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

    </section>
  );
}

function HowItsWork() {
  const steps = [
    {
      icon: <MousePointer2 size={24} />,
      title: "User scrolls",
      desc: "Potential customers browse their social feeds on FB & IG.",
    },
    {
      icon: <Layout size={24} />,
      title: "Ad appears",
      desc: "Your ad enters the feed naturally, feeling like native content.",
    },
    {
      icon: <Target size={24} />,
      title: "Grabs attention",
      desc: "High-impact creative stops the scroll and forces a look.",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "User converts",
      desc: "The prospect clicks and becomes a paying customer.",
    },
  ];

  return (
    <section className="w-full bg-[#EBF1FF] py-20 lg:py-28">

      <div className="max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1F2A37]">
            How Meta Ads Work
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Our proven cycle of attention to transaction.
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#E6ECF5] flex items-center justify-center text-blue-600 mb-6">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>


        {/* Bottom Flow */}
        <div className="mt-16 bg-[#1F344B] rounded-[28px] px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="flex flex-wrap items-center gap-4 text-white text-lg font-medium">

            <span className="text-white text-xl font-semibold">
              Simple Flow
            </span>

            <span className="text-gray-300">Scroll</span>

            <span className="text-gray-400">→</span>

            <span className="text-gray-300">Hook</span>

            <span className="text-gray-400">→</span>

            <span className="text-gray-300">Click</span>

            <span className="text-gray-400">→</span>

            <span className="text-gray-300">Retarget</span>

            <span className="text-gray-400">→</span>

            <span className="text-gray-300">Convert</span>

          </div>

          {/* Button */}
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:scale-105 transition">
            See Full Roadmap
          </button>

        </div>

      </div>

    </section>
  );
}

const Solutions = () => {
  const categories = [
    {
      label: "VISUAL IMPACT",
      title: "Creative Ads",
      color: "text-blue-600",
      items: [
        { icon: <Video size={16} />, text: "Reel Ads" },
        { icon: <Layers size={16} />, text: "Carousel Ads" },
        { icon: <ImageIcon size={16} />, text: "Image Ads" },
        { icon: <Users size={16} />, text: "UGC Style Ads" }
      ]
    },
    {
      label: "LASER PRECISION",
      title: "Audience Targeting",
      color: "text-purple-600",
      items: [
        { icon: <Search size={16} />, text: "Interest Targeting" },
        { icon: <Users size={16} />, text: "Custom Audience" },
        { icon: <UserPlus size={16} />, text: "Lookalike Audience" },
        { icon: <Target size={16} />, text: "Behavior Targeting" }
      ]
    },
    {
      label: "REVENUE GROWTH",
      title: "Funnel Strategy",
      color: "text-orange-500",
      items: [
        { icon: <Eye size={16} />, text: "Awareness" },
        { icon: <Heart size={16} />, text: "Engagement" },
        { icon: <BarChart3 size={16} />, text: "Conversion" },
        { icon: <RefreshCw size={16} />, text: "Retargeting" }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#EBF1FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-16">Precision Meta Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${cat.color} mb-2 block`}>
                {cat.label}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">{cat.title}</h3>
              <div className="space-y-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition cursor-default group">
                    <div className="text-blue-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="text-slate-700 font-semibold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-24 px-6 bg-[#EBF1FF]">
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent pointer-events-none" />
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 relative z-10">
        Attention is money. <br />
        <span className="text-blue-600">Let's turn it into revenue.</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 relative z-10">
        <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition">
          Start Meta Ads
        </button>
        <button className="px-10 py-4 bg-white text-slate-800 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition">
          Launch Campaign
        </button>
      </div>
    </div>
  </section>
);



export default function MetaAdsServices() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-600">
  
      <HeroSection />
      <HowItsWork />
      <Solutions />
      <CTASection />
    </div>
  );
}