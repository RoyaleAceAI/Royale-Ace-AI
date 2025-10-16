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
    youtubeId: "81s4tR22JpA",
    title: "The #1 Cycle Deck is Crazy",
    proPlayer: "Hunter CR",
    difficulty: "advanced",
    duration: "10:23",
    concepts: ["Cycle Deck", "Fast Cycle", "Defense"],
    description: "Watch Hunter CR dominate top ladder with the #1 cycle deck in the current meta.",
    keyMoments: [
      { time: "1:30", description: "Deck overview" },
      { time: "4:15", description: "Cycling techniques" },
      { time: "7:45", description: "Defensive positioning" }
    ]
  },
  {
    id: "2",
    youtubeId: "wGiMtL7iY0E",
    title: "8000+ 3.0 Xbow Top Ladder Gameplay",
    proPlayer: "sk_55",
    difficulty: "advanced",
    duration: "16:45",
    concepts: ["X-Bow", "Cycle", "Top Ladder"],
    description: "Watch sk_55 featuring Betfas reaching 8000+ trophies with the classic 3.0 X-Bow cycle deck.",
    keyMoments: [
      { time: "2:00", description: "Opening placements" },
      { time: "8:30", description: "Defensive X-Bow mastery" },
      { time: "14:00", description: "Overtime pressure" }
    ]
  },
  {
    id: "3",
    youtubeId: "QEHRi9GpJA4",
    title: "How I Hit #1 with Miner Rocket",
    proPlayer: "Nate - Clash Royale",
    difficulty: "advanced",
    duration: "42:15",
    concepts: ["Miner", "Rocket Cycle", "Top Ladder"],
    description: "Complete breakdown of Nate's climb to #1 in the world using Miner Rocket control deck.",
    keyMoments: [
      { time: "1:08", description: "Mortar Rocket matchup" },
      { time: "9:52", description: "Against Mega Knight" },
      { time: "34:23", description: "X-Bow matchup" }
    ]
  },
  {
    id: "4",
    youtubeId: "LejhZ_VubmE",
    title: "How to Play Miner Cycle in 2024",
    proPlayer: "Nate - Clash Royale",
    difficulty: "intermediate",
    duration: "12:18",
    concepts: ["Miner", "Cycle", "Control"],
    description: "Complete guide to the best Miner Cycle deck in 2024 from pro player Nate.",
    keyMoments: [
      { time: "2:00", description: "Deck breakdown" },
      { time: "6:30", description: "Miner placements" },
      { time: "9:45", description: "Defensive strategies" }
    ]
  },
  {
    id: "5",
    youtubeId: "C_BUFDd4XTE",
    title: "ULTIMATE Miner Control Guide",
    proPlayer: "Nate - Clash Royale",
    difficulty: "advanced",
    duration: "55:30",
    concepts: ["Miner", "Control", "Matchups"],
    description: "Comprehensive Miner Control guide covering every major matchup in detail.",
    keyMoments: [
      { time: "0:28", description: "Hog 2.6 matchup" },
      { time: "13:33", description: "Graveyard freeze" },
      { time: "39:46", description: "Golem 3M matchup" }
    ]
  },
  {
    id: "6",
    youtubeId: "dHCbn873o5o",
    title: "How to Play Golem in 2024",
    proPlayer: "Ryley",
    difficulty: "intermediate",
    duration: "14:30",
    concepts: ["Golem", "Beatdown", "Building Pushes"],
    description: "Ultimate Golem beatdown deck guide from top player Ryley with 72K+ views.",
    keyMoments: [
      { time: "2:15", description: "When to play Golem" },
      { time: "7:00", description: "Support cards" },
      { time: "11:30", description: "Defending opposite lane" }
    ]
  },
  {
    id: "7",
    youtubeId: "BlQ6FM99Xa0",
    title: "How To Win A Classic Challenge (2024)",
    proPlayer: "Ryley",
    difficulty: "intermediate",
    duration: "18:42",
    concepts: ["Classic Challenge", "Tournament", "Deck Building"],
    description: "Learn how to get 12 wins in Classic Challenges with expert strategies from Ryley.",
    keyMoments: [
      { time: "1:30", description: "Best challenge decks" },
      { time: "8:15", description: "Key matchup tips" },
      { time: "15:00", description: "Final wins strategy" }
    ]
  },
  {
    id: "8",
    youtubeId: "-A153Q8K4nc",
    title: "Mohamed Light's MAIN Deck Has TAKEN OVER",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "16:28",
    concepts: ["Meta Deck", "Top Ladder", "High Skill"],
    description: "Ryley analyzes Mohamed Light's signature deck that's dominating the meta (288K views).",
    keyMoments: [
      { time: "2:00", description: "Deck overview" },
      { time: "7:30", description: "Why it's so strong" },
      { time: "13:00", description: "Key techniques" }
    ]
  },
  {
    id: "9",
    youtubeId: "FpQq6azW_F4",
    title: "The Deck That Beats EVERYTHING",
    proPlayer: "Innvader",
    difficulty: "advanced",
    duration: "14:15",
    concepts: ["Meta Counter", "Versatile Deck", "High Win Rate"],
    description: "Innvader showcases an incredibly versatile deck that counters almost every meta deck.",
    keyMoments: [
      { time: "1:45", description: "Deck breakdown" },
      { time: "6:20", description: "Against beatdown" },
      { time: "11:00", description: "Cycle matchups" }
    ]
  },
  {
    id: "10",
    youtubeId: "wpUwbVomLYM",
    title: "How To Play EVERY Evolution",
    proPlayer: "Innvader",
    difficulty: "beginner",
    duration: "13:52",
    concepts: ["Evolutions", "Card Mechanics", "Deck Building"],
    description: "Complete guide showing how to properly use every evolution card in Clash Royale.",
    keyMoments: [
      { time: "0:00", description: "Evolution basics" },
      { time: "5:30", description: "Best evolution combos" },
      { time: "10:45", description: "Common mistakes" }
    ]
  },
  {
    id: "11",
    youtubeId: "kzO0CMu0VG4",
    title: "How to Win EVERY Game You Play",
    proPlayer: "Hunter CR",
    difficulty: "intermediate",
    duration: "11:45",
    concepts: ["Win Conditions", "Consistency", "Strategy"],
    description: "Hunter CR reveals the mindset and strategies to consistently win more games.",
    keyMoments: [
      { time: "1:20", description: "Mental approach" },
      { time: "5:00", description: "Adapting to opponents" },
      { time: "9:15", description: "Closing out games" }
    ]
  },
  {
    id: "12",
    youtubeId: "EpRp9S0s1k0",
    title: "1v1ing my Viewers in Clash Royale",
    proPlayer: "sk_55",
    difficulty: "beginner",
    duration: "18:30",
    concepts: ["Friendly Battles", "Deck Variety", "Community"],
    description: "Watch sk_55 battle viewers with various decks and provide live commentary and tips.",
    keyMoments: [
      { time: "2:00", description: "First viewer battle" },
      { time: "8:45", description: "Deck analysis" },
      { time: "15:00", description: "Pro tips shared" }
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
