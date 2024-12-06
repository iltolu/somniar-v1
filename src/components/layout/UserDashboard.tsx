import React from 'react';
import { ReadingStreak } from '../features/ReadingStreak';
import { StoryProgress } from '../features/StoryProgress';

export const UserDashboard: React.FC = () => {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 md:p-8">
      <ReadingStreak currentStreak={5} longestStreak={12} />
      <StoryProgress totalStories={42} completedStories={3} weeklyGoal={7} />
    </div>
  );
};