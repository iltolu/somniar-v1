import React, { useState } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { UserMenu } from './UserMenu';
import { CategoryMenu } from '../navigation/CategoryMenu';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-transparent backdrop-blur-md" />
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-white">StoryTime</h1>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <a href="/" className="text-sm text-white/80 hover:text-white">
                  Home
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                  className="group flex items-center gap-1.5 text-sm text-white/80 hover:text-white"
                >
                  <span className="relative top-[1px]">Categories</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      isCategoryMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <CategoryMenu isOpen={isCategoryMenuOpen} />
              </li>
              <li>
                <a href="/library" className="text-sm text-white/80 hover:text-white">
                  Library
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
              <Search className="text-gray-400" size={18} />
            </div>
            <input
              type="search"
              placeholder="Search stories..."
              className="w-64 rounded-full bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 backdrop-blur-sm focus:bg-white/20 focus:outline-none"
            />
          </div>

          <Button
            variant="ghost"
            className="relative text-white/80 hover:text-white"
            size="sm"
          >
            <Bell size={20} />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-xs">
              3
            </span>
          </Button>

          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-sm hover:bg-white/20"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="User"
              className="h-6 w-6 rounded-full object-cover"
            />
            <span>John Doe</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <UserMenu isOpen={isUserMenuOpen} onClose={() => setIsUserMenuOpen(false)} />
    </header>
  );
};