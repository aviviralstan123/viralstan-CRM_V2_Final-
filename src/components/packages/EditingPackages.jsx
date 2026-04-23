import { FaCircleCheck, FaInstagram, FaMusic, FaYoutube } from 'react-icons/fa6';
import '../packages/EditingPackages.css';
import edithero from "../../assets/MataADsPackagesImg/EditingHero.png";
import editImage1 from "../../assets/MataADsPackagesImg/Editing1.png";
import editImage2 from "../../assets/MataADsPackagesImg/Editing2.png";
import editImage3 from "../../assets/MataADsPackagesImg/Editing3.png";
// import editImage4 from "../../assets/MataADsPackagesImg/Editing4.png";

const projects = [
  {
    id: 1,
     title: 'Lifestyle Optimization',
    // views: '850K Views',
    // tag: 'REELS',
    // tagColor: '#7c3aed',
    image: editImage1,
  },
  {
    id: 2,
     title: 'SaaS Growth Blueprint',
    // views: '1.2M Views',
    // tag: 'SHORTS',
    // tagColor: '#3b5bdb',
    image: editImage2,
  },
  {
    id: 3,
     title: 'Real Estate Luxury',
    // views: '420K Views',
    // tag: 'TIKTOK',
    // tagColor: '#3b5bdb',
    image: editImage3,
  },
  // {
  //   id: 4,
  //    title: 'Agency Authority',
  //   // views: '630K Views',
  //   // tag: 'REELS',
  //   // tagColor: '#7c3aed',
  //   image: editImage4,
  // },
];
const categories = [
  {
    label: 'Founders',
    iconColor: '#3b82f6',
    bgColor: '#eff6ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: 'Coaches',
    iconColor: '#0891b2',
    bgColor: '#ecfeff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: 'Real Estate',
    iconColor: '#7c3aed',
    bgColor: '#f5f3ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: 'SaaS',
    iconColor: '#ef4444',
    bgColor: '#fef2f2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: 'Ecom',
    iconColor: '#f97316',
    bgColor: '#fff7ed',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: 'Agencies',
    iconColor: '#10b981',
    bgColor: '#ecfdf5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];
const steps = [
  {
    number: '1',
    title: 'Send Clips',
    description: 'Dump your raw footage, podcasts, or Zoom calls into our shared portal.',
    activeDot: 0,
  },
  {
    number: '2',
    title: 'Edit & Optimize',
    description: 'We handle hooks, captions, b-roll, and pacing to maximize retention.',
    activeDot: 1,
  },
  {
    number: '3',
    title: 'Post & Grow',
    description: 'Receive polished videos ready to dominate your socials instantly.',
    activeDot: 2,
  },
];
const plans = [
  {
    id: 'starter',
    tag: 'GROWTH STARTER',
    tagColor: '#3b5bdb',
    price: '₹25,000',
    period: '/mo',
    features: [
      '8 Viral Short-form Videos',
      'Dynamic Captions',
      'Basic Hook Optimization',
    ],
    cta: 'Choose Basic',
    popular: false,
  },
  {
    id: 'viral',
    tag: 'VIRAL POSITIONING',
    tagColor: '#7c3aed',
    price: '₹45,000',
    period: '/mo',
    features: [
      '15 Viral Short-form Videos',
      'Premium Motion Graphics',
      'Unlimited Stock B-Roll',
      'A/B Tested Hook Variations',
    ],
    cta: 'Get Viral Now',
    popular: true,
  },
  {
    id: 'authority',
    tag: 'AUTHORITY ENGINE',
    tagColor: '#7c3aed',
    price: '₹85,000',
    period: '/mo',
    features: [
      '30 Viral Short-form Videos',
      'Full Content Strategy',
      'Thumbnail Design for YT',
    ],
    cta: 'Go Unlimited',
    popular: false,
  },
];
const platforms = [
  {
    icon: <FaInstagram />,
    title: "Instagram Reels",
    desc: "Optimized for high-energy visual loops and trending audio sync.",
    bg: "insta",
  },
  {
    icon: <FaYoutube />,
    title: "YouTube Shorts",
    desc: "Focus on story-based retention and keyword-rich engagement hooks.",
    bg: "youtube",
  },
  {
    icon: <FaMusic />,
    title: "TikTok",
    desc: 'Raw, authentic editing styles designed for the "For You" page flow.',
    bg: "tiktok",
  },
];

function CheckIcon({ filled }) {
  if (filled) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="linear-gradient(135deg, #3b5bdb, #7c3aed)" />
        <circle cx="12" cy="12" r="12" fill="url(#checkGrad)" />
        <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="checkGrad" x1="0" y1="0" x2="24" y2="24">
            <stop stopColor="#3b5bdb" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 13l4 4L19 7" stroke="#3b5bdb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function EditingPackages() {
  return (
    <>
    <section className="heroedit" id="process">
      <div className="hero-containeredit">
        <div className="hero-lefeditt">
          <div className="hero-badgeedit">NEXT-GEN VIDEO AGENCY</div>
          <h1 className="hero-headingedit">
            <span className="hero-heading-darkedit">We Don't Edit<br />Videos.</span>
            <br />
            <span className="hero-heading-gradientedit">We Build Viral<br />Content.</span>
          </h1>
          <p className="hero-descriptionedit">
            Stop settling for basic cuts. We engineer high-<br />
            retention short-form content that converts<br />
            attention into authority.
          </p>
          <div className="hero-buttonsedit">
            <button className="btn-primaryedit">Claim Your Strategy</button>
            <button className="btn-secondaryedit">View Showcase</button>
          </div>
        </div>

        <div className="hero-rightedit">
          <div className="hero-bg-blobedit"></div>
          <div className="phone-wrapperedit">
            {/* <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-screen-content">
                  <div className="phone-status-bar">
                    <span>9:41</span>
                    <div className="phone-status-icons">
                      <span className="phone-signal"></span>
                      <span className="phone-wifi"></span>
                      <span className="phone-battery"></span>
                    </div>
                  </div>
                  <div className="phone-app-content">
                    <p className="phone-app-title">Rew R Eer!</p>
                    <p className="phone-app-sub">RetRoal Get hose!</p>
                    <div className="phone-dial-pad">
                      <div className="phone-dial-knob"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reach-card">
              <p className="reach-label">REACH</p>
              <p className="reach-number">1.2M+</p>
              <p className="reach-growth">↑ 240% Growth</p>
            </div> */}
             <img src={edithero} alt='edithero'/>
          </div>
         
        </div>
      </div>
    </section>

<section className="showcaseedit" id="showcase">
      <div className="showcase-headeredit">
        <div className="showcase-header-leftedit">
          <h2 className="showcase-titleedit">The Viral Showcase</h2>
          <p className="showcase-subtitleedit">Real edits for real creators that dominated the algorithm.</p>
        </div>
        <a href="#" className="showcase-all-linkedit">
          All Projects <span className="showcase-arrowedit">→</span>
        </a>
      </div>

      <div className="showcase-cards-wrapperedit">
        <div className="showcase-cardsedit">
          {projects.map((project) => (
            <div key={project.id} className="showcase-cardedit">
              <img
                src={project.image}
                alt={project.title}
                className="showcase-card-imageedit"
              />
              {/* <div className="showcase-card-overlay">
                <div className="showcase-card-info">
                  <p className="showcase-card-title">{project.title}</p>
                  <div className="showcase-card-meta">
                    <span className="showcase-card-views">{project.views}</span>
                    <span className="showcase-card-tag" style={{ color: project.tagColor }}>
                      {project.tag}
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="who-sectionedit">
      <div className="who-containeredit">
        <div className="who-headeredit">
          <h2 className="who-titleedit">Who We Work With</h2>
          <p className="who-subtitleedit">
            High-level operators who value their time and need elite visual<br />
            storytelling.
          </p>
        </div>

        <div className="who-categoriesedit">
          {categories.map((cat) => (
            <div key={cat.label} className="who-category-pilledit">
              <span className="who-category-iconedit" style={{ color: cat.iconColor, background: cat.bgColor }}>
                {cat.icon}
              </span>
              <span className="who-category-labeledit">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

 <section className="pipeline-sectionedit" id="process">
      <div className="pipeline-containeredit">
        <div className="pipeline-headeredit">
          <h2 className="pipeline-titleedit">Your Content Pipeline</h2>
        </div>

        <div className="pipeline-stepsedit">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`pipeline-card pipeline-card-${index + 1}`}
            >
              <div className="pipeline-number-circleedit">
                <span>{step.number}</span>
              </div>
              <h3 className="pipeline-step-titleedit">{step.title}</h3>
              <p className="pipeline-step-descedit">{step.description}</p>
              <div className="pipeline-dotsedit">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className={`pipeline-dotedit ${dot === step.activeDot ? 'pipeline-dot-active' : ''}`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="pricing-sectionedit" id="pricing">
      <div className="pricing-containeredit">
        <div className="pricing-headeredit">
          <h2 className="pricing-titleedit">Choose Your Momentum</h2>
          <p className="pricing-subtitleedit">Scalable packages for every stage of your creator journey.</p>
        </div>

        <div className="pricing-cardsedit">
          {plans.map((plan) => (
            <div key={plan.id} className={`pricing-cardedit ${plan.popular ? 'pricing-card-popular' : ''}`}>
              {plan.popular && (
                <div className="pricing-popular-badgeedit">MOST POPULAR</div>
              )}
              <p className="pricing-plan-tagedit" style={{ color: plan.tagColor }}>{plan.tag}</p>
              <div className="pricing-price-rowedit">
                <span className="pricing-priceedit" style={{ color: plan.popular ? plan.tagColor : '#0d0d2b' }}>
                  {plan.price}
                </span>
                <span className="pricing-periodedit">{plan.period}</span>
              </div>

              <ul className="pricing-featuresedit">
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing-feature-itemedit">
                    <span className="pricing-check-iconedit">
                      <FaCircleCheck filled={plan.popular} />
                    </span>
                    <span className={`pricing-feature-textedit ${plan.popular ? 'pricing-feature-bold' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`pricing-ctaedit ${plan.popular ? 'pricing-cta-popular' : 'pricing-cta-outline'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="paradox-sectionedit">
      <div className="paradox-containeredit">
        <div className="paradox-leftedit">
          <div className="paradox-cardedit">
            <div className="paradox-card-textedit">
              <p className="paradox-card-line-1edit">You're Not Only</p>
              <p className="paradox-card-line-1edit">Paying For</p>
              <p className="paradox-card-line-blueedit">Editing.</p>
              <p className="paradox-card-line-rededit">YOU Are Paying</p>
              <p className="paradox-card-line-rededit">For</p>
            </div>

            <ul className="paradox-listedit">
              <li className="paradox-list-itemedit">
                <span className="paradox-list-lineedit blue-line"></span>
                <span className="paradox-list-labeledit">Retention</span>
              </li>
              <li className="paradox-list-itemedit">
                <span className="paradox-list-lineedit purple-line"></span>
                <span className="paradox-list-labeledit">Distribution</span>
              </li>
              <li className="paradox-list-itemedit">
                <span className="paradox-list-lineedit pink-line"></span>
                <span className="paradox-list-labeledit">Authority</span>
              </li>
            </ul>

            <div className="paradox-watch-badgeedit">
              <p className="paradox-watch-numberedit">40%+</p>
              <p className="paradox-watch-labeledit">AVG WATCH TIME</p>
            </div>
          </div>
        </div>

        <div className="paradox-rightedit">
          <h2 className="paradox-right-titleedit">The Content Paradox</h2>
          <p className="paradox-right-descedit">
            Most editors focus on making things &ldquo;look pretty.&rdquo; We focus on keeping people watching. Our edits are psychology-based, utilizing patterns that the Instagram and TikTok algorithms love.
          </p>

          <div className="paradox-statsedit">
            <div className="paradox-statedit paradox-stat-blue">
              <p className="paradox-stat-valueedit">12hr</p>
              <p className="paradox-stat-labeledit">FAST TURNAROUND</p>
            </div>
            <div className="paradox-statedit paradox-stat-purple">
              <p className="paradox-stat-valueedit">Infinite</p>
              <p className="paradox-stat-labeledit">SCALABILITY</p>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* MULTI PLATFORM */}
      <section className="multiedit">
        <h2>Multi–Platform Dominance</h2>

        <div className="multi-rowedit">
          {platforms.map((item, i) => (
            <div className={`multi-cardedit ${item.bg}`} key={i}>
              <div className="icon-boxedit">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-ctaedit">
        <div className="cta-containeredit">
          <h2>
            Let’s Build Your <br /> Content Engine
          </h2>

          <p>
            Limited spots available for October. Secure your production slot
            today.
          </p>

          <div className="cta-buttonsedit">
            <button className="btn-whiteedit">Start Now</button>
            <button className="btn-outlineedit">Book Strategy Call</button>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default EditingPackages;