import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StoryCard } from './StoryCard';

interface StoryRowProps {
  title: string;
  stories: Array<{
    id: string;
    title: string;
    coverUrl: string;
    ageGroup: string;
    duration: string;
  }>;
}

export const StoryRow: React.FC<StoryRowProps> = ({ title, stories }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-4">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">{title}</h2>
      
      <div className="group relative">
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-transform hover:scale-110 group-hover:block"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
        
        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-transform hover:scale-110 group-hover:block"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};