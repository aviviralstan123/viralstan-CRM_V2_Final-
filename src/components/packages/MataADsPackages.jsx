// import React from "react";
// import "../packages/MataADsPackages.css";
// import { FaBullhorn, FaPiggyBank, FaAward, FaChartLine, FaBullseye, FaStar, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

// import heroBg from "../../assets/MataADsPackagesImg/metahero.png"
// const img1 = "/icons.svg";
// const img2 = "/icons.svg";
// const img3 = "/icons.svg";
// const mock = "/icons.svg";
// const analytics = "/icons.svg";
// const avatar = "/icons.svg";
// const avatar1 = "/icons.svg";
// const avatar2 = "/icons.svg";
// const steps = [
//   {
//     title: "Free Audit",
//     desc: "We dive deep into your current account metrics.",
//   },
//   {
//     title: "Strategy",
//     desc: "Custom roadmap designed for your ROI targets.",
//   },
//   {
//     title: "Setup",
//     desc: "Flawless technical execution & tracking.",
//   },
//   {
//     title: "Launch",
//     desc: "Going live with optimized, data-backed ads.",
//   },
//   {
//     title: "Scale",
//     desc: "Pushing budgets while maintaining efficiency.",
//   },
// ];
// function MataADsPackages() {
//   return (
//     <div className="pageMata">

//       {/* NAVBAR */}
//       {/* <div className="navbar">
//         <div className="logo">VIRALSTAN</div>

//         <div className="nav-links">
//           <a className="active">Performance</a>
//           <a>Features</a>
//           <a>Case Studies</a>
//           <a>Pricing</a>
//         </div>

//         <div className="nav-right">
//           <span>Login</span>
//           <button className="btn-primary">Start Growth</button>
//         </div>
//       </div> */}

//       {/* HERO */}
//       <section className="heroMata">
//         <img src={heroBg} className="hero-bgMata" />
//         <div className="hero-overlay"></div>

//         <div className="hero-contentMata">
//           <span className="tagMata">NEXT-GEN AD ENGINE</span>

//           <h1>
//             Scale Your Business with <br />
//             <span>High-Performance</span> Ads
//           </h1>

//           <p>
//             Stop guessing, start growing. We engineer data-driven Meta and
//             Google Ads campaigns that generate consistent leads, sales,
//             and explosive revenue.
//           </p>

//           <div className="hero-buttonsMata">
//             <button className="btn-gradientMata">Start Your Ads Today 🚀</button>
//             <button className="btn-lightMata"><FaWhatsapp className="whatsappMata"/> WhatsApp</button>
//           </div>
//         </div>

//         {/* FLOAT CARDS */}
//         <div className="floating-cardMata topMata">+245% ROAS</div>
//         <div className="floating-cardMata midMata">Total Leads 12,482</div>
//         <div className="floating-cardMata bottomMata">Avg CTR 4.82%</div>
//       </section>

//       {/* ANALYTICS */}
//        <section className="analyticsMata">

//       <h2>Live Performance Engine</h2>
//       <p className="subMata">
//         Real-time data synchronization across all channels
//       </p>

//       <div className="analytics-wrapperMata">

//         {/* LEFT CHART */}
//         <div className="chart-cardMata">
//           <div className="chart-headerMata">
//             <h4>Conversion Volume</h4>

//             <div className="legendMata">
//               <span><i className="dotMata blue"></i>Meta</span>
//               <span><i className="dotMata purple"></i>Google</span>
//             </div>
//           </div>

//           {/* FAKE BAR CHART */}
//           <div className="barsMata">
//             <div className="barMata gray"></div>
//             <div className="barMata blue"></div>
//             <div className="barMata purple"></div>
//             <div className="barMata gray small"></div>
//             <div className="barMata blue tall"></div>
//             <div className="barMata purple"></div>
//             <div className="barMata blue"></div>
//           </div>
//         </div>

//         {/* RIGHT STATS */}
//         <div className="statsMata">

//           <div className="statMata">
//             <div>
//               <p>Active Campaigns</p>
//               <h3>24</h3>
//             </div>
//             <FaBullhorn className="iconMata blue" />
//           </div>

//           <div className="statMata">
//             <div>
//               <p>Cost Per Lead</p>
//               <h3>₹42.00</h3>
//             </div>
//             <FaPiggyBank className="iconMata purple" />
//           </div>

