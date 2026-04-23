import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Target, Layers, Smartphone, 
  Play, Share2, CheckCircle2, Search, 
  Settings, Link as LinkIcon, BarChart
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[716px] xl:min-h-[850px] flex items-center overflow-hidden bg-[#F6F9FE] py-20 lg:py-0">
      {/* Decorative Blobs - Hidden on mobile to save performance, visible from md up */}
      <div className="hidden md:block absolute w-[300px] h-[300px] lg:w-[384px] lg:h-[384px] -right-20 -top-20 bg-[rgba(0,74,198,0.1)] blur-[50px] rounded-full z-0" />
      <div className="hidden md:block absolute w-[300px] h-[300px] lg:w-[384px] lg:h-[384px] -left-20 -bottom-20 bg-[rgba(106,30,219,0.1)] blur-[50px] rounded-full z-0" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full z-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
          <h1 className="font-jakarta text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[84px] font-[800] leading-[1.1] tracking-[-1.5px] lg:tracking-[-3.6px] text-[#181C20] mb-6">
            Digital Growth Is <br className="hidden sm:block" />
            Not Random. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
              It’s Engineered.
            </span>
          </h1>

          <p className="font-manrope text-[16px] sm:text-[18px] leading-[1.6] text-[#434655] max-w-[576px] mb-8 px-2 sm:px-0">
            We replace guesswork with high-fidelity systems. Our approach combines 
            data-driven engineering with elite creative execution to build 
            compounding growth engines for the modern era.
          </p>

          <button className="flex flex-row items-center justify-center px-8 py-4 gap-3 bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#7C3AED] text-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <span className="font-manrope font-bold text-[18px]">Start Growth</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-[576px] aspect-[4/3.5] lg:h-[508px] rounded-[24px] lg:rounded-[32px] border-[4px] border-white bg-white/20 shadow-[0px_12px_30px_rgba(0,0,0,0.06)] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
              alt="Engineered Growth" 
              className="w-full h-full object-cover"
            />

            {/* Float Badge - Scaled for mobile */}
            <div className="absolute right-4 bottom-4 lg:right-9 lg:bottom-9 w-[120px] lg:w-[158px] p-4 lg:p-6 flex flex-col gap-1 bg-white/70 border border-white/40 backdrop-blur-[8px] shadow-[0px_12px_30px_rgba(0,0,0,0.06)] rounded-[12px] lg:rounded-[16px]">
              <span className="font-jakarta font-black text-[24px] lg:text-[30px] leading-tight bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#7C3AED] bg-clip-text text-transparent">
                120M+
              </span>
              <span className="font-manrope font-bold text-[10px] lg:text-[14px] tracking-widest text-[#181C20]/60 uppercase">
                REACH
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Section 2: Our Systems-Led Process ---
const Process = () => (
  <section className="py-24 bg-[#F1F4F9] px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-jakarta text-[36px] font-extrabold text-[#181C20] leading-[40px] tracking-[-0.9px] mb-4">
          Our Systems-Led Process
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#7C3AED] rounded-full" />
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { t: "Market Research", d: "Deep analysis of competitive landscapes and audience psychology before a single pixel is moved.", num: "01" },
          { t: "Content & Hook Strategy", d: "Developing psychological triggers and viral mechanisms designed to stop the scroll.", num: "02" },
          { t: "Execution", d: "Precision-grade production using elite creators and advanced technical stacks.", num: "03" },
          { t: "Optimization", d: "Continuous A/B testing and algorithmic adjustments based on live performance data.", num: "04" }
        ].map((item, i) => (
          <div key={i} className="relative bg-white rounded-[24px] overflow-hidden border border-white/40 shadow-[0px_12px_30px_rgba(0,0,0,0.06)] group transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-40 overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661693637041-4573671938f1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt={item.t}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0" 
                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)' }}
              />
              <span className="absolute -left-2 -top-4 font-manrope font-black text-[80px] text-[#004AC6]/5 z-0">
                {item.num}
              </span>
            </div>
            <div className="p-8 pt-6">
              <h3 className="font-jakarta font-bold text-[20px] text-[#181C20] mb-3 leading-[28px]">
                {item.t}
              </h3>
              <p className="font-manrope text-[14px] text-[#434655] leading-[23px]">
                {item.d}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Section 3: Core Growth Engines ---
// --- Section 3: Core Growth Engines (Unsplash Images) ---
const CoreEngines = () => {
  const engines = [
    { 
      title: "Social Media", 
      desc: "Architecting high-fidelity, data-driven content systems.", 
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Performance Marketing", 
      desc: "Surgical precision for guaranteed positive ROI on every spend.", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Content", 
      desc: "Engaging, value-driven media designed to convert attention.", 
      img: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Influencer", 
      desc: "Connecting with trusted voices to dominate niche markets.", 
      img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "SEO", 
      desc: "Zero-lag technical dominance for consistent search presence.", 
      img: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=600&auto=format&fit=crop" 
    }
  ];

  return (
    <section className="py-24 bg-[#F1F4F9] px-6 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-black mb-16  tracking-widest text-[#181C20] decoration-4 underline-offset-8">
        Core Growth Engines
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {engines.map((card, i) => (
          <div key={i} className="relative aspect-[3/4] rounded-[40px] overflow-hidden group border border-slate-100 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_30px_60px_-15px_rgba(37,99,235,0.2)]">
            <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-left z-20">
              <h3 className="font-display font-black text-xl mb-4 text-[#2563EB] group-hover:translate-x-1 transition-transform">{card.title}</h3>
              <p className="font-sans text-sm font-medium leading-relaxed opacity-60 text-slate-300">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Section 4: Industries We Dominate ---
const Industries = () => (
  <section className="py-24 bg-[#181C20] px-6 text-center text-white">
    <h2 className="text-4xl font-black mb-16">Industries We Dominate</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {["SAAS & TECH", "E-COMMERCE", "CONSUMER GOODS", "HEALTH & WELLNESS", "FINTECH", "LUXURY TRAVEL"].map((s, i) => (
        <div key={i} className="h-64 rounded-[32px] border border-white/5 bg-white/5 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <span className="relative z-20 font-display font-bold tracking-[0.2em]">{s}</span>
        </div>
      ))}
    </div>
  </section>
);

// --- Section 5: Paid Collaboration Flow ---
const CollabFlow = () => (
  <section className="py-24 bg-white px-6 text-center">
    <h2 className="text-3xl font-black mb-4">Paid Collaboration Flow</h2>
    <p className="text-gray-400 mb-16">Precision matching for maximum ROI.</p>
    <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
      {[
        { n: "1", t: "Brief", d: "Initial objectives and KPI definition." },
        { n: "2", t: "Match", d: "Algorithmic creator selection." },
        { n: "3", t: "Plan", d: "Content roadmap & hook strategy." },
        { n: "4", t: "Launch", d: "Syncro-launch across channels." },
        { n: "5", t: "Track", d: "Real-time attribution & scaling." }
      ].map((step, i) => (
        <div key={i} className="w-56 p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm">
          <div className="w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center text-white font-black mb-6 mx-auto">
            {step.n}
          </div>
          <h4 className="font-bold mb-2">{step.t}</h4>
          <p className="text-[10px] text-gray-400 leading-tight">{step.d}</p>
        </div>
      ))}
    </div>
  </section>
);

// --- Section 6: Organic Dominance ---
const OrganicDominance = () => (
  <section className="py-24 bg-[#F1F4F9] px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-5xl font-black text-[#181C20] mb-8 leading-tight">Organic Dominance <br/> Through Technical Rigor</h2>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          We don't just "rank" for keywords. We build search authority. Our SEO approach is treated like a software engineering project.
        </p>
        <div className="space-y-4">
          {["Semantic Content Clusters", "High-Authority Digital PR", "Zero-Lag Infrastructure"].map((item, i) => (
            <div key={i} className="flex items-center gap-3 font-bold text-[#181C20]">
              <CheckCircle2 className="text-[#2563EB]" size={20} /> {item}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {[
          { t: "Keyword Research", d: "Deep semantic mapping and intent analysis." },
          { t: "On-page", d: "Content optimization for users and bots." },
          { t: "Technical", d: "Core web vitals and crawl efficiency." },
          { t: "Backlinks", d: "Premium link equity from tier-1 publishers." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm ml-auto max-w-sm last:mr-0 even:mr-10">
            <h4 className="font-bold text-[#181C20]">{item.t}</h4>
            <p className="text-sm text-gray-400">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Section 7: The Growth Dashboard ---
const GrowthDashboard = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="bg-white rounded-[48px] p-12 border border-gray-100 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex-1">
        <h2 className="text-4xl font-black text-[#181C20] mb-6">The Growth Dashboard</h2>
        <p className="text-gray-500 mb-10">Real-time visibility into every dollar spent and every lead generated.</p>
        <div className="flex gap-4">
          <div className="flex-1 bg-[#F6F9FE] p-6 rounded-3xl">
            <p className="text-xs uppercase font-bold opacity-40">Avg Roas</p>
            <p className="text-3xl font-black text-[#2563EB]">4.8x</p>
          </div>
          <div className="flex-1 bg-[#F6F9FE] p-6 rounded-3xl">
            <p className="text-xs uppercase font-bold opacity-40">CPA Reduction</p>
            <p className="text-3xl font-black text-[#7C3AED]">-32%</p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-slate-50 p-8 rounded-[32px] w-full h-64 flex items-end justify-between gap-2">
        {[40, 70, 45, 90, 60, 100].map((h, i) => (
          <motion.div 
            key={i} 
            initial={{ height: 0 }} 
            whileInView={{ height: `${h}%` }} 
            className="flex-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-t-lg" 
          />
        ))}
      </div>
    </div>
  </section>
);

// --- Section 8: The VIRALSTAN Edge ---
const Edge = () => (
  <section className="py-24 bg-[#181C20] text-center text-white px-6">
    <h2 className="text-4xl font-black mb-20 uppercase tracking-widest">The VIRALSTAN Edge</h2>
    <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {[
        { t: "Data-driven", d: "We use predictive modeling and real-time analytics." },
        { t: "Creative + Perf", d: "Where elite storytelling meets surgical advertising." },
        { t: "Proven results", d: "Over 120M+ reach and millions in revenue." },
        { t: "Scalable systems", d: "Frameworks built to scale from $10k to $1M+ monthly." }
      ].map((card, i) => (
        <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[40px] text-left">
          <h3 className="text-xl font-bold mb-6 text-[#2563EB]">{card.t}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{card.d}</p>
        </div>
      ))}
    </div>
  </section>
);

// --- Section 9: Build Your Engine (CTA) ---
const BuildEngine = () => (
  <section className="py-32 px-6">
    <div className="max-w-6xl mx-auto bg-[#F6F9FE] rounded-[60px] p-24 text-center border border-[#2563EB]/10 relative overflow-hidden">
      <h2 className="text-6xl font-black text-[#181C20] mb-10 leading-tight">Let's Build Your <br /> <span className="text-[#2563EB]">Growth Engine.</span></h2>
      <p className="text-gray-400 text-lg mb-10">Stop playing the guessing game with your digital presence.</p>
      <button className="px-14 py-6 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-2xl font-black text-xl hover:scale-105 transition-transform">
        Start Growth
      </button>
    </div>
  </section>
);

// --- Section 10: Footer ---
const Footer = () => (
  <footer className="py-12 border-t border-gray-100 text-center text-gray-400 font-bold text-xs uppercase tracking-widest">
    © 2026 Viralstan HQ. All Rights Reserved. Engineered for Excellence.
  </footer>
);

export default function AboutUs() {
  return (
    <main className="font-sans overflow-x-hidden w-full min-h-screen">
      <Hero />
      <Process />
      <CoreEngines />
      <Industries />
      <CollabFlow />
      <OrganicDominance />
      <GrowthDashboard />
      <Edge />
      <BuildEngine />
      <Footer />
    </main>
  );
}