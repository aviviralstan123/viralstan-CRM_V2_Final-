// import heroPortrait from "../../assets/servicesWebD/herowebsite.png";
// import phoneMockup from "../../assets/servicesWebD/website1.png";
// import { Star, CheckCircle , Palette, Monitor, ShoppingCart, Rocket, 
//     RefreshCw, Layers,Zap, Search, Shield, Users, BarChart3, FileText  } from "lucide-react";
// import healthcareImg from "../../assets/servicesWebD/website2.png";
// import realestateImg from "../../assets/servicesWebD/website3.png";
// import ecommerceImg from "../../assets/servicesWebD/website4.png";
// import techImg from "../../assets/servicesWebD/website5.png";
// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// import { Settings, MapPin } from "lucide-react";
// import trustTeam from "../../assets/servicesWebD/website6.png";

// const points = [
//   { icon: Settings, title: "Decade of Experience", desc: "10+ years of building digital ecosystems that actually move the needle for businesses." },
//   { icon: MapPin, title: "Custom Approach", desc: "We don't use templates. Every design is started from a blank canvas to match your brand DNA." },
//   { icon: Users, title: "Partner, Not Vendor", desc: "We integrate with your team to understand your vision and deliver long-term support." },
// ];
// const faqs = [
//   {
//     question: "How long does a typical project take?",
//     answer:
//       "Most projects take between 2-6 weeks depending on complexity, features, and revisions required.",
//   },
//   {
//     question: "Do you offer maintenance after launch?",
//     answer:
//       "Yes, we provide ongoing maintenance and support packages to ensure your website stays updated and secure.",
//   },
//   {
//     question: "Can you help with branding as well?",
//     answer:
//       "Absolutely! We offer branding services including logo design, brand identity, and visual guidelines.",
//   },
//   {
//     question: "What is the cost of a custom website?",
//     answer:
//       "Pricing depends on your requirements. Contact us for a tailored quote based on your project.",
//   },
// ];

// const industries = [
//   { name: "Healthcare", img: healthcareImg },
//   { name: "Real Estate", img: realestateImg },
//   { name: "E-commerce", img: ecommerceImg },
//   { name: "Tech & SaaS", img: techImg },
// ];
// const techs = ["REACT", "SHOPIFY", "NEXT.JS", "TAILWIND", "WEBFLOW", "FRAMER"];

// const services = [
//   { icon: Palette, title: "Custom Design", items: ["Unique brand identity", "No generic templates", "Hand-crafted UI elements"] },
//   { icon: Monitor, title: "Responsive Design", items: ["Perfect on all devices", "Mobile-first strategy", "Cross-browser testing"] },
//   { icon: ShoppingCart, title: "E-commerce", items: ["Secure payment gateways", "Inventory management", "Conversion optimization"] },
//   { icon: Rocket, title: "Landing Pages", items: ["High-converting layout", "A/B testing ready", "Speed optimized"] },
//   { icon: RefreshCw, title: "Website Redesign", items: ["Modern UX overhaul", "Retain existing SEO", "Performance upgrade"] },
//   { icon: Layers, title: "UI/UX Strategy", items: ["User journey mapping", "Interactive prototypes", "Accessibility focused"] },
// ];
// const features = [
//   { icon: Zap, title: "Blazing Speed", desc: "Optimized for LCP and performance scores above 90+ on Lighthouse.", color: "bg-primary" },
//   { icon: Search, title: "SEO Optimized", desc: "Built-in technical SEO with semantic HTML and schema markup.", color: "bg-foreground" },
//   { icon: Shield, title: "Robust Security", desc: "SSL certification and enterprise-grade code to protect your data.", color: "bg-process-purple" },
//   { icon: Users, title: "CRM Integration", desc: "Seamless connection to HubSpot, Salesforce, or your chosen CRM.", color: "bg-primary" },
//   { icon: BarChart3, title: "Advanced Analytics", desc: "Google Analytics 4 and Heatmap setup to track user behavior.", color: "bg-process-green" },
//   { icon: FileText, title: "Easy CMS", desc: "User-friendly backend so you can update content in seconds.", color: "bg-destructive" },
// ];
// const WebSiteDesign = () => {
//      const badges = [
//     { name: "Clutch", extra: <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-star text-star" />)}</div> },
//     { name: "Upwork", extra: <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded">TOP RATED</span> },
//     { name: "", extra: <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span className="font-semibold text-foreground">1000+ Projects</span></div> },
//     { name: "Google", extra: <span className="text-foreground font-medium">4.9 Rating</span> },
//   ];
//   const steps = [
//   { num: "01", title: "Discovery", desc: "We dive deep into your business goals, target audience, and brand ethos.", color: "bg-process-blue" },
//   { num: "02", title: "Strategy", desc: "Creating a conversion blueprint and user journey map for your success.", color: "bg-process-purple" },
//   { num: "03", title: "UI/UX Design", desc: "Crafting stunning, accessible, and modern interfaces for your brand.", color: "bg-process-green" },
//   { num: "04", title: "Development", desc: "Clean, scalable coding using the latest technologies and standards.", color: "bg-process-blue" },
//   { num: "05", title: "QA Testing", desc: "Rigorous testing for speed, security, and device responsiveness.", color: "bg-process-purple" },
//   { num: "06", title: "Launch", desc: "Smooth deployment and training for your team to manage content.", color: "bg-process-green" },
// ];
//  const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <>
//     <section className="relative bg-hero-bg overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left Content */}
//           <div className="z-10">
//             <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/20 mb-6">
//               World Class Digital Agency
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-2">
//               We Design<br />
//               Websites That<br />
//               <span className="text-primary">Convert Visitors</span><br />
//               Into Customers
//             </h1>
//             <p className="text-muted-foreground text-lg mt-6 mb-8 max-w-lg leading-relaxed">
//               Elevate your brand with high-performance, aesthetically stunning websites tailored to your unique business goals. We blend creativity with conversion science.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <a href="#contact" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-base">
//                 Start Your Website
//               </a>
//               <a href="#contact" className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-colors text-base">
//                 Get Free Consultation
//               </a>
//             </div>
//           </div>

