import { path } from "framer-motion/client";



export const NAVIGATION_DATA = {
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" }
  ], options: {
    "About Us": ["Case Studies", "Career", "Reviews", "Digital Marketing Training"],
    "Services": [
      { name: "SEO Services", path: "/services/seo-services", subOptions: [{ name: "Local SEO", path: "/services/local-seo" }, { name: "Off-Page SEO", path: "services/off-page-seo" }, { name: "On-Page SEO", path: "services/on-page-seo" }, { name: "Outsourced SEO", path: "services/outsourced-seo" }, { name: "Technical SEO", path: "/services/technical-seo" }] },
      { name: "SMM Services", subOptions: ["Facebook Marketing", "Instagram Marketing", "Youtube Marketing", "Linkedin Marketing"] },
      { name: "PPC Services", subOptions: [{ name: "Google Ads Management", path: "services/google-ads" }, {name:"Meta Ads",path:"services/meta-ads"}], },
      "Social Media Management", { name: "SMO Services", path: "services/smo-services" }, { name: "Web Design Services", path: "services/website-design" }, " Website Maintenence", { name: "Web Development", path: "services/website-development" }
    ],
    "Packages": [{
      name: "SEO Packages",
      subOptions: [
        { name: "Local SEO", path: "/packages/seo/local-page-seo" },
        { name: "Off-Page SEO", path: "/packages/seo/off-page-seo" },
        { name: "On-Page SEO", path: "/packages/seo/on-page-seo" },
        { name: "Technical SEO", path: "/packages/seo/technical-seo" },
        { name: "White Label SEO Reseller", path: "/packages/seo/white-label-seo" }
      ]
    },
    { name: "SMO Packages", path: "/packages/smo" },
    {
      name: "SMM Packages",
      path: "/packages/smm",
      subOptions: [
        "Facebook Marketing",
        "Instagram Marketing",
        "Youtube Marketing",
        "Linkedin Advertising"
      ]
    },

    { name: "ORM Packages", path: "/packages/orm" },

    {
      name: "PPC Packages",
      path: "/meta-ads"
    },
    {
      name: "PR and Guest Posting",
      path: "/pr-guest-posting"
    },
    {
      name: "CGI Packages",
      path: "/packages/cgi-packages"
    },
    {
      name: "Website Packages",
      path: "/editing-packages"
    },
    {
      name: "Website Maintenance",
      path: "/packages/maintenance"
    }
    ],
    "Industries": ["B2B", "B2C"],

  }
};