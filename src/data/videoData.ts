export interface ProVideo {
  id: string;
  youtubeId: string;
  title: string;
  proPlayer: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  concepts: string[];
  description: string;
  keyMoments?: { time: string; description: string }[];
}

export const proVideos: ProVideo[] = [
  {
    id: "1",
    youtubeId: "dQw4w9WgXcQ",
    title: "Perfect Elixir Management - Arena 15",
    proPlayer: "Morten (OJ)",
    difficulty: "beginner",
    duration: "12:34",
    concepts: ["Elixir Management", "Card Rotation", "Defense"],
    description: "Learn the fundamentals of elixir management and how to always stay ahead of your opponent.",
    keyMoments: [
      { time: "2:15", description: "Elixir counting basics" },
      { time: "5:30", description: "When to invest elixir" },
      { time: "8:45", description: "Comeback mechanics" }
    ]
  },
  {
    id: "2",
    youtubeId: "kJQP7kiw5Fk",
    title: "Advanced Bridge Spam Techniques",
    proPlayer: "Boss CR",
    difficulty: "advanced",
    duration: "15:22",
    concepts: ["Bridge Spam", "Aggression", "Timing"],
    description: "Master the art of bridge spam with perfect timing and card sequencing.",
    keyMoments: [
      { time: "1:00", description: "Opening plays" },
      { time: "6:20", description: "Double lane pressure" },
      { time: "11:30", description: "Overtime tactics" }
    ]
  },
  {
    id: "3",
    youtubeId: "3JZ_D3ELwOQ",
    title: "Hog Cycle Complete Guide",
    proPlayer: "CWA Mobile Gaming",
    difficulty: "intermediate",
    duration: "18:45",
    concepts: ["Hog Cycle", "Prediction", "Spell Usage"],
    description: "Everything you need to know about playing Hog Cycle effectively in the current meta.",
    keyMoments: [
      { time: "3:00", description: "Card synergies" },
      { time: "8:15", description: "Defensive hog placements" },
      { time: "14:20", description: "Spell cycling for tower" }
    ]
  },
  {
    id: "4",
    youtubeId: "L_jWHffIx5E",
    title: "Counter Push Mastery",
    proPlayer: "B-Rad",
    difficulty: "intermediate",
    duration: "14:10",
    concepts: ["Counter Push", "Surviving Troops", "Elixir Advantage"],
    description: "Turn defense into offense with perfect counter pushing strategies.",
    keyMoments: [
      { time: "2:30", description: "Recognizing opportunities" },
      { time: "7:00", description: "Building big pushes" },
      { time: "10:45", description: "Split lane counters" }
    ]
  },
  {
    id: "5",
    youtubeId: "9bZkp7q19f0",
    title: "Lava Hound Beatdown Breakdown",
    proPlayer: "Sir Tag",
    difficulty: "advanced",
    duration: "16:30",
    concepts: ["Beatdown", "Building Big Pushes", "Support Cards"],
    description: "Comprehensive guide to dominating with Lava Hound in high trophy ranges.",
    keyMoments: [
      { time: "1:45", description: "When to play Lava Hound" },
      { time: "6:50", description: "Supporting your tank" },
      { time: "12:00", description: "Defending opposite lane" }
    ]
  },
  {
    id: "6",
    youtubeId: "jNQXAC9IVRw",
    title: "X-Bow Placement Guide",
    proPlayer: "Ryley CR",
    difficulty: "advanced",
    duration: "13:25",
    concepts: ["X-Bow", "Positioning", "Defensive Buildings"],
    description: "Perfect your X-Bow placements and learn when to go offensive vs defensive.",
    keyMoments: [
      { time: "2:00", description: "Offensive vs defensive" },
      { time: "6:30", description: "Against beatdown" },
      { time: "10:15", description: "Tesla synergy" }
    ]
  },
  {
    id: "7",
    youtubeId: "yPYZpwSpKmA",
    title: "Beginner's Guide to Clash Royale",
    proPlayer: "Morten (OJ)",
    difficulty: "beginner",
    duration: "20:15",
    concepts: ["Basics", "Card Mechanics", "Arena Progression"],
    description: "Start your Clash Royale journey the right way with fundamental concepts.",
    keyMoments: [
      { time: "0:00", description: "Game introduction" },
      { time: "5:00", description: "Building your first deck" },
      { time: "15:00", description: "Common mistakes to avoid" }
    ]
  },
  {
    id: "8",
    youtubeId: "2Vv-BfVoq4g",
    title: "Graveyard Control Mastery",
    proPlayer: "Boss CR",
    difficulty: "intermediate",
    duration: "17:40",
    concepts: ["Graveyard", "Tank Synergy", "Poison Timing"],
    description: "Learn to control the pace of the game with Graveyard and tank combinations.",
    keyMoments: [
      { time: "3:20", description: "Graveyard placement variations" },
      { time: "8:45", description: "Best tank pairings" },
      { time: "13:00", description: "Baiting out counters" }
    ]
  },
  {
    id: "9",
    youtubeId: "dU1xS07y-FA",
    title: "PEKKA Bridge Spam Tutorial",
    proPlayer: "B-Rad",
    difficulty: "advanced",
    duration: "19:00",
    concepts: ["PEKKA", "Bridge Spam", "Dual Lane Pressure"],
    description: "Dominate with PEKKA Bridge Spam and learn the perfect card sequencing.",
    keyMoments: [
      { time: "2:45", description: "Opening sequence" },
      { time: "9:00", description: "When to commit PEKKA" },
      { time: "15:20", description: "Opposite lane pressure" }
    ]
  },
  {
    id: "10",
    youtubeId: "kffacxfA7G4",
    title: "Spell Cycling Strategy",
    proPlayer: "CWA Mobile Gaming",
    difficulty: "beginner",
    duration: "11:50",
    concepts: ["Spell Cycling", "Rocket", "Fireball"],
    description: "When and how to cycle spells for tower damage effectively.",
    keyMoments: [
      { time: "1:30", description: "Rocket vs Lightning" },
      { time: "5:00", description: "Value trades" },
      { time: "8:30", description: "Overtime spell cycling" }
    ]
  },
  {
    id: "11",
    youtubeId: "SDTZ7iX4vTQ",
    title: "Royal Giant Meta Analysis",
    proPlayer: "Sir Tag",
    difficulty: "intermediate",
    duration: "15:55",
    concepts: ["Royal Giant", "Win Conditions", "Meta Decks"],
    description: "Everything about Royal Giant in the current meta and how to counter it.",
    keyMoments: [
      { time: "2:00", description: "Current RG decks" },
      { time: "7:30", description: "Best counters" },
      { time: "12:00", description: "Playing as RG" }
    ]
  },
  {
    id: "12",
    youtubeId: "pt8VYOfr8To",
    title: "Miner Control Gameplay",
    proPlayer: "Ryley CR",
    difficulty: "intermediate",
    duration: "14:20",
    concepts: ["Miner", "Chip Damage", "Control Decks"],
    description: "Control the game with Miner chip damage and perfect defensive play.",
    keyMoments: [
      { time: "1:15", description: "Miner placements" },
      { time: "6:00", description: "Poison timing" },
      { time: "10:45", description: "Building elixir advantage" }
    ]
  }
];

// Filter functions
export const getVideosByDifficulty = (difficulty: string): ProVideo[] => {
  return proVideos.filter(v => v.difficulty === difficulty);
};

export const getVideosByProPlayer = (player: string): ProVideo[] => {
  return proVideos.filter(v => v.proPlayer === player);
};

export const getVideosByConcept = (concept: string): ProVideo[] => {
  return proVideos.filter(v => v.concepts.includes(concept));
};

export const getAllProPlayers = (): string[] => {
  return Array.from(new Set(proVideos.map(v => v.proPlayer)));
};

export const getAllConcepts = (): string[] => {
  return Array.from(new Set(proVideos.flatMap(v => v.concepts)));
};
