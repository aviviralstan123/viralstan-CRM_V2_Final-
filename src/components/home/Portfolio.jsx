import case1 from '../../assets/image1.png'
import case2 from '../../assets/image2.png'
const projects = [
  {
    title: "Zenith Banking UI",
    category: "FINTECH EVOLUTION",
    img:case1,
    stats: [
      { value: "+340%", label: "User Retention" },
      { value: "$2.4M", label: "Revenue Increase" }
    ]
  },
  {
    title: "Aura Fashion App",
    category: "E-COMMERCE",
    img: case2,
    stats: [
      { value: "1.2M", label: "Active Installs" },
      { value: "4.9/5", label: "App Rating" }
    ]
  }
];

export default function Portfolio() {
  return (
    <section className="py-28 bg-[#eef0f6]">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="flex justify-between items-end mb-16">

          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-600 mb-3">
              PORTFOLIO
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Results that{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Speak
              </span>{" "}
              <span className="text-blue-600">Volume.</span>
            </h2>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-slate-600 font-medium hover:text-black"
          >
            View All Projects →
          </a>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((p) => (

            <div
              key={p.title}
              className="relative rounded-3xl overflow-hidden h-[320px] group"
            >

              {/* Image */}
              <img
                src={p.img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">

                <p className="text-xs tracking-widest text-blue-400 mb-3">
                  {p.category}
                </p>

                <h3 className="text-3xl font-bold mb-6">
                  {p.title}
                </h3>

                <div className="flex gap-12">
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-bold text-blue-400">
                        {s.value}
                      </p>
                      <p className="text-sm text-slate-300">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}