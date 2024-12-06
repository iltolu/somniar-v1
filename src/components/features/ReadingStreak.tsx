import React from 'react';
import { Flame } from 'lucide-react';

interface ReadingStreakProps {
  currentStreak: number;
  longestStreak: number;
}

export const ReadingStreak: React.FC<ReadingStreakProps> = ({ currentStreak, longestStreak }) => {
  return (
    <div className="rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 p-4 text-white">
      <div className="mb-3 flex items-center gap-2">
        <Flame className="animate-pulse" size={24} />
        <h3 className="text-lg font-bold">Reading Streak</h3>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">{currentStreak} days</p>
          <p className="text-sm text-white/80">Current Streak</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">{longestStreak} days</p>
          <p className="text-sm text-white/80">Longest Streak</p>
        </div>
      </div>
    </div>
  );
};