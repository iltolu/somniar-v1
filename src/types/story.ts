export interface StoryPage {
  content: string;
  imageUrl: string;
}

export interface Story {
  id: string;
  title: string;
  coverUrl: string;
  ageGroup: string;
  duration: string;
  pages: StoryPage[];
  mood?: 'calm' | 'adventure' | 'educational' | 'funny';
  readCount?: number;
  lastRead?: string;
  isFavorite?: boolean;
  hasAudio?: boolean;
  theme?: 'space' | 'nature' | 'animals' | 'fantasy' | 'friendship';
  language?: string;
  readingLevel?: 'beginner' | 'intermediate' | 'advanced';
}

export interface ReadingProgress {
  storyId: string;
  currentPage: number;
  lastReadAt: string;
  completedPages: number[];
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'cozy';
  fontSize: 'small' | 'medium' | 'large';
  autoPlayAudio: boolean;
  showPageNumbers: boolean;
  readingReminders: boolean;
  bedtimeSchedule?: {
    enabled: boolean;
    time: string;
    days: string[];
  };
}