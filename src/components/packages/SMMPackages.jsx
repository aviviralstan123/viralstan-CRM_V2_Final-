import { 
  Heart, 
  TrendingUp, 
  Calendar, 
  Film, 
  AlignLeft, 
  Hash, 
  MessageSquare, 
  CheckCircle2
} from 'lucide-react';
import { FaUtensils, FaBriefcaseMedical, FaShoppingCart, FaRocket } from "react-icons/fa";
const Smmhero = "/icons.svg";
const smmImage1 = "/icons.svg";
const smmImage2 = "/icons.svg";
const smmImage3 = "/icons.svg";
const smmImage4 = "/icons.svg";
const smmImage5 = "/icons.svg";
const smmImage6 = "/icons.svg";
const smmImage7 = "/icons.svg";
const smmImage8 = "/icons.svg";
const smmImage9 = "/icons.svg";
import '../packages/SMMPackages.css';

const cards = [
  {
    image: smmImage1,
    title: 'Content creation',
    desc: 'Visual storytelling that captivates.',
  },
  {
    image: smmImage2,
    title: 'Strategy',
    desc: 'Data-driven roadmaps for scaling.',
  },
  {
    image: smmImage3,
    title: 'Engagement',
    desc: 'Building a community that cares.',
  },
  {
    image: smmImage4,
    title: 'Tracking',
    desc: 'Precise measurement of ROI.',
  },
];
const services = [
  {
    icon: <Calendar size={28} color="#5b4ef5" />,
    title: 'content planning',
    desc: 'Strategic 30-day calendars aligned with your sales cycles.',
  },
  {
    icon: <Film size={28} color="#5b4ef5" />,
    title: 'reels',
    desc: 'Viral-ready short-form video production and editing.',
  },
  {
    icon: <AlignLeft size={28} color="#5b4ef5" />,
    title: 'captions',
    desc: 'Persuasive copywriting that drives action and comments.',
  },
  {
    icon: <Hash size={28} color="#5b4ef5" />,
    title: 'hashtags',
    desc: 'Deep-research hashtag stacks for maximum reach.',
  },
  {
    icon: <TrendingUp size={28} color="#5b4ef5" />,
    title: 'analytics',
    desc: 'Detailed monthly reports with actionable insights.',
  },
  {
    icon: <MessageSquare size={28} color="#5b4ef5" />,
    title: 'engagement',
    desc: 'Proactive community management and inbox handling.',
  },
];
const plans = [
  {
    id: 'silver',
    name: 'SILVER',
    price: '₹30,000',
    features: ['12 creatives', '8 reels', 'SEO Captions', 'Monthly Analytics'],
    btnLabel: 'Choose Silver',
    btnClass: 'btn-plan-outline-blue',
    popular: false,
  },
  {
    id: 'gold',
    name: 'GOLD',
    emoji: '⭐',
    price: '₹60,000',
    features: ['20 creatives', '16 reels', 'Daily Stories', 'VIP Growth Strategy'],
    btnLabel: 'Start Scaling Now',
    btnClass: 'btn-plan-filled',
    popular: true,
  },
  {
    id: 'platinum',
    name: 'PLATINUM',
    price: '₹1,20,000',
    features: ['30 creatives', '25 reels', 'Management', '24/7 Support'],
    btnLabel: 'Contact Sales',
    btnClass: 'btn-plan-outline-purple',
    popular: false,
  },
];

function NetworkIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="6" fill="none" stroke="#b0bede" strokeWidth="2" />
      <circle cx="36" cy="12" r="5" fill="none" stroke="#b0bede" strokeWidth="2" />
      <circle cx="60" cy="36" r="5" fill="none" stroke="#b0bede" strokeWidth="2" />
      <circle cx="36" cy="60" r="5" fill="none" stroke="#b0bede" strokeWidth="2" />
      <circle cx="12" cy="36" r="5" fill="none" stroke="#b0bede" strokeWidth="2" />
      <line x1="36" y1="17" x2="36" y2="30" stroke="#b0bede" strokeWidth="1.5" />
      <line x1="55" y1="36" x2="42" y2="36" stroke="#b0bede" strokeWidth="1.5" />
      <line x1="36" y1="55" x2="36" y2="42" stroke="#b0bede" strokeWidth="1.5" />
      <line x1="17" y1="36" x2="30" y2="36" stroke="#b0bede" strokeWidth="1.5" />
    </svg>
  );
}
function SMMPackages() {
  return (
    <>
    <section className="hero-sectionSMM">
      <div className="hero-containerSMM">
        <div className="hero-leftSMM">
          <div className="hero-badgeSMM">
            <TrendingUp size={14} />
            <span>NEXT-GEN SOCIAL GROWTH</span>
          </div>
          <h1 className="hero-headingSMM">
            Social Media That<br />
            Turns <span className="hero-highlightSMM">Followers</span><br />
            Into Customers
          </h1>
          <p className="hero-subtextSMM">
            Strategy, reels, and content systems for real growth.<br />
            We don't just post; we build conversion engines for<br />
            modern brands.
          </p>
          <div className="hero-cta-groupSMM">
            <button className="btn-cta-primarySMM">
              Get Free Marketing Audit &nbsp;→
            </button>
            <button className="btn-cta-secondarySMM">View Packages</button>
          </div>
        </div>

        <div className="hero-rightSMM">
          <div className="hero-image-wrapperSMM">
            <img
              src={Smmhero}
              alt="Team meeting"
              className="hero-main-imageSMM"
            />
            <div className="floating-cardSMM likes-cardSMM">
              <div className="likes-icon-wrapSMM">
                <Heart size={18} color="#5b4ef5" fill="#5b4ef5" />
              </div>
              <div className="likes-infoSMM">
                <span className="likes-numberSMM">12.4k Likes</span>
                <span className="likes-subSMM">Real-time engagement</span>
              </div>
            </div>
            <div className="floating-cardSMM growth-cardSMM">
              <div className="growth-headerSMM">
                <span className="growth-labelSMM">Daily Growth</span>
                <span className="growth-percentSMM">+24%</span>
              </div>
              <div className="bar-chartSMM">
                <div className="barSMM" style={{ height: '30px' }}></div>
                <div className="barSMM" style={{ height: '40px' }}></div>
                <div className="barSMM" style={{ height: '28px' }}></div>
                <div className="barSMM active" style={{ height: '60px' }}></div>
                <div className="barSMM" style={{ height: '35px' }}></div>
                <div className="barSMM" style={{ height: '45px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="howwegrow-sectionSMM">
      <div className="howwegrow-containerSMM">
        <div className="howwegrow-headerSMM">
          <h2 className="howwegrow-titleSMM">How We Grow Your Brand</h2>
          <p className="howwegrow-subtitleSMM">Our systematic approach to digital dominance.</p>
        </div>
        <div className="howwegrow-gridSMM">
          {cards.map((card, idx) => (
            <div className="grow-cardSMM" key={idx}>
              <img src={card.image} alt={card.title} className="grow-card-imgSMM" />
              <div className="grow-card-overlaySMM">
                <h3 className="grow-card-titleSMM">{card.title}</h3>
                <p className="grow-card-descSMM">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="services-sectionSMM" id="services">
      <div className="services-containerSMM">
        <div className="services-topSMM">
          <div className="services-top-leftSMM">
            <h2 className="services-titleSMM">Everything You Need To Scale</h2>
            <p className="services-subtitleSMM">
              Our comprehensive service suite handles the heavy lifting so you can focus on
              <br />
              your business.
            </p>
          </div>
          <div className="services-top-iconSMM">
            <NetworkIcon />
          </div>
        </div>
        <div className="services-gridSMM">
          {services.map((svc, idx) => (
            <div className="service-cardSMM" key={idx}>
              <div className="service-card-iconSMM">{svc.icon}</div>
              <h3 className="service-card-titleSMM">{svc.title}</h3>
              <p className="service-card-descSMM">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="creative-sectionSMM">
      <div className="creative-containerSMM">
        <h2 className="creative-titleSMM">Our Creative Impact</h2>
        <div className="creative-gridSMM">
          <div className="creative-col-leftSMM">
            <div className="creative-img-wrapSMM">
              <img
                src={smmImage5}
                alt="Fashion creative"
                className="creative-imgSMM"
              />
            </div>
            <div className="creative-img-wrapSMM">
              <img
                src={smmImage6}
                alt="Mobile app creative"
                className="creative-imgSMM"
              />
            </div>
          </div>
          <div className="creative-col-centerSMM">
            <div className="creative-img-wrapSMM creative-img-tallSMM">
              <img
                src={smmImage7}
                alt="Product creative"
                className="creative-imgSMM"
              />
            </div>
          </div>
          <div className="creative-col-rightSMM">
            <div className="creative-img-wrapSMM">
              <img
                src={smmImage8}
                alt="Food creative"
                className="creative-imgSMM"
              />
            </div>
            <div className="creative-img-wrapSMM">
              <img
                src={smmImage9}
                alt="Fitness creative"
                className="creative-imgSMM"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
<section className="pricing-sectionSMM" id="pricing">
      <div className="pricing-containerSMM">
        <h2 className="pricing-titleSMM">Flexible Growth Plans</h2>
        <p className="pricing-subtitleSMM">Select the engine that fits your current speed.</p>
        <div className="pricing-gridSMM">
          {plans.map((plan) => (
            <div
              className={`pricing-cardSMM ${plan.popular ? 'pricing-card-popular' : ''}`}
              key={plan.id}
            >
              {plan.popular && (
                <div className="popular-badge-wrapSMM">
                  <span className="popular-badgeSMM">MOST POPULAR</span>
                </div>
              )}
              <div className="plan-headerSMM">
                <h3 className="plan-nameSMM">
                  {plan.name} {plan.emoji && <span className="plan-emoji">{plan.emoji}</span>}
                </h3>
                <div className="plan-priceSMM">
                  <span className="plan-price-amountSMM">{plan.price}</span>
                  <span className="plan-price-periodSMM">/mo</span>
                </div>
              </div>
              <ul className="plan-featuresSMM">
                {plan.features.map((feat, i) => (
                  <li className="plan-featureSMM" key={i}>
                    <CheckCircle2 size={18} color="#5b4ef5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn-planSMM ${plan.btnClass}`}>{plan.btnLabel}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="performance-wrapperSMM">
      
      {/* LEFT SIDE */}
      <div className="performance-leftSMM">
        <h2 className="heading">Performance That Speaks</h2>

        <div className="metricSMM">
          <h1 className="blue">312%</h1>
          <p>MORE ENGAGEMENT</p>
          <div className="lineSMM blue-lineSMM"></div>
        </div>

        <div className="metricSMM">
          <h1 className="purple">15×</h1>
          <p>MORE LEADS</p>
          <div className="lineSMM purple-lineSMM"></div>
        </div>

        <div className="metricSMM">
          <h1 className="violet">240k+</h1>
          <p>FOLLOWER GROWTH</p>
          <div className="lineSMM violet-lineSMM"></div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="performance-rightSMM">
        <h2 className="headingSMM">Industries We Master</h2>

        <div className="gridSMM">
          <div className="cardSMM">
            <FaUtensils />
            <p>Restaurants</p>
          </div>

          <div className="cardSMM">
            <FaBriefcaseMedical />
            <p>Healthcare</p>
          </div>

          <div className="cardSMM">
            <FaShoppingCart />
            <p>Ecommerce</p>
          </div>

          <div className="cardSMM">
            <FaRocket />
            <p>Startups</p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="ctaSMM">
        <h1>Ready To Grow Your Social Media?</h1>
        <p>
          Join 50+ brands that scaled their revenue through our content systems.
        </p>

        <button className="cta-btnSMM">
          Get Started Today 🚀
        </button>
      </div>
    </div>

    </>
  );
}

export default SMMPackages;