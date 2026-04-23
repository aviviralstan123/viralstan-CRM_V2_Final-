import '../packages/UGCPackages.css';
import { Check } from "lucide-react";
import '../packages/UGCPackages.css';
import UGCphone from "../../assets/MataADsPackagesImg/UgcImage.png";
import UGCImage1 from "../../assets/MataADsPackagesImg/UgcImage1.png";
import UGCImage2 from "../../assets/MataADsPackagesImg/UgcImage2.png";
import UGCImage3 from "../../assets/MataADsPackagesImg/UgcImage3.png";
import UGCImage4 from "../../assets/MataADsPackagesImg/UgcImage4.png";
import UGCImage5 from "../../assets/MataADsPackagesImg/UgcImage5.png";
import UgcProduct from "../../assets/MataADsPackagesImg/UgcImage6.png";
import testimonial from "../../assets/MataADsPackagesImg/UgcImage7.png";

import {
  ShoppingBag,
  Package,
  Dumbbell,
  Sparkles,
  Cloud
} from "lucide-react";

const cards = [
    {
      id: 1,
      label: 'UGC STYLE',
      bg: '#e8e8ec',
      rotate: -28,
      x: -280,
      image:UGCImage1 ,
      showPlay: true,
    },
    {
      id: 2,
      label: 'PRODUCT DEMO',
      bg: '#2c2c30',
      rotate: -14,
      x: -140,
      image: UGCImage2,
      showPlay: true,
    },
    {
      id: 3,
      label: 'AD CREATIVE',
      sublabel: 'The Hook Optimized Strategy',
      bg: '#e05252',
      rotate: 0,
      x: 0,
      image: UGCImage3,
      showPlay: false,
      isCenter: true,
    },
    {
      id: 4,
      label: 'TESTIMONIAL',
      bg: '#e8e8ec',
      rotate: 14,
      x: 140,
      image: UGCImage4,
      showPlay: false,
    },
    {
      id: 5,
      label: '',
      bg: '#dde0f5',
      rotate: 28,
      x: 280,
      image: UGCImage5,
      showPlay: false,
    },
  ];
 const steps = [
    {
      id: 1,
      label: 'Idea',
      desc: 'Market research and concept development.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4l3 3"/>
          <circle cx="12" cy="8" r="1" fill="#5b5bff"/>
        </svg>
      ),
    },
    {
      id: 2,
      label: 'Script',
      desc: 'Crafting high-converting visual hooks.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
    },
    {
      id: 3,
      label: 'Shoot',
      desc: 'Authentic content captured by vetted creators.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="15" height="10" rx="2"/>
          <polygon points="17 9 22 6 22 18 17 15"/>
        </svg>
      ),
    },
    {
      id: 4,
      label: 'Edit',
      desc: 'Post-production for retention and punchy flow.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
          <path d="m6 10 4 4 6-6"/>
        </svg>
      ),
    },
    {
      id: 5,
      label: 'Delivery',
      desc: 'Ready-to-run ads delivered to your dashboard.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      ),
    },
  ];