//           {/* Right Content - Images */}
//           <div className="relative flex justify-center lg:justify-end">
//             <div className="relative">
//               <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
//                 <img src={heroPortrait} alt="Creative professional" className="w-full h-full object-cover" width={640} height={768} />
//               </div>
//               <div className="absolute -bottom-8 -left-16 w-40 h-52 md:w-48 md:h-60">
//                 <img src={phoneMockup} alt="Mobile app preview" className="w-full h-full object-contain drop-shadow-xl" width={512} height={640} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Diagonal bottom */}
//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
//     </section>

//     <section className="py-10 bg-background">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <div className="border-t-2 border-primary mb-8"></div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {badges.map((badge, i) => (
//             <div key={i} className="flex items-center justify-center gap-3 px-6 py-4 border border-border rounded-xl">
//               {badge.name && <span className="font-bold text-lg text-foreground">{badge.name}</span>}
//               {badge.extra}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
// <section id="services">
//       {/* Header */}
//       <div className="bg-section-alt py-20">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
//             Digital Experiences That<br />
//             <span className="text-primary">Drive Measurable Growth</span>
//           </h2>
//           <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
//             In a digital-first world, your website is your most powerful salesperson. We create bespoke digital platforms that combine breathtaking aesthetics with sophisticated conversion-led strategy. Every pixel is placed with purpose to turn browsers into loyal brand advocates.
//           </p>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, i) => (
//             <div key={i} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
//               <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
//                 <service.icon className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
//               <ul className="space-y-3">
//                 {service.items.map((item, j) => (
//                   <li key={j} className="flex items-center gap-3 text-muted-foreground">
//                     <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//      <section className="bg-section-alt py-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-2">Every Website Includes</h2>
//         <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
//           {features.map((f, i) => (
//             <div key={i} className="flex items-start gap-4">
//               <div className={`w-10 h-10 ${f.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
//                 <f.icon className="w-5 h-5 text-primary-foreground" />
//               </div>
//               <div>
//                 <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

// <section className="py-16 bg-background">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-8">Built With The Best Stack</p>
//         <div className="flex flex-wrap justify-center gap-8 md:gap-16">
//           {techs.map((t, i) => (
//             <span key={i} className="text-lg md:text-xl font-bold text-muted-foreground/60 tracking-wide">{t}</span>
//           ))}
//         </div>
//       </div>
//     </section>
// <section id="process" className="bg-section-alt py-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-16">Our Proven 6–Step Process</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {steps.map((s, i) => (
//             <div key={i} className="bg-background p-8 rounded-2xl border border-border">
//               <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-6`}>
//                 <span className="text-primary-foreground font-bold text-sm">{s.num}</span>
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
//               <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

