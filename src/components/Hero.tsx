import React from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[60vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1512058564366-18510be2db19"
        alt="Featured Story"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white md:text-6xl">
          The Magic of Bedtime Stories
        </h1>
        <p className="mb-6 max-w-xl text-lg text-gray-200">
          Join us on a magical journey through enchanted forests, meet fantastic creatures, and discover
          the power of imagination.
        </p>
        
        <div className="flex items-center gap-4">
          <Button size="lg" className="flex items-center gap-2">
            <Play size={24} /> Start Reading
          </Button>
          <Button size="lg" variant="secondary" className="flex items-center gap-2">
            <Info size={24} /> More Info
          </Button>
        </div>
      </div>
    </div>
  );
};