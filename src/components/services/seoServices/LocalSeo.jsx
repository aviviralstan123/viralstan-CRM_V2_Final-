import React from 'react';
import { Search, MapPin, Phone, Compass, CheckCircle,Store, Target, MessageSquare, ListChecks, Map } from 'lucide-react';
import clientProfile from "../../../assets/client-profile.png"
import Restaurant from "../../../assets/seoImage/Restaurant.png"
import Clinic from "../../../assets/seoImage/Clinic.png"
import RealState from "../../../assets/seoImage/Real-Estate.png"
import Local from "../../../assets/seoImage/Local.png"



// Badge Component for the floating UI elements
const Badge = ({ icon, text, className }) => (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl shadow-lg animate-bounce-slow ${className}`}>
        <div className="bg-blue-600 p-1.5 rounded-lg">
            {icon}
        </div>
        <span className="font-bold text-sm whitespace-nowrap">{text}</span>
    </div>
);

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 px-6 overflow-hidden">

            {/* 0.15 Opacity Blurred Gradient Layer (The "Magic" Background) */}
            <div
                className="absolute inset-0 pointer-events-none z-0"

            />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Top Tag */}
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
                    Dominate Local Search
                </span>

                {/* Heading - Space Grotesk */}
                <h1 className="text-4xl md:text-7xl font-extrabold text-[#1F2F46] tracking-tight leading-[1.1] mb-6 font-display">
                    Rank #1 in Your City & Get More <br className="hidden md:block" />
                    <span className="text-blue-600"> Local Customers</span>
                </h1>

                {/* Subtext - Manrope, 20px, 32.5px leading */}
                <p className="max-w-2xl mx-auto text-[#434655] font-sans font-normal text-[20px] leading-[32.5px] mb-10 tracking-normal">
                    We help your business appear on Google Maps and local searches so
                    nearby customers find and choose you first.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95">
                        Get Free Local SEO Audit
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#CBDEFF] hover:bg-gray-50 text-[#1F2F46] font-bold rounded-xl border border-gray-200 shadow-sm transition-all active:scale-95">
                        Start Local SEO
                    </button>
                </div>

                {/* Device Section */}
                <div className="relative max-w-[320px] mx-auto">
                    {/* Floating Badges - Only visible on Large Screens */}
                    <div className="hidden lg:block">
                        <Badge
                            icon={<MapPin size={16} className="text-white" />}
                            text="Top Local Rankings"
                            className="absolute -left-70 top-20 bg-white text-black"
                        />
                        <Badge
                            icon={<Phone size={16} className="text-white" />}
                            text="More Calls & Leads"
                            className="absolute -left-65 top-35 bg-white text-black"
                        />
                        <Badge
                            icon={<Compass size={16} className="text-white" />}
                            text="Maps Optimized"
                            className="absolute -right-62 top-75 bg-white text-black"
                        />
                        <Badge
                            icon={<CheckCircle size={16} className="text-white" />}
                            text="Local SEO Experts"
                            className="absolute -right-54 top-90 bg-white text-black"
                        />
                    </div>

                    {/* Device Frame */}
                    <div className="relative p-3 bg-[#1e293b] rounded-[3rem] border-[6px] border-[#334155] shadow-2xl">
                        <div className="overflow-hidden bg-white rounded-[2.2rem] h-[500px] w-full flex flex-col">
                            {/* Google Header */}
                            <div className="px-4 py-3 border-b flex items-center justify-between bg-white">
                                <span className="font-bold text-lg">
                                    <span className="text-blue-500">G</span>
                                    <span className="text-red-500">o</span>
                                    <span className="text-yellow-500">o</span>
                                    <span className="text-blue-500">g</span>
                                    <span className="text-green-500">l</span>
                                    <span className="text-red-500">e</span>
                                </span>
                                <Search size={18} className="text-gray-400" />
                            </div>

                            {/* Content Placeholder */}
                            <div className="flex-1 bg-gray-50 p-4">
                                <div className="w-full h-32 bg-white rounded-xl shadow-sm mb-4 border border-gray-100 p-3">
                                    <div className="w-2/3 h-3 bg-gray-200 rounded-full mb-3" />
                                    <div className="w-full h-2 bg-gray-100 rounded-full mb-2" />
                                    <div className="w-1/2 h-2 bg-gray-100 rounded-full" />
                                </div>
                                <div className="w-full h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-3">
                                    <div className="w-2/3 h-3 bg-gray-200 rounded-full mb-3" />
                                    <div className="w-full h-2 bg-gray-100 rounded-full mb-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
  return (
    <section className=" py-20 px-6 bg-[#EBF1FF]">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] text-center mb-12">
          What is Local SEO?
        </h2>

        {/* Info Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white/20 text-center relative overflow-hidden group hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition-shadow duration-500">
          
          {/* Content */}
          <p className="text-[#475569] text-lg md:text-2xl leading-relaxed md:leading-[1.6] font-medium tracking-tight [font-family:Inter,sans-serif]">
            Local SEO is a search engine optimization strategy that helps your business 
            be more visible in local search results on Google. When potential customers 
            search for services <span className="text-blue-600 font-bold">"near me"</span> or specifically look on <span className="text-blue-600 font-bold">Google Maps</span>, Local 
            SEO ensures your business is what they see first.
          </p>

          {/* Decorative subtle gradient for depth */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};


const Features = () => {
  const capabilities = [
    {
      icon: <Store size={24} />,
      title: 'Google My Business optimization',
      description: 'Complete profile enhancement to ensure maximum visibility in the Knowledge Graph.',
    },
    {
      icon: <Target size={24} />,
      title: 'Local keyword targeting',
      description: 'Pinpoint precise search terms that nearby customers are using right now.',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Reviews & ratings improvement',
      description: 'Strategies to boost positive feedback and manage your online reputation effectively.',
    },
    {
      icon: <ListChecks size={24} />,
      title: 'Local citations',
      description: 'Consistent NAP (Name, Address, Phone) data across all major directories.',
    },
    {
      icon: <Map size={24} />,
      title: 'Map ranking improvement',
      description: 'Climbing the "Local 3-Pack" to dominate the primary real estate of search results.',
    },
  ];

  return (
    <section className="bg-[#F4F6FF] py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-[#1e293b] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Core Capabilities
          </h2>
          <p className="text-[#64748b] text-lg font-medium">
            We handle every aspect of your local digital footprint.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Icon Container - Matching Blue Square Style */}
              <div className="w-14 h-14 bg-[#EFF6FF] rounded-2xl flex items-center justify-center text-[#2563eb] mb-8 group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[#1e293b] text-2xl font-bold mb-4 leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#475569] text-[17px] leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


const Roadmap = () => {
  const steps = [
    { number: 1, title: 'Business Audit', description: 'Evaluating your current footprint.' },
    { number: 2, title: 'Keyword Research', description: 'Finding high-intent local terms.' },
    { number: 3, title: 'Optimization', description: 'On-page and technical fixes.' },
    { number: 4, title: 'Listing Setup', description: 'Claiming & securing directories.' },
    { number: 5, title: 'Ranking Growth', description: 'Continuous monitoring & scaling.' },
  ];

  return (
    <section className="bg-[#F4F6FF] py-24 px-6 md:px-12 selection:bg-blue-600/20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-[#1e293b] text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-20 leading-tight">
          A Proven Roadmap to Growth
        </h2>

        {/* --- Main 1-4 Row (Hidden on Mobile) --- */}
        <div className="hidden md:block relative">
          
          {/* Decorative Dashed Line */}
          {/* <div className="absolute top-[40px] left-[10%] right-[10%] border-t-2 border-dashed border-[#e2e8f0] z-0"></div> */}

          <div className="grid grid-cols-4 gap-12 relative z-10">
            {steps.slice(0, 4).map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                
                {/* Number Badge */}
                <div className="w-16 h-16 bg-[#FFFFFF] rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-8 shadow-inner">
                  {step.number}
                </div>
                
                {/* Text Content */}
                <h3 className="text-[#1e293b] text-2xl font-bold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[#64748b] text-[17px] leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Step 5 Centered Row (Hidden on Mobile) --- */}
        <div className="hidden md:flex justify-center mt-24 relative z-10">
          <div className="max-w-sm flex flex-col items-center text-center">
             {/* Decorative line connecting step 4 to step 5 */}
             {/* <div className="absolute top-[-50px] w-0.5 h-12 bg-[#e2e8f0]"></div> */}
            
             {/* Number Badge */}
            <div className="w-16 h-16 bg-white border-2 border-[#e2e8f0] rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-8 shadow-inner">
              {steps[4].number}
            </div>
            
            {/* Text Content */}
            <h3 className="text-[#1e293b] text-2xl font-bold mb-3 tracking-tight">{steps[4].title}</h3>
            <p className="text-[#64748b] text-[17px] leading-relaxed font-medium">{steps[4].description}</p>
          </div>
        </div>

        {/* --- Mobile View Stacked List --- */}
        <div className="md:hidden space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Number Badge (Slightly larger for mobile visibility) */}
              <div className="w-20 h-20 bg-white border-2 border-[#e2e8f0] rounded-full flex items-center justify-center text-4xl font-bold text-blue-600 mb-8 shadow-lg">
                {step.number}
              </div>
              
              {/* Text Content */}
              <h3 className="text-[#1e293b] text-3xl font-extrabold mb-4 tracking-tight leading-tight">{step.title}</h3>
              <p className="text-[#64748b] text-lg font-semibold max-w-sm px-4 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



const ResultsSection = () => {
  const results = [
    {
      value: "300%",
      label: "More local leads",
      desc: "Qualified traffic that converts into actual sales.",
      bgColor: "bg-[#0050D4]",
      isLarge: true 
    },
    {
      value: "2.5x",
      label: "Higher visibility",
      desc: "Consistent presence in the Near Me map search.",
      bgColor: "bg-[#4647D3]"
    },
    {
      value: "80%",
      label: "Increased calls",
      desc: "Direct engagement from Google profile buttons.",
      bgColor: "bg-[#702AE1]"
    },
    {
      value: "Steady",
      label: "Business growth",
      desc: "Sustainable revenue through organic discovery.",
      bgColor: "bg-[#1F2F46]"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 flex flex-col items-center gap-12 md:gap-16 mx-auto w-full">
      
      {/* Section Title */}
      <h2 className="text-[#1e293b] text-3xl md:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-center max-w-4xl">
        Real Outcomes for Real Businesses
      </h2>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row justify-center items-stretch gap-6 2xl:gap-10 w-full max-w-[1280px]">
        {results.map((item, index) => (
          <div 
            key={index} 
            className={`
              ${item.bgColor} 
              p-8 
              rounded-[24px] 
              text-white 
              flex flex-col 
              justify-between
              w-full
              lg:w-[286px]
              2xl:w-[320px]
              min-h-[220px]
              2xl:min-h-[260px]
              shadow-lg 
              transition-all 
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            `}
          >
            <div>
              <div className={`
                ${item.isLarge ? 'text-[40px] 2xl:text-[52px]' : 'text-[32px] 2xl:text-[44px]'} 
                font-extrabold mb-3 tracking-tighter leading-none
              `}>
                {item.value}
              </div>
              <h3 className="text-lg 2xl:text-xl font-bold mb-3 leading-tight">
                {item.label}
              </h3>
            </div>
            
            <p className="text-white/80 text-sm 2xl:text-base leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};




const VideoSection = () => (
    <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2rem] overflow-hidden aspect-video relative group border border-white/10">
            <img
                src={clientProfile}
                alt="CEO"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                </button>
            </div>
        </div>
        <p className="mt-8 text-gray-500">"VIRALSTAN literally put us on the map. Our phones haven't stopped ringing since we hit the top 3 spots."</p>
        <p className='text-[#1F2F46] font-bold'>— Sarah Jenkins, Local Clinic Owner</p>
    </section>
);



const IndustrySection = () => {
  const industries = [
    { 
      name: "Restaurants", 
      image: Restaurant, 
      isFirst: true 
    },
    { 
      name: "Clinics", 
      image: Clinic 
    },
    { 
      name: "Real Estate", 
      image: RealState 
    },
    { 
      name: "Local Businesses", 
      image: Local 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-[1280px] w-full text-center">
        
        {/* Section Heading */}
        <h2 className="text-[#334155] text-3xl md:text-5xl font-bold mb-16 tracking-tight leading-tight">
          Tailored for Your Industry
        </h2>

        {/* Industry Items Container - Mobile pe grid aur desktop pe flex row */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-[120px]">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center group cursor-pointer transition-all w-[140px] md:w-auto ${item.isFirst ? 'lg:scale-110' : ''}`}
            >
              
              {/* Circular Image Container */}
              <div className="w-22 h-22 md:w-[120px] md:h-[120px] rounded-full bg-white border border-gray-100 p-2 mb-6 md:mb-8 flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 md:w-[100px] md:h-[100px] object-contain rounded-full"
                />
              </div>

              {/* Industry Name */}
              <span className="text-[#1F2F46] text-sm md:text-lg font-bold tracking-wider uppercase text-center transition-colors group-hover:text-blue-600">
                {item.name}
              </span>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};