// <section id="industries" className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-12">Tailored For Your Industry</h2>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {industries.map((ind, i) => (
//             <div key={i} className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer">
//               <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={512} height={512} />
//               <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
//               <span className="absolute bottom-4 left-4 text-primary-foreground font-bold text-lg">{ind.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

// <section className="bg-section-alt py-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-2">
//               Why Brands Trust<br />
//               <span className="text-primary">ViralStan</span>
//             </h2>
//             <div className="mt-8 space-y-8">
//               {points.map((p, i) => (
//                 <div key={i} className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                     <p.icon className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
//                     <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
//               <img src={trustTeam} alt="Our team" className="w-full h-full object-cover" loading="lazy" width={640} height={768} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// <div className="w-full bg-[#f8fafc]">

//       {/* ================= TESTIMONIAL SECTION ================= */}
//       <section className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
//           What Our Clients Say
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
          
//           {/* Card 1 */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <div className="flex text-yellow-400 mb-4">
//               {"★★★★★"}
//             </div>

//             <p className="text-gray-600 text-sm leading-relaxed mb-6">
//               "ViralStan transformed our online presence. Our conversion rates
//               jumped by 40% in the first month after the redesign. They are true
//               experts."
//             </p>

//             <div className="flex items-center gap-3">
//               <img
//                 src="https://i.pravatar.cc/40?img=1"
//                 alt=""
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-semibold text-gray-800 text-sm">
//                   Mark Stevenson
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   CEO, TECHFLOW
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <div className="flex text-yellow-400 mb-4">
//               {"★★★★★"}
//             </div>

//             <p className="text-gray-600 text-sm leading-relaxed mb-6">
//               "The design was beyond what we expected. It's clean, modern, and
//               perfectly reflects our luxury brand. Highly recommended for any
//               e-commerce brand."
//             </p>

//             <div className="flex items-center gap-3">
//               <img
//                 src="https://i.pravatar.cc/40?img=2"
//                 alt=""
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-semibold text-gray-800 text-sm">
//                   Sarah Chen
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   FOUNDER, AURA BOUTIQUE
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <div className="flex text-yellow-400 mb-4">
//               {"★★★★★"}
//             </div>

//             <p className="text-gray-600 text-sm leading-relaxed mb-6">
//               "Extremely professional team. Their process is organized and they
//               delivered on time. The speed of our new site is simply incredible."
//             </p>

//             <div className="flex items-center gap-3">
//               <img
//                 src="https://i.pravatar.cc/40?img=3"
//                 alt=""
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-semibold text-gray-800 text-sm">
//                   David Miller
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   DIRECTOR, PULSE MEDIA
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ================= FAQ SECTION ================= */}
//       <section className="bg-[#eef2f7] py-20 px-4">
//         <div className="max-w-3xl mx-auto text-center mb-10">
//           <h2 className="text-4xl font-semibold text-gray-800">
//             Frequently Asked Questions
//           </h2>
//         </div>

//         <div className="max-w-3xl mx-auto space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl px-6 py-4 flex flex-col cursor-pointer"
//               onClick={() => toggleFAQ(index)}
//             >
//               <div className="flex justify-between items-center">
//                 <p className="text-gray-800 font-medium text-sm">
//                   {faq.question}
//                 </p>
//                 <ChevronDown
//                   size={18}
//                   className={`transition-transform ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </div>

//               {openIndex === index && (
//                 <p className="text-gray-500 text-sm mt-3 leading-relaxed">
//                   {faq.answer}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CTA SECTION ================= */}
//       <section className="px-4 py-20">
//         <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-center py-16 px-6">
          
//           <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
//             Ready To Build Your Website?
//           </h2>

//           <p className="text-blue-100 max-w-xl mx-auto mb-8 text-sm">
//             Join 1000+ brands who have accelerated their growth with ViralStan.
//             Your digital revolution starts here.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
            
//             <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-xl hover:scale-105 transition">
//               Get Started Now
//             </button>

//             <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">
//               Talk To An Expert
//             </button>

//           </div>
//         </div>
//       </section>

//     </div>
//     </>
//   );
// };

// export default WebSiteDesign;



