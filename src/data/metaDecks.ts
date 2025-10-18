export interface MetaDeck {
  name: string;
  usageRate: number;
  winRate: number;
  archetype: string;
  cards: string[];
  averageElixir: number;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const popularMetaDecks: MetaDeck[] = [
  {
    name: "Hog 2.6 Cycle",
    usageRate: 15.3,
    winRate: 54.2,
    archetype: "Cycle",
    cards: ["Hog Rider", "Musketeer", "Ice Golem", "Cannon", "Skeletons", "Ice Spirit", "Fireball", "Log"],
    averageElixir: 2.6,
    description: "Fast-paced deck that cycles quickly to your win condition",
    difficulty: "Hard"
  },
  {
    name: "Giant Double Prince",
    usageRate: 12.8,
    winRate: 56.1,
    archetype: "Beatdown",
    cards: ["Giant", "Prince", "Dark Prince", "Mega Minion", "Electro Wizard", "Zap", "Poison", "Guards"],
    averageElixir: 4.1,
    description: "Build massive pushes behind tanks to overwhelm your opponent",
    difficulty: "Easy"
  },
  {
    name: "X-Bow 3.0",
    usageRate: 8.5,
    winRate: 52.3,
    archetype: "Siege",
    cards: ["X-Bow", "Tesla", "Ice Golem", "Skeletons", "Ice Spirit", "Archers", "Fireball", "Log"],
    averageElixir: 3.0,
    description: "Control the board and chip away at towers from your side",
    difficulty: "Hard"
  },
  {
    name: "Pekka Bridge Spam",
    usageRate: 14.2,
    winRate: 55.8,
    archetype: "Bridge Spam",
    cards: ["Pekka", "Battle Ram", "Bandit", "Electro Wizard", "Magic Archer", "Royal Ghost", "Zap", "Poison"],
    averageElixir: 4.0,
    description: "Apply constant pressure at the bridge to keep opponent defensive",
    difficulty: "Medium"
  },
  {
    name: "Log Bait",
    usageRate: 13.7,
    winRate: 53.9,
    archetype: "Bait",
    cards: ["Goblin Barrel", "Princess", "Goblin Gang", "Knight", "Inferno Tower", "Rocket", "Log", "Ice Spirit"],
    averageElixir: 3.1,
    description: "Bait out opponent spells then punish with swarm units",
    difficulty: "Medium"
  },
  {
    name: "Miner Poison Control",
    usageRate: 9.4,
    winRate: 54.7,
    archetype: "Control",
    cards: ["Miner", "Poison", "Valkyrie", "Musketeer", "Skeletons", "Ice Spirit", "Inferno Tower", "Log"],
    averageElixir: 3.3,
    description: "Defend efficiently and capitalize on counter-pushes",
    difficulty: "Hard"
  },
  {
    name: "Golem Beatdown",
    usageRate: 11.2,
    winRate: 57.3,
    archetype: "Beatdown",
    cards: ["Golem", "Night Witch", "Baby Dragon", "Mega Minion", "Lumberjack", "Lightning", "Tornado", "Barbarian Barrel"],
    averageElixir: 4.5,
    description: "Build unstoppable pushes with the tankiest card in the game",
    difficulty: "Easy"
  },
  {
    name: "Lavahound Clone",
    usageRate: 7.8,
    winRate: 55.1,
    archetype: "Beatdown",
    cards: ["Lavahound", "Balloon", "Clone", "Guards", "Skeleton Dragons", "Barbarian Barrel", "Fireball", "Tombstone"],
    averageElixir: 4.0,
    description: "Devastating air attacks that can three crown in seconds",
    difficulty: "Medium"
  },
  {
    name: "Royal Giant Cycle",
    usageRate: 10.6,
    winRate: 53.2,
    archetype: "Cycle",
    cards: ["Royal Giant", "Fisherman", "Hunter", "Mother Witch", "Heal Spirit", "Earthquake", "Log", "Royal Delivery"],
    averageElixir: 3.5,
    description: "Constantly pressure with Royal Giant while cycling quickly",
    difficulty: "Medium"
  },
  {
    name: "Mortar Bait",
    usageRate: 6.9,
    winRate: 52.8,
    archetype: "Siege",
    cards: ["Mortar", "Miner", "Skeleton Barrel", "Spear Goblins", "Bats", "Knight", "Rocket", "Log"],
    averageElixir: 2.9,
    description: "Siege deck that baits spells for surprise Mortar locks",
    difficulty: "Hard"
  },
  {
    name: "Graveyard Freeze",
    usageRate: 8.3,
    winRate: 54.5,
    archetype: "Graveyard",
    cards: ["Graveyard", "Freeze", "Baby Dragon", "Tombstone", "Electro Wizard", "Knight", "Poison", "Barbarian Barrel"],
    averageElixir: 3.8,
    description: "Use Graveyard spell to spawn skeletons at opponent tower",
    difficulty: "Medium"
  },
  {
    name: "Mega Knight Ram Rider",
    usageRate: 12.1,
    winRate: 53.6,
    archetype: "Bridge Spam",
    cards: ["Mega Knight", "Ram Rider", "Inferno Dragon", "Electro Wizard", "Bats", "Zap", "Fireball", "Dark Prince"],
    averageElixir: 4.1,
    description: "Heavy bridge spam with powerful defensive counters",
    difficulty: "Easy"
  },
  {
    name: "Balloon Cycle",
    usageRate: 9.1,
    winRate: 52.4,
    archetype: "Cycle",
    cards: ["Balloon", "Miner", "Ice Golem", "Skeletons", "Ice Spirit", "Musketeer", "Snowball", "Bomb Tower"],
    averageElixir: 3.0,
    description: "Fast cycle Balloon deck for consistent pressure",
    difficulty: "Medium"
  },
  {
    name: "Electro Giant Mirror",
    usageRate: 10.3,
    winRate: 56.9,
    archetype: "Beatdown",
    cards: ["Electro Giant", "Mirror", "Tornado", "Mother Witch", "Lightning", "Skeleton Army", "Barbarian Barrel", "Heal Spirit"],
    averageElixir: 4.3,
    description: "Devastating mirror Electro Giant pushes",
    difficulty: "Easy"
  },
  {
    name: "Three Musketeers Pump",
    usageRate: 5.7,
    winRate: 55.8,
    archetype: "Beatdown",
    cards: ["Three Musketeers", "Elixir Collector", "Battle Ram", "Minion Horde", "Ice Golem", "Zap", "Fireball", "Pump"],
    averageElixir: 4.9,
    description: "Split push beatdown with elixir advantage",
    difficulty: "Hard"
  },
  {
    name: "Skeleton King Cycle",
    usageRate: 11.5,
    winRate: 54.3,
    archetype: "Cycle",
    cards: ["Skeleton King", "Hog Rider", "Cannon", "Musketeer", "Skeletons", "Ice Spirit", "Fireball", "Log"],
    averageElixir: 3.1,
    description: "Fast cycle deck featuring Skeleton King champion",
    difficulty: "Hard"
  },
  {
    name: "Archer Queen Control",
    usageRate: 13.9,
    winRate: 55.2,
    archetype: "Control",
    cards: ["Archer Queen", "Rocket", "Inferno Tower", "Knight", "Skeletons", "Ice Spirit", "Tornado", "Log"],
    averageElixir: 3.4,
    description: "Control deck centered around Archer Queen champion",
    difficulty: "Hard"
  },
  {
    name: "Golden Knight Miner",
    usageRate: 8.7,
    winRate: 53.8,
    archetype: "Control",
    cards: ["Golden Knight", "Miner", "Poison", "Valkyrie", "Musketeer", "Skeletons", "Log", "Cannon"],
    averageElixir: 3.2,
    description: "Fast-paced control with champion abilities",
    difficulty: "Medium"
  }
];
