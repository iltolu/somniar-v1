import React, { useState } from 'react';
import { Story } from '../types/story';
import { StoryViewer } from './StoryViewer';

interface StoryCardProps extends Story {}

export const StoryCard: React.FC<StoryCardProps> = (story) => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <>
      <div
        className="group relative cursor-pointer overflow-hidden rounded-xl"
        onClick={() => setIsStoryOpen(true)}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={story.coverUrl}
            alt={story.title}
            className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-90" />
          
          <div className="absolute bottom-0 w-full p-6">
            <h3 className="mb-3 text-2xl font-bold text-white transition-all duration-300 group-hover:translate-y-0 md:text-3xl">
              {story.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-purple-500/20 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-sm">
                {story.ageGroup}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gray-200 backdrop-blur-sm">
                {story.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      <StoryViewer
        story={story}
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />
    </>
  );
};