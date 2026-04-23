import { useState } from "react";
import {
  Heart, MessageCircle, Share2, Search,

  Check, ChevronDown,
  FileText, Users, Calendar, MessageSquare,
  Rocket, Pen, Link2, Activity,
  BarChart3, Target, Paintbrush, Play,
  Zap,
  PenTool,
  Send
} from "lucide-react";
import phoneContent from "../../assets/servicesWebD/smohero.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";
import ImageSvg from "../../assets/servicesWebD/smobrand.svg";


// import content1 from "../../assets/servicesWebD/Smoserv1.jpg";
// import content2 from "../../assets/servicesWebD/Smoserv2.jpg";
// import content3 from "../../assets/servicesWebD/Smoserv3.jpg";
import smophone from "../../assets/servicesWebD/smophone.png"
import { FaX } from "react-icons/fa6";
// import content4 from "../../assets/seoImage/Smoserv4.jpg"

const stepHow = [
  {
    icon: BarChart3,
    title: "Account Audit",
    desc: "We analyze your current performance, competitors, and target audience persona.",
    color: "bg-[#1d4ed8]" // Deep Blue
  },
  {
    icon: Target,
    title: "Strategy Planning",
    desc: "Development of a custom content pillars and growth roadmap for the next 90 days.",
    color: "bg-[#4338ca]" // Indigo
  },
  {
    icon: PenTool,
    title: "Content Creation",
    desc: "Our creative team produces all the necessary assets (videos, graphics, copy).",
    color: "bg-[#7c3aed]" // Purple
  },
  {
    icon: Send,
    title: "Publishing & Optimization",
    desc: "Content goes live with continuous tracking and strategy adjustments based on data.",
    color: "bg-[#0891b2]" // Teal/Cyan
  }
];
const steps = [
  { num: "01", title: "Attract", desc: "Viral reels and top-of-funnel content to reach new eyes.", color: "bg-primary text-primary-foreground" },
  { num: "02", title: "Engage", desc: "Building trust through stories, carousels, and DM interaction.", color: "bg-teal text-teal-foreground" },
  { num: "03", title: "Retarget", desc: "Dynamic ads focused on users who showed high intent.", color: "bg-navy text-navy-foreground" },
  { num: "04", title: "Convert", desc: "Strategically placed CTAs that turn followers into revenue.", color: "bg-teal text-teal-foreground" },
];

const cards = [
  { icon: Rocket, title: "Ad Campaign Setup", desc: "Comprehensive targeting and pixel integration." },
  { icon: Pen, title: "Creative Ads", desc: "High-converting video and image assets for every platform." },
  { icon: Link2, title: "Retargeting System", desc: "Bring back visitors who didn't convert the first time." },
  { icon: Activity, title: "Performance Opt.", desc: "Daily monitoring and A/B testing for better ROI." },
];

const platforms = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    bg: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 text-white",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    bg: "bg-[#1877F2] text-white",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    bg: "bg-[#0A66C2] text-white",
  },
  {
    name: "Twitter",
    icon: <FaX />,
    bg: "bg-[#0F172A] text-white",
  },
  {
    name: "Pinterest",
    icon: <FaPinterest />,
    bg: "bg-[#E60023] text-white font-bold",
  },
];


const faqs = [
  {
    question: "What is SMO?",
    answer:
      "Social Media Optimization is the process of enhancing your brand's presence on social media platforms to drive traffic, build community, and increase sales.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Organic results typically begin to show momentum within 3 months, while paid ads can show initial results in just days.",
  },
  {
    question: "Do you manage ads also?",
    answer:
      "Yes, we provide full-service ad management including strategy, creative development, and performance monitoring.",
  },
];

