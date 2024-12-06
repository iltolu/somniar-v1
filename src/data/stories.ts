import { Story } from '../types/story';

export const STORY_CATEGORIES = {
  featured: 'Featured Stories',
  popular: 'Popular Now',
  newArrivals: 'New Arrivals',
  ageGroup3_5: 'Ages 3-5',
  ageGroup6_8: 'Ages 6-8',
  ageGroup9_12: 'Ages 9-12',
} as const;

export const FEATURED_STORIES: Story[] = [
  {
    id: '1',
    title: 'The Sleepy Moon',
    coverUrl: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009',
    ageGroup: '3-5 years',
    duration: '8 min',
    pages: [
      {
        content: "High up in the night sky lived a young moon who had trouble staying awake. While all the stars danced and twinkled, the moon would yawn and drift off to sleep.",
        imageUrl: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009"
      },
      {
        content: "The stars worried because without the moon's gentle light, the night was too dark for the children on Earth to sleep peacefully.",
        imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3"
      },
      {
        content: "One night, a little girl's lullaby floated up to the sky. The moon heard the beautiful song and was so moved that he forgot all about being sleepy.",
        imageUrl: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9"
      },
      {
        content: "From that night on, the moon stayed awake, listening to all the lullabies from Earth. He discovered that helping children fall asleep was the most wonderful job in the universe.",
        imageUrl: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2"
      }
    ]
  },
  {
    id: '2',
    title: 'The Brave Little Cloud',
    coverUrl: 'https://images.unsplash.com/photo-1594156596782-656c93e4d504',
    ageGroup: '4-6 years',
    duration: '12 min',
    pages: [
      {
        content: "There once was a little cloud who was different from all the others. While they loved to make rain, this cloud preferred to make shapes to entertain the children below.",
        imageUrl: "https://images.unsplash.com/photo-1594156596782-656c93e4d504"
      },
      {
        content: "One day, during a terrible drought, the other clouds were too tired to make rain. The little cloud knew he had to help, even though he had never made rain before.",
        imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda"
      },
      {
        content: "Gathering all his courage, the little cloud puffed himself up and concentrated hard. To everyone's surprise, he made the most beautiful rainbow rain anyone had ever seen.",
        imageUrl: "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8"
      },
      {
        content: "The farmers' crops were saved, and the little cloud learned that being different was actually his greatest strength. From that day on, he made both rain and shapes, bringing joy to everyone.",
        imageUrl: "https://images.unsplash.com/photo-1595876175256-451fd5a2b2d6"
      }
    ]
  },
  {
    id: '3',
    title: 'The Dancing Forest',
    coverUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b',
    ageGroup: '6-8 years',
    duration: '15 min',
    pages: [
      {
        content: "Deep in the heart of an ancient forest, the trees had a special secret. Every night when the moon rose, they would dance and sway to the music of the wind.",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b"
      },
      {
        content: "A young girl named Maya discovered their secret one night when she followed a trail of glowing fireflies into the woods.",
        imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
      },
      {
        content: "The trees taught Maya their magical dance, and she learned that nature has its own special way of celebrating life.",
        imageUrl: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97"
      },
      {
        content: "From that day forward, Maya shared the forest's magic with others, teaching them to listen to the whispers of the trees and dance with the wind.",
        imageUrl: "https://images.unsplash.com/photo-1596825205450-90afb8108d09"
      }
    ]
  },
  {
    id: '4',
    title: 'The Time-Traveling Teddy',
    coverUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f77',
    ageGroup: '9-12 years',
    duration: '20 min',
    pages: [
      {
        content: "Professor Pawsworth wasn't an ordinary teddy bear. When his owner Emma hugged him tight and made a wish, they could travel through time together.",
        imageUrl: "https://images.unsplash.com/photo-1559454403-b8fb88521f77"
      },
      {
        content: "Their first adventure took them to ancient Egypt, where they helped a young pharaoh find his lost cat and learned about the pyramids.",
        imageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368"
      },
      {
        content: "Next, they visited medieval knights and helped solve a dragon's riddle, teaching everyone that wisdom is stronger than weapons.",
        imageUrl: "https://images.unsplash.com/photo-1599732262771-361e63950598"
      },
      {
        content: "Through their adventures, Emma and Professor Pawsworth discovered that the greatest treasure wasn't in the places they visited, but in the friendships they made along the way.",
        imageUrl: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59"
      }
    ]
  },
  {
    id: '5',
    title: 'The Musical Garden',
    coverUrl: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e',
    ageGroup: '3-5 years',
    duration: '10 min',
    pages: [
      {
        content: "In a tiny garden behind an old house lived flowers that could sing. Each flower had its own special song, but they were too shy to perform.",
        imageUrl: "https://images.unsplash.com/photo-1530968033775-2c92736b131e"
      },
      {
        content: "A little bumblebee named Buzz discovered their talent and decided to become their conductor.",
        imageUrl: "https://images.unsplash.com/photo-1583645870248-311e60aa6f8c"
      },
      {
        content: "Under Buzz's guidance, the flowers learned to sing together, creating the most beautiful garden symphony anyone had ever heard.",
        imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
      },
      {
        content: "Soon, the garden became famous for its musical performances, and children would come from far and wide to hear the flowers sing their special songs.",
        imageUrl: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245"
      }
    ]
  }
];