function UGCPackages() {
     const lines = [
    { text: 'PEOPLE TRUST PEOPLE. NOT ADS.', color: 'gray' },
    { text: 'RAW CONTENT CONVERTS FASTER.', color: 'blue' },
    { text: 'AUTHENTICITY DRIVES ENGAGEMENT.', color: 'gray' },
  ];
  return (
    <>
    <section className="heroUGC">
      <div className="hero-contentUGC">
        <div className="hero-badgeUGC">
          <span>UGC CREATIVE AGENCY</span>
        </div>
        <h1 className="hero-titleUGC">
          <span className="hero-title-blackUGC">Content That Feels Real.</span>
          <br />
          <span className="hero-title-blueUGC">And Sells.</span>
        </h1>
        <p className="hero-subtitleUGC">
          Authentic UGC videos designed to blend into feeds, build trust, and<br />
          convert viewers into customers.
        </p>
        <div className="hero-buttonsUGC">
          <button className="hero-btn-primaryUGC">Get UGC Content</button>
          <button className="hero-btn-secondaryUGC">Start Project</button>
        </div>
      </div>

      <div className="hero-phone-wrapperUGC">
        {/* <div className="hero-floating-card hero-card-authentic">
          <div className="hero-floating-card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <span>Authentic Content</span>
        </div> */}

        <div className="hero-phoneUGC">
          {/* <div className="phone-frame"> */}
            {/* <div className="phone-notch"></div> */}
            {/* <div className="phone-screen"> */}
              <img
                src={UGCphone}
                alt="UGC Content"
                className="phone-imageUGC"
              />
              {/* <div className="phone-play-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>

        {/* <div className="hero-floating-card hero-card-hooks">
          <div className="hero-floating-card-icon hooks-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <span>Scroll-Stopping Hooks</span>
        </div> */}
      </div>
    </section>
    
    <section className="phone-cards-sectionUGC">
      <div className="high-converting-cardUGC">
        <div className="high-converting-iconUGC">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
            <polyline points="16 7 22 7 22 13"/>
          </svg>
        </div>
        <span>High Converting Ads</span>
      </div>

      <div className="phone-cards-fanUGC">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`fan-cardUGC ${card.isCenter ? 'fan-card-center' : ''}`}
            style={{
              transform: `rotate(${card.rotate}deg) translateX(${card.x * 0.3}px)`,
              zIndex: card.isCenter ? 10 : Math.abs(card.rotate) < 15 ? 7 : 5,
            }}
          >
            <div className="fan-phone-frameUGC">
              <div className="fan-phone-notchUGC"></div>
              <div className="fan-phone-screenUGC" style={{ background: card.bg }}>
                {card.isCenter && (
                  <div className="fan-phone-barUGC">
                    <div className="fan-phone-bar-leftUGC">
                      <div className="fan-phone-bar-dotUGC"></div>
                      <span className="fan-phone-bar-textUGC">Downsize titles</span>
                    </div>
                    <div className="fan-phone-bar-dotsUGC">
                      <div className="fan-phone-bar-dot-smUGC"></div>
                      <div className="fan-phone-bar-dot-smUGC"></div>
                    </div>
                  </div>
                )}
                <img
                  src={card.image}
                  alt={card.label || 'UGC Content'}
                  className="fan-phone-imgUGC"
                />
                {/* {card.showPlay && (
                  <div className="fan-play-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </div>
                )}
                {card.isCenter && (
                  <div className="fan-card-bottom-overlay">
                    <span className="fan-ad-badge">AD CREATIVE</span>
                    <p className="fan-card-title">{card.sublabel}</p>
                  </div>
                )} */}
              </div>
            </div>
            {/* {card.label && (
              <div className="fan-card-label">{card.label}</div>
            )} */}
          </div>
        ))}
      </div>
    </section>
        <section className="ugc-sectionUGC">
      <div className="ugc-containerUGC">
        <h2 className="ugc-headingUGC">What is UGC Content?</h2>
        <div className="ugc-cardUGC">
          <p className="ugc-textUGC">
            User-Generated Content (UGC) is the new gold standard for digital marketing. It&apos;s
            content created by real people, for real people. By mimicking the aesthetic of
            organic social posts, UGC bypasses the &quot;ad filter&quot; in consumers&apos; brains, building
            immediate trust and driving significantly higher performance than traditional
            studio-shot commercials.
          </p>
        </div>
      </div>
    </section>
