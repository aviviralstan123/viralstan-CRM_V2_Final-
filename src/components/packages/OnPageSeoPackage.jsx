import { useState } from "react";
import heroDashboard from '../../assets/MataADsPackagesImg/OnPage1.png'
import onpageSeo from '../../assets/MataADsPackagesImg/OnPage2.png'

const faqData = [
  {
    q: "What is On-Page SEO?",
    a: "On-Page SEO refers to the practice of optimizing individual web pages in order to rank higher and earn more relevant traffic in search engines. This includes optimizing both the content and the HTML source code of a page.",
  },
  { q: "How long does it take?", a: "Results typically start showing within 4-8 weeks depending on the competition and the current state of your website's optimization." },
  { q: "Do you optimize content?", a: "Yes, we optimize your existing content for target keywords, readability, and search engine guidelines to improve rankings." },
  { q: "Will rankings improve?", a: "With proper on-page optimization, most websites see significant ranking improvements within 2-3 months." },
  { q: "Can I upgrade later?", a: "Absolutely! You can upgrade your plan at any time. The difference will be prorated for the current billing cycle." },
];

const OnPageSeoPackage = () => {
  const [openFaq, setOpenFaq] = useState(0);  

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white to-indigo-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Optimize Every Page To <span className="text-blue-600">Rank Higher</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
              We improve your content, structure, and on-page SEO signals so your website ranks faster and performs better.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                Get Free SEO Audit
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-slate-50">
                Start On-Page SEO
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={heroDashboard} alt="SEO Analytics Dashboard" className="h-auto w-full object-cover" />
            </div>

            <div className="absolute -left-2 top-6 rounded-2xl bg-white/80 p-4 shadow-md backdrop-blur sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                  📈
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600">Keyword Growth</p>
                  <p className="text-sm font-extrabold text-emerald-600">+80%</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-24 rounded-2xl bg-white/80 p-4 shadow-md backdrop-blur sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-700">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600">SEO Score</p>
                  <p className="text-sm font-extrabold text-blue-600">Improved</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-4 rounded-2xl bg-white/80 p-4 shadow-md backdrop-blur sm:right-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  📡
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600">Better CTR</p>
                  <p className="text-sm font-extrabold text-slate-900">Top Tier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-sm font-semibold text-slate-700 sm:grid-cols-4 lg:px-8">
          <div className="flex items-center justify-center gap-2"><span>📄</span><span>1000+ Pages Optimized</span></div>
          <div className="flex items-center justify-center gap-2"><span>👥</span><span>SEO Experts Team</span></div>
          <div className="flex items-center justify-center gap-2"><span>📊</span><span>Data Driven Strategy</span></div>
          <div className="flex items-center justify-center gap-2"><span>📈</span><span>Real Ranking Results</span></div>
        </div>
      </section>

      <section className="bg-white" id="about">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <img src={onpageSeo} alt="On-Page SEO Dashboard" loading="lazy" className="h-auto w-full rounded-2xl object-cover shadow-sm" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">What Is On-Page SEO?</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              On-page SEO improves your website pages using keyword optimization, meta tags, structure, and content so search engines can rank your pages better. It&apos;s the technical and creative process of making your website readable for both users and algorithms.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">✓</span> Internal Link Architecture</li>
              <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">✓</span> Content Semantic Enrichment</li>
              <li className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">✓</span> Mobile Performance Tuning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-12 text-center text-white sm:px-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Poor Optimization Is Killing Your Rankings</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-indigo-100 sm:text-base">
            Even strong businesses fail online due to weak on-page SEO. Fix structure, content, and targeting to grow faster. Don&apos;t let technical errors hold back your revenue.
          </p>
          <button className="mt-7 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">
            Fix My SEO
          </button>
        </div>
      </section>

      <section className="bg-white px-4 py-16 lg:px-8" id="solutions">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">What We Optimize</h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🔗", title: "Keyword Targeting", desc: "Strategic placement for maximum relevance." },
              { icon: "📋", title: "Meta Tags", desc: "Crafting CTR-optimized titles and descriptions." },
              { icon: "📝", title: "Content Optimization", desc: "Making copy engaging and algorithm-friendly." },
              { icon: "≡", title: "Heading Structure", desc: "Logical H1-H6 hierarchy for better readability." },
              { icon: "🔗", title: "Internal Linking", desc: "Connecting pages to boost authority flow." },
              { icon: "🖼️", title: "Image Optimization", desc: "Alt-text and compression for speed." },
              { icon: "🌐", title: "URL Structure", desc: "Clean, descriptive, and SEO-friendly slugs." },
              { icon: "⚡", title: "Page Speed", desc: "Core Web Vitals tuning for fast loading." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-3 text-base font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 lg:px-8" id="pricing">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">On-Page SEO Packages</h2>
            <p className="mt-2 text-base text-slate-500">Choose a plan based on your website size and growth level</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                name: "BASIC",
                price: "₹12,000",
                recommended: false,
                features: ["10 Keywords", "1 Site Analysis", "Initial Report", "15 Pages Meta", "Speed (Basic)", "Blog (2)", "Support: Email/Chat"],
              },
              {
                name: "ADVANCE",
                price: "₹20,000",
                recommended: true,
                features: ["20 Keywords", "3 Sites", "30 Pages Meta", "Speed (Advanced)", "Blog (5)", "2 On-Site Posts", "Support: Email/Chat/Call"],
              },
              {
                name: "ENTERPRISE",
                price: "₹37,000",
                recommended: false,
                features: ["30 Keywords", "5 Sites", "50 Pages Meta", "Speed (Advanced)", "Blog (10)", "3 On-Site Posts", "Support: Email/Chat/Call"],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ${
                  p.recommended ? "ring-2 ring-indigo-600" : "border border-slate-200"
                }`}
              >
                {p.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-[11px] font-bold text-white">
                    RECOMMENDED
                  </span>
                )}
                <div className="text-sm font-bold tracking-wide text-slate-700">{p.name}</div>
                <div className="mt-3 text-3xl font-extrabold text-slate-900">
                  {p.price} <span className="text-sm font-semibold text-slate-500">/Mo</span>
                </div>
                <div className="mt-2 text-xs text-slate-500">Exclusive of all taxes</div>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[12px] text-white">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-xl px-4 py-3 font-semibold transition ${
                    p.recommended
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90"
                      : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 lg:px-8" id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-3">
            {faqData.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900"
                    onClick={() => setOpenFaq(open ? null : i)}
                    type="button"
                  >
                    {item.q}
                    <span className={`text-slate-500 transition ${open ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  {open && <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-50 px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Ready To Rank Higher?</h2>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
              Start On-Page SEO
            </button>
            <button className="inline-flex items-center justify-center rounded-xl bg-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-300">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnPageSeoPackage;