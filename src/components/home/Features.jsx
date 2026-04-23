
// import office from "../../assets/office.png"


// const pillars = [
//   {
//     title: "Innovation",
//     desc: "Constantly pushing the boundaries of what's technically possible."
//   },
//   {
//     title: "Integrity",
//     desc: "Transparent partnerships built on data-backed results."
//   }
// ]

// export default function Features() {
//   return (
//     <section className="py-28 bg-[#F4F6FF]">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">

//         {/* IMAGE SIDE */}
//         <div className="relative">

//           {/* glow */}
//           <div className="absolute -left-8 -bottom-8 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
//           <div className="absolute -right-6 -top-6 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

//           {/* image */}
//           <div className="relative rounded-3xl overflow-hidden shadow-xl">
//             <img
//               src={office}
//               alt="team"
//               className="w-full h-[450px] object-cover"
//             />

//             {/* quote glass */}
//             <div className="absolute bottom-20 left-50 right-10 backdrop-blur-xl bg-white/70 px-5 py-5 rounded-2xl shadow-lg max-w-sm">
//               <p className="text-sm text-slate-700 leading-relaxed">
//                 "Our vision is to bridge the gap between human intuition and machine intelligence."
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* CONTENT SIDE */}
//         <div>

//           <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
//             OUR STORY
//           </p>

//           <h2 className="text-[48px] font-extrabold leading-[1.1] text-slate-800 mb-6">
//             Redefining the{" "}
//             <span className="bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
//               Digital Frontier.
//             </span>
//           </h2>

//           <p className="text-slate-500 leading-relaxed mb-10 text-[16px]">
//             At Bright Meta, we don't follow trends—we build the infrastructure
//             that creates them. Founded on the principle of liquid design, our
//             team of experts crafts bespoke digital ecosystems that adapt,
//             evolve, and outperform.
//           </p>

//           {/* features */}
//           <div className="grid grid-cols-2 gap-10">
//             {pillars.map((p) => (
//               <div key={p.title}>
//                 <h3 className="text-lg font-semibold text-slate-800 mb-2">
//                   {p.title}
//                 </h3>

//                 <p className="text-slate-500 text-sm leading-relaxed">
//                   {p.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }


import React from 'react';
import office from "../../assets/office.png";

const pillars = [
  {
    title: "Innovation",
    desc: "Constantly pushing the boundaries of what's technically possible."
  },
  {
    title: "Integrity",
    desc: "Transparent partnerships built on data-backed results."
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-28 bg-[#F4F6FF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* IMAGE SIDE */}
        <div className="relative order-2 lg:order-1">
          {/* background glows */}
          <div className="absolute -left-4 -bottom-4 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div className="absolute -right-4 -top-4 w-48 h-48 md:w-72 md:h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

          {/* image container */}
          <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl">
            <img
              src={office}
              alt="Viralstan office team"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />

            {/* Quote Glass Card */}
            <div className="absolute bottom-6 left-4 right-4 md:bottom-10 md:left-auto md:right-10 backdrop-blur-xl bg-white/70 px-6 py-5 rounded-2xl shadow-lg max-w-sm border border-white/40">
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed italic">
                "Our vision is to bridge the gap between human intuition and machine intelligence."
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="order-1 lg:order-2">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
            OUR STORY
          </p>

          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-[1.2] md:leading-[1.1] text-slate-800 mb-6">
            Redefining the{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Digital Frontier.
            </span>
          </h2>

          <p className="text-slate-500 leading-relaxed mb-8 md:mb-10 text-sm md:text-[16px]">
            At Viralstan, we don't follow trends—we build the infrastructure
            that creates them. Founded on the principle of liquid design, our
            team of experts crafts bespoke digital ecosystems that adapt and outperform.
          </p>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {pillars.map((p) => (
              <div key={p.title} className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}