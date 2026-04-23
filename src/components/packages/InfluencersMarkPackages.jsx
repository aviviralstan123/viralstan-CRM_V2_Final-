// import '../packages/InfluencersMarkPackages.css';
import { useState } from 'react';
import bloginf1 from "../../assets/MataADsPackagesImg/infulence.png";
import bloginf2 from "../../assets/MataADsPackagesImg/infulence1.png";
import bloginf3 from "../../assets/MataADsPackagesImg/infulence2.png";
import bloginf4 from "../../assets/MataADsPackagesImg/infulence3.png";
import bloginf5 from "../../assets/MataADsPackagesImg/infulence4.png";
import bloginf6 from "../../assets/MataADsPackagesImg/infulence5.png";
import bloginf7 from "../../assets/MataADsPackagesImg/infulence6.png";
import bloginf8 from "../../assets/MataADsPackagesImg/infulence7.png";

const reels = [
  { img:bloginf1 , username: '@tech_guru', views: '1.8M Views' },
  { img: bloginf2 , username: '@beauty_star', views: '3.1M Views' },
  { img: bloginf3 , username: '@viral_creator', views: '2.4M Views' },
  { img: bloginf4 , username: '@dance_king', views: '1.5M Views' },
  { img: bloginf5 , username: '@fitness_pro', views: '900K Views' },
];
const creators = [
  {
    name: 'Marcus Chen',
    category: 'Tech & Lifestyle',
    followers: '1.2M',
    img:  bloginf6,
  },
  {
    name: 'Julian Vose',
    category: 'Performance Marketing',
    followers: '850K',
    img:  bloginf7,
  },
  {
    name: 'Sarah Jenkins',
    category: 'Beauty & Wellness',
    followers: '2.1M',
    img:  bloginf8,
  },
];
const steps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Sourcing",
    desc: "Vetting the top 1% of creators who match your brand's DNA.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Negotiation",
    desc: "We handle contracts and rates to ensure maximum ROI.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Planning",
    desc: "Strategic content blueprints designed to trend.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Execution",
    desc: "Hands-on production management and quality control.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Tracking",
    desc: "Real-time dashboard for sales and engagement data.",
  },
];

const plans = [
  {
    name: "SILVER",
    price: "$2,500",
    period: "/campaign",
    features: [
      { text: "5 Micro-Creators", included: true },
      { text: "Content Guidelines", included: true },
      { text: "Basic Analytics", included: true },
      { text: "White-glove management", included: false },
    ],
    popular: false,
  },
  {
    name: "GOLD",
    price: "$7,500",
    period: "/campaign",
    features: [
      { text: "15 Mid-Tier Creators", included: true },
      { text: "Full Production Support", included: true },
      { text: "Dedicated Manager", included: true },
      { text: "Performance Dashboard", included: true },
    ],
    popular: true,
  },
  {
    name: "PLATINUM",
    price: "$20,000",
    period: "/month",
    features: [
      { text: "Unlimited Premium Access", included: true },
      { text: "Celebrity Partnerships", included: true },
      { text: "Viral Ads Integration", included: true },
      { text: "ROI Guarantee", included: true },
    ],
    popular: false,
  },
];

const stats = [
  { value: "250M+", label: "Total Reach" },
  { value: "8.4%", label: "Avg. Engagement" },
  { value: "94%", label: "Customer Trust" },
  { value: "12X", label: "ROAS Driven" },
];