<section className="marquee-sectionUGC">
      {lines.map((line, i) => (
        <div key={i} className="marquee-rowUGC">
          <div className={`marquee-trackUGC marquee-trackUGC-${i % 2 === 0 ? 'ltr' : 'rtl'}`}>
            <div className="marquee-contentUGC">
              {[...Array(4)].map((_, j) => (
                <span key={j} className={`marquee-textUGC marquee-textUGC-${line.color}`}>
                  {line.text}&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              ))}
            </div>
            <div className="marquee-contentUGC" aria-hidden="true">
              {[...Array(4)].map((_, j) => (
                <span key={j} className={`marquee-textUGC marquee-textUGC-${line.color}`}>
                  {line.text}&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>

    <section className="wwc-sectionUGC">
      <div className="wwc-containerUGC">
        <div className="wwc-headerUGC">
          <h2 className="wwc-titleUGC">What We Create</h2>
          <div className="wwc-underlineUGC"></div>
        </div>

        <div className="wwc-gridUGC">
          <div className="wwc-cardUGC wwc-card-largeUGC">
            <div className="wwc-card-contentUGC">
              <div className="wwc-iconUGC">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="wwc-card-titleUGC">Product Demo Videos</h3>
              <p className="wwc-card-descUGC">
                High-energy demonstrations showing exactly how your
                product fits into a customer&apos;s daily life. No fluff, just results.
              </p>
            </div>
            <div className="wwc-card-imageUGC">
              <img
                src={UgcProduct}
                alt="Product Demo"
              />
            </div>
          </div>

          <div className="wwc-cardUGC wwc-card-smallUGC">
            <div className="wwc-iconUGC">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                <path d="M20 8 l2 2 l-2 2" />
              </svg>
            </div>
            <h3 className="wwc-card-titleUGC">Talking Head Content</h3>
            <p className="wwc-card-descUGC">
              Influencer-style direct-to-camera storytelling that creates an instant
              personal connection with your target audience.
            </p>
          </div>

          <div className="wwc-cardUGC wwc-card-smallUGC">
            <div className="wwc-iconUGC">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b59f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <circle cx="12" cy="16" r="1" fill="#9b59f5"/>
              </svg>
            </div>
            <h3 className="wwc-card-titleUGC">Problem-Solution Reels</h3>
            <p className="wwc-card-descUGC">
              Identify a pain point and position your product as the ultimate hero.
              Designed for maximum empathy and conversion.
            </p>
          </div>

          <div className="wwc-cardUGC wwc-card-smallUGC">
            <div className="wwc-iconUGC">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="wwc-card-titleUGC">Testimonial Style</h3>
            <p className="wwc-card-descUGC">
              Raw, unscripted-feeling reviews from real users that build social proof
              faster than any sales pitch.
            </p>
          </div>

          <div className="wwc-cardUGC wwc-card-smallUGC">
            <div className="wwc-iconUGC">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="m15 9-6 6"/>
                <path d="M9 9h6v6"/>
              </svg>
            </div>
            <h3 className="wwc-card-titleUGC">Hook-Based Ad Creatives</h3>
            <p className="wwc-card-descUGC">
              Specifically engineered to stop the scroll in the first 2 seconds. Optimized
              for high CTR and low CPC.
            </p>
          </div>
        </div>
      </div>
    </section>
 <section className="process-sectionUGC">
      <div className="process-containerUGC">
        <h2 className="process-titleUGC">Our Process</h2>
        <div className="process-timelineUGC">
          <div className="process-lineUGC"></div>
          {steps.map((step, index) => (
            <div key={step.id} className="process-stepUGC">
              <div className="process-icon-wrapperUGC">
                <div className="process-iconUGC">{step.icon}</div>
                {index < steps.length - 1 && <div className="process-connectorUGC"></div>}
              </div>
              <div className="process-step-labelUGC">{step.label}</div>
              <div className="process-step-descUGC">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="pricing-wrapperUGC">

      {/* HEADER */}
      <div className="pricing-headerUGC">
        <h2>Choose Your Package</h2>
        <p>Scaled content solutions for every stage of growth.</p>
      </div>

      {/* PRICING CARDS */}
      <div className="pricing-cardsUGC">

        {/* SILVER */}
        <div className="card silverUGC">
          <h3>Silver</h3>
          <h1>₹40,000</h1>

          <ul>
            <li><Check size={16}/> 5 Raw UGC Videos</li>
            <li><Check size={16}/> 1 Professional Creator</li>
            <li><Check size={16}/> 1 Round Revision</li>
            <li><Check size={16}/> Basic Editing</li>
          </ul>

          <button className="btn-lightUGC">Get Started</button>
        </div>

        {/* GOLD */}
        <div className="cardUGC gold">
          <span className="badgeUGC">POPULAR</span>
          <h3>Gold</h3>
          <h1>₹90,000</h1>

          <ul>
            <li><Check size={16}/> 15 Premium UGC Videos</li>
            <li><Check size={16}/> 3 Unique Creators</li>
            <li><Check size={16}/> Hook Variations (3 per vid)</li>
            <li><Check size={16}/> Advanced Post-Production</li>
            <li><Check size={16}/> Usage Rights Included</li>
          </ul>

          <button className="btn-whiteUGC">Choose Gold</button>
        </div>

        {/* PLATINUM */}
        <div className="cardUGC silver">
          <h3>Platinum</h3>
          <h1>₹1,80,000</h1>

          <ul>
            <li><Check size={16}/> 35 Viral UGC Assets</li>
            <li><Check size={16}/> Dedicated Creative Director</li>
            <li><Check size={16}/> Professional Scripting</li>
            <li><Check size={16}/> Monthly Content Strategy</li>
          </ul>

          <button className="btn-lightUGC">Contact Us</button>
        </div>

      </div>

      {/* STATS */}
      <div className="mini-statsUGC">
        <div><h2>4.5x</h2><p>Higher CTR</p></div>
        <div><h2>-32%</h2><p>Lower CPA</p></div>
        <div><h2>3.2x</h2><p>More Conversions</p></div>
        <div><h2>85%</h2><p>Engagement Rate</p></div>
      </div>

      {/* TESTIMONIAL */}
      <div className="testimonialUGC">
        <div className="testimonial-imgUGC">
          <img src={testimonial} alt="testimonialUGC" />
          <div className="play-btnUGC">▶</div>
        </div>

        <div className="testimonial-contentUGC">
          <p className="quoteUGC">"</p>
          <h3>
            ViralStan transformed our ad strategy. The UGC they produced
            outperformed our studio commercials by 400% in the first week.
          </h3>

          <div className="authorUGC">
            <strong>Sarah Chen</strong>
            <span>CMO, Lumin Health</span>
          </div>
        </div>
      </div>

    </div>

<div className="industry-wrapperUGC">

      {/* TITLE */}
      <h2 className="industry-titleUGC">Industries We Dominate</h2>

      {/* INDUSTRY CARDS */}
      <div className="industry-listUGC">
        <div className="industry-itemUGC">
          <ShoppingBag size={24} />
          <p>E-commerce</p>
        </div>

        <div className="industry-itemUGC">
          <Package size={24} />
          <p>D2C</p>
        </div>

        <div className="industry-itemUGC">
          <Dumbbell size={24} />
          <p>Fitness</p>
        </div>

        <div className="industry-itemUGC">
          <Sparkles size={24} />
          <p>Beauty</p>
        </div>

        <div className="industry-itemUGC">
          <Cloud size={24} />
          <p>SaaS</p>
        </div>
      </div>

      {/* CTA BOX */}
      <div className="industry-ctaUGC">
        <h1>Create Content That Actually Converts</h1>

        <p>
          Stop guessing what works. Get data-driven UGC creatives that speak
          your audience's language.
        </p>

        <div className="cta-buttonsUGC">
          <button className="primary-btnUGC">Get Started Now</button>
          <button className="secondary-btnUGC">Book A Strategy Call</button>
        </div>
      </div>

    </div>

    </>
  );
}

export default UGCPackages;