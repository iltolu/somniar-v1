import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { Story } from '../types/story';

interface StoryViewerProps {
  story: Story;
  isOpen: boolean;
  onClose: () => void;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({ story, isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const nextPage = () => {
    if (currentPage < story.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-gray-50 p-0 md:p-6">
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-white p-4 shadow-sm md:rounded-t-lg">
        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">{story.title}</h2>
        <button
          onClick={() => setIsAudioEnabled(!isAudioEnabled)}
          className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
        >
          {isAudioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="aspect-[4/3] md:aspect-[16/9]">
          <img
            src={story.pages[currentPage].imageUrl}
            alt={`Page ${currentPage + 1}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-4 rounded-lg bg-white p-4 shadow-lg md:mt-6 md:p-6">
          <p className="text-base leading-relaxed text-gray-800 md:text-lg">
            {story.pages[currentPage].content}
          </p>
        </div>

        <div className="sticky bottom-0 mt-4 flex w-full items-center justify-between bg-white p-4 shadow-lg md:relative md:mt-6 md:bg-transparent md:p-0 md:shadow-none">
          <Button
            onClick={previousPage}
            disabled={currentPage === 0}
            variant="secondary"
            size="sm"
            className="flex items-center gap-2 md:size-md"
          >
            <ChevronLeft size={20} /> Previous
          </Button>

          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {story.pages.length}
          </span>

          <Button
            onClick={nextPage}
            disabled={currentPage === story.pages.length - 1}
            variant="secondary"
            size="sm"
            className="flex items-center gap-2 md:size-md"
          >
            Next <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </Modal>
  );
};