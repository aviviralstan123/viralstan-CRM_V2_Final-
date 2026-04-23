import person from "../../assets/person.png"
const testimonials = [
  {
    quote:
      "Bright Meta didn’t just redesign our website; they rebuilt our entire digital presence.",
    name: "Sarah Johnson",
    title: "CEO, TechNova",
    image: person,
  },
  {
    quote:
      "The technical precision they bring to UI/UX is unmatched. They think like engineers and designers.",
    name: "Michael Chen",
    title: "Product Director, FutureWave",
    image: person,
  },
  {
    quote:
      "Their AI-driven marketing approach gave us a competitive edge we didn’t have before.",
    name: "Emily Rodriguez",
    title: "Marketing Head, NovaTech",
    image: person,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F4F6FF] pt-28">

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10 mb-20">

        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              "{item.quote}"
            </p>

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Bottom Image */}
      {/* <div className="relative w-full h-[520px] overflow-hidden">

        <img
          src="/images/city.jpg"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F6FF] via-transparent to-transparent"></div>

      </div> */}

    </section>
  );
}