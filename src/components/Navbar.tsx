import React from 'react';
import { Search, BookOpen, Home, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:top-0 md:bottom-auto">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-purple-600">StoryTime</h1>
          <div className="hidden items-center gap-6 md:flex">
            <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-purple-600">
              <Home size={20} /> Home
            </a>
            <a href="/library" className="flex items-center gap-2 text-gray-600 hover:text-purple-600">
              <BookOpen size={20} /> Library
            </a>
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="search"
              placeholder="Search stories..."
              className="w-64 rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 md:hidden">
            <Search size={20} />
          </button>
          <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
            <User size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex justify-around border-t py-2 md:hidden">
        <a href="/" className="flex flex-col items-center text-xs text-gray-600">
          <Home size={20} />
          <span>Home</span>
        </a>
        <a href="/library" className="flex flex-col items-center text-xs text-gray-600">
          <BookOpen size={20} />
          <span>Library</span>
        </a>
      </div>
    </nav>
  );
};