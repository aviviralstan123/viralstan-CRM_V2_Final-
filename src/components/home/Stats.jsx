// import React from 'react';
// import { TrendingUp, BadgeCheck, Globe2 } from 'lucide-react';

// /**
//  * 1. STATS BAR SECTION
//  * Clean, minimalist counter bar
//  */
// const StatsBar = () => {
//   const stats = [
//     { value: '500+', label: 'GLOBAL CLIENTS', color: 'text-slate-800' },
//     { value: '12k', label: 'PROJECTS DONE', color: 'text-blue-600' },
//     { value: '98%', label: 'RETENTION RATE', color: 'text-slate-800' },
//     { value: '15+', label: 'YEARS INDUSTRY', color: 'text-indigo-500/80' },
//   ];

//   return (
//     <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-b border-slate-200">
//       {stats.map((stat, i) => (
//         <div key={i} className="text-center">
//           <div className={`text-4xl md:text-5xl font-bold mb-2 tracking-tight ${stat.color}`}>
//             {stat.value}
//           </div>
//           <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
//             {stat.label}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// /**
//  * 2. AWARDS SECTION
//  * Logo-style recognition section
//  */
// const AwardsSection = () => {
//   const awards = [
//     { name: 'AWWWARDS.', icon: '🏆' },
//     { name: 'FWA OF THE DAY', icon: '⭐' },
//     { name: 'CSS DESIGN AWARDS', icon: '🏅' },
//   ];

//   return (
//     <div className="py-20 text-center">
//       <h3 className="text-xs font-bold tracking-[0.25em] text-slate-500 uppercase mb-12">
//         Recognized for Excellence
//       </h3>
//       <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
//         {awards.map((award, i) => (
//           <div key={i} className="flex items-center gap-3 group hover:grayscale-0 transition-all">
//             <span className="text-2xl">{award.icon}</span>
//             <span className="font-bold text-slate-700 tracking-tight">{award.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// /**
//  * 3. FEATURE CARDS SECTION
//  * High-contrast cards with icons
//  */
// const FeatureCards = () => {
//   const features = [
//     {
//       icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
//       value: '#1',
//       desc: 'Ranked AI Marketing Agency 2023',
//       bgColor: 'bg-[#EBF1FF]',
//       iconBg: 'bg-blue-100'
//     },
//     {
//       icon: <BadgeCheck className="w-6 h-6 text-indigo-600" />,
//       value: '99.9%',
//       desc: 'System Uptime & Data Accuracy',
//       bgColor: 'bg-[#EBF1FF]',
//       iconBg: 'bg-indigo-100'
//     },
//     {
//       icon: <Globe2 className="w-6 h-6 text-purple-600" />,
//       value: '45+',
//       desc: 'Active Countries Served Worldwide',
//       bgColor: 'bg-[#EBF1FF]',
//       iconBg: 'bg-purple-100'
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
//       {features.map((item, i) => (
//         <div key={i} className={`${item.bgColor} p-10 rounded-[32px] transition-transform hover:scale-[1.02] duration-300`}>
//           <div className={`${item.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-8`}>
//             {item.icon}
//           </div>
//           <div className="text-4xl font-bold text-slate-800 mb-2">{item.value}</div>
//           <p className="text-slate-600 font-medium leading-relaxed max-w-[200px]">
//             {item.desc}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// /**
//  * MAIN COMPONENT
//  */
// export default function Stats() {
//   return (
//     <section className="bg-[#f5f8ff] min-h-screen w-full font-sans">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <StatsBar />
//         <AwardsSection />
//         <FeatureCards />
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { TrendingUp, BadgeCheck, Globe2 } from 'lucide-react';

/**
 * 1. STATS BAR SECTION
 */
const StatsBar = () => {
  const stats = [
    { value: '500+', label: 'GLOBAL CLIENTS', color: 'text-slate-800' },
    { value: '12k', label: 'PROJECTS DONE', color: 'text-blue-600' },
    { value: '98%', label: 'RETENTION RATE', color: 'text-slate-800' },
    { value: '15+', label: 'YEARS INDUSTRY', color: 'text-indigo-500/80' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 py-12 md:py-16 border-b border-slate-200">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className={`text-3xl md:text-5xl font-bold mb-2 tracking-tight ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase px-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * 2. AWARDS SECTION
 */
const AwardsSection = () => {
  const awards = [
    { name: 'AWWWARDS.', icon: '🏆' },
    { name: 'FWA OF THE DAY', icon: '⭐' },
    { name: 'CSS DESIGN AWARDS', icon: '🏅' },
  ];

  return (
    <div className="py-16 md:py-20 text-center">
      <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-slate-500 uppercase mb-10 md:mb-12">
        Recognized for Excellence
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-60 grayscale px-4">
        {awards.map((award, i) => (
          <div key={i} className="flex items-center gap-2 md:gap-3 group hover:grayscale-0 transition-all">
            <span className="text-xl md:text-2xl">{award.icon}</span>
            <span className="font-bold text-sm md:text-base text-slate-700 tracking-tight">{award.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 3. FEATURE CARDS SECTION
 */
const FeatureCards = () => {
  const features = [
    {
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />,
      value: '#1',
      desc: 'Ranked AI Marketing Agency 2023',
      bgColor: 'bg-[#EBF1FF]',
      iconBg: 'bg-blue-100'
    },
    {
      icon: <BadgeCheck className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />,
      value: '99.9%',
      desc: 'System Uptime & Data Accuracy',
      bgColor: 'bg-[#EBF1FF]',
      iconBg: 'bg-indigo-100'
    },
    {
      icon: <Globe2 className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />,
      value: '45+',
      desc: 'Active Countries Served Worldwide',
      bgColor: 'bg-[#EBF1FF]',
      iconBg: 'bg-purple-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 md:py-12">
      {features.map((item, i) => (
        <div key={i} className={`${item.bgColor} p-8 md:p-10 rounded-[24px] md:rounded-[32px] transition-transform hover:scale-[1.02] duration-300`}>
          <div className={`${item.iconBg} w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-6 md:mb-8`}>
            {item.icon}
          </div>
          <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{item.value}</div>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-[240px]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function Stats() {
  return (
    <section className="bg-[#f5f8ff] w-full font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <StatsBar />
        <AwardsSection />
        <FeatureCards />
      </div>
    </section>
  );
}