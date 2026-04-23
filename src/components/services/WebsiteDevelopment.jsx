import { Zap, TrendingUp, BadgeCheck, CheckCircle2, LineChart, BrainCircuit } from "lucide-react";
 import heroLaptop from "../../assets/MataADsPackagesImg/webdevhero.png";
import { XCircle, CheckCircle, AlertCircle  } from "lucide-react";
import { LogIn, Brain  } from "lucide-react";
import { User, Crosshair, Diamond, Server, Rocket } from "lucide-react";
import { Cloud, BarChart3, Terminal } from "lucide-react";
import { Monitor, Sparkles, Database, ShoppingBag, Settings, ArrowRight } from "lucide-react";
import circuitBoard from "../../assets/MataADsPackagesImg/webdev1.png"; 
const problems = [
  { title: "Just Sit There", desc: "Static pages that offer no interaction or engagement." },
  { title: "No Conversion Logic", desc: "Users land and leave without any clear next steps." },
  { title: "Dead Traffic", desc: "Burning marketing budget on users who never convert." },
];
const layers = [
  {
    num: "04",
    title: "Automation Cloud",
    desc: "Self-healing systems that scale with your traffic.",
    icon: Cloud,
    color: "text-blue-400",
  },
  {
    num: "03",
    title: "Conversion Engine",
    desc: "AI-driven triggers to turn browsers into buyers.",
    icon: LineChart,
    color: "text-purple-400",
  },
  {
    num: "02",
    title: "Backend Logic",
    desc: "Robust data processing and secure API infrastructure.",
    icon: Terminal,
    color: "text-indigo-400",
  },
  {
    num: "01",
    title: "Frontend Magic",
    desc: "Editorial grade UI/UX with zero-latency responses.",
    icon: Sparkles,
    color: "text-blue-300",
  },
];
const techs = [
  { icon: User, label: "REACT ECOSYSTEM" },
  { icon: Crosshair, label: "SCALABLE RUNTIME" },
  { icon: Diamond, label: "CUSTOM APIS" },
  { icon: Server, label: "EDGE DATABASES" },
  { icon: Cloud, label: "CLOUD CLUSTERS" },
];
const steps = [
  { 
    label: "USER ENTERS", 
    icon: LogIn, 
    active: false, 
    iconColor: "text-[#0052D9]" // Pure Blue 
  },
  { 
    label: "LOGIC PROCESS", 
    icon: BrainCircuit, 
    active: false, 
    iconColor: "text-[#7C3AED]" // Deep Purple 
  },
  { 
    label: "CONVERTED", 
    icon: BadgeCheck, 
    active: true, 
    iconColor: "text-white" 
  },
];
const solutions = [
  { title: "Lead Capturing System", desc: "Engineered touchpoints that grab user intent instantly." },
  { title: "Automated Flow", desc: "24/7 backend processes handling your intake." },
  { title: "Business Growth Engine", desc: "Architecture designed for scale and exponential ROI." },
];
const services = [
  { icon: Monitor, title: "Custom Systems", desc: "Tailor-made software architectures built from the ground up for your specific business logic.", cta: "Configure" },
  { icon: Sparkles, title: "Frontend Magic", desc: "Immersive experiences that leverage modern frameworks to captivate and retain your visitors.", cta: "Enchant" },
  { icon: Database, title: "Backend Power", desc: "Scaling infrastructure that handles millions of requests without breaking a sweat.", cta: "Integrate" },
  { icon: ShoppingBag, title: "Ecommerce Engines", desc: "High-velocity storefronts optimized for checkout speed and average order value growth.", cta: "Sell More" },
  // { icon: Settings, title: "Automation Setup", desc: "Connect your CRM, marketing stack, and sales pipeline into a single self-operating loop.", cta: "Automate Everything" },
];
export default function WebsiteDevelopment() {
  return (
    <>


    {/*  Hero section */}
  <section className="relative overflow-hidden bg-[#E2E4E7] px-6 md:px-12 lg:px-16 pt-20 pb-32">
      {/* Background Gradient Blur */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-left">
          <div className="inline-flex items-center rounded-full bg-blue-100/50 border border-blue-200 px-4 py-1 text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-8">
            Digital Machine V2.0
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-[#2D3643] mb-6">
            This Is Not A<br />
            <span className="text-blue-600">Website.</span>
          </h1>
          
          <p className="mt-8 text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
            We engineer digital systems that <span className="text-[#2D3643]">attract, process, and convert</span> <span className="text-slate-400">users — completely automatically.</span>
          </p>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#0052D9] text-white px-8 py-4 text-sm font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
              Build My System <Zap className="w-4 h-4 fill-current" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#D9E3F7] text-[#2D3643] px-8 py-4 text-sm font-bold hover:bg-blue-100 transition-all">
              See How It Works
            </button>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="flex-1 relative w-full max-w-2xl">
          
          {/* Main Laptop Container (Tilted) */}
          <div className="relative transform rotate-[-2deg] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-[#1A1C1E] bg-[#1A1C1E]">
            <img
              src={heroLaptop} // Replace with your laptop/dashboard image
              alt="System Dashboard"
              className="w-full h-auto object-cover opacity-90"
            />
          </div>

          {/* Conversion Rate Badge (Top Right) */}
          <div className="absolute -top-6 -right-4 z-30 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-white/50">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-tighter text-slate-400 uppercase">Conversion Rate</div>
              <div className="text-xl font-black text-[#2D3643]">+124%</div>
            </div>
          </div>

          {/* Automated Engine Badge (Bottom Left) */}
          <div className="absolute -bottom-6 -left-8 z-30 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/50 min-w-[280px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">Automated Engine</span>
            </div>
            <code className="text-sm text-slate-500 font-mono block">
              while (sleep) {"{ "} 
              <span className="text-slate-800">convert();</span> 
              {" }"}
            </code>
          </div>

        </div>
      </div>
    </section>

    {/* second section  */}
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto overflow-hidden rounded-[40px] shadow-2xl flex flex-col md:flex-row">
        
        {/* Left Side: Dark Section */}
        <div className="flex-1 bg-[#0F172A] p-10 md:p-16 text-white relative">
          <div className="flex items-center gap-3 mb-12">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              What Most Websites Do
            </h2>
          </div>

          <div className="space-y-10">
            <FeatureItem 
              icon={<XCircle className="w-6 h-6 text-slate-500" />}
              title="Just Sit There"
              description="Static pages that offer no interaction or engagement."
              isDark={true}
            />
            <FeatureItem 
              icon={<XCircle className="w-6 h-6 text-slate-500" />}
              title="No Conversion Logic"
              description="Users land and leave without any clear next steps."
              isDark={true}
            />
            <FeatureItem 
              icon={<XCircle className="w-6 h-6 text-slate-500" />}
              title="Dead Traffic"
              description="Burning marketing budget on users who never convert."
              isDark={true}
            />
          </div>
        </div>

        {/* Right Side: Light Section */}
        <div className="flex-1 bg-white p-10 md:p-16 relative">
          {/* Subtle background icon */}
          <Zap className="absolute top-10 right-10 w-12 h-12 text-blue-50 opacity-10 rotate-12" />
          
          <div className="flex items-center gap-3 mb-12">
            <BadgeCheck className="w-6 h-6 text-[#0052D9]" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0052D9]">
              What We Build
            </h2>
          </div>

          <div className="space-y-10">
            <FeatureItem 
              icon={<CheckCircle2 className="w-6 h-6 text-[#0052D9]" />}
              title="Lead Capturing System"
              description="Engineered touchpoints that grab user intent instantly."
              isDark={false}
            />
            <FeatureItem 
              icon={<CheckCircle2 className="w-6 h-6 text-[#0052D9]" />}
              title="Automated Flow"
              description="24/7 backend processes handling your intake."
              isDark={false}
            />
            <FeatureItem 
              icon={<CheckCircle2 className="w-6 h-6 text-[#0052D9]" />}
              title="Business Growth Engine"
              description="Architecture designed for scale and exponential ROI."
              isDark={false}
            />
          </div>
        </div>

      </div>
    </section>


    {/* third section */}
<section className="px-6 py-24 bg-[#E2E4E7] min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#2D3643]">The Anatomy of a Machine</h2>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center group">
        {layers.map((layer, i) => {
          const Icon = layer.icon;
          const isFirst = i === 0;

          return (
            <div
              key={layer.num}
              className={`
                relative w-full bg-white/90 backdrop-blur-sm rounded-[32px] p-8 md:p-10
                flex items-center justify-between
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5
                transition-all duration-700 ease-in-out
                cursor-pointer
                
                /* --- DEFAULT STATE (UI Jaisa Subtle Blur) --- */
                /* Image ke hisab se default me sirf halka sa dhundhlapan niche wale cards pe */
                ${isFirst ? 'scale-100 z-[40] opacity-100 mb-8' : 'scale-[0.98] opacity-80 blur-[0.8px]'}
                
                /* --- GROUP HOVER (Override Default Highlight) --- */
                /* Jab mouse list pe aaye, toh default card bhi normal ho jaye */
                group-hover:scale-[0.97] group-hover:blur-[1.5px] group-hover:opacity-60 group-hover:mb-0 group-hover:mt-[-50px]
                
                /* --- ACTIVE HOVER (Focus Card) --- */
                /* Sirf active card ekdum sharp aur bada dikhega */
                hover:!scale-[1.04] hover:!blur-none hover:!opacity-100 hover:!z-[50] 
                hover:!mt-0 hover:!mb-10
                
                /* Shadow lift on hover */
                hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)]
              `}
              style={{
                marginTop: i === 0 ? '0' : '-60px',
                zIndex: layers.length - i,
              }}
            >
              <div className="flex-1">
                <div className="text-[11px] font-black tracking-widest text-blue-600 uppercase mb-2">
                  Layer {layer.num}
                </div>
                <h3 className="text-2xl font-bold text-[#2D3643]">
                  {layer.title}
                </h3>
                <p className="text-slate-500 mt-2 text-sm max-w-sm leading-relaxed">
                  {layer.desc}
                </p>
              </div>

              <div className="ml-4">
                <Icon className={`w-10 h-10 ${layer.color} opacity-70 group-hover:opacity-40 hover:!opacity-100`} strokeWidth={1.5} />
              </div>
            </div>
          );
        })}
      </div>
    </section>

{/* fouth Modular  section */}

<section className="px-6 md:px-12 lg:px-16 py-24 bg-[#F0F4FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#2D3643]">
              Modular Intelligence
            </h2>
            <p className="mt-4 text-slate-500 max-w-lg text-lg">
              Every service we provide is a component of your larger digital success machine.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#2D3643] hover:bg-slate-50 transition-all shadow-sm">
            Explore All Capabilities <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="group relative overflow-hidden rounded-[32px] bg-white p-10 flex flex-col justify-between shadow-sm border border-white transition-all hover:shadow-md">
                {/* Decorative background circle */}
                <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-slate-50 rounded-full opacity-50 transition-transform group-hover:scale-110" />
                
                <div className="relative z-10">
                  <Icon className={`w-10 h-10 ${svc.color} mb-8 text-[#0050D4]`} strokeWidth={2} />
                  <h3 className="text-2xl font-bold text-[#2D3643] mb-4">{svc.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{svc.desc}</p>
                </div>
                
                <a href="#" className={`relative z-10 inline-flex items-center gap-1 ${svc.color} font-bold text-sm mt-10 group/link text-[#0050D4]`}>
                  {svc.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 " />
                </a>
              </div>
            );
          })}

          {/* Large Automation Card spanning 2 columns */}
          <div className="md:col-span-2 rounded-[32px] bg-white p-10 flex flex-col md:flex-row gap-8 shadow-sm border border-white">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <Settings className="w-10 h-10 text-[#2D3643] mb-8" strokeWidth={2} />
                <h3 className="text-2xl font-bold text-[#2D3643] mb-4">Automation Setup</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Connect your CRM, marketing stack, and sales pipeline into a single self-operating loop.
                </p>
              </div>
              <a href="#" className="inline-flex items-center text-[#0050D4] gap-1 text-[#2D3643] font-bold text-sm mt-10 group/link">
                Automate Everything <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
            
            {/* Chip/Processor Image */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg h-full">
              <img 
                src={circuitBoard} 
                alt="Hardware processor" 
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
{/* // fifth section */}
    <section className="px-6 md:px-12 lg:px-16 py-32 bg-[#F8FAFF]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#2D3643] mb-32">
          The Velocity Pipeline
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-0">
          
          {/* Progress Line (Matching the subtle gradient in UI) */}
          <div className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 hidden md:block px-32">
            <div className="w-full h-full bg-slate-200 relative">
              {/* Active blue progress part */}
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#0052D9] to-[#7C3AED] opacity-80" />
              
              {/* The "Node" dot seen in the UI */}
              <div className="absolute top-1/2 left-[12%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0052D9] border-2 border-white shadow-sm" />
            </div>
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-8 z-10 relative">
                {/* Circle Logic */}
                <div 
                  className={`
                    w-28 h-28 rounded-full flex items-center justify-center transition-all duration-500
                    ${step.active 
                      ? 'bg-[#0052D9] text-white shadow-[0_20px_50px_rgba(0,82,217,0.3)] scale-110' 
                      : 'bg-white text-slate-700 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
                    }
                  `}
                >
                  <Icon className={`w-9 h-9 ${step.iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Text Label */}
                <span className={`
                  text-[11px] font-black tracking-[0.25em] uppercase transition-colors
                  ${step.active ? 'text-[#0052D9]' : 'text-[#2D3643] opacity-80'}
                `}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
{/* /// six section Excellence */}
  <section className="bg-[#020617] px-6 md:px-12 lg:px-16 py-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading with tight tracking and bold weight */}
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
          Hardwired Excellence
        </h2>
        {/* Subtext with specific slate color and opacity */}
        <p className="mt-6 text-slate-400/80 text-lg md:text-xl font-medium">
          The battle-tested technologies that power our machines.
        </p>

        {/* Responsive Grid/Flex layout for tech icons */}
        <div className="mt-24 flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {techs.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-6 group">
                {/* Circular background: 
                   Uses a slate-based muted color to match the subtle circles in the screenshot 
                */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#FFFFFF]/60 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-800/60 group-hover:scale-105 border border-white/5 shadow-inner">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#FFFFFF] group-hover:text-slate-300 transition-colors" strokeWidth={1.5} />
                </div>
                
                {/* Labels with wider tracking as seen in the high-fidelity design */}
                <span className="text-[11px] md:text-xs font-black text-slate-500 tracking-[0.25em] uppercase transition-colors group-hover:text-slate-400">
                  {tech.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    {/* ================= WEBSITE VS MACHINE ================= */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#dbeafe] via-[#e9d5ff] to-[#fde2e4]">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
            Website vs. Machine
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT (FADED CARD) */}
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/40 opacity-70">
            <p className="text-gray-500 mb-6">Normal Website</p>

            <div className="space-y-4">
              <div className="h-3 bg-gray-300 rounded-full w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded-full w-full"></div>
              <div className="h-3 bg-gray-300 rounded-full w-2/3"></div>
            </div>

            <div className="mt-10 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
              Image
            </div>

            <div className="mt-8 h-10 bg-gray-300 rounded-full"></div>
          </div>

          {/* RIGHT (HIGHLIGHT CARD) */}
          <div className="relative bg-[#1656c1] rounded-3xl p-8 text-white shadow-xl">
            
            {/* Badge */}
            <div className="absolute -top-3 right-6 bg-white text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
              OUR SYSTEM
            </div>

            <p className="mb-6 text-blue-100">
              High-Performance Machine
            </p>

            <div className="space-y-4">
              <div className="h-3 bg-blue-400/50 rounded-full w-2/3"></div>
              <div className="h-6 bg-blue-400/40 rounded-full w-full"></div>
              <div className="h-3 bg-blue-400/50 rounded-full w-3/4"></div>
            </div>

            {/* Gradient Box */}
            <div className="mt-8 rounded-2xl p-10 flex items-center justify-center bg-gradient-to-r from-cyan-400 to-purple-500">
              <Rocket size={36} />
            </div>

            {/* Button */}
            <button className="mt-8 w-full bg-white text-blue-600 py-3 rounded-xl font-medium hover:scale-[1.02] transition">
              Start High-Conversion Journey
            </button>
          </div>

        </div>
      </section>

      {/* ================= HERO CTA ================= */}
     <section className="relative min-h-[80vh] flex items-center justify-center py-24 px-6 overflow-hidden bg-[#000103]">
      
      {/* Perspective Grid Background - Matches the technical dark theme in the UI */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 100%)',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
        }}
      ></div>

      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-[#1F2F46]">
          We Build Systems That Work <br />
          <span className="text-blue-600 block mt-2">
            Even When You Sleep.
          </span>
        </h1>

        {/* Process Flow - Clean and minimalist text based on the UI */}
        <p className="mt-10 text-slate-500 font-medium text-sm md:text-lg tracking-widest uppercase flex items-center justify-center gap-3 md:gap-6">
          Traffic comes 
          <span className="text-blue-500/50">→</span>
          System handles 
          <span className="text-blue-500/50">→</span> 
          Leads convert
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
          
          {/* Primary Action - Styled like the UI's 'Build My System' button */}
          <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-lg shadow-blue-900/20 active:scale-95">
            Start Now
          </button>

          {/* Secondary Action - White pill button based on UI */}
          <button className="w-full sm:w-auto bg-white text-[#000103] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-100 hover:scale-[1.02] transition-all active:scale-95">
            Get Strategy Call
          </button>

        </div>

      </div>
    </section>
    </>
  );
}


function FeatureItem({ icon, title, description, isDark }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className={`text-lg font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
          {title}
        </h3>
        <p className={`mt-1 text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}