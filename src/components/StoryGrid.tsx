import React from 'react';
import { StoryCard } from './StoryCard';
import type { Story } from '../types/story';

interface StoryGridProps {
  stories: Story[];
}

export const StoryGrid: React.FC<StoryGridProps> = ({ stories }) => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-8">
      {stories.map((story) => (
        <StoryCard key={story.id} {...story} />
      ))}
    </div>
  );
}