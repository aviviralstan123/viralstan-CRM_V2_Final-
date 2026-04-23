// export default function Tools() {

//     const tools = [
//         {
//             title: "UI/UX Engineering",
//             desc: "Crafting visual digital environments."
//         },
//         {
//             title: "Growth Analytics",
//             desc: "Turn data into actionable insights."
//         },
//         {
//             title: "Global Branding",
//             desc: "Branding systems for global reach."
//         }
//     ]

//     return (

//         <section className="py-24 bg-slate-50">

//             <div className="max-w-7xl mx-auto px-6">

//                 <h2 className="text-3xl font-bold text-center mb-14">

//                     The Tools of <span className="text-blue-600">Transformation</span>

//                 </h2>

//                 <div className="grid md:grid-cols-3 gap-8">

//                     {tools.map((tool, i) => (

//                         <div key={i} className="bg-white p-8 rounded-xl shadow">

//                             <h3 className="font-semibold text-lg">
//                                 {tool.title}
//                             </h3>

//                             <p className="text-gray-500 mt-3">
//                                 {tool.desc}
//                             </p>

//                         </div>

//                     ))}

//                 </div>

//             </div>

//         </section>

//     )

// }

import uiux from "../../assets/brand.png";
// import analytics from "../../assets/analytics.png";
// import branding from "../../assets/branding.png";

const tools = [
  {
    title: "UI/UX Engineering",
    desc: "Crafting visceral digital environments that prioritize user flow and high-fidelity interaction design.",
    img: uiux,
  },
  {
    title: "Growth Analytics",
    desc: "Turning raw data into actionable intelligence through advanced neural network processing.",
    img: "https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?q=80&w=912",
  },
  {
    title: "Global Branding",
    desc: "Building iconic identities that resonate across cultures and digital platforms effortlessly.",
    img: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=870",
  },
];

export default function Tools() {
  return (
    <section className="bg-[#F4F6FF]">

      {/* AI Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white shadow-xl">

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 opacity-80">
              AI-POWERED
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Leveraging AI for Next-Gen Growth
            </h3>

            <p className="text-sm max-w-md opacity-90">
              Our proprietary AI platform transforms raw marketing data into
              actionable strategies, delivering compounding returns.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-extrabold mb-1">84.8%</div>
            <p className="text-xs opacity-80">Avg. ROI Increase</p>

            <button className="mt-4 px-5 py-2 rounded-full text-xs font-semibold bg-white text-indigo-600">
              Explore AI Suite →
            </button>
          </div>

        </div>
      </div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-28">

        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-indigo-600 font-semibold mb-4">
            CAPABILITIES
          </p>

          <h2 className="text-5xl font-bold text-slate-800">
            The Tools of{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Transformation.
            </span>
          </h2>
        </div>

        {/* Cards */}
        {/* Cards Grid */}
<div className="grid md:grid-cols-3 gap-10">
  {tools.map((t, i) => (
    <div
      key={i}
      className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-200 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-100 cursor-pointer"
    >
      {/* Image Container with Zoom */}
      <div className="overflow-hidden rounded-2xl mb-6">
        <img
          src={t.img}
          alt={t.title}
          className="w-full h-52 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Title with Color Change */}
      <h4 className="text-xl font-semibold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-indigo-600">
        {t.title}
      </h4>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {t.desc}
      </p>

      {/* Subtle Arrow Icon (Appears on Hover) */}
      <div className="mt-4 flex items-center text-indigo-600 text-sm font-bold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Learn More <span className="ml-2">→</span>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}