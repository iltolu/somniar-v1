import React from 'react';
import { cn } from '../lib/utils';

const categories = [
  { id: 'all', label: 'All Stories' },
  { id: 'featured', label: 'Featured' },
  { id: 'popular', label: 'Popular' },
  { id: '3-5', label: 'Ages 3-5' },
  { id: '6-8', label: 'Ages 6-8' },
  { id: '9-12', label: 'Ages 9-12' },
];

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 md:px-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            'whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-colors',
            activeCategory === category.id
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}