//           <div className="statMata">
//             <div>
//               <p>Client Satisfaction</p>
//               <h3 className="purple-textMata">99.2%</h3>
//             </div>
//             <FaAward className="iconMata purple" />
//           </div>

//         </div>
//       </div>

//     </section>

//       {/* PROBLEM SECTION */}
//       <section className="problemMata">

//       {/* LEFT */}
//       <div className="problem-leftMata">

//         <h2>
//           Most businesses lose money on ads. We turn ads into{" "}
//           <span>profit engines.</span>
//         </h2>

//         <div className="problem-itemMata">
//           <div className="iconMata red">
//             <FaChartLine />
//           </div>
//           <div>
//             <h4>Stop Wasteful Spending</h4>
//             <p>
//               We eliminate "guess-work" by auditing your current pixel data and
//               identifying leaks in your funnel.
//             </p>
//           </div>
//         </div>

//         <div className="problem-itemMata">
//           <div className="iconMata blue">
//             <FaBullseye />
//           </div>
//           <div>
//             <h4>Precision Targeting</h4>
//             <p>
//               Using advanced algorithmic matching to find customers who are
//               ready to buy today, not tomorrow.
//             </p>
//           </div>
//         </div>

//       </div>

//       {/* RIGHT */}
//       <div className="problem-rightMata">

//         {/* FADED CARD */}
//         <div className="bad-cardMata">
//           <span>"BAD ADS"</span>
//         </div>

//         {/* HIGHLIGHT CARD */}
//         <div className="good-cardMata">
//           <div className="card-headerMata">
//             <span>VIRALSTAN OPTIMIZED</span>

//             <FaStar />
//           </div>

//           <div className="card-bodyMata">
//             <div className="mock-imgMata"><img src={mock} className="mockLandMata"/></div>
//             <div className="roi">5.2X ROI</div>
//           </div>
//         </div>

//       </div>

//     </section>

//       {/* SERVICES */}
//       <section className="servicesMata">
//         <h2>Comprehensive Ad Management</h2>
//         <p>We handle everything so you can scale faster.</p>

//         <div className="service-gridMata">
//           <div className="service-cardMata">
//             <img src={img1} />
//             <h3>Campaign Setup</h3>
//           </div>

//           <div className="service-cardMata">
//             <img src={img2} />
//             <h3>Optimization</h3>
//           </div>

//           <div className="service-cardMata">
//             <img src={img3} />
//             <h3>Creative Strategy</h3>
//           </div>
//         </div>
//       </section>

//       <section className="pricingMata">

//       <div className="pricing-headerMata">
//         <div className="badgesMata">
//           <span>LOWER COST PER LEAD</span>
//           <span>HIGHER ROI</span>
//           <span>SCALABLE CAMPAIGNS</span>
//         </div>

//         <h2>
//           Performance-Driven <span>Ad Management</span>
//         </h2>

//         <p>
//           Transparent pricing models designed to scale your business across Meta
//           and Google. Pay for performance, not just presence.
//         </p>
//       </div>

//       <div className="pricing-cardsMata">

//         {/* SILVER */}
//         <div className="cardpricingMata">
//           <h3>Silver Plan</h3>
//           <p className="subpricingMata">Best for small businesses starting ads</p>

//           <div className="boxMata">Up to ₹1,00,000</div>
//           <div className="boxMata blue">25%</div>
//           <div className="boxMata">₹10,000</div>

//           <ul>
//             <li><FaCheckCircle /> Complete campaign setup</li>
//             <li><FaCheckCircle /> Audience targeting strategy</li>
//             <li><FaCheckCircle /> Conversion tracking setup</li>
//             <li><FaCheckCircle /> Campaign monitoring</li>
//             <li><FaCheckCircle /> Monthly performance report</li>
//             <li><FaCheckCircle /> 1 ad creative</li>
//           </ul>

//           <button className="btn-outlineMata">Start My Campaign</button>
//         </div>

//         {/* GOLD */}
//         <div className="cardpricingMata active">
//           <div className="badgepricingMata">MOST POPULAR</div>

//           <h3>Gold Plan</h3>
//           <p className="subpricingMata">Perfect for scaling brands</p>

//           <div className="boxMata">Up to ₹5,00,000</div>
//           <div className="boxMata highlightMata">20%</div>
//           <div className="boxMata">₹10,000</div>

