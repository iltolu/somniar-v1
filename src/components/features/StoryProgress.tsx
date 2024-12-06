import React from 'react';
import { Book } from 'lucide-react';

interface StoryProgressProps {
  totalStories: number;
  completedStories: number;
  weeklyGoal: number;
}

export const StoryProgress: React.FC<StoryProgressProps> = ({
  totalStories,
  completedStories,
  weeklyGoal,
}) => {
  const progress = (completedStories / weeklyGoal) * 100;

  return (
    <div className="rounded-lg bg-teal-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Book size={20} className="text-teal-600" />
          <h3 className="font-medium text-teal-900">Weekly Progress</h3>
        </div>
        <span className="text-sm font-medium text-teal-600">
          {completedStories}/{weeklyGoal} stories
        </span>
      </div>

      <div className="mb-2 h-2 overflow-hidden rounded-full bg-teal-100">
        <div
          className="h-full rounded-full bg-teal-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-teal-600">
        {totalStories} stories in your library
      </p>
    </div>
  );
};