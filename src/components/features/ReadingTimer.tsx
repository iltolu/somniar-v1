import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface ReadingTimerProps {
  duration: string;
  onComplete?: () => void;
}

export const ReadingTimer: React.FC<ReadingTimerProps> = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(parseInt(duration) * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            clearInterval(interval);
            onComplete?.();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-2 rounded-lg bg-purple-50 px-4 py-2">
      <Clock size={20} className="text-purple-600" />
      <div className="text-sm font-medium text-purple-900">
        {minutes}:{seconds.toString().padStart(2, '0')}
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="ml-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 hover:bg-purple-200"
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};