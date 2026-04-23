import '../packages/TechnicalSeoPackage.css';
import Technicalimage from '../../assets/MataADsPackagesImg/TechnicalSEO1.png'
import Technicalimage1 from '../../assets/MataADsPackagesImg/TechnicalSEO.png'
import { Zap, Search, Code2, BarChart2, Wrench, ClipboardCheck, Eye } from 'lucide-react';
import { TrendingUp,CheckCircle,  LayoutGrid, Monitor } from 'lucide-react';
import {  Clock, FileText, Image, Link2, Mail, Phone, ShoppingCart, Globe, BookOpen, Headphones as HeadphonesIcon, X } from 'lucide-react';
const cards = [
  {
    icon: <TrendingUp size={26} />,
    title: 'Better Rankings',
    desc: 'Boost visibility by meeting search engine requirements perfectly.',
    iconColor: '#4f63f8',
  },
  {
    icon: <Zap size={26} />,
    title: 'Faster Website',
    desc: 'Improve retention with page speeds that exceed expectations.',
    iconColor: '#4f63f8',
  },
  {
    icon: <LayoutGrid size={26} />,
    title: 'Error-Free Structure',
    desc: 'Eliminate 404s and redirect chains that confuse bots.',
    iconColor: '#4f63f8',
  },
  {
    icon: <Monitor size={26} />,
    title: 'Higher Conversions',
    desc: 'A smooth user experience directly leads to more sales.',
    iconColor: '#4f63f8',
  },
];
const items = [
  'Website Speed Optimization',
  'Core Web Vitals Improvement',
  'Crawl Errors & Dead Ends',
  'Schema Markup Implementation',
  'XML Sitemaps & Robots.txt',
  'HTTPS & Security Audits',
  'Mobile Friendliness Fixes',
  'JS/CSS Delivery Optimization',
  'Canonicalization Issues',
];
const steps = [
  {
    icon: <Search size={24} />,
    title: 'Audit',
    desc: 'Full recursive crawl of your entire domain.',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Analysis',
    desc: 'Prioritizing fixes based on impact and ROI.',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Implementation',
    desc: 'Hands-on fixing of server and code errors.',
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: 'Testing',
    desc: 'Rigorous verification of every change made.',
  },
  {
    icon: <Eye size={24} />,
    title: 'Monitoring',
    desc: '24/7 tracking of crawl stats and health.',
  },
];

