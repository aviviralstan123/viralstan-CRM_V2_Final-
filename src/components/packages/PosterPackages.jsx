import '../packages/PosterPackages.css';
import ecommerce  from '../../assets/MataADsPackagesImg/Container.png'
// import im from '../../assets/MataADsPackagesImg/Poster1.png'
import realestate from '../../assets/MataADsPackagesImg/Container1.png'
import education from '../../assets/MataADsPackagesImg/Container2.png'
import healthcare from '../../assets/MataADsPackagesImg/Container3.png'
import startups  from '../../assets/MataADsPackagesImg/Container4.png'
import poster1 from '../../assets/MataADsPackagesImg/Poster1.png'
import poster2 from '../../assets/MataADsPackagesImg/Poster2.png'
import poster3 from '../../assets/MataADsPackagesImg/Poster3.png'
import poster4 from '../../assets/MataADsPackagesImg/Poster4.png'
import poster5 from '../../assets/MataADsPackagesImg/Poster5.png'
import poster6 from '../../assets/MataADsPackagesImg/Poster6.png'
import poster7 from '../../assets/MataADsPackagesImg/Poster7.png'
import poster8 from '../../assets/MataADsPackagesImg/Poster8.png'
import poster9 from '../../assets/MataADsPackagesImg/Poster9.png'
import poster10 from '../../assets/MataADsPackagesImg/Poster10.png'
import poster11 from '../../assets/MataADsPackagesImg/Poster11.png'
import {
  TrendingUp,
  Eye,
  MousePointerClick,
  BadgeCheck
} from "lucide-react";

const services = [
  {
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Social Media Posts',
    desc: "Engaging static designs tailored for every platform's unique algorithm.",
  },
  {
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Ad Creatives',
    desc: 'High-conversion banners and ads designed to lower your CPA significantly.',
  },
  {
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Carousel Posts',
    desc: 'Educational and storytelling carousels that maximize platform watch time.',
  },
  {
    image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Story Creatives',
    desc: 'Immersive 9:16 designs that feel native to the story-viewing experience.',
  },
  {
    image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=600',
    title: 'Branding Visuals',
    desc: 'A cohesive visual identity that makes your brand instantly recognizable.',
  },
  {
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Campaign Creatives',
    desc: 'Full-suite visual sets for product launches or seasonal marketing pushes.',
  },
];
const steps = [
  { num: '1', label: 'Brief', desc: 'We understand your goals' },
  { num: '2', label: 'Concept', desc: 'Ideation and moodboarding' },
  { num: '3', label: 'Design', desc: 'Crafting your visuals' },
  { num: '4', label: 'Review', desc: 'Refining with your feedback' },
  { num: '5', label: 'Delivery', desc: 'Final high-res assets' },
];

