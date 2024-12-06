import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { FeaturedStory } from './components/FeaturedStory';
import { StoryGrid } from './components/StoryGrid';
import { UserDashboard } from './components/layout/UserDashboard';
import { FEATURED_STORIES } from './data/stories';
import { StoryViewer } from './components/StoryViewer';

function App() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Featured Story Section */}
      <FeaturedStory
        stories={FEATURED_STORIES}
        onRead={(storyId) => setSelectedStory(storyId)}
      />
      
      {/* User Dashboard */}
      <UserDashboard />
      
      {/* Main Content */}
      <main className="mx-auto max-w-7xl py-6 md:py-12">
        <div className="mb-8 px-4 md:px-8">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Popular Stories</h2>
        </div>
        
        <StoryGrid stories={FEATURED_STORIES.slice(0, 3)} />
      </main>

      {/* Story Viewer Modal */}
      {selectedStory && (
        <StoryViewer
          story={FEATURED_STORIES.find((s) => s.id === selectedStory)!}
          isOpen={!!selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
}

export default App;