
import React, { useState } from "react";

import {
  ChevronDown,
  Star,
  TrendingUp,
  CheckCircle,
  Shield,
  Award,
  Users,
  Globe,
  Rocket,
  Heart,
  Scale,
  ShoppingCart,
  Home,
  Landmark,
  Store,
  Check,
  UserSearch,
  BadgeCheck,
  Eye,
  ShieldCheck
} from "lucide-react";

import heroPhone from '../../assets/MataADsPackagesImg/OffPage1.png'
import aboutImage from '../../assets/MataADsPackagesImg/Offpage2.png'
import authorityChart from '../../assets/MataADsPackagesImg/Offpage3.png'
import chart1 from '../../assets/MataADsPackagesImg/Offpage4.png'
import chart2 from '../../assets/MataADsPackagesImg/Offpage5.png'


const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    features: ["5 DA 20-40 Backlinks", "1 Premium Blog Post", "Social Signals Injection", "Basic Competitor Analysis"],
    highlight: false,
    cta: "Select Starter",
  },
  {
    name: "Growth",
    price: "₹50,000",
    features: ["10 DA 30-60 Backlinks", "Premium Guest Posting", "Niche Brand Mentions", "Advanced Link Audit", "Monthly Strategy Session"],
    highlight: true,
    cta: "Select Growth",
  },
  {
    name: "Dominance",
    price: "₹1,00,000",
    features: ["20+ High Authority Links", "Tier-1 PR Mentions", "Executive Editorial Outreach", "White-Glove Reporting", "Dedicated SEO Lead"],
    highlight: false,
    cta: "Select Dominance",
  },
];
const badges = [
  { icon: Shield, label: "Google Partner" },
  { icon: Award, label: "Clutch Top Agency" },
  { icon: Users, label: "1000+ Clients" },
  { icon: Globe, label: "Upwork Enterprise" },
  { icon: Shield, label: "Google Partner" },
  { icon: Award, label: "Clutch Top Agency" },
];
const industries = [
  { icon: Heart, label: "Dental SEO", desc: "Local citations and medical authority links for clinics.", color: "blue" },
  { icon: Scale, label: "Law Firm SEO", desc: "High-authority legal directories and editorial mentions.", color: "blue" },
  { icon: ShoppingCart, label: "Ecommerce", desc: "Product review links and brand mentions from top blogs.", color: "purple" },
  { icon: Home, label: "Real Estate", desc: "Geographically targeted links to dominate local markets.", color: "teal" },
  { icon: Landmark, label: "Finance", desc: "YMYL-compliant authority signals from financial portals.", color: "blue" },
  { icon: Store, label: "Local Business", desc: "Google Map pack boosting and local NAP consistency.", color: "pink" },
];
  const faqs = [
    {
      question: "Are off-page SEO packages worth it?",
      answer:
        "Absolutely. Off-page SEO is the single most important factor for ranking in competitive niches. While on-page optimizes your site, off-page provides the \"votes\" of confidence needed to beat competitors.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Typically, results start showing within 4-12 weeks depending on your niche, competition, and current domain authority.",
    },
    {
      question: "Are these links permanent?",
      answer:
        "Yes, we focus on permanent placements that continue to provide SEO value over time.",
    },
  ];
