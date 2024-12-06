import React from 'react';
import { Moon, Bell } from 'lucide-react';

interface BedtimeReminderProps {
  scheduleTime?: string;
  onSchedule: (time: string) => void;
}

export const BedtimeReminder: React.FC<BedtimeReminderProps> = ({ scheduleTime, onSchedule }) => {
  return (
    <div className="rounded-lg bg-indigo-50 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Moon size={20} className="text-indigo-600" />
        <h3 className="font-medium text-indigo-900">Bedtime Reminder</h3>
      </div>
      
      <div className="mb-4">
        <input
          type="time"
          value={scheduleTime || '20:00'}
          onChange={(e) => onSchedule(e.target.value)}
          className="rounded-md border-indigo-200 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <button
            key={day}
            className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600 hover:bg-indigo-200"
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};