const SmoServices = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-mesh-blue flex items-center">

        {/* Background Decorative Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 w-full">

          {/* LEFT CONTENT */}
          <div className="max-w-[700px] text-center lg:text-left">
            <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] 2xl:text-[90px] font-display font-extrabold leading-[1.05] tracking-tight text-[#1F2F46]">
              Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Social Media</span> <br className="hidden lg:block" />
              Into a Growth Engine
            </h1>

            <p className="mt-8 text-[#4C5C75] text-lg md:text-xl max-w-[550px] mx-auto lg:mx-0 leading-relaxed font-sans">
              We don't just post content. We build a complete system that attracts,
              engages, and converts your audience into customers.
            </p>

            <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start">
              <button className="rounded-2xl px-10 py-4 text-sm md:text-base font-bold text-white shadow-2xl shadow-blue-500/20 bg-gradient-to-r from-blue-700 to-indigo-600 hover:scale-105 transition-all">
                Start SMO
              </button>

              <button className="rounded-2xl px-10 py-4 text-sm md:text-base font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all">
                Get Free Strategy
              </button>
            </div>
          </div>

          {/* RIGHT SIDE (Visual Mockup) */}
          {/* Alignment fixed for responsive scaling */}
          <div className="relative flex justify-center items-center scale-90 md:scale-100 mt-16 lg:mt-0">

            {/* Main Phone Container */}
            {/* Alignment fixed to make sure floaters are relative to phone, size slightly adjusted for image content */}
            <div className="relative w-[320px] md:w-[380px] lg:w-[350px]">

              {/* --- UPDATED PHONE FRAME START --- */}
              {/* Added provided phone mockup image to exactly fit the frame slot while maintaining floaters */}
              <div className="h-[600px] md:h-[700px] relative rounded-[3.5rem] overflow-hidden">
                {/* 1. Base Layer (Shadow + BG) */}
                <div className="absolute inset-0  rounded-[3.5rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] z-0" />

                {/* 2. Main Content Image ( image_6.png ) */}
                <img
                  src={smophone} /* Yahan apni image ka asli path Dalein */
                  alt="Uele App Interface Mockup"
                  className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-10 transform scale-[0.98]"
                />
              </div>
              {/* --- UPDATED PHONE FRAME END --- */}

              {/* Likes Badge (Glassmorphism) - Position adjusted for new phone scale */}
              <div className="absolute -right-8 md:-right-16 top-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-4 flex items-center gap-4 w-48 transition-transform hover:-translate-y-2 z-30">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Heart size={20} className="text-red-500 fill-red-500" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">12.4k Likes</p>
                  <p className="text-[10px] text-slate-400">Last 24 hours</p>
                </div>
              </div>

              {/* Comments Badge (Glassmorphism) - Position adjusted for new phone scale */}
              <div className="absolute -left-8 md:-left-16 bottom-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-4 flex items-center gap-4 w-48 transition-transform hover:translate-y-2 z-30">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">842 Comments</p>
                  <p className="text-[10px] text-slate-400">Trending now</p>
                </div>
              </div>

              {/* Share floating action */}
              <div className="absolute right-4 bottom-48 w-12 h-12 rounded-full bg-blue-600 border-4 border-[#050505] flex items-center justify-center shadow-xl cursor-pointer hover:bg-blue-500 transition-colors z-30">
                <Share2 size={18} className="text-white" />
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Curve (Wave Effect) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]" fill="#ffffff">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,42.47V0Z"></path>
          </svg>
        </div>

      </section>

      <section className="bg-[#EBF1FF] py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading with responsive font sizing */}
          <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-black text-[#1a202c] tracking-tight leading-tight">
            What Is Social Media Optimization (SMO)?
          </h2>

          {/* Descriptive Paragraph with optimized leading and max-width for readability */}
          <p className="mt-8 text-slate-500 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium max-w-4xl mx-auto">
            Social Media Optimization is the process of building your brand presence across platforms like
            Instagram, Facebook, LinkedIn, and more. It includes content creation, posting strategy, engagement,
            and growth systems that turn followers into customers.
          </p>

          {/* Custom Pill Badge with Glassmorphism/Border effect */}
          <div className="mt-12 inline-flex items-center justify-center">
            <div className="bg-[#dbeafe] border border-blue-200 rounded-full px-8 py-4 md:px-12 md:py-6 shadow-sm">
              <p className="text-[#2563eb] text-base md:text-xl font-bold tracking-wide">
                Not just posting — <span className="underline decoration-2 underline-offset-4">complete growth system</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#EEF2F6]">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-display font-extrabold text-[#1F2F46] mb-16">
            Platforms We Manage
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

            {platforms.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-[28px] h-[170px] flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition"
              >
                {/* Icon Box */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl shadow-md ${item.bg}`}
                >
                  {item.icon}
                </div>

                {/* Platform Name */}
                <p className="mt-4 font-sans font-bold text-[#1F2F46]">
                  {item.name}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <OrganicSMOServices />

      <section className="bg-mesh-blue py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-100 tracking-tight mb-4">
                Paid Social Media Ads
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium">
                Supercharge your growth with high-ROI ad campaigns tailored for scale.
              </p>
            </div>

            <button className="w-fit px-10 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white text-lg font-bold shadow-lg shadow-blue-900/20 hover:scale-105 transition-transform">
              View Packages
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-[2.5rem] p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 border border-slate-100 shadow-sm"
              >
                <div className="text-[#2563eb]">
                  <Icon size={40} strokeWidth={2.5} />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#1a2b4b] mb-3 leading-tight">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faff] py-24 px-6">
        <h2 className="text-5xl font-black text-center mb-24 tracking-tight">Our Social Media Growth System</h2>
        <div className="max-w-7xl mx-auto relative flex flex-wrap justify-center gap-12 md:gap-0">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-blue-100" />
          {[
            { n: "01", t: "Attract", c: "border-blue-200 text-blue-600" },
            { n: "02", t: "Engage", c: "border-purple-200 text-purple-600" },
            { n: "03", t: "Retarget", c: "border-indigo-200 text-indigo-600" },
            { n: "04", t: "Convert", c: "border-teal-200 text-teal-600" }
          ].map((s, i) => (
            <div key={i} className="flex-1 min-w-[200px] flex flex-col items-center relative z-10">
              <div className={`w-20 h-20 rounded-full bg-white border-4 ${s.c} flex items-center justify-center text-2xl font-black shadow-xl mb-6`}>
                {s.n}
              </div>
              <h4 className="text-2xl font-black mb-2">{s.t}</h4>
              <p className="text-slate-400 text-sm text-center px-4 font-medium">Viral reels and funnels to reach new eyes.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="methodology" className="bg-white py-24 px-6 overflow-hidden">
        {/* Section Heading matching UI */}
        <h2 className="text-4xl md:text-5xl font-[900] text-[#1a2b4b] text-center mb-24 tracking-tight">
          How We Work
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line - Centered with Icons */}
          <div className="absolute left-[24px] md:left-[24px] top-6 bottom-6 w-[1.5px] bg-slate-100" />

          <div className="space-y-16">
            {stepHow.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="flex items-start gap-10 md:gap-14 relative group">
                {/* Icon Circle with Specific UI Colors */}
                <div className={`w-12 h-12 rounded-full ${color} text-white flex items-center justify-center shrink-0 shadow-lg relative z-10 transition-transform group-hover:scale-110`}>
                  <Icon size={22} strokeWidth={2.5} />
                </div>

                {/* Text Content with UI Spacing */}
                <div className="pt-1">
                  <h3 className="text-2xl font-black text-[#1a2b4b] mb-2 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full bg-[#f5f7fb]">

        {/* ================= WHY TRUST SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={ImageSvg}
              alt=""
              className="rounded-3xl w-full h-[500px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-[-30px] left-6 bg-white rounded-2xl shadow-xl p-6 w-[220px]">
              <h3 className="text-3xl font-bold text-blue-600">100+</h3>
              <p className="font-semibold text-gray-800 text-sm">
                Happy Brands
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Trusting VIRALSTAN for their daily digital growth and social strategy.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-8">
              Why Brands Trust VIRALSTAN for SMO
            </h2>

            <div className="space-y-6">

              {/* Item */}
              <div className="flex gap-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Data-driven strategies
                  </p>
                  <p className="text-sm text-gray-500">
                    We don't guess. We use advanced analytics to fuel every piece of content.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Creative content approach
                  </p>
                  <p className="text-sm text-gray-500">
                    Stand out from the noise with visuals and storytelling that captivate.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Consistent growth system
                  </p>
                  <p className="text-sm text-gray-500">
                    Stable month-on-month improvement instead of one-hit viral wonders.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= RESULTS SECTION ================= */}
        <section className="bg-[#22344d] py-16 px-4">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-semibold text-white">
              Our Results
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-[#2b3f5c] rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-400">412%</h3>
              <p className="text-sm text-gray-300 mt-1">
                Engagement Rate
              </p>
            </div>

            <div className="bg-[#2b3f5c] rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-purple-400">85k+</h3>
              <p className="text-sm text-gray-300 mt-1">
                Follower Growth
              </p>
            </div>

            <div className="bg-[#2b3f5c] rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">12M</h3>
              <p className="text-sm text-gray-300 mt-1">
                Lead Generation
              </p>
            </div>

            <div className="bg-[#2b3f5c] rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-red-400">6.4x</h3>
              <p className="text-sm text-gray-300 mt-1">
                Average ROI
              </p>
            </div>

          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">
              SMO Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl px-6 py-5 shadow-sm cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-800 text-sm">
                    {item.question}
                  </p>
                  <ChevronDown
                    size={18}
                    className={`transition ${open === i ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {open === i && (
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default SmoServices;





const OrganicSMOServices = () => {
  return (
    <section id="services" className="bg-white py-24 px-6 overflow-hidden">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#1F2F46] text-center mb-20 tracking-tighter">
        Organic SMO Services
      </h2>

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* 1. Content Creation - Large Card */}
        <div className="md:col-span-2 bg-[#EBF1FF] rounded-[2.5rem] p-10 border border-slate-50 flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-full bg-[#dbeafe] flex items-center justify-center mb-10">
              <FileText size={28} className="text-[#2563eb]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-extrabold text-[#1a2b4b] mb-6 tracking-tight">Content Creation</h3>
            <p className="text-lg text-slate-500 font-sans  leading-relaxed max-w-md mb-10">
              High-quality reels, static posts, and carousel content designed to stop the scroll and drive engagement.
            </p>
          </div>

          {/* Unsplash Images Placeholder */}
          <div className="flex flex-wrap gap-4">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=300"
              alt="Social Media 1"
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300"
              alt="Social Media 2"
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=300"
              alt="Social Media 3"
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* 2. Profile Optimization */}
        <div className="bg-[#EBF1FF] rounded-[2.5rem] p-10 border border-slate-50">
          <div className="w-14 h-14 rounded-full bg-[#f0e7ff] flex items-center justify-center mb-10">
            <Users size={28} className="text-[#8b5cf6]" />
          </div>
          <h3 className="text-3xl font-display font-extrabold text-[#1a2b4b] mb-6 tracking-tight">Profile Optimization</h3>
          <p className="text-lg text-slate-500 font-sans leading-relaxed">
            We turn your bio into a conversion machine with strategic keywords and compelling CTA links.
          </p>
        </div>

        {/* 3. Posting Strategy */}
        <div className="bg-[#fcfaff] rounded-[2.5rem] p-10 border border-slate-50">
          <div className="w-14 h-14 rounded-full bg-[#f0e7ff] flex items-center justify-center mb-10">
            <Calendar size={28} className="text-[#8b5cf6]" />
          </div>
          <h3 className="text-3xl font-display font-extrabold text-[#1a2b4b] mb-6 tracking-tight">Posting Strategy</h3>
          <p className="text-lg text-slate-500 font-sans  leading-relaxed">
            Scientific scheduling based on your audience's peak activity times for maximum reach.
          </p>
        </div>

        {/* 4. Engagement & Community - Combined with Chat Mockup */}
        <div className="md:col-span-2 bg-[#eff6ff] rounded-[2.5rem] p-10 border border-slate-50 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <div className="w-14 h-14 rounded-full bg-[#dbeafe] flex items-center justify-center mb-10">
              <MessageSquare size={28} className="text-[#2563eb]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-extrabold text-[#1a2b4b] mb-6 tracking-tight">Engagement & Community</h3>
            <p className="text-lg text-slate-500 font-sans leading-relaxed">
              We don't just post; we talk. Responding to comments, engaging with top fans, and building a loyal community.
            </p>
          </div>

          {/* Chat Mockup Styling - High Fidelity */}
          <div className="w-full md:w-72 space-y-4 bg-white/50 p-6 rounded-[2rem] backdrop-blur-sm">
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-5 py-3 shadow-sm">
                <p className="text-sm font-semibold text-slate-600">How do I start growing?</p>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <div className="bg-blue-600 rounded-2xl rounded-br-sm px-5 py-3 shadow-md">
                <p className="text-sm font-bold text-white">Let's schedule a call!</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black italic text-xs border border-blue-200">
                Q
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};