export function OffPagesSeoPackage() {
  const [activeIndex, setActiveIndex] = useState(0);



  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Backlinks That
                <br />
                Actually{" "}
                <span className="text-blue-600">
                  Build
                  <br />
                  Authority
                </span>
              </h1>

              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
                Engineering precision authority signals through editorial-grade link building. Stop counting links and start measuring dominance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Get Free SEO Audit
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-7 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  View Packages
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <img src={heroPhone} alt="SEO Analytics Dashboard" className="w-[320px]" />

                <div className="absolute right-0 top-0 -translate-y-2 rounded-xl bg-white p-3 shadow-lg sm:right-2">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-amber-500" />
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Google Rating</p>
                      <p className="text-sm font-extrabold text-slate-900">
                        4.9 <span className="text-slate-500">Stars</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-xl bg-white p-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Growth</p>
                      <p className="text-sm font-extrabold text-emerald-600">+98% Increase</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 translate-y-6 rounded-xl bg-white p-3 shadow-lg sm:right-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <p className="text-sm font-semibold text-slate-900">Top Rated Agency 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-4 py-5 lg:px-8">
          <div className="flex w-max animate-[scroll_18s_linear_infinite] items-center gap-8">
            {[...badges, ...badges].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 whitespace-nowrap rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                <badge.icon className="h-4 w-4 text-slate-500" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Digital Dominance Starts Beyond Your Domain
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              On-page SEO tells Google what your site is about. Off-page SEO tells Google that you are an authority worth listening to. We specialize in high-end editorial outreach that builds genuine trust, relevance, and dominance in competitive search landscapes.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-slate-800">
                  Curated editorial placement on niche-relevant sites
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-slate-800">
                  Aggressive authority signal mapping
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={aboutImage} alt="SEO analysis" loading="lazy" className="h-auto w-full max-w-xl rounded-2xl object-cover shadow-sm" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-12 text-center text-white sm:px-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Stop Wasting Budget on Low Quality Links</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-indigo-100 sm:text-base">
            Spammy links don&apos;t just fail; they risk your entire digital reputation. Let&apos;s fix your strategy today.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Fix My SEO Strategy
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex justify-center">
            <div className="rounded-2xl bg-slate-50 p-4">
              <img src={authorityChart} alt="Growth chart" loading="lazy" className="h-auto w-full max-w-xl rounded-xl object-cover" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Drive Domain Authority &amp; Rankings</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our off-page strategies are designed to move the needle where it matters most. By acquiring high-quality backlinks from reputable sources, we increase your site&apos;s perceived authority, resulting in sustained ranking growth.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Rocket className="h-6 w-6 text-indigo-600" />
                <h3 className="mt-3 text-base font-bold text-slate-900">Faster Indexing</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Quality links help Google discover and rank your content faster.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Globe className="h-6 w-6 text-indigo-600" />
                <h3 className="mt-3 text-base font-bold text-slate-900">Global Trust</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Establish authority that spans across international search markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Industries We Dominate</h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-slate-500">
            Tailored off-page SEO strategies for niche-specific growth.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.label} className="rounded-2xl bg-white p-6 text-left shadow-sm">
                <ind.icon className="h-6 w-6 text-indigo-600" />
                <h3 className="mt-3 text-base font-bold text-slate-900">{ind.label}</h3>
                <p className="mt-2 text-sm text-slate-600">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 lg:px-8" id="packages">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Link Building Packages That Scale Your Growth
          </h2>
          <p className="mt-2 text-base text-slate-500">Transparent pricing for elite search performance.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col rounded-2xl bg-white p-8 text-left shadow-sm ${
                  plan.highlight ? "ring-2 ring-indigo-600" : "border border-slate-200"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-[11px] font-bold text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-extrabold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-3xl font-extrabold text-slate-900">
                  {plan.price} <span className="text-sm font-semibold text-slate-500">/month</span>
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-indigo-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-xl px-4 py-3 font-semibold transition ${
                    plan.highlight
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90"
                      : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Proof in the Performance</h2>
            <p className="mt-2 text-base text-slate-500">Actual client results from our recent link building campaigns.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-slate-50 p-3">
              <img src={chart1} alt="chart" className="h-auto w-full rounded-xl object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl bg-slate-50 p-3">
              <img src={chart2} alt="chart" className="h-auto w-full rounded-xl object-cover" />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">The ViralStan Difference</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <UserSearch className="h-7 w-7 text-blue-600" />
                <h3 className="mt-3 text-base font-bold text-slate-900">Manual Outreach Only</h3>
                <p className="mt-2 text-sm text-slate-600">No automation. Real relationships with real webmasters.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <BadgeCheck className="h-7 w-7 text-purple-600" />
                <h3 className="mt-3 text-base font-bold text-slate-900">Niche Relevant Links</h3>
                <p className="mt-2 text-sm text-slate-600">We only target sites that matter to your specific industry.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <Eye className="h-7 w-7 text-cyan-600" />
                <h3 className="mt-3 text-base font-bold text-slate-900">Transparent Reporting</h3>
                <p className="mt-2 text-sm text-slate-600">Live dashboard access to see every link as it goes live.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <ShieldCheck className="h-7 w-7 text-pink-600" />
                <h3 className="mt-3 text-base font-bold text-slate-900">Permanent Placements</h3>
                <p className="mt-2 text-sm text-slate-600">Links that stay live and continue to pass value for years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((item, index) => {
              const open = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`cursor-pointer overflow-hidden rounded-2xl border ${
                    open ? "border-indigo-300 bg-indigo-50" : "border-slate-200 bg-white"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <h4 className="text-sm font-semibold text-slate-900">{item.question}</h4>
                    <ChevronDown className={`h-5 w-5 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
                  </div>
                  {open && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</p>}
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-10 text-center text-white sm:px-10">
            <h1 className="text-2xl font-extrabold sm:text-3xl">Ready to Build Authority?</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-indigo-100 sm:text-base">
              Join 1,000+ brands growing their organic presence with ViralStan’s elite link building strategies.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <button className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">
                Start SEO Growth
              </button>
              <button className="rounded-xl bg-indigo-500/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500/30">
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}