
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { NAVIGATION_DATA } from "../../../constants/navigation";
// import NavItem from "./NavItem";
// import MobileMenu from "./MobileMenu"; 
// import logoIcon from "../../../assets/logoicon.png";
// import logoText from "../../../assets/logo-text.png";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-slate-100/90 backdrop-blur border-b border-slate-200">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

//         {/* Logo Section */}
//         <div className="flex items-center gap-2 cursor-pointer group">
//           <img src={logoIcon} alt="logo" className="w-8 h-8 group-hover:scale-110 transition-transform" />
//           <img src={logoText} alt="viralstan" className="h-5" />
//         </div>

//         {/* Desktop Navigation: Yahan NavItem use ho raha hai */}
//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-1 h-full">
//           {NAVIGATION_DATA.navLinks.map((link) => (
//             <NavItem
//               key={link.name}
//               label={link.name}
//               path={link.path} // Ab ye undefined nahi hoga
//               items={NAVIGATION_DATA.options[link.name]}
//             />
//           ))}
//         </ul>

//         {/* CTA Button */}
//         <button className="hidden md:block bg-indigo-600 text-white text-sm px-6 py-2.5 rounded-full hover:bg-indigo-700 transition shadow-md shadow-indigo-100 active:scale-95">
//           Get in Touch
//         </button>

//         {/* Mobile Toggle */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-700 p-2">
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu Component */}
//       <MobileMenu isOpen={menuOpen}  setMenuOpen={setMenuOpen} data={NAVIGATION_DATA} />
//     </nav>
//   );
// }


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_DATA } from "../../../constants/navigation";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import logoIcon from "../../../assets/logoicon.png";
import logoText from "../../../assets/logo-text.png";
 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-100/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
 
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <img src={logoIcon} alt="logo" className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <img src={logoText} alt="viralstan" className="h-5" />
        </div>
 
        {/* Desktop Navigation: Yahan NavItem use ho raha hai */}
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1 h-full">
          {NAVIGATION_DATA.navLinks.map((link) => (
            <NavItem
              key={link.name}
              label={link.name}
              path={link.path} // Ab ye undefined nahi hoga
              items={NAVIGATION_DATA.options[link.name]}
            />
          ))}
        </ul>
 
        {/* CTA Button */}
        <button className="hidden lg:block bg-indigo-600 text-white text-sm px-6 py-2.5 rounded-full hover:bg-indigo-700 transition shadow-md shadow-indigo-100 active:scale-95">
          Get in Touch
        </button>
 
        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-slate-700 p-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
 
      {/* Mobile Menu Component */}
      <MobileMenu isOpen={menuOpen} setMenuOpen={setMenuOpen} data={NAVIGATION_DATA} />
    </nav>
  );
}