function InfluencersMarkPackages() {
  const [center, setCenter] = useState(2);

  const prev = () => setCenter((c) => (c === 0 ? reels.length - 1 : c - 1));
  const next = () => setCenter((c) => (c === reels.length - 1 ? 0 : c + 1));

  const getPosition = (index) => {
    const diff = index - center;
    const wrapped = ((diff + reels.length) % reels.length);
    if (wrapped === 0) return "center";
    if (wrapped === 1 || wrapped === -(reels.length - 1)) return "right1";
    if (wrapped === reels.length - 1 || wrapped === -1) return "left1";
    if (wrapped === 2 || wrapped === -(reels.length - 2)) return "right2";
    if (wrapped === reels.length - 2 || wrapped === -2) return "left2";
    return "hidden";
  };

  const posStyles= {
    center: "z-30 scale-100 opacity-100 translate-x-0",
    left1: "z-20 scale-[0.85] opacity-70 -translate-x-[60%]",
    right1: "z-20 scale-[0.85] opacity-70 translate-x-[60%]",
    left2: "z-10 scale-[0.7] opacity-40 -translate-x-[120%]",
    right2: "z-10 scale-[0.7] opacity-40 translate-x-[120%]",
    hidden: "z-0 scale-50 opacity-0 translate-x-0",
  };

  // const getVisibleReels = () => {
  //   const arr = [];
  //   for (let i = -2; i <= 2; i++) {
  //     const idx = (centerIndex + i + reels.length) % reels.length;
  //     arr.push({ ...reels[idx], offset: i });
  //   }
  //   return arr;
  // };
  return (
    <>
   <section className="py-20 md:py-28 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-2 rounded-full mb-8">
          THE FUTURE OF GROWTH
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-foreground">
          Creators Drive Attention.
          <br />
          <span className="text-gradient">We Turn It Into Growth.</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Launch influencer campaigns that actually perform — powered by real
          creators and real engagement. Move beyond vanity metrics.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="btn-gradient text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Start Campaign
          </a>
          <a
            href="#"
            className="border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-primary/5 transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>

     <section className="py-16 md:py-24 section-bg" id="reels">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-16">
        Premium Reel Production
      </h2>

      <div className="relative max-w-5xl mx-auto h-[420px] md:h-[500px] flex items-center justify-center">
        {reels.map((reel, i) => {
          const pos = getPosition(i);
          return (
            <div
              key={i}
              className={`absolute w-[200px] md:w-[240px] h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out ${posStyles[pos]}`}
            >
              <img
                src={reel.img}
                alt={reel.handle}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {pos === "center" && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm font-semibold" style={{ color: "white" }}>{reel.handle}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{reel.views}</p>
                </div>
              )}
            </div>
          );
        })}

        <button
          onClick={prev}
          className="absolute left-4 md:left-8 z-40 text-primary hover:text-primary/80 transition-colors"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 8l-8 8 8 8" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 z-40 text-primary hover:text-primary/80 transition-colors"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8l8 8-8 8" />
          </svg>
        </button>
      </div>
    </section>

   <section className="py-16 md:py-24 px-6 section-bg" id="creators">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Our Elite Network
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
              We partner with creators who don't just have followers, they have
              communities. vetted, verified, and viral.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All Creators <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creators.map((c) => (
            <div
              key={c.name}
              className="relative rounded-2xl overflow-hidden h-[400px] md:h-[480px] group"
            >
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-xl font-bold" style={{ color: "white" }}>{c.name}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {c.category} • {c.followers}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

   <section className="py-16 md:py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-14">
          Engineered for Virality
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-background rounded-2xl p-6 card-shadow"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 px-6 section-bg" id="packages">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Scalable Growth Plans
        </h2>
        <p className="mt-3 text-muted-foreground">
          Choose the impact level that fits your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 text-left card-shadow ${
                plan.popular ? "border-2 border-primary" : "border border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 btn-gradient text-primary-foreground text-[10px] font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <h3 className="font-bold text-foreground tracking-wider text-sm">
                {plan.name}
              </h3>
              <div className="mt-3">
                <span className="text-4xl font-extrabold text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2 text-sm">
                    {f.included ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/40 flex-shrink-0">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <span className={f.included ? "text-foreground" : "text-muted-foreground/50"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-full text-sm font-semibold transition-opacity ${
                  plan.popular
                    ? "btn-gradient text-primary-foreground hover:opacity-90"
                    : "border-2 border-primary text-primary hover:bg-primary/5"
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="py-16 md:py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl md:text-5xl font-extrabold text-gradient">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

     <section className="py-16 md:py-24 px-6 section-bg">
      <div className="max-w-3xl mx-auto bg-card rounded-3xl p-10 md:p-16 text-center card-shadow">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
          Ready to dominate the feed?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Join the brands leading the cultural conversation. Launch your campaign
          with VIRALSTAN today.
        </p>
        <a
          href="#"
          className="inline-block mt-8 btn-gradient text-primary-foreground font-semibold px-10 py-4 rounded-full text-sm hover:opacity-90 transition-opacity"
        >
          Launch Your Campaign
        </a>
      </div>
    </section>
    
    </>
  );
}
export default InfluencersMarkPackages;