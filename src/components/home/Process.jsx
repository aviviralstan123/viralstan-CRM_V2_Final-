const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Intense immersion into your brand ecosystem and objectives.",
    color: "from-blue-500 to-blue-700"
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Mapping out the technological and creative blueprint for growth.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    num: "03",
    title: "Execution",
    desc: "The heavy lifting. Development, design, and neural optimization.",
    color: "from-purple-500 to-violet-600"
  },
  {
    num: "04",
    title: "Launch",
    desc: "Continuous monitoring and scaling for global impact.",
    color: "from-cyan-500 to-teal-500"
  }
];

export default function Process() {
  return (
    <section className="py-28 bg-[#EBF1FF]">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-display text-slate-800 mb-24">
          Engineered for Success
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-slate-300"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

            {steps.map((step) => (
              <div key={step.num} className="relative">

                {/* Number Circle */}
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br ${step.color} shadow-lg`}
                >
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-sans font-[600] text-slate-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-500 font-sans font-[400] max-w-[220px] mx-auto leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}