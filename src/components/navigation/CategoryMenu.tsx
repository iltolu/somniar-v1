import React from 'react';
import { CATEGORY_GROUPS } from '../../types/categories';

interface CategoryMenuProps {
  isOpen: boolean;
}

export const CategoryMenu: React.FC<CategoryMenuProps> = ({ isOpen }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 mx-4 transition-all duration-300 md:left-1/2 md:right-auto md:w-[600px] md:-translate-x-[45%] ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Triangle Pointer */}
        <div className="absolute left-[10.5rem] top-0 hidden h-4 w-4 -translate-y-1/2 rotate-45 bg-black/90 backdrop-blur-md md:block" />
        
        <div className="relative max-h-[80vh] overflow-y-auto rounded-xl bg-black/90 shadow-2xl backdrop-blur-md md:max-h-none">
          <div 
            className={`transform p-6 transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
              {CATEGORY_GROUPS.map((group) => (
                <div key={group.id} className="space-y-3">
                  <h3 className="text-sm font-medium uppercase tracking-wider text-purple-300">
                    {group.label}
                  </h3>
                  <ul className="space-y-2">
                    {group.categories.map((category) => (
                      <li key={category.id}>
                        <a
                          href={`/category/${category.id}`}
                          className="group flex flex-col text-sm text-white/70 transition-all duration-300 hover:text-white"
                        >
                          <span className="relative inline-block">
                            {category.label}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                          </span>
                          {category.description && (
                            <span className="mt-0.5 text-xs text-white/40">
                              {category.description}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};