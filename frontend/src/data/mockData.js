export const mockUser = {
  id: 'u1',
  name: 'Alex Johnson',
  handle: '@alexj_travels',
  role: 'creator',
  avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150',
  bio: 'Travel & Lifestyle creator. Documenting the unseen parts of the globe.',
  platforms: {
    instagram: '120k',
    youtube: '450k',
    tiktok: '1.2M'
  }
};

export const mockFeedPosts = [
  {
    id: 'p1',
    author: {
      name: 'Sarah Chen',
      handle: '@sarah.tech',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      role: 'creator'
    },
    title: 'Need a badass VFX editor for my next tech review! 🎬',
    content: 'Looking for an editor who specializes in dynamic transitions and masking for a 10-minute smartphone review video. Must know Premiere Pro or After Effects. Budget is flexible for the right talent.',
    budget: '$300 - $500',
    tags: ['Video Editing', 'Tech', 'YouTube'],
    timePosted: '2 hours ago',
    likes: 24,
    comments: 5
  },
  {
    id: 'p2',
    author: {
      name: 'Mike Ross',
      handle: '@mikeross_edits',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      role: 'provider'
    },
    title: 'Available for Thumbnail Design slots this week 🎨',
    content: 'Just finished a big client project and have capacity for 5 YouTube thumbnails this week. Check my profile for the portfolio. High CTR guaranteed!',
    budget: '$50/thumb',
    tags: ['Graphic Design', 'YouTube', 'Photoshop'],
    timePosted: '5 hours ago',
    likes: 112,
    comments: 14
  },
  {
    id: 'p3',
    author: {
      name: 'Elena Fit',
      handle: '@elenafitness',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      role: 'creator'
    },
    title: 'Looking for a Social Media Manager (Instagram focus)',
    content: 'Need someone to handle scheduling, hashtag research, and community engagement for my fitness brand. Approx 15 hours a week.',
    budget: '$20/hr',
    tags: ['SMM', 'Instagram', 'Fitness'],
    timePosted: '1 day ago',
    likes: 45,
    comments: 12
  }
];

export const mockSuggestedUsers = [
  {
    id: 's1',
    name: 'David Kim',
    handle: '@dk_visuals',
    role: 'provider',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    skills: ['Video Editor', 'Colorist'],
    matchScore: 94
  },
  {
    id: 's2',
    name: 'Jessica Lee',
    handle: '@jess.designs',
    role: 'provider',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    skills: ['Thumbnail Artist', 'Branding'],
    matchScore: 88
  },
  {
    id: 's3',
    name: 'Tom Barnes',
    handle: '@tom_growth',
    role: 'provider',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    skills: ['SEO', 'YouTube Strategist'],
    matchScore: 81
  }
];

export const mockChats = [
  {
    id: 'c1',
    user: mockSuggestedUsers[0],
    lastMessage: 'Hey Alex! I saw your post about the travel vlog. I can definitely help with the color grading.',
    time: '10:30 AM',
    unread: 2,
    messages: [
      { sender: 'them', text: 'Hey Alex! I saw your post about the travel vlog. I can definitely help with the color grading.', time: '10:28 AM' },
      { sender: 'them', text: 'Here is my portfolio link: vimeo.com/dkvisuals', time: '10:30 AM' }
    ]
  },
  {
    id: 'c2',
    user: mockSuggestedUsers[1],
    lastMessage: 'Sounds good! Sent the invoice.',
    time: 'Yesterday',
    unread: 0,
    messages: [
      { sender: 'me', text: 'Love the thumbnails you did for MrBeast style videos. Can we do something similar?', time: '2:00 PM' },
      { sender: 'them', text: 'Absolutely. It is $50 per thumbnail.', time: '2:15 PM' },
      { sender: 'me', text: 'Deal. Lets start with 2.', time: '3:00 PM' },
      { sender: 'them', text: 'Sounds good! Sent the invoice.', time: '3:05 PM' }
    ]
  }
];