//           <ul>
//             <li><FaCheckCircle /> Complete campaign setup</li>
//             <li><FaCheckCircle /> Advanced audience targeting</li>
//             <li><FaCheckCircle /> Funnel strategy</li>
//             <li><FaCheckCircle /> Weekly optimization</li>
//             <li><FaCheckCircle /> Conversion tracking</li>
//             <li><FaCheckCircle /> Detailed reports</li>
//             <li><FaCheckCircle /> 3 ad creatives per month</li>
//           </ul>

//           <button className="btn-gradientMata">Scale My Ads</button>
//         </div>

//         {/* PLATINUM */}
//         <div className="cardpricingMata">
//           <h3>Platinum Plan</h3>
//           <p className="subpricingMata">For aggressive scaling & performance</p>

//           <div className="boxMata">Unlimited</div>
//           <div className="boxMata purple">15%</div>
//           <div className="boxMata">₹10,000</div>

//           <ul>
//             <li><FaCheckCircle /> Full ads strategy</li>
//             <li><FaCheckCircle /> Funnel optimization</li>
//             <li><FaCheckCircle /> Advanced targeting</li>
//             <li><FaCheckCircle /> Daily optimization</li>
//             <li><FaCheckCircle /> Conversion tracking</li>
//             <li><FaCheckCircle /> Weekly calls</li>
//             <li><FaCheckCircle /> 5 ad creatives</li>
//           </ul>

//           <button className="btn-outlineMata purple-borderMata">
//             Launch Premium Campaign
//           </button>
//         </div>

//       </div>
//     </section>

//     <section className="analytics-heroMata">

//       <div className="hero-leftMata">
//         <h2>Real-time Analytics for Every Campaign</h2>

//         <p>
//           Beyond management, we provide a sophisticated dashboard for our
//           Platinum and Gold partners to track every rupee spent and every lead
//           generated.
//         </p>

//         <div className="statsanalMata">
//           <div className="stat-boxMata">
//             <span>AVG. ROAS</span>
//             <h3>4.8x</h3>
//           </div>

//           <div className="stat-boxMata">
//             <span>CLIENT RETENTION</span>
//             <h3>92%</h3>
//           </div>
//         </div>
//       </div>

//       <div className="hero-rightMata">
        
//         <div className="dashboard-cardMata">
           
//           <div className="barsanalMata">
//              <img src={analytics} alt="analytics" />
          
//           </div>
//         </div>
//       </div>

//     </section>
//     <section className="stepsMata">

//       <h2>Our Scale-Up Protocol</h2>
//       <p>From audit to aggressive scaling in 5 steps</p>

//       <div className="steps-rowMata">
//         {steps.map((item, i) => (
//           <div className="stepMata" key={i}>
//             <div className={`circleMata ${i === 0 ? "active" : ""}`}>
//               {i + 1}
//             </div>

//             <div className="cardMata">
//               <h4>{item.title}</h4>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//     </section>

//     <div className="stats-barMata">
//         <div>
//           <h2>5X</h2>
//           <p>MORE LEADS</p>
//         </div>
//         <div>
//           <h2>300%</h2>
//           <p>AVERAGE ROI</p>
//         </div>
//         <div>
//           <h2>10X</h2>
//           <p>MONTHLY TRAFFIC</p>
//         </div>
//       </div>

//        {/* MAIN SECTION */}
//       <section className="auditMata">

//         {/* LEFT */}
//         <div className="audit-leftMata">
//           <h2>Claim Your Free Performance Audit</h2>

//           <p>
//             No strings attached. We'll analyze your current campaigns and show
//             you exactly where you're losing money and how much more you could
//             be making.
//           </p>

//           <div className="usersMata">
//             <div className="avatarsMata">
//               <img src={avatar} alt="avatar" />
//               <img src={avatar1} alt="avatar1" />
//               <img src={avatar2} alt="avatar2" />
//             </div>
//             <span>Joined by 250+ growing brands</span>
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="audit-formMata">

//           <div className="rowMata">
//             <input placeholder="John Doe" />
//             <input placeholder="+91 98765 43210" />
//           </div>

//           <input placeholder="Acme Corp" />

//           <select>
//             <option>Below ₹50,000</option>
//             <option>₹50,000 - ₹2,00,000</option>
//             <option>Above ₹2,00,000</option>
//           </select>

