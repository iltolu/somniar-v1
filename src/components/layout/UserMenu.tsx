import React from 'react';
import { User, BookOpen, Settings, LogOut } from 'lucide-react';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className="absolute right-4 top-14 z-50 w-64 rounded-lg bg-white py-2 shadow-xl">
        <div className="border-b px-4 pb-2">
          <p className="font-medium text-gray-900">John Doe</p>
          <p className="text-sm text-gray-500">john@example.com</p>
        </div>

        <nav className="py-2">
          <a
            href="/profile"
            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <User size={18} />
            Your Profile
          </a>
          <a
            href="/library"
            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <BookOpen size={18} />
            Your Library
          </a>
          <a
            href="/settings"
            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings size={18} />
            Settings
          </a>
        </nav>

        <div className="border-t px-2 pt-2">
          <button className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm text-red-600 hover:bg-red-50">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};