function TechnicalSeoPackage() {
  return (
    <>
    <section className="heroTech" id="technical-seo">
      <div className="hero-containerTech">
        <div className="hero-contentTech">
          <h1 className="hero-headingTech">
            <span className="hero-heading-blackTech">Technical SEO That</span>
            <span className="hero-heading-gradientTech"> Fixes Your Website</span>
            <span className="hero-heading-blackTech"> From The Core</span>
          </h1>
          <p className="hero-subtextTech">
            Rankings start with infrastructure. We identify and resolve the hidden
            bottlenecks preventing your site from reaching the top of Google.
          </p>
          <div className="hero-buttonsTech">
            <button className="btn-primaryTech">Get Free Audit</button>
            <button className="btn-secondaryTech">Talk to Expert</button>
          </div>
        </div>
        <div className="hero-image-wrapperTech">
          <div className="hero-image-cardTech">
            <img
              src={Technicalimage}
              alt="SEO Performance Chart"
              className="hero-imageTech"
            />
          </div>
        </div>
      </div>
    </section>
     <section className="what-is-seoTech" id="solutions">
      <div className="what-is-seo-containerTech">
        <div className="what-is-seo-image-wrapperTechv">
          <img
            src={Technicalimage1}
            alt="Technical SEO Technology"
            className="what-is-seo-imageTech"
          />
        </div>

        <div className="what-is-seo-contentTech">
          <span className="what-is-seo-labelTech">FOUNDATION FIRST</span>
          <h2 className="what-is-seo-headingTech">What is Technical SEO?</h2>
          <p className="what-is-seo-descTech">
            Technical SEO refers to website and server optimizations that help
            search engine spiders crawl and index your site more effectively (to
            help improve organic rankings).
          </p>

          <div className="what-is-seo-featuresTech">
            <div className="feature-itemTech">
              <div className="feature-iconTech">
                <Zap size={20} />
              </div>
              <div className="feature-textTech">
                <h4>Speed Optimization</h4>
                <p>Eliminate bloat for lightning-fast load times.</p>
              </div>
            </div>

            <div className="feature-itemTech">
              <div className="feature-iconTech">
                <Search size={20} />
              </div>
              <div className="feature-textTech">
                <h4>Crawl Efficiency</h4>
                <p>Ensuring Google finds your best content without friction.</p>
              </div>
            </div>

            <div className="feature-itemTech">
              <div className="feature-iconTech">
                <Code2 size={20} />
              </div>
              <div className="feature-textTech">
                <h4>Indexing Control</h4>
                <p>Managing how search engines see and store your pages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                 <section className="why-mattersTech">
      <div className="why-matters-containerTech">
        <div className="why-matters-headerTech">
          <h2 className="why-matters-headingTech">Why Technical SEO Matters</h2>
          <p className="why-matters-subtextTech">The strongest content can't rank if the foundation is broken.</p>
        </div>
        <div className="why-matters-cardsTech">
          {cards.map((card, i) => (
            <div className="why-cardTech" key={i}>
              <div className="why-card-iconTech" style={{ color: card.iconColor }}>
                {card.icon}
              </div>
              <h3 className="why-card-titleTech">{card.title}</h3>
              <p className="why-card-descTech">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 <section className="critical-elementsTech">
      <div className="critical-elements-containerTech">
        <div className="critical-elements-cardTech">
          <div className="critical-elements-leftTech">
            <h2 className="critical-elements-headingTech">Critical Elements We Fix</h2>
            <div className="critical-items-gridTech">
              {items.map((item, i) => (
                <div className="critical-itemTech" key={i}>
                  <CheckCircle size={18} className="check-iconTech" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="critical-elements-decoTech">
            <svg width="160" height="220" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.12">
              <path d="M80 10 L80 200 M80 10 L50 40 M80 10 L110 40" stroke="#4f63f8" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="80" cy="10" r="8" fill="#4f63f8"/>
              <line x1="50" y1="40" x2="50" y2="200" stroke="#4f63f8" strokeWidth="2"/>
              <line x1="110" y1="40" x2="110" y2="200" stroke="#4f63f8" strokeWidth="2"/>
              <line x1="50" y1="100" x2="110" y2="100" stroke="#4f63f8" strokeWidth="2"/>
              <line x1="50" y1="150" x2="110" y2="150" stroke="#4f63f8" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section className="roadmapTech" id="process">
      <div className="roadmap-containerTech">
        <h2 className="roadmap-headingTech">The Roadmap to Perfection</h2>
        <div className="roadmap-stepsTech">
          {steps.map((step, i) => (
            <div className="roadmap-stepTech" key={i}>
              <div className="roadmap-step-icon-wrapperTech">
                <div className="roadmap-step-iconTech">
                  {step.icon}
                </div>
                {i < steps.length - 1 && <div className="roadmap-connectorTech" />}
              </div>
              <h3 className="roadmap-step-titleTech">{step.title}</h3>
              <p className="roadmap-step-descTech">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="proven-gainsTech">
      <div className="proven-gains-containerTech">
        <div className="proven-gains-leftTech">
          <h2 className="proven-gains-headingTech">Proven Technical Gains</h2>
          <p className="proven-gains-descTech">
            We don't just fix errors; we move needles. Our technical optimizations result in
            measurable growth across the board.
          </p>
          <div className="progress-cardsTech">
            <div className="progress-cardTech">
              <div className="progress-card-headerTech">
                <span className="progress-labelTech">Faster Website Speed</span>
                <span className="progress-valueTech">+85%</span>
              </div>
              <div className="progress-bar-trackTech">
                <div className="progress-bar-fillTech" style={{ width: '85%' }} />
              </div>
            </div>
            <div className="progress-cardTech">
              <div className="progress-card-headerTech">
                <span className="progress-labelTech">Improved Crawlability</span>
                <span className="progress-valueTech" style={{ color: '#4f63f8' }}>+120%</span>
              </div>
              <div className="progress-bar-trackTech">
                <div className="progress-bar-fillTech" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="proven-gains-rightTech">
          <div className="stat-gridTech">
            <div className="stat-cardTech stat-card-blueTech">
              <div className="stat-valueTech">0.8s</div>
              <div className="stat-labelTech">Average LCP Improvement</div>
            </div>
            <div className="stat-cardTech stat-card-grayTech">
              <div className="stat-valueTech stat-value-darkTech">99/100</div>
              <div className="stat-labelTech stat-label-darkTech">Lighthouse Performance</div>
            </div>
            <div className="stat-cardTech stat-card-whiteTech">
              <div className="stat-valueTech stat-value-darkTech">15<span className="stat-xTech">x</span></div>
              <div className="stat-labelTech stat-label-darkTech">Increase in Indexed Pages</div>
            </div>
            <div className="stat-cardTech stat-card-purpleTech">
              <div className="stat-valueTech">-60%</div>
              <div className="stat-labelTech">Bounce Rate Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
 <section className="pricingTech" id="case-studies">
      <div className="pricing-containerTech">
        <h2 className="pricing-headingTech">Technical SEO Packages</h2>

        <div className="pricing-cardsTech">
          <div className="pricing-cardTech pricing-card-basicTech">
            <div className="pricing-plan-labelTech">BASIC OR SMALL BUSINESS</div>
            <div className="pricing-priceTech">
              <span className="pricing-currencyTech">₹</span>12,000
              <span className="pricing-periodTech"> / $150 Monthly</span>
            </div>
            <p className="pricing-descTech">Perfect for startups and local businesses looking for a solid foundation.</p>

            <div className="pricing-section-labelTech">CORE SETUP &amp; OPTIMIZATION</div>
            <ul className="pricing-featuresTech">
              <li><CheckCircle size={15} className="feat-checkTech" /> Website Audit Analysis</li>
              <li><CheckCircle size={15} className="feat-checkTech" /> HTTPS Migration &amp; SSL</li>
              <li><CheckCircle size={15} className="feat-checkTech" /> Speed Optimization</li>
              <li><CheckCircle size={15} className="feat-checkTech" /> Redirect &amp; Canonicalization</li>
            </ul>

            <div className="pricing-section-labelTech">TECHNICAL PERFORMANCE</div>
            <ul className="pricing-featuresTech">
              <li><Clock size={15} className="feat-iconTech" /> HTTP Errors (Max 10 Pages each)</li>
              <li><FileText size={15} className="feat-iconTech" /> Meta &amp; Tag Issues (Max 20 Pages)</li>
              <li><Image size={15} className="feat-iconTech" /> Alt Text (Max 20 Pages)</li>
              <li><X size={15} className="feat-iconTech feat-xTech" /> No Inbound Link Error</li>
            </ul>

            <div className="pricing-section-labelTech">GROWTH &amp; SUPPORT</div>
            <ul className="pricing-featuresTech">
              <li><BookOpen size={15} className="feat-checkTech" /> Blog Opt (2) &amp; Posting (1)</li>
              <li><Mail size={15} className="feat-iconTech" /> Email &amp; Chat Support</li>
            </ul>

            <button className="pricing-btnTech pricing-btn-outlineTech">Select Basic</button>
          </div>

          <div className="pricing-cardTech pricing-card-popularTech">
            <div className="popular-badgeTech">MOST POPULAR</div>
            <div className="pricing-plan-labelTech">ADVANCE OR MID SIZE</div>
            <div className="pricing-priceTech pricing-price-whiteTech">
              <span className="pricing-currencyTech">₹</span>20,000
              <span className="pricing-periodTech"> / $250 Monthly</span>
            </div>
            <p className="pricing-descTech">For growing businesses needing higher volume and priority care.</p>

            <div className="pricing-section-labelTech pricing-section-label-blueTech">EXPANDED CORE SERVICES</div>
            <ul className="pricing-featuresTech">
              <li><CheckCircle size={15} className="feat-checkTech feat-check-blueTech" /> Everything in Basic</li>
              <li><CheckCircle size={15} className="feat-checkTech feat-check-blueTech" /> Comprehensive Indexing Cleanup</li>
            </ul>

            <div className="pricing-section-labelTech pricing-section-label-blueTech">ENHANCED TECHNICALS</div>
            <ul className="pricing-featuresTech">
              <li><Clock size={15} className="feat-iconTech" /> HTTP Errors (Max 20 Pages)</li>
              <li><FileText size={15} className="feat-iconTech" /> Meta &amp; Tag Issues (Max 30 Pages)</li>
              <li><Image size={15} className="feat-iconTech" /> Alt Text (Max 30 Pages)</li>
              <li><Link2 size={15} className="feat-iconTech" /> Inbound Link Error Fixing ✓</li>
            </ul>

            <div className="pricing-section-labelTech pricing-section-label-blueTech">STRATEGIC GROWTH</div>
            <ul className="pricing-featuresTech">
              <li><BookOpen size={15} className="feat-iconTech" /> Blog Opt (5) &amp; Posting (2)</li>
              <li><Phone size={15} className="feat-iconTech" /> Email, Chat &amp; Priority Call</li>
            </ul>

            <button className="pricing-btnTech pricing-btn-gradientTech">Go Pro Now</button>
          </div>

          <div className="pricing-cardTech pricing-card-enterpriseTech">
            <div className="pricing-plan-labelTech">ENTERPRISE OR E-COMMERCE</div>
            <div className="pricing-priceTech">
              <span className="pricing-currencyTech">₹</span>28,000
              <span className="pricing-periodTech"> / $400 Monthly</span>
            </div>
            <p className="pricing-descTech">Total optimization for large catalogs and high-traffic portals.</p>

            <div className="pricing-section-labelTech pricing-section-label-blueTech">MAXIMUM VISIBILITY</div>
            <ul className="pricing-featuresTech">
              <li><CheckCircle size={15} className="feat-checkTech feat-check-blueTech" /> Everything in Advance</li>
              <li><ShoppingCart size={15} className="feat-iconTech" /> E-commerce Schema Markup</li>
            </ul>

            <div className="pricing-section-labelTech pricing-section-label-blueTech">ENTERPRISE LIMITS</div>
            <ul className="pricing-featuresTech">
              <li><Clock size={15} className="feat-iconTech" /> HTTP Errors (Max 30 Pages)</li>
              <li><FileText size={15} className="feat-iconTech" /> Meta &amp; Tag Issues (Max 50 Pages)</li>
              <li><Image size={15} className="feat-iconTech" /> Alt Text (Max 50 Pages)</li>
              <li><Link2 size={15} className="feat-iconTech" /> Advanced Linking Strategy ✓</li>
            </ul>

            <div className="pricing-section-labelTech pricing-section-label-blueTech">PREMIUM CONTENT</div>
            <ul className="pricing-featuresTech">
              <li><BookOpen size={15} className="feat-iconTech" /> Blog Opt (10) &amp; Posting (3)</li>
              <li><HeadphonesIcon size={15} className="feat-iconTech" /> 24/7 Dedicated Support</li>
            </ul>

            <button className="pricing-btnTech pricing-btn-outlineTech">Enterprise Solutions</button>
          </div>
        </div>
      </div>
    </section>
    <div className="banner-wrapperTech">
      <div className="banner-boxTech">

        <h1>Fix Your Website Before Scaling Traffic</h1>

        <p>
          Don’t pour water into a leaky bucket. Let’s patch your technical
          foundations today.
        </p>

        <div className="banner-buttonsTech">
          <button className="primary-btnTech">Get Free Audit</button>
          <button className="secondary-btnTech">Start Now</button>
        </div>

      </div>
    </div>
    </>
  );
}

export default TechnicalSeoPackage;
