import '../packages/LocalSeoPackage.css';
// const Analytics = "/localseo.png";
// const Analytics1 = "/icons.svg";
import Analytics from '../../assets/MataADsPackagesImg/localseo.png'
import Analytics1 from '../../assets/MataADsPackagesImg/localseo1.png'
import React, { useState } from "react";
import {
  Home,
  BriefcaseMedical,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  ChevronDown
} from "lucide-react";

const stats = [
  { value: '1000+', label: 'PROJECTS', color: '#2563eb' },
  { value: '98%', label: 'SUCCESS RATE', color: '#2563eb' },
  { value: 'Top Rated', label: 'AGENCY', color: '#7c3aed' },
  { value: 'Data-Driven', label: 'SEO', color: '#111827' },
];
const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <line x1="8" y1="14" x2="8.01" y2="14"></line>
        <line x1="12" y1="14" x2="12.01" y2="14"></line>
        <line x1="16" y1="14" x2="16.01" y2="14"></line>
      </svg>
    ),
    title: 'Monthly Reports',
    desc: 'Comprehensive PDF breakdowns of every metric that matters.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    title: 'Ranking Tracking',
    desc: 'Real-time monitoring of your positions across desktop and mobile.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    title: 'Traffic Insights',
    desc: 'Deep dive into where your users are coming from and what they do.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
        <line x1="12" y1="18" x2="12" y2="21"></line>
        <line x1="12" y1="2" x2="12" y2="6"></line>
      </svg>
    ),
    title: 'ROI Tracking',
    desc: "We don't just track clicks; we track your bottom-line revenue growth.",
  },
];
const columns = [
  {
    heading: 'ON-PAGE SEO',
    color: '#2563eb',
    items: [
      'Local Keyword Density',
      'Title & Meta Tags',
      'Schema Markup',
      'Image Alt Text Local',
      'Location Page Creation',
    ],
  },
  {
    heading: 'OFF-PAGE SEO',
    color: '#2563eb',
    items: [
      'Niche Citations',
      'Local Press Releases',
      'Community Backlinks',
      'Map Embed Strategy',
      'Competitor Gap Analysis',
    ],
  },
  {
    heading: 'TECHNICAL SEO',
    color: '#2563eb',
    items: [
      'Site Speed Optimization',
      'Mobile Responsiveness',
      'XML Sitemap Fixes',
      'Robots.txt Tuning',
      'NAP Consistency Audit',
    ],
  },
  {
    heading: 'CONTENT',
    color: '#111827',
    items: [
      'Localized Blog Posts',
      'Service Descriptions',
      'FAQ Optimization',
      'Customer Case Studies',
      'Google Map Updates',
    ],
  },
];
const steps = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    title: 'Business Audit',
    desc: 'In-depth analysis of your current local presence.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
      </svg>
    ),
    title: 'Keyword Research',
    desc: 'Finding high-intent local terms that your customers use.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    title: 'GBP Optimization',
    desc: 'Total optimization of your Google Business Profile.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
    ),
    title: 'Citations',
    desc: 'Consistent business listings across premium directories.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    title: 'Content Prep',
    desc: 'Hyper-local content creation that builds authority.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    title: 'ROI Tracking',
    desc: 'Full reporting on rankings, calls, and conversions.',
  },
];
// function SeoChart() {
//   return (
//     <div className="seo-chart-wrapper">
//       <div className="seo-chart-card">
//         <div className="seo-chart-header">
//           <p className="seo-chart-title">SEO PERFORMANCE</p>
//           <p className="seo-chart-subtitle">RANKINGS & TRAFFIC</p>
//         </div>
//         <div className="seo-chart-area">
//           <svg width="100%" height="220" viewBox="0 0 500 220" preserveAspectRatio="none">
//             <defs>
//               <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
//                 <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
//               </linearGradient>
//               <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
//                 <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.02" />
//               </linearGradient>
//             </defs>
//             <path d="M0,190 C30,185 60,178 90,170 C120,162 150,155 180,145 C210,135 240,120 270,105 C300,90 330,75 360,58 C390,42 420,28 460,12 L460,220 L0,220 Z"
//               fill="url(#lineGrad1)" />
//             <path d="M0,190 C30,185 60,178 90,170 C120,162 150,155 180,145 C210,135 240,120 270,105 C300,90 330,75 360,58 C390,42 420,28 460,12"
//               fill="none" stroke="#3b82f6" strokeWidth="2.5" />
//             <path d="M0,200 C30,196 60,192 90,186 C120,180 150,172 180,165 C210,155 240,143 270,132 C300,120 330,107 360,90 C390,73 420,54 460,38 L460,220 L0,220 Z"
//               fill="url(#lineGrad2)" />
//             <path d="M0,200 C30,196 60,192 90,186 C120,180 150,172 180,165 C210,155 240,143 270,132 C300,120 330,107 360,90 C390,73 420,54 460,38"
//               fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="5,3" />
//             <circle cx="460" cy="12" r="5" fill="#3b82f6" />
//           </svg>
//           <div className="seo-chart-grid">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="seo-chart-gridline" />
//             ))}
//           </div>
//         </div>
//         <div className="seo-chart-legend">
//           <div className="legend-item">
//             <span className="legend-dot blue"></span>
//             <span>Organic Traffic Growth</span>
//           </div>
//           <div className="legend-item">
//             <span className="legend-dot light-blue"></span>
//             <span>Local Search Visibility</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
    iconBg: '#dbeafe',
    title: 'Higher Local Rankings',
    desc: 'We push your business to the top of search results for localized keywords.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.62-.62a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    iconBg: '#dbeafe',
    title: 'More Calls & Leads',
    desc: 'Strategic call-to-actions that turn map views into direct phone calls.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    iconBg: '#dbeafe',
    title: 'Google Maps Visibility',
    desc: 'Complete optimization of your Google Business Profile for the Local Pack.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    iconBg: '#ffe4e6',
    title: 'Consistent Growth',
    desc: 'Sustainable SEO strategies that build compounding traffic over time.',
  },
];
const faqs = [
    {
      q: "How long does it take to see results?",
      a: "SEO is a compounding strategy. While some improvements can be seen within the first 30–60 days, significant movement in competitive local markets typically takes 4–6 months.",
    },
    {
      q: "What is GBP optimization?",
      a: "Google Business Profile optimization helps your business appear in local searches and maps with better visibility and engagement.",
    },
    {
      q: "Do I need a website for Local SEO?",
      a: "While not mandatory, having a website significantly improves your authority and ranking potential.",
    },
  ];
