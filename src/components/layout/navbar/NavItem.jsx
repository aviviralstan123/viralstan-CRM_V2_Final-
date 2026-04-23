import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavItem({ label, path, items }) {
  const hasDropdown = !!items;

  return (
    <li className="relative group h-full flex items-center px-3">
      <Link
        to={path}
        className="flex items-center gap-1 text-sm font-medium text-slate-600 cursor-pointer hover:text-indigo-600 transition py-5"
      >
        {label}
        {hasDropdown && (
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        )}
      </Link>

      {/* Level 1 Dropdown */}
      {hasDropdown && (
        <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
          <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
            {items.map((item, idx) => {
              const isObject = typeof item === "object";
              const title = isObject ? item.name : item;
              const hasSubmenu = isObject && item.subOptions;
              const itemPath = isObject && item.path ? item.path : "#";

              return (
                <div key={idx} className="relative group/sub px-2">
                  <Link
                    to={itemPath}
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:bg-black hover:text-white rounded-lg transition-colors"
                  >
                    {title}
                    {hasSubmenu && <ChevronRight className="w-4 h-4" />}
                  </Link>

                  {/* Level 2 Nested Menu */}
                  {hasSubmenu && (
                    <div className="absolute top-0 left-full pl-1 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                        {item.subOptions.map((sub, sIdx) => {
                          const isSubObject = typeof sub === "object";
                          const subTitle = isSubObject ? sub.name : sub;
                          const subPath =
                            isSubObject && sub.path ? sub.path : "#";

                          return (
                            <Link
                              key={sIdx}
                              to={subPath}
                              className="block px-5 py-2.5 text-sm text-slate-600 hover:bg-black hover:text-white rounded-lg transition-colors"
                            >
                              {subTitle}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </li>
  );
}