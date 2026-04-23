import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileMenu({ isOpen, setMenuOpen, data }) {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection, setOpenSubSection] = useState(null);

  if (!isOpen) return null;

  // Close menu 
  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="lg:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
      <ul className="flex flex-col px-6 py-4 gap-4 font-medium text-slate-700">
        {data.navLinks.map((link, mainIdx) => {
          const options = data.options[link.name];
          const isSectionOpen = openSection === link.name;

          return (
            <li key={`main-${mainIdx}`} className="flex flex-col border-b border-slate-50 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  to={link.path || "#"}
                  onClick={closeMenu}
                  className="flex-1 py-2 hover:text-indigo-600 text-lg font-bold"
                >
                  {link.name}
                </Link>

                {options && (
                  <div
                    className="p-2 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setOpenSection(isSectionOpen ? null : link.name);
                    }}
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${isSectionOpen ? "rotate-180" : ""}`} />
                  </div>
                )}
              </div>

              {/* First Level Dropdown */}
              {options && isSectionOpen && (
                <div className="flex flex-col gap-3 mt-1 ml-2 border-l-2 border-indigo-100 pl-4 text-sm bg-slate-50/50 py-3 rounded-r-lg">
                  {options.map((option, optIdx) => {
                    // Change 2: Check kiya ki option string hai ya object
                    const isObject = typeof option === "object" && option !== null;

                    const title = isObject ? option.name : option;

                    const hasSubOptions = isObject && option.subOptions && option.subOptions.length > 0;
                    const isSubOpen = openSubSection === title;

                    return (
                      <div key={`opt-${optIdx}`} className="flex flex-col">
                        <div className="flex items-center justify-between py-1">
                          {isObject && option.path ? (
                            <Link
                              to={option.path}
                              onClick={closeMenu}
                              className="text-indigo-600 font-semibold flex-1"
                            >
                              {title}
                            </Link>
                          ) : (
                            <span
                              className={`flex-1 ${isObject ? "text-indigo-600 font-semibold" : "text-slate-500"}`}
                              onClick={() => hasSubOptions && setOpenSubSection(isSubOpen ? null : title)}
                            >
                              {title}
                            </span>
                          )}

                          {hasSubOptions && (
                            <div
                              className="p-1 cursor-pointer"
                              onClick={() => setOpenSubSection(isSubOpen ? null : title)}
                            >
                              <ChevronDown size={14} className={isSubOpen ? "rotate-180" : ""} />
                            </div>
                          )}
                        </div>

                        {hasSubOptions && isSubOpen && (
                          <div className="flex flex-col gap-2 mt-2 ml-2 border-l border-slate-200 pl-3 text-slate-400">
                            {option.subOptions.map((sub, subIdx) => {
                              const subText = typeof sub === "object" ? sub.name : sub;
                              return (
                                <Link
                                  key={`sub-${subIdx}`}
                                  to={typeof sub === "object" ? sub.path : "#"}
                                  onClick={closeMenu}
                                  className="py-1 text-left hover:text-indigo-600"
                                >
                                  {subText}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}