//           <button>Get My Free Audit</button>
//         </div>

//       </section>

//        {/* FINAL CTA */}
//       <section className="final-ctaMata">
//         <h2>Start Running Profitable <br/>Ads Today</h2>

//         <div className="cta-buttonsMata">
//           <button className="primaryMata">Start Ads Now</button>
//           <button className="secondaryMata">WhatsApp Us</button>
//           <a href="#">Get Strategy First</a>
//         </div>
//       </section>

//     </div>
//   );
// }

// export default MataADsPackages;



import heroBg from "../../assets/MataADsPackagesImg/metahero.png"

const MataADsPackages = () => {
  return (
    <div className="min-h-screen bg-[#F6F9FE] font-['Manrope'] text-[#181C20] selection:bg-blue-100">
      <HeroSection />
      <PerformanceEngine />
      <ProfitEngines />
      <AdManagement />
<PricingHeader />
      <PricingSection />
    </div>
  );
};



// 1. HERO SECTION
const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen w-full flex items-center pt-24 pb-20 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1. LAYERED OVERLAYS: Matching the lighting in the image */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full opacity-50" />
      <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full opacity-50" />

      <div className="container mx-auto px-6 lg:px-16 max-w-[1440px] 2xl:max-w-[2000px] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-8 lg:pr-12">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <span className="text-[11px] font-black tracking-[0.25em] text-blue-400 uppercase">
                Next-Gen Ad Engine
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] lg:text-[76px] 2xl:text-[100px] font-extrabold text-white leading-[1.05] tracking-tight">
              Scale Your <br />
              Business with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]">
                High-Performance Ads
              </span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl font-medium leading-relaxed">
              Stop guessing, start growing. We engineer data-driven Meta and Google Ads 
              campaigns that generate consistent leads, sales, and explosive revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#3169E1] to-[#8C52FF] hover:brightness-110 text-white font-bold rounded-2xl shadow-2xl shadow-blue-900/40 transition-all hover:scale-[1.03] active:scale-95 text-lg">
                Start Your Ads Today <span className="text-2xl">🚀</span>
              </button>
              
              <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-[#121214] font-bold rounded-2xl transition-all shadow-xl text-lg">
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                WhatsApp
              </button>
            </div>
          </div>

          {/* RIGHT VISUALS COLUMN (Floating Cards) */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[550px]">
            
            {/* 1. ROAS PERFORMANCE CARD (Top Right) */}
            <div className="absolute top-0 right-0 w-[85%] sm:w-[420px] glass-panel p-6 sm:p-8 rotate-[-3deg] animate-float shadow-2xl border-white/20">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-[12px] font-bold text-blue-400 uppercase tracking-widest">ROAS Performance</span>
                  <span className="text-sm font-black text-[#22C55E]">+245%</span>
               </div>
               <div className="h-32 bg-gradient-to-t from-blue-500/15 to-transparent rounded-2xl border border-white/10 relative overflow-hidden">
                  <svg className="absolute bottom-0 w-full h-full opacity-30" viewBox="0 0 400 120">
                    <path d="M0 100 Q 100 80, 200 40 T 400 20 L 400 120 L 0 120 Z" fill="url(#grad)" />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#3B82F6', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'transparent', stopOpacity:0}} />
                      </linearGradient>
                    </defs>
                  </svg>
               </div>
            </div>

            {/* 2. TOTAL LEADS CARD (Center-Left) */}
            <div className="absolute top-[35%] left-0 w-[240px] sm:w-[320px] glass-panel p-5 sm:p-7 z-20 animate-float-delayed shadow-2xl border-white/30">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                    <UsersIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Leads</p>
                    <p className="text-3xl font-black text-white tracking-tighter">12,482</p>
                  </div>
               </div>
            </div>

            {/* 3. AVG. CTR CARD (Bottom Right) */}
            <div className="absolute bottom-10 right-4 w-[240px] sm:w-[300px] glass-panel p-6 rotate-[2deg] animate-float shadow-2xl">
               <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Avg. CTR</p>
                    <p className="text-2xl font-bold text-white">4.82%</p>
                  </div>
                  <div className="h-1.5 w-24 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] shadow-[0_0_15px_#6366f1]" />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Icons
const WhatsAppIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const UsersIcon = (props) => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

// 2. LIVE PERFORMANCE SECTION (Bento Style)
const PerformanceEngine = () => {
  const metrics = [
    { label: "Active Campaigns", value: "24", icon: <CampaignIcon /> },
    { label: "Cost Per Lead", value: "₹42.00", icon: <PiggyBankIcon /> },
    { label: "Client Satisfaction", value: "99.2%", icon: <VerifyIcon /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F9FE]">
      <div className="container mx-auto px-6 max-w-[1440px]">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#181C20] mb-4">
            Live Performance Engine
          </h2>
          <p className="text-gray-500 font-medium md:text-lg">
            Real-time data synchronization across all channels
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Chart Card (Conversion Volume) */}
          <div className="lg:col-span-8 bg-white rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-100 h-full">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-lg font-bold text-[#181C20]">Conversion Volume</h3>
              <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0055D4]" />
                  <span className="text-[#0055D4]">Meta</span>
                </div>
                <div className="flex items-center gap-2 text-[#6366F1]">
                  <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                  <span>Google</span>
                </div>
              </div>
            </div>

            {/* Custom Bar Chart Visual */}
            <div className="flex items-end justify-around h-48 md:h-64 gap-2 sm:gap-4 px-2">
              <Bar height="30%" color="bg-[#E2E8F0]" />
              <Bar height="65%" color="bg-[#0055D4]" />
              <Bar height="45%" color="bg-[#6366F1]" />
              <Bar height="25%" color="bg-[#E2E8F0]" />
              <Bar height="85%" color="bg-[#0055D4]" />
              <Bar height="55%" color="bg-[#6366F1]" />
              <Bar height="70%" color="bg-[#0055D4]" />
            </div>
          </div>

          {/* Right Metrics Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {metrics.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-gray-100 flex justify-between items-center group hover:border-blue-200 transition-colors"
              >
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-[#181C20]">
                    {item.value}
                  </p>
                </div>
                <div className="text-blue-600 bg-blue-50 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-components for UI Cleanliness
const Bar = ({ height, color }) => (
  <div 
    style={{ height }} 
    className={`w-full max-w-[50px] ${color} rounded-t-xl transition-all duration-1000 hover:brightness-110`}
  />
);

const CampaignIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const PiggyBankIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const VerifyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);



const ProfitEngines = () => {
  return (
    <section className="py-20 md:py-32  text-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT: TEXT & FEATURES */}
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1.1] tracking-tight">
              Most businesses lose money on ads. We turn ads into <span className="text-[#004AC6] underline decoration-blue-500/30 font-display font-extrabold underline-offset-8">profit engines.</span>
            </h2>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-manrope font-bold mb-2">Stop Wasteful Spending</h4>
                  <p className="text-[#434655] font-manrope  leading-relaxed max-w-md">
                    We eliminate "guess-work" by auditing your current pixel data and identifying leaks in your funnel.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-manrope font-bold mb-2">Precision Targeting</h4>
                  <p className="text-[#434655] font-manrope  leading-relaxed max-w-md">
                    Using advanced algorithmic matching to find customers who are ready to buy today, not tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: VISUAL COMPARISON */}
          <div className="relative flex flex-col sm:flex-row gap-6 items-center justify-center">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[120px] rounded-full" />

            {/* Bad Ads Card (Problem) */}
            <div className="w-full max-w-[320px] aspect-[4/5] bg-[#FFFFFF]/50 border border-white/10 rounded-[40px] p-8 backdrop-blur-sm opacity-50 scale-90 sm:rotate-[-6deg] transition-transform hover:rotate-0">
               <span className="text-[10px] font-black text-red-500 tracking-[0.2em] uppercase mb-4 block">"Bad Ads"</span>
               <div className="space-y-3">
                 <div className="h-2 w-3/4 bg-[#C3C6D7]/50 rounded-full" />
                 <div className="h-2 w-full bg-[#C3C6D7]/50 rounded-full" />
                 <div className="h-32 w-full bg-[#C3C6D7]/40 rounded-2xl border border-white/5 mt-6" />
               </div>
            </div>

            {/* Optimized Card (Solution) */}
            <div className="w-full max-w-[350px] aspect-[4/5] bg-white border border-blue-200 rounded-[40px] p-8 shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] z-10 sm:rotate-[4deg] transition-transform hover:rotate-0">
               <div className="flex justify-between items-center mb-6">
                 <span className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase">Viralstan Optimized</span>
                 <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 </div>
               </div>
               
               <div className="h-[180px] w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl mb-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                  {/* Floating Mockup Text */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-1.5 w-1/3 bg-blue-500 rounded-full mb-2" />
                    <div className="h-3 w-3/4 bg-white rounded-full" />
                  </div>
               </div>

               <div className="flex justify-between items-center pt-2">
                 <div className="h-10 w-24 bg-blue-600 rounded-full" />
                 <span className="text-2xl font-black text-[#181C20] tracking-tighter">5.2X ROI</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// 3. PRICING SECTION (Meta Ads Packages)
// const PricingSection = () => {
//   const plans = [
//     { name: 'Starter', price: '$997', color: '#004AC6', features: ['Up to $5k Spend', 'Basic Audit', 'Weekly Reports'] },
//     { name: 'Gold Plan', price: '$2,497', color: '#4648D4', popular: true, features: ['Up to $20k Spend', 'Full Strategy', 'Daily Optimization'] },
//     { name: 'Premium', price: 'Custom', color: '#6A1EDB', features: ['Unlimited Spend', 'Creative Studio', 'Dedicated Manager'] }
//   ];

//   return (
//     <section className="py-32 bg-white">
//       <div className="container mx-auto px-6 max-w-[2000px]">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-6xl font-extrabold mb-6 font-['Plus_Jakarta_Sans']">Meta Ads Packages</h2>
//           <p className="text-xl text-gray-500">Transparent pricing for explosive growth</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {plans.map((plan, i) => (
//             <div key={i} className={`p-10 rounded-[32px] border transition-all hover:shadow-2xl ${plan.popular ? 'border-blue-600 ring-4 ring-blue-50 shadow-xl scale-105' : 'border-gray-100'}`}>
//               <div className="flex justify-between items-center mb-8">
//                 <h3 className="text-2xl font-bold">{plan.name}</h3>
//                 {plan.popular && <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase font-bold">Most Popular</span>}
//               </div>
//               <div className="mb-8">
//                 <span className="text-5xl font-black">{plan.price}</span>
//                 <span className="text-gray-400 font-medium"> /month</span>
//               </div>
//               <ul className="space-y-4 mb-10">
//                 {plan.features.map((feat, idx) => (
//                   <li key={idx} className="flex items-center gap-3 text-gray-600 font-medium">
//                     <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">✓</div>
//                     {feat}
//                   </li>
//                 ))}
//               </ul>
//               <button className="w-full py-4 rounded-2xl font-bold border-2 transition-colors hover:bg-gray-900 hover:text-white border-gray-900">
//                 Choose {plan.name}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



const AdManagement = () => {
  const managementServices = [
    {
      title: "Campaign Setup",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Representative image
      features: ["Pixel & API Tracking", "Audience Research", "Funnel Integration"]
    },
    {
      title: "Optimization",
      bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      features: ["Daily Budget Tuning", "A/B Testing", "Retargeting Matrix"]
    },
    {
      title: "Creative Strategy",
      bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      features: ["Ad Copywriting", "Visual Production", "UGC Frameworks"]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1440px] 2xl:max-w-[1800px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[32px] md:text-[56px] font-black text-[#181C20] tracking-tight mb-4">
            Comprehensive Ad Management
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            We handle the technical heavy lifting so you can focus on building your brand.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] md:h-[550px] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image with Dark Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-200">
                      <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-white font-bold text-sm uppercase tracking-[0.2em] group-hover:gap-4 transition-all border-b-2 border-blue-500 pb-1 w-fit">
                  Learn More
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingHeader = () => {
  const badges = [
    { label: "Lower Cost Per Lead", icon: "📉", color: "text-blue-600 bg-[#F1F4F9]" },
    { label: "Higher ROI", icon: "📈", color: "text-indigo-600 bg-[#F1F4F9]" },
    { label: "Scalable Campaigns", icon: "🚀", color: "text-[#6A1EDB] bg-[#F1F4F9]" },
  ];

  return (
    <section className="pt-24 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px] flex flex-col items-center text-center">
        
        {/* Responsive Badge Container */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-100 bg-[#F1F4F9] shadow-sm transition-transform hover:scale-105 ${badge.color}`}
            >
              <span className="text-sm">{badge.icon}</span>
              <span className="text-[11px] md:text-xs font-manrope  font-bold uppercase tracking-wider">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Hero Typography */}
        <div className="max-w-5xl">
          <h2 className="text-[42px] sm:text-[64px] lg:text-[84px] font-black leading-[0.95] tracking-tighter text-[#181C20] mb-8">
            Performance–Driven <span className="text-[#6366F1]">Ad</span> <br className="hidden md:block" />
            <span className="text-[#6366F1]">Management</span>
          </h2>
          
          <p className="text-[#434655] text-lg md:text-2xl font-medium max-w-3xl mx-auto font-manrope  size-18px ">
            Transparent pricing models designed to scale your business across Meta and Google. Pay 
            for performance, not just presence.
          </p>
        </div>

      </div>
    </section>
  );
};

const plans = [
  {
    name: "Silver Plan",
    desc: "Best for small businesses starting ads",
    spend: "Up to ₹1,00,000",
    fee: "25%",
    setup: "₹10,000",
    btn: "Start My Campaign",
    highlight: false,
    features: [
      "Complete campaign setup",
      "Audience targeting strategy",
      "Conversion tracking setup",
      "Campaign monitoring",
      "Monthly performance report",
      "1 ad creative",
    ],
  },
  {
    name: "Gold Plan",
    desc: "Perfect for scaling brands",
    spend: "Up to ₹5,00,000",
    fee: "20%",
    setup: "₹10,000",
    btn: "Scale My Ads",
    highlight: true,
    features: [
      "Complete campaign setup",
      "Advanced audience targeting",
      "Funnel strategy",
      "Weekly optimization",
      "Conversion tracking",
      "Detailed performance reports",
      "3 ad creatives per month",
    ],
  },
  {
    name: "Platinum Plan",
    desc: "For aggressive scaling & performance",
    spend: "Unlimited",
    fee: "15%",
    setup: "₹10,000",
    btn: "Launch Premium Campaign",
    highlight: false,
    features: [
      "Full ads strategy",
      "Funnel optimization",
      "Advanced targeting",
      "Daily campaign optimization",
      "Conversion tracking & analytics",
      "Weekly performance calls",
      "5 high-converting ad creatives",
    ],
  },
];

 function PricingSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#F6F9FE]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            
            <div
              key={index}
              className={`p-[2px] rounded-[32px] transition-all duration-500
              ${
                plan.highlight
                  ? "bg-[linear-gradient(135deg,#004AC6,#4648D4,#6A1EDB)] scale-[1.02] lg:scale-105"
                  : ""
              }`}
            >
              <div className="relative bg-white rounded-[30px] p-6 sm:p-8 h-full flex flex-col shadow-lg">

                {plan.highlight && (
                  <div className="absolute right-6 top-6 text-[10px] px-3 py-1 rounded-full text-white font-manrope font-[900] bg-gradient-to-r from-blue-600 to-purple-600 shadow">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#181C20]">
                  {plan.name}
                </h3>

                <p className="text-[#434655] font-manrope font-medium text-sm mt-1 mb-6">
                  {plan.desc}
                </p>

                <div className="space-y-4 mb-8">

                  <div className="bg-gray-100 rounded-xl p-4 sm:p-5">
                    <p className="text-xs text-gray-500 uppercase">
                      Monthly Ad Spend
                    </p>
                    <p className="text-lg font-bold font-manrope text-[#181C20]">
                      {plan.spend}
                    </p>
                  </div>

                  <div
                    className={`rounded-xl p-4 sm:p-5 ${
                      plan.highlight
                        ? "border border-blue-400"
                        : "bg-gray-100"
                    }`}
                  >
                    <p className="text-xs text-gray-500 uppercase">
                      Agency Management Fee
                    </p>
                    <p className="text-3xl font-bold text-blue-600">
                      {plan.fee}
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4 sm:p-5">
                    <p className="text-xs text-gray-500 uppercase">
                      One-time Setup Fee
                    </p>
                    <p className="text-lg font-semibold">
                      {plan.setup}
                    </p>
                  </div>

                </div>

                <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 sm:py-4 rounded-xl font-semibold transition-all
                  ${
                    plan.highlight
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                      : "border border-blue-500 text-blue-600"
                  }`}
                >
                  {plan.btn}
                </button>

              </div>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default MataADsPackages;