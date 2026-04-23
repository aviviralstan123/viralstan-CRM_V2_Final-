// export default function Footer() {

//     return (

//         <footer className="bg-white border-t py-8 text-center text-gray-500">

//             © 2024 Bright Meta. All rights reserved.

//         </footer>

//     )

// }

import React from "react";
import logoIcon from "../../assets/logoicon.png";
import logoText from "../../assets/viralstan-logo.png";

import { Link } from "react-router-dom"; 


const footerData = {
  Services: [
    { name: "UI/UX Design", path: "/services/ui-ux" },
    { name: "Web Development", path: "/services/web-dev" },
    { name: "Brand Identity", path: "/services/branding" },
    { name: "Growth Analytics", path: "/services/analytics" },
    { name: "SEO & Marketing", path: "/services/seo" },
  ],
  Company: [
    { name: "About Us", path: "/about-us" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Process", path: "/process" },
    { name: "Blog", path: "/blog" }, 
    { name: "Careers", path: "/careers" },
  ],
  Connect: [
    { name: "Twitter", path: "https://twitter.com" },
    { name: "LinkedIn", path: "https://linkedin.com" },
    { name: "Instagram", path: "https://instagram.com" },
    { name: "Dribbble", path: "https://dribbble.com" },
    { name: "Behance", path: "https://behance.com" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#04060d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand Section */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <img src={logoIcon} alt="logo" style={{ width: 32, height: 32 }} />
              <img src={logoText} alt="viralstan" style={{ height: 18 }} />
            </div>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 240, marginBottom: 20 }}>
              We craft viral digital experiences that dominate markets and captivate audiences worldwide.
            </p>
            <p style={{ color: "#64748b", fontSize: "0.75rem" }}>
              © 2026 ViralStan. All rights reserved.
            </p>
          </div>

          {/* Dynamic Columns */}
          {Object.entries(footerData).map(([title, links]) => (
            <div key={title}>
              <h5 style={{ color: "#94a3b8", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                {title}
              </h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0 }}>
                {links.map((link) => (
                  <li key={link.name}>
                    {/* Yahan logic change hua hai */}
                    {link.path.startsWith("http") ? (
                      <a 
                        href={link.path} 
                        target="_blank" 
                        rel="noreferrer"
                        style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = "#fff")}
                        onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path} 
                        style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = "#fff")}
                        onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

const linkStyle = {
  color: "#94a3b8",
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: "color 0.2s",
  cursor: "pointer"
};