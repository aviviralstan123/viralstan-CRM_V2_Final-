import { Routes, Route } from "react-router-dom"; // Inhe import karein
import Home from "./pages/Home";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/Footer";
import AboutUs from "./components/about/AboutUs";

import ScrollToTop from "./ScrollToTop";
import MataADsPackages from "./components/packages/MataADsPackages";
// Old static blog imports (kept for rollback)
// import BlogDetail from "./components/blog/BlogDetail";
// import Blog from "./components/blog/Blog";

// New dynamic blog pages (API-powered)
import BlogPage from "./features/publicBlog/pages/BlogPage";
import BlogDetailPage from "./features/publicBlog/pages/BlogDetailPage";
import LocalSeo from "./components/services/seoServices/LocalSeo";
import PRGuestPosting from "./components/packages/PRGuestPosting";
import EditingPackages from "./components/packages/EditingPackages";
import SMMPackages from "./components/packages/SMMPackages";
import PosterPackages from "./components/packages/PosterPackages";
import InfluencersMarkPackages from "./components/packages/InfluencersMarkPackages";
import UGCPackages from "./components/packages/UGCPackages";
import ContactPage from "./components/ContactPage";
 import { OffPagesSeoPackage } from "./components/packages/OffPagesSeoPackage";
import OnPageSeoPackage from "./components/packages/OnPageSeoPackage";
import LocalSeoPackage from "./components/packages/LocalSeoPackage";
import TechnicalSeoPackage from "./components/packages/TechnicalSeoPackage";


// import LocalSeo from "./components/services/seoServices/LocalSeo";
import SeoServices from "./components/services/SeoServices";
import CGIPackage from "./components/packages/CGIPackage";
import OnPageSeo from "./components/services/seoServices/OnPageSeo";
import OffPageSeo from "./components/services/seoServices/OffPageSeo";
// import Blog from "./components/blog/Blog";
import TechnicalSeo from "./components/services/seoServices/TechnicalSeo";
import OutsourcedSeo from "./components/services/seoServices/OutsourcedSeo";
import MetaAdsServices from "./components/services/MetaAdsService";
import WebSiteDesign from "./components/services/WebSiteDesign";
import WebsiteDevelopment from "./components/services/WebsiteDevelopment";
import SmoServices from "./components/services/SmoServices";
import GoogleADsSystem from "./components/services/GoogleADsSystem";


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="pt-16"> {/* Navbar height ke liye padding */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Dynamic blog routes (API-powered) */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/about-us" element={<AboutUs />}/>
           <Route path="/contact-us" element={<ContactPage/>} /> 
{/* <Route path="/blog-detail" element={<BlogDetail />} />  */}
 <Route path="/meta-ads" element={<MataADsPackages />} />  
 <Route path="/pr-guest-posting" element={<PRGuestPosting />} /> 
  <Route path="/editing-packages" element={<EditingPackages />} /> 
  <Route path="/packages/smm" element={<SMMPackages />} /> 
   <Route path="/packages/orm" element={<PosterPackages />} /> 
   <Route path="/packages/maintenance" element={<InfluencersMarkPackages/>} /> 
    <Route path="/packages/smo" element={<UGCPackages/>} /> 
    <Route path="/packages/seo/off-page-seo" element={<OffPagesSeoPackage />} />
    <Route path="/packages/seo/on-page-seo" element={<OnPageSeoPackage />} />
     <Route path="/packages/seo/local-page-seo" element={<LocalSeoPackage />} />
     <Route path="/packages/seo/technical-seo" element={<TechnicalSeoPackage />} />
{/* <Route path="/local-seo" element={<LocalSeo />} />  */}
{/* <Route path="/blog-detail" element={<BlogDetail />} />  */}
 {/* <Route path="/Meta-Ads" element={<MataADsPackages />} />   */}
 <Route path="/services/seo-services" element={<SeoServices />} />   
  <Route path="/services/local-seo" element={<LocalSeo/>} />  
  <Route path="/packages/cgi-packages" element={<CGIPackage/>} />  
  <Route path="services/on-page-seo" element={<OnPageSeo/>} />  
  <Route path="services/off-page-seo" element={<OffPageSeo/>} />  
  <Route path="/services/technical-seo" element={<TechnicalSeo/>} />  
  <Route path="services/outsourced-seo" element={<OutsourcedSeo/>} />  
  <Route path="services/meta-ads" element={<MetaAdsServices/>} />  
       
   <Route path="services/website-design" element={<WebSiteDesign/>} />  
    <Route path="services/website-development" element={<WebsiteDevelopment/>} /> 
     <Route path="services/smo-services" element={<SmoServices/>} />     
     <Route path="services/google-ads" element={<GoogleADsSystem/>} /> 
        </Routes>
        <Footer/>
      </div>
    </>


   
  );
}

export default App;