const FinalCTA = () => {
  return (
    <section className=" py-24 px-6 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="text-[#1e293b] text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Start Ranking in Your City Today
        </h2>

        {/* Subtext */}
        <p className="text-[#64748b] text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          Stop losing customers to competitors who are easier to find. Let's get your business the visibility it deserves.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0052cc] text-white text-lg font-bold rounded-xl shadow-[0_10px_25px_-5px_rgba(0,82,204,0.4)] hover:bg-[#0041a3] hover:scale-[1.02] transition-all duration-300">
            Get Free Audit
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#1e293b] text-lg font-bold rounded-xl border-2 border-[#e2e8f0] hover:border-blue-200 hover:bg-slate-50 transition-all duration-300">
            Talk to Expert
          </button>
        </div>

      </div>
    </section>
  );
};

// --- Main Page ---

export default function LocalSeo() {
    return (
        // Main container black hi rahega aur content ko hold karega
        <div className="relative min-h-screen  text-white font-sans selection:bg-blue-500 selection:text-white">
            
            <div 
                className="fixed inset-0 pointer-events-none z-0" 
                style={{
                    background: `
                        radial-gradient(141.42% 141.42% at 0% 0%, #7B9CFF 0%, rgba(123, 156, 255, 0) 50%), 
                        radial-gradient(141.42% 141.42% at 100% 100%, #C0A0FF 0%, rgba(192, 160, 255, 0) 50%)
                    `,
                    opacity: 0.15,
                    filter: 'blur(50px)',
                }}
            />

        

            {/* 3. Actual Content Layer */}
            <div className="relative z-10">
                <HeroSection />

           <AboutSection />

                <Features />
                <Roadmap />
                <ResultsSection />
                <VideoSection />
                <IndustrySection />
                <FinalCTA />
            </div>
        </div>
    );
}