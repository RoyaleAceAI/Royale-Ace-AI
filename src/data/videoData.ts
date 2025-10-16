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
  },
  {
    id: "13",
    youtubeId: "7XB8KF2RaQA",
    title: "Perfect Hog Rider 2.6 Cycle Guide",
    proPlayer: "Oyassuu",
    difficulty: "advanced",
    duration: "21:45",
    concepts: ["Hog Rider", "2.6 Cycle", "Fast Cycle"],
    description: "Master the legendary 2.6 Hog cycle deck with this comprehensive guide.",
    keyMoments: [
      { time: "3:00", description: "Card interactions" },
      { time: "10:30", description: "Cannon placements" },
      { time: "18:00", description: "Overtime strategies" }
    ]
  },
  {
    id: "14",
    youtubeId: "Nz5f8K3m9xo",
    title: "Royal Giant Evolution is INSANE",
    proPlayer: "Boss CR",
    difficulty: "intermediate",
    duration: "13:20",
    concepts: ["Royal Giant", "Evolution", "Beatdown"],
    description: "Learn how to dominate with the new Royal Giant evolution card.",
    keyMoments: [
      { time: "1:15", description: "Evolution mechanics" },
      { time: "6:45", description: "Best support cards" },
      { time: "11:00", description: "Matchup guide" }
    ]
  },
  {
    id: "15",
    youtubeId: "4tF9dKx7qYM",
    title: "Mastering Elixir Management",
    proPlayer: "SirTag",
    difficulty: "intermediate",
    duration: "15:30",
    concepts: ["Elixir", "Management", "Strategy"],
    description: "Essential elixir management techniques to win more games.",
    keyMoments: [
      { time: "2:30", description: "Trading efficiently" },
      { time: "8:00", description: "When to pump" },
      { time: "12:45", description: "Spell cycling" }
    ]
  },
  {
    id: "16",
    youtubeId: "kLmD_9J8B1Q",
    title: "Lumberjack Balloon Mastery",
    proPlayer: "Morten",
    difficulty: "advanced",
    duration: "19:15",
    concepts: ["Lumberjack", "Balloon", "Push Timing"],
    description: "Learn the perfect timing for Lumberjack Balloon pushes.",
    keyMoments: [
      { time: "2:00", description: "Opening plays" },
      { time: "9:30", description: "Rage mechanics" },
      { time: "16:00", description: "Defensive LJ" }
    ]
  },
  {
    id: "17",
    youtubeId: "P8hN5_A2zFA",
    title: "Mega Knight Bridge Spam Guide",
    proPlayer: "Surgical Goblin",
    difficulty: "intermediate",
    duration: "17:45",
    concepts: ["Mega Knight", "Bridge Spam", "Pressure"],
    description: "Master aggressive bridge spam strategies with Mega Knight.",
    keyMoments: [
      { time: "1:45", description: "When to spam" },
      { time: "8:20", description: "Bandit timing" },
      { time: "14:30", description: "Defense counters" }
    ]
  },
  {
    id: "18",
    youtubeId: "dQ8NhZ9k3Yo",
    title: "Pekka Bridge Spam Pro Gameplay",
    proPlayer: "Surgical Goblin",
    difficulty: "advanced",
    duration: "22:30",
    concepts: ["PEKKA", "Bridge Spam", "Top Ladder"],
    description: "Watch elite PEKKA bridge spam gameplay at 8000+ trophies.",
    keyMoments: [
      { time: "3:15", description: "Opening strategy" },
      { time: "11:00", description: "Defending beatdown" },
      { time: "19:00", description: "Clutch overtime" }
    ]
  },
  {
    id: "19",
    youtubeId: "y2XpHQvIKRo",
    title: "Graveyard Freeze Complete Guide",
    proPlayer: "Morten",
    difficulty: "advanced",
    duration: "25:00",
    concepts: ["Graveyard", "Freeze", "Spell Timing"],
    description: "Complete Graveyard Freeze deck guide with all matchups.",
    keyMoments: [
      { time: "4:00", description: "GY placement tricks" },
      { time: "12:30", description: "Freeze timing" },
      { time: "21:00", description: "Defending X-Bow" }
    ]
  },
  {
    id: "20",
    youtubeId: "u4R6gN8nPbM",
    title: "How to Play Mortar Bait",
    proPlayer: "Woody",
    difficulty: "advanced",
    duration: "18:45",
    concepts: ["Mortar", "Bait", "Cycle"],
    description: "Advanced Mortar bait techniques from top ladder player.",
    keyMoments: [
      { time: "2:15", description: "Spell baiting" },
      { time: "9:00", description: "Mortar placements" },
      { time: "15:30", description: "Rocket cycling" }
    ]
  },
  {
    id: "21",
    youtubeId: "F6z8vZQpWzU",
    title: "Log Bait 2024 Meta Guide",
    proPlayer: "Jack",
    difficulty: "intermediate",
    duration: "16:20",
    concepts: ["Log Bait", "Spell Bait", "Cycle"],
    description: "Updated Log Bait guide for the current meta season.",
    keyMoments: [
      { time: "1:30", description: "Deck overview" },
      { time: "7:45", description: "Baiting sequence" },
      { time: "13:00", description: "Rocket finish" }
    ]
  },
  {
    id: "22",
    youtubeId: "3v4yWKmH2Zc",
    title: "Electro Giant Ultimate Guide",
    proPlayer: "Boss CR",
    difficulty: "beginner",
    duration: "14:50",
    concepts: ["Electro Giant", "Beatdown", "Support"],
    description: "Learn how to build unstoppable Electro Giant pushes.",
    keyMoments: [
      { time: "2:00", description: "Support cards" },
      { time: "7:15", description: "Against inferno" },
      { time: "11:30", description: "Mirror plays" }
    ]
  },
  {
    id: "23",
    youtubeId: "Hxe6pD8hkZQ",
    title: "Sparky Evolution Domination",
    proPlayer: "B-Rad",
    difficulty: "intermediate",
    duration: "19:30",
    concepts: ["Sparky", "Evolution", "Control"],
    description: "Master the devastating Sparky evolution card.",
    keyMoments: [
      { time: "3:00", description: "Evolution timing" },
      { time: "10:15", description: "Defending rushes" },
      { time: "16:45", description: "Spell cycling" }
    ]
  },
  {
    id: "24",
    youtubeId: "xQ0N1hEZ4lU",
    title: "Giant Double Prince Meta",
    proPlayer: "Morten",
    difficulty: "intermediate",
    duration: "20:15",
    concepts: ["Giant", "Double Prince", "Beatdown"],
    description: "Classic Giant Double Prince deck for ladder pushing.",
    keyMoments: [
      { time: "2:30", description: "Push building" },
      { time: "11:00", description: "Against cycle decks" },
      { time: "17:30", description: "Overtime pressure" }
    ]
  },
  {
    id: "25",
    youtubeId: "Nm8c7HhJPv4",
    title: "Three Musketeers Split Push",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "23:45",
    concepts: ["Three Musketeers", "Split Push", "Beatdown"],
    description: "Advanced split push strategies with Three Musketeers.",
    keyMoments: [
      { time: "4:15", description: "Split timings" },
      { time: "13:00", description: "Pump placement" },
      { time: "20:00", description: "Defending spell bait" }
    ]
  },
  {
    id: "26",
    youtubeId: "w2VkZbfv1Ew",
    title: "Ram Rider Control Deck",
    proPlayer: "Surgical Goblin",
    difficulty: "advanced",
    duration: "17:30",
    concepts: ["Ram Rider", "Control", "Defense"],
    description: "Control-focused Ram Rider deck for competitive play.",
    keyMoments: [
      { time: "2:00", description: "Defensive Ram" },
      { time: "9:30", description: "Spell usage" },
      { time: "15:00", description: "Chip damage" }
    ]
  },
  {
    id: "27",
    youtubeId: "8vr8wTpKQC8",
    title: "Ice Bow 3.5 Top Ladder",
    proPlayer: "sk_55",
    difficulty: "advanced",
    duration: "21:00",
    concepts: ["X-Bow", "Ice Wizard", "Defense"],
    description: "Ice Bow defensive masterclass from top ladder.",
    keyMoments: [
      { time: "3:30", description: "Tesla placements" },
      { time: "12:15", description: "Ice Wizard value" },
      { time: "18:30", description: "Rocket cycle finish" }
    ]
  },
  {
    id: "28",
    youtubeId: "Y3K6bv_lMQs",
    title: "Miner Wall Breakers Cycle",
    proPlayer: "Nate - Clash Royale",
    difficulty: "intermediate",
    duration: "15:45",
    concepts: ["Miner", "Wall Breakers", "Cycle"],
    description: "Fast-paced Miner Wall Breakers cycle gameplay.",
    keyMoments: [
      { time: "1:45", description: "Wall Breaker timing" },
      { time: "8:00", description: "Spell predictions" },
      { time: "13:30", description: "Miner chip" }
    ]
  },
  {
    id: "29",
    youtubeId: "P6wdKfz2Feo",
    title: "Royal Hogs Beatdown Guide",
    proPlayer: "Boss CR",
    difficulty: "beginner",
    duration: "13:15",
    concepts: ["Royal Hogs", "Beatdown", "Split Lane"],
    description: "Simple Royal Hogs beatdown strategy for beginners.",
    keyMoments: [
      { time: "1:30", description: "When to split" },
      { time: "6:45", description: "Support cards" },
      { time: "11:00", description: "Defending counters" }
    ]
  },
  {
    id: "30",
    youtubeId: "lWRQmQD2qwU",
    title: "Lavahound Clone Meta",
    proPlayer: "Ryley",
    difficulty: "intermediate",
    duration: "19:00",
    concepts: ["Lavahound", "Clone", "Air Beatdown"],
    description: "Devastating Lavahound Clone deck for ladder.",
    keyMoments: [
      { time: "2:30", description: "Building pushes" },
      { time: "10:15", description: "Clone timing" },
      { time: "16:30", description: "Against air defense" }
    ]
  },
  {
    id: "31",
    youtubeId: "8qJ4L6Kzd7s",
    title: "Goblin Barrel Bait Evolution",
    proPlayer: "Jack",
    difficulty: "intermediate",
    duration: "16:30",
    concepts: ["Goblin Barrel", "Evolution", "Bait"],
    description: "Updated bait deck with Goblin Barrel evolution.",
    keyMoments: [
      { time: "2:00", description: "Evolution benefits" },
      { time: "8:30", description: "Barrel placements" },
      { time: "14:00", description: "Princess value" }
    ]
  },
  {
    id: "32",
    youtubeId: "tK9x4NZ_z7c",
    title: "Battle Ram Bridge Spam",
    proPlayer: "Morten",
    difficulty: "beginner",
    duration: "12:45",
    concepts: ["Battle Ram", "Bridge Spam", "Aggro"],
    description: "Aggressive Battle Ram bridge spam for quick wins.",
    keyMoments: [
      { time: "1:15", description: "Opening pressure" },
      { time: "6:00", description: "Marcher synergy" },
      { time: "10:30", description: "Defending beatdown" }
    ]
  },
  {
    id: "33",
    youtubeId: "B4g_vP6JT8g",
    title: "Skeleton King Cycle Pro Play",
    proPlayer: "Hunter CR",
    difficulty: "advanced",
    duration: "18:15",
    concepts: ["Skeleton King", "Champion", "Cycle"],
    description: "High-level Skeleton King cycle deck gameplay.",
    keyMoments: [
      { time: "2:45", description: "Ability timing" },
      { time: "10:00", description: "Defensive SK" },
      { time: "15:45", description: "Counterpush plays" }
    ]
  },
  {
    id: "34",
    youtubeId: "nF4bw7pVF2Q",
    title: "Archer Queen Control Meta",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "22:00",
    concepts: ["Archer Queen", "Champion", "Control"],
    description: "Control deck centered around Archer Queen champion.",
    keyMoments: [
      { time: "3:30", description: "Queen ability usage" },
      { time: "12:15", description: "Against beatdown" },
      { time: "19:00", description: "Overtime tactics" }
    ]
  },
  {
    id: "35",
    youtubeId: "F8vdLPnWfQU",
    title: "Golden Knight Rush Deck",
    proPlayer: "Surgical Goblin",
    difficulty: "intermediate",
    duration: "15:00",
    concepts: ["Golden Knight", "Champion", "Aggro"],
    description: "Fast-paced Golden Knight rush strategies.",
    keyMoments: [
      { time: "1:30", description: "Dash mechanics" },
      { time: "7:45", description: "Bridge plays" },
      { time: "12:30", description: "Defending swarms" }
    ]
  },
  {
    id: "36",
    youtubeId: "M8vQ9gYQzAc",
    title: "Mighty Miner Drill Deck",
    proPlayer: "Woody",
    difficulty: "advanced",
    duration: "20:30",
    concepts: ["Mighty Miner", "Goblin Drill", "Pressure"],
    description: "Constant pressure with Mighty Miner and Goblin Drill.",
    keyMoments: [
      { time: "3:00", description: "Drill placements" },
      { time: "11:30", description: "Miner dash timing" },
      { time: "18:00", description: "Spell cycling" }
    ]
  },
  {
    id: "37",
    youtubeId: "7D3xKQYwH5c",
    title: "Phoenix Evolution Deck Guide",
    proPlayer: "B-Rad",
    difficulty: "intermediate",
    duration: "17:15",
    concepts: ["Phoenix", "Evolution", "Air"],
    description: "Master the Phoenix evolution card mechanics.",
    keyMoments: [
      { time: "2:15", description: "Evolution value" },
      { time: "9:00", description: "Against ground" },
      { time: "14:45", description: "Egg placement" }
    ]
  },
  {
    id: "38",
    youtubeId: "w9P3qBzKNGU",
    title: "Monk Ultimate Guide 2024",
    proPlayer: "SirTag",
    difficulty: "advanced",
    duration: "24:00",
    concepts: ["Monk", "Champion", "Reflection"],
    description: "Complete guide to mastering the Monk champion.",
    keyMoments: [
      { time: "4:00", description: "Reflection timing" },
      { time: "13:30", description: "Against spells" },
      { time: "21:00", description: "Defensive Monk" }
    ]
  },
  {
    id: "39",
    youtubeId: "RnK4V7_6pPQ",
    title: "Little Prince Cycle Meta",
    proPlayer: "Oyassuu",
    difficulty: "advanced",
    duration: "19:45",
    concepts: ["Little Prince", "Champion", "Cycle"],
    description: "Fast cycle deck featuring Little Prince champion.",
    keyMoments: [
      { time: "2:30", description: "Guardian placement" },
      { time: "11:00", description: "Kite techniques" },
      { time: "17:30", description: "Overtime pressure" }
    ]
  },
  {
    id: "40",
    youtubeId: "qL7YbPnTxJQ",
    title: "How to Counter Every Meta Deck",
    proPlayer: "Hunter CR",
    difficulty: "intermediate",
    duration: "28:30",
    concepts: ["Counters", "Meta", "Matchups"],
    description: "Complete guide to countering all popular meta decks.",
    keyMoments: [
      { time: "5:00", description: "Beatdown counters" },
      { time: "15:00", description: "Cycle counters" },
      { time: "25:00", description: "Bridge spam" }
    ]
  },
  {
    id: "41",
    youtubeId: "g2QvZJN0yKE",
    title: "Tornado King Tower Activations",
    proPlayer: "sk_55",
    difficulty: "advanced",
    duration: "13:30",
    concepts: ["Tornado", "King Tower", "Defense"],
    description: "Master every Tornado king tower activation.",
    keyMoments: [
      { time: "1:45", description: "Hog activation" },
      { time: "6:30", description: "Ram Rider pull" },
      { time: "11:00", description: "Balloon timing" }
    ]
  },
  {
    id: "42",
    youtubeId: "vB8hLQDLYsc",
    title: "Fisherman Hook Mastery",
    proPlayer: "Morten",
    difficulty: "advanced",
    duration: "16:00",
    concepts: ["Fisherman", "Hook", "King Activation"],
    description: "Advanced Fisherman hook techniques and activations.",
    keyMoments: [
      { time: "2:00", description: "Hook mechanics" },
      { time: "8:30", description: "Activation setups" },
      { time: "13:45", description: "Defense pulls" }
    ]
  },
  {
    id: "43",
    youtubeId: "eKx7_8sPZT0",
    title: "Spell Cycling to Victory",
    proPlayer: "Nate - Clash Royale",
    difficulty: "intermediate",
    duration: "14:20",
    concepts: ["Spells", "Chip Damage", "Cycle"],
    description: "When and how to spell cycle for the win.",
    keyMoments: [
      { time: "1:30", description: "Rocket cycling" },
      { time: "7:00", description: "Fireball value" },
      { time: "12:00", description: "Overtime spells" }
    ]
  },
  {
    id: "44",
    youtubeId: "5LqJ8gN7cqw",
    title: "Prediction Spell Guide",
    proPlayer: "Surgical Goblin",
    difficulty: "advanced",
    duration: "18:45",
    concepts: ["Predictions", "Spells", "Reads"],
    description: "Learn to predict and counter opponent plays.",
    keyMoments: [
      { time: "3:00", description: "Log predictions" },
      { time: "10:15", description: "Fireball timing" },
      { time: "16:00", description: "Rocket reads" }
    ]
  },
  {
    id: "45",
    youtubeId: "Nq4F3bD7zGU",
    title: "Troop Placement Masterclass",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "21:30",
    concepts: ["Placement", "Defense", "Tiles"],
    description: "Perfect troop placement for maximum efficiency.",
    keyMoments: [
      { time: "4:00", description: "Building placements" },
      { time: "12:30", description: "Kiting techniques" },
      { time: "19:00", description: "Stagger timing" }
    ]
  },
  {
    id: "46",
    youtubeId: "hW3D8Y0PNBk",
    title: "Ladder Pushing Strategy 2024",
    proPlayer: "Boss CR",
    difficulty: "beginner",
    duration: "15:00",
    concepts: ["Ladder", "Trophies", "Progression"],
    description: "Complete strategy for pushing trophies on ladder.",
    keyMoments: [
      { time: "2:00", description: "Deck selection" },
      { time: "8:00", description: "When to play" },
      { time: "12:30", description: "Tilt management" }
    ]
  },
  {
    id: "47",
    youtubeId: "R7vY_N9QxQM",
    title: "Draft Challenge Winning Guide",
    proPlayer: "Ryley",
    difficulty: "intermediate",
    duration: "19:15",
    concepts: ["Draft", "Challenge", "Card Selection"],
    description: "How to win draft challenges consistently.",
    keyMoments: [
      { time: "2:30", description: "Pick priorities" },
      { time: "10:00", description: "Deny strategy" },
      { time: "16:45", description: "Synergy picks" }
    ]
  },
  {
    id: "48",
    youtubeId: "EhN8x9YLZLU",
    title: "Triple Draft Pro Strategies",
    proPlayer: "Hunter CR",
    difficulty: "advanced",
    duration: "22:00",
    concepts: ["Triple Draft", "Adaptation", "Strategy"],
    description: "Advanced strategies for Triple Draft mode.",
    keyMoments: [
      { time: "3:45", description: "Card valuation" },
      { time: "12:00", description: "Win condition picks" },
      { time: "19:30", description: "Spell selection" }
    ]
  },
  {
    id: "49",
    youtubeId: "7hB1c5WDMPE",
    title: "Infinite Elixir Best Decks",
    proPlayer: "B-Rad",
    difficulty: "beginner",
    duration: "16:30",
    concepts: ["Infinite Elixir", "Party Mode", "Fun"],
    description: "Most overpowered decks for Infinite Elixir mode.",
    keyMoments: [
      { time: "1:30", description: "Rocket cycling" },
      { time: "8:00", description: "Mirror decks" },
      { time: "13:45", description: "Spell spam" }
    ]
  },
  {
    id: "50",
    youtubeId: "kM9pV9F2Kxg",
    title: "2v2 Best Partner Combos",
    proPlayer: "SirTag",
    difficulty: "beginner",
    duration: "14:15",
    concepts: ["2v2", "Teamwork", "Synergy"],
    description: "Best deck combinations for 2v2 battles.",
    keyMoments: [
      { time: "2:00", description: "Deck synergies" },
      { time: "7:30", description: "Communication" },
      { time: "12:00", description: "Push coordination" }
    ]
  },
  {
    id: "51",
    youtubeId: "nZQpXhZ6Y8s",
    title: "War Day Best Decks 2024",
    proPlayer: "Woody",
    difficulty: "intermediate",
    duration: "17:45",
    concepts: ["Clan Wars", "War Day", "Meta"],
    description: "Top decks for Clan War day battles.",
    keyMoments: [
      { time: "2:30", description: "Safe picks" },
      { time: "9:15", description: "Meta counters" },
      { time: "15:00", description: "Level advantages" }
    ]
  },
  {
    id: "52",
    youtubeId: "VpN4f8L2RY4",
    title: "Clan War Colosseum Strategy",
    proPlayer: "Oyassuu",
    difficulty: "advanced",
    duration: "20:00",
    concepts: ["Colosseum", "Clan Wars", "Strategy"],
    description: "Advanced strategies for Colosseum war days.",
    keyMoments: [
      { time: "3:00", description: "Attack planning" },
      { time: "11:30", description: "Defense setup" },
      { time: "17:45", description: "Boat battles" }
    ]
  },
  {
    id: "53",
    youtubeId: "VWmDqL5hQ5Q",
    title: "Card Mastery: Mega Knight",
    proPlayer: "Jack",
    difficulty: "beginner",
    duration: "12:00",
    concepts: ["Mega Knight", "Card Guide", "Defense"],
    description: "Everything you need to know about Mega Knight.",
    keyMoments: [
      { time: "1:30", description: "Jump mechanics" },
      { time: "6:00", description: "Value plays" },
      { time: "10:00", description: "Countering MK" }
    ]
  },
  {
    id: "54",
    youtubeId: "8zK3fJKWsR0",
    title: "Card Mastery: Goblin Drill",
    proPlayer: "Nate - Clash Royale",
    difficulty: "intermediate",
    duration: "15:30",
    concepts: ["Goblin Drill", "Win Condition", "Placement"],
    description: "Master every aspect of the Goblin Drill.",
    keyMoments: [
      { time: "2:00", description: "Drill placements" },
      { time: "8:30", description: "Support cards" },
      { time: "13:00", description: "Prediction drills" }
    ]
  },
  {
    id: "55",
    youtubeId: "D3xHqLkXPwc",
    title: "Card Mastery: Electro Spirit",
    proPlayer: "sk_55",
    difficulty: "intermediate",
    duration: "11:45",
    concepts: ["Electro Spirit", "Cycle", "Reset"],
    description: "Get maximum value from Electro Spirit.",
    keyMoments: [
      { time: "1:45", description: "Reset mechanics" },
      { time: "6:00", description: "Defensive value" },
      { time: "9:30", description: "Cycle usage" }
    ]
  },
  {
    id: "56",
    youtubeId: "wCDvJLJ8Q0g",
    title: "Card Mastery: Mother Witch",
    proPlayer: "Morten",
    difficulty: "advanced",
    duration: "18:00",
    concepts: ["Mother Witch", "Curse", "Counterpush"],
    description: "Advanced Mother Witch curse mechanics.",
    keyMoments: [
      { time: "2:30", description: "Curse timing" },
      { time: "10:00", description: "Against swarms" },
      { time: "15:30", description: "Hog value" }
    ]
  },
  {
    id: "57",
    youtubeId: "KN2F_8hGVTQ",
    title: "Card Mastery: Cannon Cart",
    proPlayer: "Surgical Goblin",
    difficulty: "intermediate",
    duration: "13:15",
    concepts: ["Cannon Cart", "Building", "Siege"],
    description: "Unlock Cannon Cart's full potential.",
    keyMoments: [
      { time: "1:30", description: "Shield mechanics" },
      { time: "7:00", description: "Defensive cart" },
      { time: "11:00", description: "Push support" }
    ]
  },
  {
    id: "58",
    youtubeId: "nH8dKL6vNjU",
    title: "Best Defense Wins Games",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "23:00",
    concepts: ["Defense", "Counterpush", "Elixir"],
    description: "Why perfect defense is the key to victory.",
    keyMoments: [
      { time: "4:00", description: "Minimal defense" },
      { time: "13:00", description: "Counter timing" },
      { time: "20:00", description: "Elixir leads" }
    ]
  },
  {
    id: "59",
    youtubeId: "bJ7Bv8hQPDs",
    title: "Kiting Guide for All Troops",
    proPlayer: "Hunter CR",
    difficulty: "advanced",
    duration: "16:45",
    concepts: ["Kiting", "Defense", "Placement"],
    description: "Complete kiting guide for every troop type.",
    keyMoments: [
      { time: "2:15", description: "Basic kiting" },
      { time: "9:00", description: "King tower kites" },
      { time: "14:30", description: "Advanced pulls" }
    ]
  },
  {
    id: "60",
    youtubeId: "JmN8vH7pYUs",
    title: "Counter Push Mastery",
    proPlayer: "Boss CR",
    difficulty: "intermediate",
    duration: "14:30",
    concepts: ["Counterpush", "Offense", "Timing"],
    description: "Turn defense into devastating counter attacks.",
    keyMoments: [
      { time: "1:45", description: "When to counter" },
      { time: "7:30", description: "Support timing" },
      { time: "12:00", description: "Split pushes" }
    ]
  },
  {
    id: "61",
    youtubeId: "R1PdQfPXZkM",
    title: "Opposite Lane Pressure Guide",
    proPlayer: "Ryley",
    difficulty: "intermediate",
    duration: "15:15",
    concepts: ["Pressure", "Split Push", "Strategy"],
    description: "When and how to pressure opposite lane.",
    keyMoments: [
      { time: "2:00", description: "Pressure timing" },
      { time: "8:15", description: "Against beatdown" },
      { time: "13:00", description: "Risk assessment" }
    ]
  },
  {
    id: "62",
    youtubeId: "xY2pKwN8K3E",
    title: "King Tower Activation Guide",
    proPlayer: "sk_55",
    difficulty: "advanced",
    duration: "17:00",
    concepts: ["King Tower", "Activation", "Defense"],
    description: "Every possible king tower activation technique.",
    keyMoments: [
      { time: "3:00", description: "Tornado activations" },
      { time: "10:00", description: "Fisherman pulls" },
      { time: "14:30", description: "Troop placements" }
    ]
  },
  {
    id: "63",
    youtubeId: "a7Vxh8N9Wqk",
    title: "Card Level Priority Guide",
    proPlayer: "SirTag",
    difficulty: "beginner",
    duration: "13:00",
    concepts: ["Progression", "Upgrade", "Priority"],
    description: "Which cards to upgrade first for maximum impact.",
    keyMoments: [
      { time: "1:30", description: "Win conditions" },
      { time: "6:45", description: "Support cards" },
      { time: "10:30", description: "Spells priority" }
    ]
  },
  {
    id: "64",
    youtubeId: "W3LhK7qLF9Q",
    title: "F2P Progression Guide 2024",
    proPlayer: "Woody",
    difficulty: "beginner",
    duration: "18:30",
    concepts: ["F2P", "Progression", "Resources"],
    description: "Maximize progression as free-to-play player.",
    keyMoments: [
      { time: "2:30", description: "Daily routines" },
      { time: "10:00", description: "Resource management" },
      { time: "15:45", description: "Event priority" }
    ]
  },
  {
    id: "65",
    youtubeId: "m2K9wZwNQ5c",
    title: "Wild Card Usage Guide",
    proPlayer: "Jack",
    difficulty: "beginner",
    duration: "11:00",
    concepts: ["Wild Cards", "Upgrade", "Strategy"],
    description: "Best ways to use your wild cards efficiently.",
    keyMoments: [
      { time: "1:15", description: "When to use" },
      { time: "5:30", description: "Priority cards" },
      { time: "9:00", description: "Saving strategies" }
    ]
  },
  {
    id: "66",
    youtubeId: "QbY8pXdDLkU",
    title: "Magic Items Complete Guide",
    proPlayer: "B-Rad",
    difficulty: "beginner",
    duration: "16:00",
    concepts: ["Magic Items", "Books", "Strategy"],
    description: "How to use magic items for best value.",
    keyMoments: [
      { time: "2:00", description: "Book usage" },
      { time: "8:30", description: "Wild cards timing" },
      { time: "13:45", description: "Event planning" }
    ]
  },
  {
    id: "67",
    youtubeId: "zDfJL8YMnhw",
    title: "Tournament Standard Decks",
    proPlayer: "Oyassuu",
    difficulty: "intermediate",
    duration: "19:45",
    concepts: ["Tournament", "Standard", "Meta"],
    description: "Best decks for tournament standard play.",
    keyMoments: [
      { time: "3:00", description: "Meta analysis" },
      { time: "11:15", description: "Skill-based decks" },
      { time: "17:00", description: "Counter strategies" }
    ]
  },
  {
    id: "68",
    youtubeId: "pMxY7v3Z6FU",
    title: "Global Tournament Push Guide",
    proPlayer: "Hunter CR",
    difficulty: "intermediate",
    duration: "21:00",
    concepts: ["Global Tournament", "Strategy", "Rewards"],
    description: "Maximize wins in global tournaments.",
    keyMoments: [
      { time: "2:45", description: "Deck selection" },
      { time: "12:00", description: "Matchup knowledge" },
      { time: "18:30", description: "Reward optimization" }
    ]
  },
  {
    id: "69",
    youtubeId: "VmBH5c7fT9w",
    title: "Classic Challenge 12 Wins",
    proPlayer: "Morten",
    difficulty: "advanced",
    duration: "25:30",
    concepts: ["Classic Challenge", "12 Wins", "Strategy"],
    description: "Step by step to 12 wins in classic challenge.",
    keyMoments: [
      { time: "4:00", description: "Deck choice" },
      { time: "14:30", description: "Key matchups" },
      { time: "22:00", description: "Clutch wins" }
    ]
  },
  {
    id: "70",
    youtubeId: "8P2kNF9bXH0",
    title: "Grand Challenge Tips 2024",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "27:00",
    concepts: ["Grand Challenge", "Competitive", "Meta"],
    description: "Advanced tips for grand challenge success.",
    keyMoments: [
      { time: "5:00", description: "Meta reads" },
      { time: "16:00", description: "Adaptation" },
      { time: "24:00", description: "Mental game" }
    ]
  },
  {
    id: "71",
    youtubeId: "gN8Z9Qm3KcI",
    title: "Special Challenges Guide",
    proPlayer: "Surgical Goblin",
    difficulty: "intermediate",
    duration: "18:15",
    concepts: ["Special Challenge", "Events", "Strategy"],
    description: "How to dominate special event challenges.",
    keyMoments: [
      { time: "2:30", description: "Challenge types" },
      { time: "10:00", description: "Deck building" },
      { time: "15:45", description: "Unique strategies" }
    ]
  },
  {
    id: "72",
    youtubeId: "YnF7J_kLQdE",
    title: "Season Pass Worth It?",
    proPlayer: "Boss CR",
    difficulty: "beginner",
    duration: "12:30",
    concepts: ["Season Pass", "Value", "Investment"],
    description: "Complete breakdown of season pass value.",
    keyMoments: [
      { time: "1:30", description: "Reward analysis" },
      { time: "6:00", description: "Value comparison" },
      { time: "10:00", description: "Who should buy" }
    ]
  },
  {
    id: "73",
    youtubeId: "C8nEGx9TzK8",
    title: "Chest Cycle Complete Guide",
    proPlayer: "SirTag",
    difficulty: "beginner",
    duration: "14:00",
    concepts: ["Chest Cycle", "Progression", "Rewards"],
    description: "Understanding and tracking your chest cycle.",
    keyMoments: [
      { time: "2:00", description: "Cycle explanation" },
      { time: "7:30", description: "Tracking methods" },
      { time: "11:45", description: "Optimization" }
    ]
  },
  {
    id: "74",
    youtubeId: "nQP8L5GXVBE",
    title: "Trophy Gate Strategy",
    proPlayer: "Ryley",
    difficulty: "beginner",
    duration: "10:45",
    concepts: ["Trophy Gate", "Ladder", "Progress"],
    description: "How to use trophy gates to your advantage.",
    keyMoments: [
      { time: "1:15", description: "Gate mechanics" },
      { time: "5:30", description: "Practice safely" },
      { time: "8:45", description: "Deck testing" }
    ]
  },
  {
    id: "75",
    youtubeId: "kFwN5v8PXLk",
    title: "Arena Rush Speed Guide",
    proPlayer: "Jack",
    difficulty: "beginner",
    duration: "13:45",
    concepts: ["Arena Rush", "New Account", "Speed Run"],
    description: "Fastest way to climb arenas on new account.",
    keyMoments: [
      { time: "2:00", description: "Best early decks" },
      { time: "7:15", description: "Resource use" },
      { time: "11:30", description: "Arena bottlenecks" }
    ]
  },
  {
    id: "76",
    youtubeId: "X8p9vY3DLNE",
    title: "Mastering Building Placement",
    proPlayer: "sk_55",
    difficulty: "advanced",
    duration: "20:00",
    concepts: ["Buildings", "Placement", "Defense"],
    description: "Perfect building placement for every situation.",
    keyMoments: [
      { time: "3:30", description: "Tesla placements" },
      { time: "11:00", description: "Cannon spots" },
      { time: "17:00", description: "Goblin Cage" }
    ]
  },
  {
    id: "77",
    youtubeId: "F2pL9RCJVRY",
    title: "Spell Value Maximization",
    proPlayer: "Nate - Clash Royale",
    difficulty: "intermediate",
    duration: "16:30",
    concepts: ["Spells", "Value", "Efficiency"],
    description: "Get maximum value from every spell cast.",
    keyMoments: [
      { time: "2:15", description: "Fireball value" },
      { time: "8:45", description: "Log timing" },
      { time: "14:00", description: "Rocket efficiency" }
    ]
  },
  {
    id: "78",
    youtubeId: "bWM7KP3RYXU",
    title: "Air Defense Masterclass",
    proPlayer: "Morten",
    difficulty: "advanced",
    duration: "22:15",
    concepts: ["Air Defense", "Balloon", "Lavahound"],
    description: "Master defending against air pushes.",
    keyMoments: [
      { time: "4:00", description: "Balloon defense" },
      { time: "13:00", description: "Lava counters" },
      { time: "19:30", description: "Air swarms" }
    ]
  },
  {
    id: "79",
    youtubeId: "n8x3vYpN_Y4",
    title: "Ground Swarm Defense Guide",
    proPlayer: "Surgical Goblin",
    difficulty: "intermediate",
    duration: "15:00",
    concepts: ["Swarm", "Defense", "Splash"],
    description: "Efficiently defend against ground swarms.",
    keyMoments: [
      { time: "2:00", description: "Goblin Gang" },
      { time: "7:30", description: "Skeleton Army" },
      { time: "12:30", description: "Bait punish" }
    ]
  },
  {
    id: "80",
    youtubeId: "P7LqM_fG0qc",
    title: "Tank Killer Strategies",
    proPlayer: "Hunter CR",
    difficulty: "intermediate",
    duration: "17:45",
    concepts: ["Tank Killer", "Defense", "DPS"],
    description: "Best ways to kill tanks efficiently.",
    keyMoments: [
      { time: "2:30", description: "Mini PEKKA" },
      { time: "9:00", description: "Inferno options" },
      { time: "15:00", description: "Swarm value" }
    ]
  },
  {
    id: "81",
    youtubeId: "Y5h8DKfZPzU",
    title: "Win Condition Selection Guide",
    proPlayer: "Boss CR",
    difficulty: "beginner",
    duration: "14:15",
    concepts: ["Win Condition", "Deck Building", "Strategy"],
    description: "Choose the right win condition for your playstyle.",
    keyMoments: [
      { time: "1:45", description: "Win con types" },
      { time: "7:00", description: "Playstyle match" },
      { time: "12:00", description: "Meta consideration" }
    ]
  },
  {
    id: "82",
    youtubeId: "k9L8vQWfHD8",
    title: "Support Card Tier List 2024",
    proPlayer: "Ryley",
    difficulty: "intermediate",
    duration: "19:00",
    concepts: ["Support Cards", "Tier List", "Meta"],
    description: "Best support cards ranked for current meta.",
    keyMoments: [
      { time: "3:00", description: "S tier supports" },
      { time: "11:00", description: "Meta shifts" },
      { time: "16:30", description: "Underrated picks" }
    ]
  },
  {
    id: "83",
    youtubeId: "wR7fQDn4GhU",
    title: "Defensive Structure Guide",
    proPlayer: "sk_55",
    difficulty: "advanced",
    duration: "21:30",
    concepts: ["Structures", "Defense", "Cycle"],
    description: "Master every defensive building.",
    keyMoments: [
      { time: "4:00", description: "Cannon value" },
      { time: "12:00", description: "Tesla power" },
      { time: "18:45", description: "Bomb Tower" }
    ]
  },
  {
    id: "84",
    youtubeId: "gV7QPx8K2Y0",
    title: "Siege Deck Complete Guide",
    proPlayer: "Woody",
    difficulty: "advanced",
    duration: "26:00",
    concepts: ["Siege", "X-Bow", "Mortar"],
    description: "Everything about playing siege decks.",
    keyMoments: [
      { time: "5:00", description: "Siege fundamentals" },
      { time: "15:30", description: "Matchup guide" },
      { time: "23:00", description: "Patience play" }
    ]
  },
  {
    id: "85",
    youtubeId: "T2wZ8Pm_VJc",
    title: "Beatdown Strategy Guide",
    proPlayer: "Mohamed Light",
    difficulty: "intermediate",
    duration: "23:15",
    concepts: ["Beatdown", "Tank", "Big Push"],
    description: "Master beatdown strategy and push building.",
    keyMoments: [
      { time: "4:30", description: "When to push" },
      { time: "13:00", description: "Support timing" },
      { time: "20:00", description: "Defend and counter" }
    ]
  },
  {
    id: "86",
    youtubeId: "N8j7v_F3cQ4",
    title: "Control Deck Masterclass",
    proPlayer: "Nate - Clash Royale",
    difficulty: "advanced",
    duration: "28:00",
    concepts: ["Control", "Defense", "Chip"],
    description: "Complete control deck strategy guide.",
    keyMoments: [
      { time: "5:00", description: "Control basics" },
      { time: "17:00", description: "Chip damage" },
      { time: "25:00", description: "Spell cycling" }
    ]
  },
  {
    id: "87",
    youtubeId: "hK8w7JNF6fE",
    title: "Cycle Deck Speed Guide",
    proPlayer: "Oyassuu",
    difficulty: "advanced",
    duration: "19:30",
    concepts: ["Cycle", "Speed", "Efficiency"],
    description: "How to play fast cycle decks optimally.",
    keyMoments: [
      { time: "3:00", description: "Cycling mechanics" },
      { time: "11:30", description: "Defending efficiently" },
      { time: "17:00", description: "Tempo control" }
    ]
  },
  {
    id: "88",
    youtubeId: "xfQY8L5ZPKE",
    title: "Bridge Spam Pro Techniques",
    proPlayer: "Surgical Goblin",
    difficulty: "advanced",
    duration: "20:45",
    concepts: ["Bridge Spam", "Pressure", "Aggro"],
    description: "Advanced bridge spam pressure techniques.",
    keyMoments: [
      { time: "3:30", description: "Pressure timing" },
      { time: "12:00", description: "When to spam" },
      { time: "18:30", description: "Defense balance" }
    ]
  },
  {
    id: "89",
    youtubeId: "bZNc8Y2F6hU",
    title: "Bait Deck Strategy 2024",
    proPlayer: "Jack",
    difficulty: "intermediate",
    duration: "18:00",
    concepts: ["Bait", "Spell Bait", "Log Bait"],
    description: "Modern bait deck strategy and techniques.",
    keyMoments: [
      { time: "2:45", description: "Bait sequences" },
      { time: "10:00", description: "Spell tracking" },
      { time: "15:30", description: "Punish timing" }
    ]
  },
  {
    id: "90",
    youtubeId: "Jm9Y8K3LFLU",
    title: "Split Lane Pressure Guide",
    proPlayer: "Morten",
    difficulty: "advanced",
    duration: "21:00",
    concepts: ["Split Lane", "Pressure", "Beatdown"],
    description: "When and how to apply split lane pressure.",
    keyMoments: [
      { time: "4:00", description: "Split timing" },
      { time: "12:30", description: "Elixir advantage" },
      { time: "18:30", description: "Punishing splits" }
    ]
  },
  {
    id: "91",
    youtubeId: "V8c2N6QFXFY",
    title: "Double Lane Push Strategy",
    proPlayer: "Hunter CR",
    difficulty: "intermediate",
    duration: "16:15",
    concepts: ["Double Lane", "Push", "Pressure"],
    description: "Create overwhelming double lane pressure.",
    keyMoments: [
      { time: "2:00", description: "Setup phase" },
      { time: "8:30", description: "Execution" },
      { time: "14:00", description: "Counterpush" }
    ]
  },
  {
    id: "92",
    youtubeId: "N7pT_8vQM3c",
    title: "Overtime Strategy Masterclass",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "24:30",
    concepts: ["Overtime", "Strategy", "Clutch"],
    description: "Master overtime strategies and decision making.",
    keyMoments: [
      { time: "5:00", description: "Overtime approach" },
      { time: "14:00", description: "Risk management" },
      { time: "21:30", description: "Spell timing" }
    ]
  },
  {
    id: "93",
    youtubeId: "gP8h5Q6Y8fQ",
    title: "Tiebreaker Win Strategies",
    proPlayer: "Boss CR",
    difficulty: "intermediate",
    duration: "13:30",
    concepts: ["Tiebreaker", "Overtime", "Chip"],
    description: "How to win tiebreaker situations.",
    keyMoments: [
      { time: "1:45", description: "Chip options" },
      { time: "7:00", description: "Defense priority" },
      { time: "11:30", description: "Spell cycling" }
    ]
  },
  {
    id: "94",
    youtubeId: "T8nY3F8hQ2U",
    title: "First Play Opening Guide",
    proPlayer: "sk_55",
    difficulty: "advanced",
    duration: "17:00",
    concepts: ["Opening", "First Play", "Strategy"],
    description: "Perfect opening plays for every matchup.",
    keyMoments: [
      { time: "3:00", description: "Safe openers" },
      { time: "10:00", description: "Aggressive starts" },
      { time: "15:00", description: "Reading opponent" }
    ]
  },
  {
    id: "95",
    youtubeId: "k7wM8Y3NFQU",
    title: "Mid Game Strategy Guide",
    proPlayer: "Ryley",
    difficulty: "intermediate",
    duration: "18:45",
    concepts: ["Mid Game", "Strategy", "Adaptation"],
    description: "How to dominate the mid game phase.",
    keyMoments: [
      { time: "2:30", description: "Elixir leads" },
      { time: "10:00", description: "Deck rotation" },
      { time: "16:00", description: "Building advantage" }
    ]
  },
  {
    id: "96",
    youtubeId: "bL8hQN7v3Qc",
    title: "End Game Closing Strategies",
    proPlayer: "Surgical Goblin",
    difficulty: "advanced",
    duration: "20:15",
    concepts: ["End Game", "Closing", "Victory"],
    description: "How to close out games when ahead.",
    keyMoments: [
      { time: "3:45", description: "Defensive closing" },
      { time: "12:00", description: "Spell cycling" },
      { time: "17:45", description: "Avoid throws" }
    ]
  },
  {
    id: "97",
    youtubeId: "Y8h7N3Qm6FU",
    title: "Comeback Mechanics Guide",
    proPlayer: "Nate - Clash Royale",
    difficulty: "advanced",
    duration: "19:00",
    concepts: ["Comeback", "Recovery", "Mental"],
    description: "How to come back from losing positions.",
    keyMoments: [
      { time: "2:30", description: "Stay calm" },
      { time: "10:00", description: "Defensive priorities" },
      { time: "16:30", description: "Finding openings" }
    ]
  },
  {
    id: "98",
    youtubeId: "m8P7N3Qx6LE",
    title: "Matchup Knowledge Guide 2024",
    proPlayer: "Hunter CR",
    difficulty: "advanced",
    duration: "31:00",
    concepts: ["Matchups", "Knowledge", "Meta"],
    description: "Complete matchup knowledge for all meta decks.",
    keyMoments: [
      { time: "6:00", description: "Beatdown vs cycle" },
      { time: "18:00", description: "Bridge spam" },
      { time: "27:00", description: "Siege matchups" }
    ]
  },
  {
    id: "99",
    youtubeId: "V7hQ8N3YFPE",
    title: "Mental Game and Tilt Control",
    proPlayer: "Oyassuu",
    difficulty: "intermediate",
    duration: "15:30",
    concepts: ["Mental Game", "Tilt", "Focus"],
    description: "Master your mental game and avoid tilting.",
    keyMoments: [
      { time: "2:00", description: "Recognizing tilt" },
      { time: "8:00", description: "Taking breaks" },
      { time: "13:00", description: "Focus techniques" }
    ]
  },
  {
    id: "100",
    youtubeId: "k8N7P3vQ6ME",
    title: "Pro Player Habits to Copy",
    proPlayer: "SirTag",
    difficulty: "intermediate",
    duration: "17:15",
    concepts: ["Habits", "Pro Play", "Improvement"],
    description: "Essential habits from pro players to adopt.",
    keyMoments: [
      { time: "2:45", description: "Practice routines" },
      { time: "9:30", description: "Analysis habits" },
      { time: "14:45", description: "Mental preparation" }
    ]
  },
  {
    id: "101",
    youtubeId: "N8h7Q3v6FMU",
    title: "Advanced Prediction Plays",
    proPlayer: "Morten",
    difficulty: "advanced",
    duration: "22:30",
    concepts: ["Predictions", "Reads", "High Level"],
    description: "Master advanced prediction techniques.",
    keyMoments: [
      { time: "4:00", description: "Reading patterns" },
      { time: "13:00", description: "Spell predictions" },
      { time: "19:30", description: "Troop predictions" }
    ]
  },
  {
    id: "102",
    youtubeId: "b7M8Q3N6vFY",
    title: "Card Counting Techniques",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "25:00",
    concepts: ["Card Counting", "Tracking", "Strategy"],
    description: "How to track opponent card rotation.",
    keyMoments: [
      { time: "5:00", description: "Basic tracking" },
      { time: "15:00", description: "Cycle counting" },
      { time: "22:00", description: "Using information" }
    ]
  },
  {
    id: "103",
    youtubeId: "k7M9Q3vN6FU",
    title: "Elixir Counting Mastery",
    proPlayer: "sk_55",
    difficulty: "advanced",
    duration: "20:45",
    concepts: ["Elixir Counting", "Advantage", "Strategy"],
    description: "Master elixir counting for competitive edge.",
    keyMoments: [
      { time: "3:30", description: "Counting basics" },
      { time: "12:00", description: "Punishing mistakes" },
      { time: "18:00", description: "Lead usage" }
    ]
  },
  {
    id: "104",
    youtubeId: "V8N7h3Q6vFM",
    title: "Animation Cancel Guide",
    proPlayer: "Surgical Goblin",
    difficulty: "advanced",
    duration: "14:00",
    concepts: ["Animation Cancel", "Mechanics", "Speed"],
    description: "Learn game-changing animation cancels.",
    keyMoments: [
      { time: "2:00", description: "What are cancels" },
      { time: "7:30", description: "Practical uses" },
      { time: "12:00", description: "Training" }
    ]
  },
  {
    id: "105",
    youtubeId: "m7N8Q3h6vYF",
    title: "Frame Perfect Plays",
    proPlayer: "Hunter CR",
    difficulty: "advanced",
    duration: "18:30",
    concepts: ["Frame Perfect", "Timing", "Precision"],
    description: "Master frame-perfect timing techniques.",
    keyMoments: [
      { time: "3:00", description: "Timing importance" },
      { time: "10:00", description: "Practice methods" },
      { time: "16:00", description: "Key situations" }
    ]
  },
  {
    id: "106",
    youtubeId: "N7k8M3Q6hvF",
    title: "Path of Legends Strategy 2024",
    proPlayer: "Boss CR",
    difficulty: "advanced",
    duration: "24:00",
    concepts: ["Path of Legends", "Competitive", "Strategy"],
    description: "Complete Path of Legends strategy guide.",
    keyMoments: [
      { time: "4:30", description: "League progression" },
      { time: "14:00", description: "Deck selection" },
      { time: "21:00", description: "Rank pushing" }
    ]
  },
  {
    id: "107",
    youtubeId: "k8V7M3hQ6vN",
    title: "Ultimate Crown Strategy",
    proPlayer: "Ryley",
    difficulty: "advanced",
    duration: "27:30",
    concepts: ["Ultimate Crown", "Competitive", "Ranking"],
    description: "Reach Ultimate Crown with this guide.",
    keyMoments: [
      { time: "5:00", description: "Requirements" },
      { time: "16:00", description: "Best decks" },
      { time: "24:00", description: "Final push" }
    ]
  },
  {
    id: "108",
    youtubeId: "b8N7k3M6vQF",
    title: "Top 1000 Climb Guide",
    proPlayer: "Mohamed Light",
    difficulty: "advanced",
    duration: "32:00",
    concepts: ["Top Ladder", "Competitive", "Elite"],
    description: "What it takes to reach top 1000.",
    keyMoments: [
      { time: "6:00", description: "Skill level needed" },
      { time: "18:00", description: "Meta mastery" },
      { time: "28:00", description: "Mental fortitude" }
    ]
  },
  {
    id: "109",
    youtubeId: "V7k8N3M6hQv",
    title: "Championship Preparation",
    proPlayer: "Oyassuu",
    difficulty: "advanced",
    duration: "29:00",
    concepts: ["Championship", "Competitive", "Preparation"],
    description: "How to prepare for championship tournaments.",
    keyMoments: [
      { time: "5:30", description: "Deck preparation" },
      { time: "17:00", description: "Practice regiment" },
      { time: "25:30", description: "Mental prep" }
    ]
  },
  {
    id: "110",
    youtubeId: "N8k7v3M6QhF",
    title: "CRL Pro Tips and Tricks",
    proPlayer: "Surgical Goblin",
    difficulty: "advanced",
    duration: "26:45",
    concepts: ["CRL", "Pro League", "Competitive"],
    description: "Learn from Clash Royale League professionals.",
    keyMoments: [
      { time: "4:45", description: "Pro mindset" },
      { time: "15:00", description: "Team play" },
      { time: "23:30", description: "Tournament prep" }
    ]
  },
  {
    id: "111",
    youtubeId: "k7V8M3N6vhQ",
    title: "Content Creation Guide for CR",
    proPlayer: "B-Rad",
    difficulty: "beginner",
    duration: "21:00",
    concepts: ["Content Creation", "YouTube", "Community"],
    description: "How to start creating Clash Royale content.",
    keyMoments: [
      { time: "3:00", description: "Getting started" },
      { time: "12:00", description: "Content ideas" },
      { time: "18:30", description: "Growing channel" }
    ]
  },
  {
    id: "112",
    youtubeId: "b7N8k3v6MQF",
    title: "Streaming Setup Guide",
    proPlayer: "SirTag",
    difficulty: "beginner",
    duration: "18:15",
    concepts: ["Streaming", "Setup", "Community"],
    description: "Complete guide to streaming Clash Royale.",
    keyMoments: [
      { time: "2:30", description: "Equipment needed" },
      { time: "10:00", description: "Software setup" },
      { time: "15:45", description: "Engagement tips" }
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