function PosterPackages() {
  return (
    <>
    <section className="heropost" id="services">
      <div className="hero-contentpost">
        <h1 className="hero-titlepost">
          Designs That Don't Just<br />
          Look Good. <span className="hero-title-bluepost">They<br />Perform.</span>
        </h1>
        <p className="hero-subtitlepost">
          We create scroll-stopping creatives that grab attention, communicate<br />
          clearly, and drive engagement.
        </p>
        <div className="hero-buttonspost">
          <button className="btn-primarypost">Get Creative Designs</button>
          <button className="btn-outlinepost">Start Project</button>
        </div>
      </div>

      <div className="hero-cardspost">
        <div className="hero-cardpost hero-card-adpost">
          <img
            src={poster1}
            alt="Ad Creative"
          />
          <span className="hero-card-labelpost">Ad Creative</span>
        </div>

        <div className="hero-cardpost hero-card-brandpost">
          <img
            src={poster2}
            alt="Brand Visuals"
          />
          <span className="hero-card-labelpost hero-card-label-bottompost">Brand Visuals</span>
        </div>

        <div className="hero-cardpost hero-card-centerpost">
          <img
            src={poster3}
            alt="Dashboard Design"
          />
        </div>

        <div className="hero-cardpost hero-card-phonepost">
          <img
            src={poster4}
            alt="High Engagement"
          />
          <span className="hero-card-labelpost hero-card-label-top-rightpost">High Engagement</span>
        </div>

        <div className="hero-cardpost hero-card-socialpost">
          <img
            src={poster5}
            alt="Social Media Design"
          />
          <span className="hero-card-labelpost hero-card-label-bottom-rightpost">Social Media Design</span>
        </div>
      </div>
    </section>
    <section className="showcasepost" id="showcase">
      <div className="showcase-gridpost">
        <div className="showcase-itempost showcase-item-largepost">
          <img
            src={poster6}
            alt="Abstract blue purple rays"
          />
        </div>
        <div className="showcase-itempost showcase-item-smpost">
          <img
            src={poster7}
            alt="Product mockup"
          />
        </div>
        <div className="showcase-itempost showcase-item-smpost">
          <img
            src={poster8}
            alt="Smartphone dark"
          />
        </div>
        <div className="showcase-itempost showcase-item-smpost">
          <img
            src={poster9}
            alt="UI Dashboard"
          />
        </div>
        <div className="showcase-itempost showcase-item-smpost">
          <img
            src={poster10}
            alt="Abstract orange red"
          />
        </div>
        <div className="showcase-itempost showcase-item-smpost">
          <img
            src={poster11}
            alt="Orange car"
          />
        </div>
      </div>
    </section>
    <section className="why-designpost">
      <div className="why-design-innerpost">
        <div className="why-design-textpost">
          <p className="why-linepost">
            People stop for <span className="why-bluepost">visuals.</span><br />
            Not captions.
          </p>
          <p className="why-linepost">
            Design is your <span className="why-bluepost">first<br />impression.</span>
          </p>
          <p className="why-linepost">
            Good design gets<br />
            attention. <span className="why-purplepost">Great design<br />drives action.</span>
          </p>
        </div>

        <div className="why-design-card-wrapperpost">
          <div className="why-design-glowpost"></div>
          <div className="why-stat-cardpost">
            <div className="why-stat-iconpost">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f7ff5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            </div>
            <div className="why-stat-contentpost">
              <div className="why-stat-numberpost">3.4<span>x</span></div>
              <div className="why-stat-labelpost">BETTER CTR</div>
              <p className="why-stat-descpost">
                Visual content is 40x more likely to get<br />shared on social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
 <section className="what-we-designpost" id="services">
      <div className="what-we-design-innerpost">
        <div className="what-we-design-headerpost">
          <h2 className="what-we-design-titlepost">What We Design</h2>
          <div className="what-we-design-underlinepost"></div>
        </div>
        <div className="what-we-design-gridpost">
          {services.map((s, i) => (
            <div className="service-cardpost" key={i}>
              <div className="service-card-imagepost">
                <img src={s.image} alt={s.title} />
              </div>
              <div className="service-card-bodypost">
                <h3 className="service-card-titlepost">{s.title}</h3>
                <p className="service-card-descpost">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="design-processpost">
      <div className="design-process-innerpost">
        <h2 className="design-process-titlepost">Our Design Process</h2>
        <div className="design-process-stepspost">
          {steps.map((step, i) => (
            <div className="process-steppost" key={i}>
              <div className="process-step-circlepost">
                <span>{step.num}</span>
              </div>
              {i < steps.length - 1 && <div className="process-connectorpost"></div>}
              <div className="process-step-labelpost">{step.label}</div>
              <div className="process-step-descpost">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="pricingpost" id="pricing">
      <div className="pricing-innerpost">
        <h2 className="pricing-titlepost">Choose Your Growth Path</h2>
        <p className="pricing-subtitlepost">Transparent pricing for premium design assets.</p>

        <div className="pricing-cardspost">
          <div className="pricing-cardpost pricing-card-silverpost">
            <div className="pricing-plan-namepost silver-namepost">Silver</div>
            <div className="pricing-pricepost">&#8377;10,000</div>
            <ul className="pricing-featurespost">
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                10 Custom Posters
              </li>
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                2 Revision Rounds
              </li>
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                Standard Delivery
              </li>
              <li className="feature-itempost feature-nopost">
                <span className="feature-iconpost no">&#10005;</span>
                Premium Illustrations
              </li>
            </ul>
            <button className="pricing-btnpost pricing-btn-outlinepost">Select Plan</button>
          </div>

          <div className="pricing-cardpost pricing-card-goldpost">
            <div className="pricing-popular-badgepost">MOST POPULAR</div>
            <div className="pricing-plan-namepost gold-namepost">Gold</div>
            <div className="pricing-pricepost gold-pricepost">&#8377;20,000</div>
            <ul className="pricing-featurespost">
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                25 Premium Posters
              </li>
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                Unlimited Revisions
              </li>
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                High Priority Support
              </li>
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                Dedicated Designer
              </li>
            </ul>
            <button className="pricing-btnpost pricing-btn-goldpost">Start with Gold</button>
          </div>

          <div className="pricing-cardpost pricing-card-platinumpost">
            <div className="pricing-plan-namepost platinum-namepost">Platinum</div>
            <div className="pricing-pricepost">&#8377;40,000</div>
            <ul className="pricing-featurespost">
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                60 Advanced Creatives
              </li>
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                Full Campaign Support
              </li>
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                Motion Graphics Included
              </li>
              <li className="feature-itempost feature-yespost">
                <span className="feature-iconpost yes">&#10003;</span>
                Source Files Provided
              </li>
            </ul>
            <button className="pricing-btnpost pricing-btn-outlinepost">Select Plan</button>
          </div>
        </div>
      </div>
    </section>

     <div className="impact-wrapperpost">

      {/* TOP SECTION */}
      <h2 className="main-titlepost">The ViralStan Impact</h2>

      <div className="impact-gridpost">
        <div className="impact-cardpost">
          <TrendingUp size={28} className="iconpost blue" />
          <h3>Higher Engagement</h3>
          <p>Our designs stop the scroll and invite interaction.</p>
        </div>

        <div className="impact-cardpost">
          <Eye size={28} className="iconpost purple" />
          <h3>Better Brand Recall</h3>
          <p>Memorable visuals ensure your brand stays top of mind.</p>
        </div>

        <div className="impact-cardpost">
          <MousePointerClick size={28} className="iconpost violet" />
          <h3>Improved Ad Performance</h3>
          <p>Conversion-focused layouts that drive clicks and sales.</p>
        </div>

        <div className="impact-cardpost">
          <BadgeCheck size={28} className="iconpost cyan" />
          <h3>Strong Visual Identity</h3>
          <p>Consistency across platforms builds deep professional trust.</p>
        </div>
      </div>

      {/* INDUSTRIES */}
      <h2 className="main-titlepost mt">Industries We Empower</h2>

      <div className="industry-gridpost">
        <div className="industry-cardpost">
          <img src={ecommerce} alt="" />
          <span>E-commerce</span>
        </div>

        <div className="industry-cardpost">
          <img src={realestate} alt="" />
          <span>Real Estate</span>
        </div>

        <div className="industry-cardpost">
          <img src={education} alt="" />
          <span>Education</span>
        </div>

        <div className="industry-cardpost">
          <img src={healthcare} alt="" />
          <span>Healthcare</span>
        </div>

        <div className="industry-cardpost">
          <img src={startups} alt="" />
          <span>Startups</span>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-boxpost">
        <h1>Make Your Brand Visually Unforgettable</h1>
        <p>
          Stand out in crowded feeds with powerful, high-quality designs that speak your brand’s truth.
        </p>

        <div className="cta-buttonspost">
          <button className="primary-btnpost">Start Designing</button>
          <button className="secondary-btnpost">Talk to Expert</button>
        </div>
      </div>
    </div>


    </>
  );
}

export default PosterPackages;