import React, { useState } from "react";
import { 
  Star, CheckCircle, Palette, Monitor, ShoppingCart, Rocket, 
  RefreshCw, Layers, Zap, Search, Shield, Users, BarChart3, 
  FileText, ChevronDown, Settings, MapPin 
} from "lucide-react";

// Assets
import heroPortrait from "../../assets/servicesWebD/herowebsite.png";
import phoneMockup from "../../assets/servicesWebD/website1.png";
import healthcareImg from "../../assets/servicesWebD/website2.png";
import realestateImg from "../../assets/servicesWebD/website3.png";
import ecommerceImg from "../../assets/servicesWebD/website4.png";
import techImg from "../../assets/servicesWebD/website5.png";
import trustTeam from "../../assets/servicesWebD/website6.png";

const WebSiteDesign = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const techs = ["REACT", "SHOPIFY", "NEXT.JS", "TAILWIND", "WEBFLOW", "FRAMER"];

  const services = [
    { icon: Palette, title: "Custom Design", items: ["Unique brand identity", "No generic templates", "Hand-crafted UI elements"] },
    { icon: Monitor, title: "Responsive Design", items: ["Perfect on all devices", "Mobile-first strategy", "Cross-browser testing"] },
    { icon: ShoppingCart, title: "E-commerce", items: ["Secure payment gateways", "Inventory management", "Conversion optimization"] },
    { icon: Rocket, title: "Landing Pages", items: ["High-converting layout", "A/B testing ready", "Speed optimized"] },
    { icon: RefreshCw, title: "Website Redesign", items: ["Modern UX overhaul", "Retain existing SEO", "Performance upgrade"] },
    { icon: Layers, title: "UI/UX Strategy", items: ["User journey mapping", "Interactive prototypes", "Accessibility focused"] },
  ];

  const features = [
    { icon: Zap, title: "Blazing Speed", desc: "Optimized for performance scores above 90+ on Lighthouse.", color: "text-blue-500 bg-blue-50" },
    { icon: Search, title: "SEO Optimized", desc: "Built-in technical SEO with semantic HTML and schema.", color: "text-purple-500 bg-purple-50" },
    { icon: Shield, title: "Robust Security", desc: "SSL certification and enterprise-grade code protection.", color: "text-indigo-500 bg-indigo-50" },
    { icon: Users, title: "CRM Integration", desc: "Seamless connection to HubSpot or Salesforce.", color: "text-blue-500 bg-blue-50" },
    { icon: BarChart3, title: "Advanced Analytics", desc: "GA4 and Heatmap setup to track behavior.", color: "text-emerald-500 bg-emerald-50" },
    { icon: FileText, title: "Easy CMS", desc: "User-friendly backend to update content in seconds.", color: "text-red-500 bg-red-50" },
  ];

  const steps = [
    { num: "01", title: "Discovery", desc: "We dive deep into your business goals and brand ethos.", color: "bg-blue-600" },
    { num: "02", title: "Strategy", desc: "Creating a conversion blueprint and user journey map.", color: "bg-purple-600" },
    { num: "03", title: "UI/UX Design", desc: "Crafting stunning, accessible, and modern interfaces.", color: "bg-indigo-600" },
    { num: "04", title: "Development", desc: "Clean, scalable coding using the latest tech standards.", color: "bg-cyan-600" },
    { num: "05", title: "QA Testing", desc: "Rigorous testing for speed, security, and responsiveness.", color: "bg-violet-600" },
    { num: "06", title: "Launch", desc: "Smooth deployment and training for your team.", color: "bg-emerald-600" },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* SECTION 1: HERO (With Background Decoration) */}
      <section className="relative pt-20 pb-32 bg-[#F8FBFF]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform origin-top translate-x-20 z-0 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              We Design <br />
              Websites That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Convert Visitors</span><br />
              Into Customers
            </h1>
            <p className="mt-8 text-lg text-slate-500 max-w-lg leading-relaxed">
              Elevate your brand with high-performance, aesthetically stunning websites tailored to your unique business goals.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">Start Your Website</button>
              <button className="px-10 py-4 border-2 border-slate-200 text-slate-600 font-bold rounded-full hover:bg-slate-50 transition-all">Get Free Consultation</button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src={heroPortrait} alt="Professional" className="w-full object-cover aspect-[4/5]" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 md:w-64 z-20 drop-shadow-2xl">
              <img src={phoneMockup} alt="Mobile App" />
            </div>
            <div className="absolute top-1/2 -right-10 w-40 h-40 bg-purple-200/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUSTED BADGES */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-1 opacity-60">
            <span className="font-bold text-xl">Clutch</span>
            <div className="flex text-yellow-400"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-60">
            <span className="font-bold text-xl text-emerald-600">Upwork</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 font-bold rounded">TOP RATED</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-60">
            <div className="flex items-center gap-2"><CheckCircle size={18} className="text-blue-600"/><span className="font-bold text-lg text-slate-800">1000+ Projects</span></div>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-60 text-center">
             <span className="font-bold text-xl">Google</span>
             <span className="text-xs font-medium">4.9 Rating</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES (Card Centered Layout) */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto text-center px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Digital Experiences That <br />
            <span className="text-blue-600">Drive Measurable Growth</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            In a digital-first world, your website is your most powerful salesperson. We create bespoke digital platforms that combine breathtaking aesthetics.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <div className="space-y-3">
                {s.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3 text-slate-500 text-sm">
                    <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FEATURES GRID (Every Website Includes) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16">Every Website Includes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6">
                <div className={`${f.color} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <f.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TECH STACK (The "Best Stack" Section) */}
      <section className="py-20 bg-white border-y border-slate-50">
        <p className="text-center text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase mb-12">Built With The Best Stack</p>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {techs.map((t, i) => (
            <span key={i} className="text-2xl md:text-4xl font-black text-slate-200 hover:text-blue-600 transition-colors cursor-default tracking-tighter italic">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 6: PROCESS (Dark Mode UI) */}
      <section className="py-24 bg-slate-900 mx-4 my-10 rounded-[3rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-black text-center mb-16">Our Proven 6–Step Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="bg-slate-800/40 p-10 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
                <div className={`${s.color} w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-6 shadow-lg shadow-black/20`}>{s.num}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INDUSTRIES (Modern Aspect Ratios) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Tailored For Your Industry</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Healthcare", img: healthcareImg },
              { name: "Real Estate", img: realestateImg },
              { name: "E-commerce", img: ecommerceImg },
              { name: "Tech & SaaS", img: techImg }
            ].map((ind, i) => (
              <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-lg">
                <img src={ind.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={ind.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex items-end p-8">
                  <span className="text-white font-bold text-xl">{ind.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY TRUST US */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-10 leading-tight">
              Why Brands Trust <br /><span className="text-blue-600">ViralStan</span>
            </h2>
            <div className="space-y-10">
              {[
                { icon: Settings, title: "Decade of Experience", desc: "10+ years of building digital ecosystems that actually move the needle." },
                { icon: MapPin, title: "Custom Approach", desc: "We don't use templates. Every design is started from a blank canvas." },
                { icon: Users, title: "Partner, Not Vendor", desc: "We integrate with your team to understand your vision and deliver support." }
              ].map((p, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><p.icon size={22}/></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white">
            <img src={trustTeam} alt="Our Team" />
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS (Minimal Design) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 text-slate-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="flex text-yellow-400 mb-6 font-serif">★★★★★</div>
                <p className="text-slate-600 italic text-sm leading-relaxed mb-8">"The design was beyond what we expected. It's clean, modern, and perfectly reflects our luxury brand."</p>
                <div className="flex items-center gap-4">
                  <img src={`https://i.pravatar.cc/100?u=${item}`} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="User" />
                  <div>
                    <p className="font-bold text-sm">Client Name</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">CEO, Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ (Accordion UI) */}
      <section className="py-24 bg-[#EEF2F7]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/50">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800"
                >
                  <span>How long does a typical project take?</span>
                  <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                    Most projects take between 2-6 weeks depending on complexity, features, and revisions required.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: CTA (The Final Blow) */}
      <section className="py-24 px-6 bg-[#EEF2F7]">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[3.5rem] p-12 md:p-24 text-center text-white relative shadow-[0_35px_60px_-15px_rgba(37,99,235,0.3)] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Ready To Build Your Website?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto font-medium">Join 1000+ brands who have accelerated their growth with ViralStan. Your digital revolution starts here.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-black shadow-2xl hover:scale-105 transition-all">Get Started Now</button>
              <button className="border-2 border-white/30 text-white px-12 py-5 rounded-full font-black hover:bg-white/10 transition-colors">Talk To An Expert</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebSiteDesign;