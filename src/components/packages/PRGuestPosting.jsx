import React from "react";
import { FaArrowRight, FaChartLine, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

import { FaTrophy, FaShieldAlt, FaLink, FaEye } from "react-icons/fa";
import { FaRocket, FaUser, FaShoppingBag, FaBuilding, FaUsers } from "react-icons/fa";
import blog1 from "../../assets/MataADsPackagesImg/Card1.png";
import blog2 from "../../assets/MataADsPackagesImg/Card2.png";
import blog3 from "../../assets/MataADsPackagesImg/Card3.png";
import blog4 from "../../assets/MataADsPackagesImg/Card4.png";
import blog5 from "../../assets/MataADsPackagesImg/Card5.png";
import blog6 from "../../assets/MataADsPackagesImg/Card6.png";
import righthero from "../../assets/MataADsPackagesImg/righthero.png";
const industries = [
  { icon: <FaRocket />, name: "STARTUPS" },
  { icon: <FaUser />, name: "PERSONAL BRANDS" },
  { icon: <FaShoppingBag />, name: "ECOMMERCE" },
  { icon: <FaBuilding />, name: "REAL ESTATE" },
  { icon: <FaUsers />, name: "AGENCIES" },
];
const services = [
  {
    img: blog1,
     title: "Guest posting",
    // desc: "High-authority content placements on niche-specific blogs.",
  },
  {
    img: blog2,
    title: "SEO articles",
    // desc: "Keyword-optimized narratives that rank and convert readers.",
  },
  {
    img: blog3,
    title: "Brand features",
    // desc: "Dedicated stories highlighting your unique brand journey.",
  },
  {
    img: blog4,
   title: "Founder interviews",
    // desc: "Position your leaders as authoritative voices in your industry.",
  },
  {
    img: blog5,
     title: "Backlinks",
    // desc: "Permanent, high-authority do-follow links for SEO growth.",
  },
  {
    img: blog6,
    title: "Niche placements",
    // desc: "Hyper-targeted media coverage in specific vertical markets.",
  },
];

const steps = [
  {
    title: "Brand analysis",
    desc: "We deep-dive into your niche to find the perfect placement angles.",
  },
  {
    title: "Content creation",
    desc: "Elite journalists craft narratives that resonate with high-tier editors.",
  },
  {
    title: "Publishing",
    desc: "Your stories go live on the world’s most respected news outlets.",
  },
  {
    title: "Backlinks",
    desc: "We ensure all links are permanent, clean, and pass maximum authority.",
  },
  {
    title: "Tracking",
    desc: "Live reporting on reach, authority gain, and keyword rankings.",
  },
];

const features = [
  {
    icon: <FaTrophy />,
    title: "Elite Ranking",
    desc: "Climb to the first page of Google with high-DA backlinks.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Ultimate Trust",
    desc: "Convert visitors instantly by showcasing major publications.",
  },
  {
    icon: <FaLink />,
    title: "Quality Backlinks",
    desc: "Only organic, high-quality links that build long-term equity.",
  },
  {
    icon: <FaEye />,
    title: "Global Visibility",
    desc: "Reach millions through top global news platforms.",
  },
];

const PRGuestPosting = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 pb-24 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="w-full max-w-xl">
            <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold tracking-wide text-indigo-600">
              GLOBAL AUTHORITY PR
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Get Featured on <br />
              <span className="text-blue-600">High-Authority</span> <br />
              Media Websites
            </h1>

            <p className="mt-4 max-w-[520px] text-base leading-relaxed text-slate-500">
              Elevate your brand’s digital presence with precision-targeted guest posts and PR placements. We secure backlinks from world-class news outlets that drive growth and search authority.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto sm:px-6">
                Get Media Coverage <FaArrowRight className="mt-0.5" />
              </button>

              <button className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:w-auto sm:px-6">
                Book Free Consultation
              </button>

              <button className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-emerald-100 px-4 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-200 sm:w-auto sm:px-6">
                <FaWhatsapp className="mt-0.5" />
                WhatsApp
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-xl">
            <div className="overflow-hidden rounded-2xl">
              <img src={righthero} alt="PrBannerhero" className="h-auto w-full object-cover" />
            </div>

            <div className="absolute -bottom-8 left-0 w-full max-w-sm rounded-2xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur md:-left-8">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600">
                <FaChartLine />
              </div>
              <p className="mt-4 text-xs font-bold tracking-wide text-slate-700">GROWTH IMPACT</p>
              <h3 className="mt-2 text-xl font-extrabold text-slate-900">+240% Authority</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Secure placements on Forbes, Bloomberg, and TechCrunch to skyrocket your brand trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-8">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Authority builds trust. <br />
              <span className="text-blue-600">Trust builds growth.</span>
            </h2>

            <p className="mt-4 text-base text-slate-500">
              In a digital world crowded with noise, a single feature in a reputable publication is worth a thousand advertisements.
            </p>

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[14px] text-white">
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900">SEO Dominance</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    High DA backlinks that improve your overall domain ranking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[14px] text-white">
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900">Instant Credibility</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    The &quot;As Seen On&quot; factor converts cold traffic into loyal clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-xs font-bold tracking-wide text-slate-700">WITHOUT VIRALSTAN PR</p>
            <div className="mt-3 h-4 w-full rounded-full bg-slate-200" />
            <p className="mt-2 text-sm text-slate-600">Low organic reach &amp; 0% brand trust</p>

            <p className="mt-6 text-xs font-bold tracking-wide text-slate-700">WITH VIRALSTAN PR</p>
            <div className="mt-3 h-4 w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
            <p className="mt-2 text-sm text-slate-600">Dominant market share &amp; 92% conversion lift</p>

            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">500+</h3>
                <p className="mt-1 text-xs font-bold tracking-wide text-slate-500">OUTLETS</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">1.2M</h3>
                <p className="mt-1 text-xs font-bold tracking-wide text-slate-500">REACH</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">15ms</h3>
                <p className="mt-1 text-xs font-bold tracking-wide text-slate-500">INDEXING</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold tracking-wide text-blue-600">PRECISION SOLUTIONS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Strategic Media Placements</h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <img src={item.img} alt={item.title} className="h-[292px] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">PR Investment Plans</h2>
          <p className="mt-2 text-base text-slate-500">Transparent pricing for top-tier digital authority.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* SILVER */}
            <div className="flex h-full flex-col rounded-2xl bg-white p-8 text-left shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Silver</h3>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">₹75,000</h2>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> 3 Premium Placements</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> DA 50+ Guaranteed</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Professional Copywriting</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Basic SEO Analysis</li>
              </ul>

              <button className="mt-auto w-full rounded-xl border border-blue-600 bg-transparent px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
                Select Silver
              </button>
            </div>

            {/* GOLD */}
            <div className="relative flex h-full flex-col rounded-2xl border-2 border-indigo-600 bg-white p-8 text-left shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-[11px] font-bold text-white">
                RECOMMENDED
              </div>

              <h3 className="text-lg font-bold text-slate-900">Gold</h3>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">₹2,00,000</h2>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> 8 Premium Placements</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Tier-1 Media Featured</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Strategic Brand Interview</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Advanced Indexing</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Dedicated Manager</li>
              </ul>

              <button className="mt-auto w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 font-semibold text-white transition hover:opacity-90">
                Start Gold Journey
              </button>
            </div>

            {/* PLATINUM */}
            <div className="flex h-full flex-col rounded-2xl bg-white p-8 text-left shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Platinum</h3>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">₹5,00,000</h2>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> 20+ Elite Placements</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Global News Distribution</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Blue Tick Assist</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Reputation Management</li>
                <li className="flex gap-2"><FaCheckCircle className="mt-0.5 text-blue-600" /> Monthly Strategy</li>
              </ul>

              <button className="mt-auto w-full rounded-xl border border-blue-600 bg-transparent px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
                Select Platinum
              </button>
            </div>
          </div>
        </div>
      </section>
    {/* TOP SECTION */}
      <section className="bg-slate-100 px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Methodology</h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-base font-extrabold text-white">
                  {i + 1}
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE SECTION */}
      <section className="relative overflow-hidden bg-[#7C61F1] px-4 py-24 pb-16 text-white lg:px-8">
        <div className="absolute -top-24 left-0 h-48 w-full rounded-b-[50%_100%] bg-blue-700" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => (
              <div key={i} className="max-w-sm">
                <div className="text-2xl">{item.icon}</div>
                <h4 className="mt-3 text-base font-bold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-indigo-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
          {/* INDUSTRIES */}
      <section className="bg-slate-100 px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-[34px]">Industries We Dominate</h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-[26px] text-blue-600">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold tracking-wider text-slate-700">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-12 text-center text-white sm:px-10 sm:py-16">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-[65px]">
              Ready to own your <br />
              niche?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-indigo-100 sm:text-base">
              Stop chasing traffic. Start building authority. Our team is ready to get your brand the coverage it deserves.
            </p>

            <button className="mt-8 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-indigo-50">
              Get Your Brand Featured
            </button>
          </div>
        </div>
      </section>

    </>
  );
};

export default PRGuestPosting;