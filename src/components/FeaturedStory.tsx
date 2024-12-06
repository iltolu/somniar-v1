import React, { useState, useEffect } from 'react';
import { Star, Volume2 } from 'lucide-react';
import { Button } from './ui/Button';
import type { Story } from '../types/story';
import { cn } from '../lib/utils';

interface FeaturedStoryProps {
  stories: Story[];
  onRead: (storyId: string) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ stories, onRead }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % stories.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [stories.length]);

  const currentStory = stories[currentIndex];

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 bg-black transition-opacity duration-500",
          isTransitioning ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700",
          isTransitioning ? "scale-105 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <img
          src={currentStory.coverUrl}
          alt={currentStory.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="flex items-center gap-3 text-purple-400">
          <Star className="fill-purple-400" size={20} />
          <span className="text-sm font-medium">Featured Story</span>
        </div>
        
        <h1 className={cn(
          "mt-4 max-w-4xl text-4xl font-bold text-white transition-all duration-700 md:text-6xl lg:text-7xl",
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        )}>
          {currentStory.title}
        </h1>
        
        <div className={cn(
          "mt-6 flex flex-wrap items-center gap-4 text-gray-300 transition-all duration-700",
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        )}>
          <span className="rounded-full bg-purple-500/20 px-4 py-1.5 text-purple-200">
            {currentStory.ageGroup}
          </span>
          {currentStory.hasAudio && (
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <Volume2 size={18} />
              Audio Available
            </span>
          )}
        </div>

        <p className={cn(
          "mt-6 max-w-2xl text-lg text-gray-300 transition-all duration-700",
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        )}>
          {currentStory.pages[0].content.slice(0, 150)}...
        </p>

        <div className={cn(
          "mt-8 flex items-center gap-4 transition-all duration-700",
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        )}>
          <Button
            size="lg"
            onClick={() => onRead(currentStory.id)}
            className="bg-purple-600 px-8 hover:bg-purple-700"
          >
            Start Reading
          </Button>
        </div>

        <div className="mt-8 flex gap-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-8 bg-purple-500"
                  : "w-4 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};