function AnalyticsDashboard() {
   
  return (
    <div className="analytics-wrapperlocal">
      {/* <div className="analytics-card">
        <div className="analytics-header-text">
          <p className="analytics-title">Analytics</p>
          <p className="analytics-title">Dashboard</p>
        </div>
        <div className="analytics-inner-card">
          <div className="analytics-toolbar">
            <span className="analytics-toolbar-label">Traffic Overview</span>
            <span className="analytics-toolbar-dots">&#8943;</span>
          </div>
          <div className="analytics-table-header">
            <span>Keyword</span>
            <span>Rank</span>
            <span>Clicks</span>
            <span>Impressions</span>
            <span>Position</span>
            <span>Status</span>
          </div>
          <div className="analytics-row">
            <span className="analytics-keyword">Organic Traffic</span>
            <span>#1</span>
            <span>2,847</span>
            <span>18,400</span>
            <span className="analytics-bar-wrap"><span className="analytics-bar blue" style={{width:'75%'}}></span></span>
            <span className="analytics-badge green">Active</span>
          </div>
          <div className="analytics-row">
            <span className="analytics-keyword">Local Keywords</span>
            <span>#3</span>
            <span>1,234</span>
            <span>9,200</span>
            <span className="analytics-bar-wrap"><span className="analytics-bar orange" style={{width:'45%'}}></span></span>
            <span className="analytics-badge yellow">Review</span>
          </div>
          <div className="analytics-row">
            <span className="analytics-keyword">GMB Views</span>
            <span>#2</span>
            <span>3,891</span>
            <span>22,100</span>
            <span className="analytics-bar-wrap"><span className="analytics-bar blue" style={{width:'88%'}}></span></span>
            <span className="analytics-badge green">Active</span>
          </div>
          <div className="analytics-row">
            <span className="analytics-keyword">Competitor Gap</span>
            <span>#5</span>
            <span>678</span>
            <span>4,300</span>
            <span className="analytics-bar-wrap"><span className="analytics-bar gray" style={{width:'30%'}}></span></span>
            <span className="analytics-badge red">Optimize</span>
          </div>
          <div className="analytics-row">
            <span className="analytics-keyword">Citation Score</span>
            <span>#1</span>
            <span>5,102</span>
            <span>31,000</span>
            <span className="analytics-bar-wrap"><span className="analytics-bar blue" style={{width:'93%'}}></span></span>
            <span className="analytics-badge green">Active</span>
          </div>
        </div>
      </div> */}
      <div className="monthly-leads-cardlocal">
        <div className="monthly-leads-iconlocal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>
        <div className="monthly-leads-textlocal">
          <p className="monthly-leads-labellocal">Monthly Leads</p>
          <p className="monthly-leads-valuelocal">+142% Increase</p>
        </div>
      </div>
    </div>
  );
}
function CheckIcon({ white }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke={white ? '#93c5fd' : '#2563eb'} strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

function LocalSeoPackage() {
     const [active, setActive] = useState(0);
  return (
    <>
     <section className="herolocal" id="hero">
      <div className="hero-containerlocal">
        <div className="hero-leftlocal">
          <div className="hero-badgelocal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>#1 RATED LOCAL SEO AGENCY</span>
          </div>
          <h1 className="hero-headinglocal">
            Local SEO That<br />
            Actually <em className="hero-highlightlocal">Brings<br />
            Customers</em>
          </h1>
          <p className="hero-descriptionlocal">
            Dominate your local market, outrank competitors on Google Maps,
            and generate a consistent stream of high-intent leads that convert
            into loyal customers.
          </p>
          <div className="hero-buttonslocal">
            <button className="btn-primarylocal">Get Free Audit</button>
            <button className="btn-secondarylocal">View Packages</button>
          </div>
        </div>
        <div className="hero-rightlocal">
          <AnalyticsDashboard />
          <img src={Analytics} alt='AnalyticsDashboard '/>
          
        </div>
      </div>
    </section>

    <section className="stats-sectionlocal">
      <div className="stats-containerlocal">
        {stats.map((stat, i) => (
          <div key={i} className="stat-cardlocal">
            <p className="stat-valuelocal" style={{ color: stat.color }}>{stat.value}</p>
            <p className="stat-labellocal">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="features-sectionlocal" id="services">
      <div className="features-containerlocal">
        <div className="features-leftlocal">
          <h2 className="features-headinglocal">The Local Growth Engine</h2>
          <ul className="features-listlocal">
            {features.map((f, i) => (
              <li key={i} className="feature-itemlocal">
                <div className="feature-icon-wraplocal" style={{ backgroundColor: f.iconBg }}>
                  {f.icon}
                </div>
                <div className="feature-contentlocal">
                  <h3 className="feature-titlelocal">{f.title}</h3>
                  <p className="feature-desclocal">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="features-rightlocal">
          {/* <SeoChart /> */}
          <img src={Analytics1} alt='AnalyticsDashboard '/>
        </div>
      </div>
    </section>
     <section className="process-sectionlocal" id="process">
      <div className="process-containerlocal">
        <div className="process-headerlocal">
          <h2 className="process-headinglocal">Our Six-Step Mastery</h2>
          <p className="process-subtextlocal">We've refined our process over 1,000 campaigns to ensure nothing is left to chance.</p>
        </div>
        <div className="process-stepslocal">
          {steps.map((step, i) => (
            <div key={i} className="process-steplocal">
              <div className="process-step-iconlocal">
                {step.icon}
              </div>
              <h3 className="process-step-titlelocal">{step.title}</h3>
              <p className="process-step-desclocal">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="pricing-sectionlocal" id="pricing">
      <div className="pricing-containerlocal">
        <div className="pricing-headerlocal">
          <h2 className="pricing-headinglocal">Tailored Growth Packages</h2>
          <p className="pricing-notelocal">
            Note: Local SEO is a long-term process with compounding benefits. Minimum 3-6 month<br />
            commitment recommended for peak results.
          </p>
        </div>
        <div className="pricing-cardslocal">
          <div className="pricing-cardlocal">
            <div className="pricing-card-toplocal">
              <h3 className="plan-namelocal">Starter</h3>
              <p className="plan-desclocal">Perfect for small local boutiques.</p>
              <div className="plan-pricelocal">
                <span className="plan-amountlocal">$999</span>
                <span className="plan-periodlocal">/mo</span>
              </div>
            </div>
            <ul className="plan-featureslocal">
              <li><CheckIcon white={false} /><span>GBP Management</span></li>
              <li><CheckIcon white={false} /><span>10 Keywords Tracking</span></li>
              <li><CheckIcon white={false} /><span>Basic Citations (25+)</span></li>
              <li><CheckIcon white={false} /><span>Monthly Report</span></li>
            </ul>
            <div className="pricing-card-bottomlocal">
              <button className="plan-btnlocal outlinelocal">Select Starter</button>
            </div>
          </div>

          <div className="pricing-cardlocal popular">
            <div className="popular-badgelocal">MOST POPULAR</div>
            <div className="pricing-card-toplocal">
              <h3 className="plan-namelocal white">Growth</h3>
              <p className="plan-desclocal white-dimlocal">Ideal for expanding regional businesses.</p>
              <div className="plan-pricelocal">
                <span className="plan-amountlocal white">$1,999</span>
                <span className="plan-periodlocal white-dimlocal">/mo</span>
              </div>
            </div>
            <ul className="plan-featureslocal">
              <li><CheckIcon white={true} /><span className="white-dimlocal">Advanced GBP Strategy</span></li>
              <li><CheckIcon white={true} /><span className="white-dimlocal">30 Keywords Tracking</span></li>
              <li><CheckIcon white={true} /><span className="white-dimlocal">Premium Citations (75+)</span></li>
              <li><CheckIcon white={true} /><span className="white-dimlocal">2 Local Guest Posts /mo</span></li>
              <li><CheckIcon white={true} /><span className="white-dimlocal">Priority Support</span></li>
            </ul>
            <div className="pricing-card-bottomlocal">
              <button className="plan-btnlocal outlinelocal white-btnlocal">Accelerate Now</button>
            </div>
          </div>

          <div className="pricing-cardlocal">
            <div className="pricing-card-toplocal">
              <h3 className="plan-namelocal">Dominance</h3>
              <p className="plan-desclocal">Multi-location & competitive niches.</p>
              <div className="plan-pricelocal">
                <span className="plan-amountlocal">$3,499</span>
                <span className="plan-periodlocal">/mo</span>
              </div>
            </div>
            <ul className="plan-featureslocal">
              <li><CheckIcon white={false} /><span>Aggressive Map Ranking</span></li>
              <li><CheckIcon white={false} /><span>Unlimited Keyword Tracking</span></li>
              <li><CheckIcon white={false} /><span>150+ Premium Citations</span></li>
              <li><CheckIcon white={false} /><span>Technical SEO Overhaul</span></li>
              <li><CheckIcon white={false} /><span>Dedicated Account Manager</span></li>
            </ul>
            <div className="pricing-card-bottomlocal">
              <button className="plan-btnlocal outlinelocal">Dominate Market</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="services-sectionlocal" id="industries">
      <div className="services-containerlocal">
        <div className="services-gridlocal">
          {columns.map((col, i) => (
            <div key={i} className="services-columnlocal">
              <h4 className="services-col-headinglocal" style={{ color: col.color }}>
                {col.heading}
              </h4>
              <ul className="services-itemslocal">
                {col.items.map((item, j) => (
                  <li key={j} className="services-itemlocal">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className="transparency-sectionlocal" id="faq">
      <div className="transparency-containerlocal">
        <div className="transparency-headerlocal">
          <h2 className="transparency-headinglocal">Crystal Clear Transparency</h2>
        </div>
        <div className="transparency-cardslocal">
          {cards.map((card, i) => (
            <div key={i} className="transparency-cardlocal">
              <div className="transparency-iconlocal">
                {card.icon}
              </div>
              <h3 className="transparency-card-titlelocal">{card.title}</h3>
              <p className="transparency-card-desclocal">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
           <div className="industryfaq-wrapperlocal">

      {/* INDUSTRIES */}
      <h2 className="titlelocal">Industries We Dominate</h2>

      <div className="industry-iconslocal">
        <div className="icon-cardlocal"><Home /><p>Real Estate</p></div>
        <div className="icon-cardlocal"><BriefcaseMedical /><p>Healthcare</p></div>
        <div className="icon-cardlocal"><GraduationCap /><p>Education</p></div>
        <div className="icon-cardlocal"><ShoppingBag /><p>E-commerce</p></div>
        <div className="icon-cardlocal"><Briefcase /><p>Local Services</p></div>
      </div>

      {/* FAQ */}
      <h2 className="titlelocal mt">Frequently Asked Questions</h2>

      <div className="faq-listlocal">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-itemlocal ${active === i ? "active" : ""}`}
            onClick={() => setActive(i === active ? null : i)}
          >
            <div className="faq-headerlocal">
              <h4>{item.q}</h4>
              <ChevronDown className={active === i ? "rotate" : ""} />
            </div>

            {active === i && <p>{item.a}</p>}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bottom-ctalocal">
        <h1>Start Ranking Locally & Get More Customers</h1>

        <p>
          Don’t let your competitors take your local market. Claim your territory
          today with a professional local SEO strategy.
        </p>

        <div className="cta-buttonslocal">
          <button className="primary-btnlocal">Get Free Audit</button>
          <button className="secondary-btnlocal">Contact Us</button>
        </div>
      </div>

    </div>
    
</>
  );
}

export default LocalSeoPackage;