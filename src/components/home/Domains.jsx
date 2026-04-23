import fintech from "../../assets/tech.png";
import healthcare from "../../assets/health.png";
import ecommerce from "../../assets/commerce.png";
import lifestyle from "../../assets/life.png";

const domains = [
  { title: "FinTech", label: "TECH", img: fintech },
  { title: "HealthCare", label: "WELLNESS", img: healthcare },
  { title: "E-Commerce", label: "COMMERCE", img: ecommerce },
  { title: "Lifestyle", label: "LIFE", img: lifestyle },
];

export default function Domains() {
  return (
    <section className="py-28 bg-[#F4F6FF]">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-16">
          Domain Expertise
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {domains.map((d, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >

              {/* Image */}
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text
              <div className="absolute bottom-6 left-6 text-white">

                <p className="text-xs tracking-widest opacity-80 mb-1">
                  {d.label}
                </p>

                <h3 className="text-2xl font-semibold">
                  {d.title}
                </h3>

              </div> */}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}