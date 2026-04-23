import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MapPin,
    FileText,
    Settings,
    Search,
    ExternalLink,
    ChevronRight,
    TrendingUp,
    Globe,
    Zap,
    CheckCircle,
    Menu,
    X, Award, Link2, Users, Play
} from 'lucide-react';


// --- Sub-Components ---



const SeoHero = () => {
    return (
        <section className="bg-mesh-blue min-h-screen flex items-center py-16 px-6 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* --- LEFT CONTENT --- */}
                <div className="order-2 lg:order-1 space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-[1.1] tracking-tight">
                            SEO That <br />
                            <span className="text-slate-500">Actually</span>{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                                Drives Growth
                            </span>
                        </h1>

                        <p className="font-sans text-[20px] leading-[32.5px] font-normal tracking-normal align-middle text-[#434655] max-w-xl">
                            We don't just rank websites. We build complete SEO systems
                            that bring traffic, leads, and long-term sustainable growth for your business.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                            Get Free SEO Audit
                        </button>
                        <button className="px-8 py-4 bg-white hover:bg-slate-100 text-black font-bold rounded-2xl transition-all active:scale-95">
                            Explore SEO Services
                        </button>
                    </div>
                </div>

                {/* --- RIGHT IMAGE / MOCKUP --- */}
                <div className="order-1 lg:order-2 relative">
                    {/* Main Card Container */}
                    <div className="relative z-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm overflow-hidden group">
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-700">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1683288537199-3a102f1a3959?q=80&w=435"
                                alt="SEO Dashboard"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                        </div>

                        {/* Floating Card 1: Top Right */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 md:top-8 md:right-8 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20 border border-slate-200"
                        >
                            <div className="bg-blue-100 p-2 rounded-xl">
                                <TrendingUp className="text-blue-600 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Success Rate</p>
                                <p className="text-2xl font-black text-slate-900">98.5%</p>
                            </div>
                        </motion.div>

                        {/* Floating Card 2: Bottom Left */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-4 md:bottom-12 md:-left-12 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-20 border border-slate-200"
                        >
                            <div className="bg-amber-100 p-2 rounded-xl">
                                <Award className="text-amber-600 w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Rankings</p>
                                <p className="text-xl font-black text-slate-900">#1 Spot Achieved</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background Decorative Blur */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -z-0" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] -z-0" />
                </div>

            </div>
        </section>
    );
};

const StrategicApproach = () => {
    return (
        <section className="bg-blue-50 py-16 px-6 md:py-24 lg:py-32">
            <div className="max-w-6xl mx-auto text-center flex flex-col items-center">

                {/* Badge - Strategic Approach */}
                <div className="inline-block px-6 py-2 mb-8 rounded-full bg-blue-50 border border-blue-100">
                    <span className="text-blue-600 text-sm md:text-base font-bold tracking-wider uppercase">
                        Strategic Approach
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight max-w-5xl">
                    SEO is not one service — it’s a system of strategies working together to grow your business.
                </h2>

                {/* Description Paragraph */}
                <p className="text-slate-500 text-lg md:text-2xl font-medium max-w-4xl leading-relaxed">
                    From technical fixes to high-impact content and authority-building backlinks —
                    everything works together to dominate the search landscape.
                </p>

            </div>
        </section>
    );
};

// const ServiceCard = ({ icon: Icon, title, desc }) => (
//   <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full group">
//     <div>
//       <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
//         <Icon size={24} />
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
//       <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
//     </div>
//     <button className="mt-8 text-blue-600 font-semibold flex items-center gap-2 text-sm">
//       Read More <ChevronRight size={16} />
//     </button>
//   </div>
// );

// const ServicesGrid = () => {
//   const services = [
//     { icon: MapPin, title: "Local SEO", desc: "Dominate your local market and appearing in map packs when it matters most." },
//     { icon: FileText, title: "On-Page SEO", desc: "Optimizing your content, HTML, and images to ensure search engines love your site." },
//     { icon: Settings, title: "Technical SEO", desc: "Solving crawl errors, speed issues, and architecture problems that hold you back." },
//     { icon: Search, title: "Keyword Research", desc: "Finding high-intent opportunities that your competitors are missing out on." },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Our Expertise</span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Complete Search Ecosystem</h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((s, i) => <ServiceCard key={i} {...s} />)}
//         </div>
//       </div>
//     </section>
//   );
// };



const SEOServicesGrid = () => {
    const services = [
        {
            title: "Local SEO",
            desc: "Dominate local search results and maps to drive foot traffic and local leads to your business locations.",
            icon: <MapPin className="w-6 h-6 text-blue-600" />,
            color: "bg-blue-50"
        },
        {
            title: "On-Page SEO",
            desc: "Optimization of your website content and structure to ensure search engines understand your value clearly.",
            icon: <FileText className="w-6 h-6 text-indigo-600" />,
            color: "bg-indigo-50"
        },
        {
            title: "Technical SEO",
            desc: "Fixing crawl errors, improving site speed, and ensuring a healthy foundation for long-term growth.",
            icon: <Settings className="w-6 h-6 text-purple-600" />,
            color: "bg-purple-50"
        },
        {
            title: "Off-Page SEO",
            desc: "Building authority through high-quality backlinks and digital PR strategies that search engines trust.",
            icon: <Link2 className="w-6 h-6 text-cyan-600" />,
            color: "bg-cyan-50"
        }
    ];

    return (
        <section className="bg-slate-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* First 4 Cards */}
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
                            <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                                {service.desc}
                            </p>
                            <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                                Learn More <ChevronRight size={18} />
                            </button>
                        </div>
                    ))}

                    {/* Last Large Card (Outsourced SEO Squad) */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-8 group">
                        <div className="bg-blue-50 w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center">
                            <Users className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Outsourced SEO Squad</h3>
                            <p className="text-slate-500 leading-relaxed mb-6 max-w-2xl">
                                Partner with us as your white-label or dedicated SEO department. We handle everything from execution to reporting.
                            </p>
                            <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                                Partner with us <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


const GrowthCycle = () => {
    const steps = [
        {
            number: "01",
            title: "Research",
            desc: "Deep keyword & competitor analysis to find high-ROI opportunities.",
            color: "border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        },
        {
            number: "02",
            title: "Optimization",
            desc: "Fine-tuning technical aspects and existing content architecture.",
            color: "border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        },
        {
            number: "03",
            title: "Content",
            desc: "Creating high-value assets that answer user intent perfectly.",
            color: "border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        },
        {
            number: "04",
            title: "Authority",
            desc: "Acquiring powerful mentions and links from industry leaders.",
            color: "border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
        },
        {
            number: "05",
            title: "Growth",
            desc: "Continuous monitoring, testing, and scaling for sustained ROI.",
            color: "border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
        }
    ];

    return (
        <section className="bg-white text-white py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-800 mb-20 tracking-tight">
                    The Growth Cycle
                </h2>

                <div className="relative">
                    {/* Horizontal Line (Visible only on Desktop) */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-slate-800 z-0" />

                    {/* Vertical Line (Visible only on Mobile) */}
                    <div className="md:hidden absolute top-0 left-10 w-[1px] h-full bg-slate-800 z-0" />

                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 md:w-1/5 text-left md:text-center group ">

                                {/* Number Circle */}
                                <div className={`
                  flex-shrink-0 w-20 h-20 rounded-full bg-white text-black border-4 ${step.color} 
                  flex items-center justify-center text-2xl font-bold transition-transform duration-300 group-hover:scale-110
                  md:mb-8
                `}>
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="pt-2 md:pt-0">
                                    <h3 className="text-xl font-bold text-slate-400 mb-3 group-hover:text-slate-500 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed max-w-[200px]">
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





const FeatureSection = () => {
    const cards = [
        {
            icon: "↑",
            iconColor: "text-blue-600",
            title: "Higher\nRankings",
            desc: "Claim the top spots for keywords that actually convert.",
        },
        {
            icon: "👥",
            iconColor: "text-indigo-600",
            title: "Organic\nTraffic",
            desc: "Sustainable influx of visitors who are looking for you.",
        },
        {
            icon: "🎯",
            iconColor: "text-purple-600",
            title: "Lead\nGeneration",
            desc: "Turn search traffic into qualified business leads.",
        },
        {
            icon: "📈",
            iconColor: "text-pink-500",
            title: "Long-term\nGrowth",
            desc: "Compounding results that last long after the campaign.",
        },
    ];

    return (
        <div className="bg-[#F1F4F9] min-h-screen w-full flex items-center justify-center p-6 md:p-12">
            {/* Grid is better for 4 cards to ensure they don't squash on small laptops */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">

                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-[2.5rem] p-8 md:p-10 
                       transition-all duration-500 ease-out
                       hover:-translate-y-3
                       shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                       hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]
                       flex flex-col h-full min-h-[350px]"
                    >
                        {/* Icon */}
                        <div className={`text-5xl mb-8 ${card.iconColor} font-bold transition-transform group-hover:scale-110`}>
                            {card.icon}
                        </div>

                        {/* Title - Using whitespace-pre-line to handle the \n correctly */}
                        <h3 className="text-zinc-900 text-[2.2rem] font-bold leading-[1.1] mb-6 tracking-tight whitespace-pre-line">
                            {card.title}
                        </h3>

                        {/* Description - Removed mt-auto to ensure it stays visible */}
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            {card.desc}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
};


const TestimonialVideo = () => {
    return (
        <section className="bg-[#F1F4F9] py-20 px-4 flex flex-col items-center">
            <div className="max-w-6xl w-full relative group flex flex-col items-center"> {/* Added flex-col & items-center here */}

                {/* Main Video Container */}
                <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] aspect-video md:aspect-[21/10] bg-gray-900 shadow-2xl w-full">

                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1573495611823-5397efa4fac7?q=80&w=869"
                        alt="Jonathan Vance CEO"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Content Layer */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        {/* Play Button */}
                        <button className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white mb-8 transition-all hover:scale-110 hover:bg-white/30">
                            <Play size={32} fill="currentColor" className="ml-1" />
                        </button>

                        {/* Testimonial Text */}
                        <h2 className="text-2xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-8">
                            See how we scaled Acme Corp's <br className="hidden md:block" />
                            organic traffic by <span className="text-blue-400">450% in 6 months.</span>
                        </h2>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm md:text-base leading-none">Jonathan Vance</p>
                                <p className="text-gray-300 text-xs md:text-sm">CEO, Acme Dynamics</p>
                            </div>
                        </div>
                    </div>

                    {/* Curved Bottom SVG */}
                    <div className="absolute -bottom-1 left-0 w-full">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <path d="M0 120H1440V58.3301C1440 58.3301 1133.5 0 720 0C306.5 0 0 58.3301 0 58.3301V120Z" fill="#f8fafc" />
                        </svg>
                    </div>
                </div>

                {/* --- FIXED BUTTON SECTION --- */}
                <button className="mt-12 mx-auto flex items-center gap-2 text-gray-500 uppercase tracking-widest text-xs font-bold hover:text-blue-600 transition-colors group/link">
                    Watch More Case Studies
                    <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};


const FeaturesSection = () => {
    const features = [
        {
            title: "Data-driven strategy",
            description: "We don’t guess. We analyze millions of data points to discover exactly what it takes for your specific domain to win."
        },
        {
            title: "Transparent reporting",
            description: "Full access to our live dashboards. You see what we see, from keyword movements to precise ROI calculations."
        },
        {
            title: "Proven ranking methods",
            description: "No black-hat shortcuts. We follow sustainable, white-hat methods that protect your brand and ensure long-term stability."
        },
        {
            title: "Real business growth",
            description: "Rankings are vanity; revenue is sanity. Our success is measured by the growth of your bottom line, not just search volume."
        }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Subheading/Label */}
                <div className="flex justify-center mb-16">
                    <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                        The Viralstan Edge
                    </span>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-20">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col space-y-4">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



const ExpertiseIndustries = () => {
    const industries = [
        { name: "Real Estate", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop" },
        { name: "Healthcare", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop" },
        { name: "E-commerce", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" },
        { name: "Education", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop" },
        { name: "Finance", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
        { name: "Local Businesses", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" },
    ];

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-500 text-center mb-16 tracking-tight">
                    Expertise Across Industries
                </h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="relative group h-64 md:h-72 overflow-hidden rounded-[2rem] cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={item.img}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-blue-900/40 transition-colors duration-500" />

                            {/* Centered Text Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-lg">
                                    {item.name}
                                </h3>
                            </div>

                            {/* Subtle Bottom Caption for "Local Businesses" style match */}
                            <div className="absolute bottom-6 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-blue-300 text-xs uppercase tracking-widest font-bold">
                                    Growth Targeted
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};





const CTA = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-purple-700 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -mr-32 -mt-32"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Join 200+ brands scaling their organic traffic with our proven framework.
                Start with a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:shadow-lg transition">Get Started Now</button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Learn More</button>
            </div>
        </div>
    </section>
);

// --- Main Method / Container ---

export default function SeoServices() {
    return (
        <div className="min-h-screen bg-black font-sans selection:bg-blue-500 selection:text-white">


            <main>
                <SeoHero />

                <StrategicApproach />

                {/* <ServicesGrid /> */}
                <SEOServicesGrid />


                <GrowthCycle />
                <FeatureSection />

                <TestimonialVideo />

                <FeaturesSection />

                <ExpertiseIndustries />



                <CTA />
            </main>


        </div>
    );
}