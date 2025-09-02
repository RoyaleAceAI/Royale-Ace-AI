export interface PuzzleScenario {
  id: number;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  playerElixir: number;
  opponentElixir: number;
  playerTowerHealth: { left: number; right: number; king: number };
  opponentTowerHealth: { left: number; right: number; king: number };
  existingTroops: { id: string; x: number; y: number; type: string; side: "player" | "opponent" }[];
  availableCards: string[];
  optimalSolution: { card: string; x: number; y: number }[];
  description: string;
}

export const puzzleScenarios: PuzzleScenario[] = [
  {
    id: 1,
    title: "Defend the Balloon Push",
    difficulty: "beginner",
    playerElixir: 6,
    opponentElixir: 2,
    playerTowerHealth: { left: 2000, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 1500, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 30, y: 40, type: "Balloon", side: "opponent" },
      { id: "2", x: 30, y: 45, type: "LavaHound", side: "opponent" }
    ],
    availableCards: ["Musketeer", "Wizard", "InfernoDragon"],
    optimalSolution: [
      { card: "InfernoDragon", x: 35, y: 60 }
    ],
    description: "Opponent has a Balloon behind a Lava Hound. Choose the best counter."
  },
  {
    id: 2,
    title: "Counter Push Opportunity",
    difficulty: "intermediate",
    playerElixir: 8,
    opponentElixir: 0,
    playerTowerHealth: { left: 2534, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 800, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 50, y: 60, type: "Valkyrie", side: "player" },
      { id: "2", x: 50, y: 65, type: "Wizard", side: "player" }
    ],
    availableCards: ["Hog", "BattleRam", "Miner", "Fireball"],
    optimalSolution: [
      { card: "Hog", x: 30, y: 55 },
      { card: "Fireball", x: 25, y: 20 }
    ],
    description: "You have surviving troops. Execute the perfect counter push."
  },
  {
    id: 3,
    title: "Split Lane Pressure",
    difficulty: "advanced",
    playerElixir: 10,
    opponentElixir: 4,
    playerTowerHealth: { left: 2534, right: 1000, king: 4008 },
    opponentTowerHealth: { left: 2534, right: 500, king: 4008 },
    existingTroops: [
      { id: "1", x: 70, y: 50, type: "Giant", side: "opponent" }
    ],
    availableCards: ["EliteBarbarians", "Skeleton", "IceSpirit", "Zap"],
    optimalSolution: [
      { card: "EliteBarbarians", x: 30, y: 70 },
      { card: "IceSpirit", x: 70, y: 60 }
    ],
    description: "Opponent plays Giant. Apply split pressure effectively."
  },
  {
    id: 4,
    title: "Elixir Trade Advantage",
    difficulty: "beginner",
    playerElixir: 4,
    opponentElixir: 1,
    playerTowerHealth: { left: 2534, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 2534, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 50, y: 35, type: "Minions", side: "opponent" },
      { id: "2", x: 50, y: 40, type: "Goblin", side: "opponent" }
    ],
    availableCards: ["Arrows", "Zap", "Fireball", "Log"],
    optimalSolution: [
      { card: "Zap", x: 50, y: 37 }
    ],
    description: "Make the most efficient elixir trade."
  },
  {
    id: 5,
    title: "Bridge Spam Defense",
    difficulty: "intermediate",
    playerElixir: 7,
    opponentElixir: 0,
    playerTowerHealth: { left: 1500, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 2000, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 25, y: 45, type: "BattleRam", side: "opponent" },
      { id: "2", x: 25, y: 50, type: "Bandit", side: "opponent" },
      { id: "3", x: 20, y: 47, type: "Ghost", side: "opponent" }
    ],
    availableCards: ["Valkyrie", "Bowler", "MegaKnight", "Guards"],
    optimalSolution: [
      { card: "Valkyrie", x: 30, y: 60 },
      { card: "Guards", x: 25, y: 65 }
    ],
    description: "Defend against bridge spam efficiently."
  },
  {
    id: 6,
    title: "X-Bow Placement",
    difficulty: "advanced",
    playerElixir: 6,
    opponentElixir: 4,
    playerTowerHealth: { left: 2534, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 1800, right: 2534, king: 4008 },
    existingTroops: [],
    availableCards: ["X-Bow", "Tesla", "IceGolem", "Skeletons"],
    optimalSolution: [
      { card: "X-Bow", x: 50, y: 70 },
      { card: "Tesla", x: 50, y: 75 }
    ],
    description: "Place X-Bow optimally to lock onto tower."
  },
  {
    id: 7,
    title: "Graveyard Defense",
    difficulty: "intermediate",
    playerElixir: 5,
    opponentElixir: 2,
    playerTowerHealth: { left: 1000, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 2534, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 20, y: 30, type: "Graveyard", side: "opponent" },
      { id: "2", x: 25, y: 40, type: "Knight", side: "opponent" }
    ],
    availableCards: ["Valkyrie", "Poison", "Guards", "Archers"],
    optimalSolution: [
      { card: "Valkyrie", x: 20, y: 25 },
      { card: "Poison", x: 20, y: 30 }
    ],
    description: "Defend against Graveyard + Tank combo."
  },
  {
    id: 8,
    title: "Punish Heavy Investment",
    difficulty: "beginner",
    playerElixir: 10,
    opponentElixir: 0,
    playerTowerHealth: { left: 2534, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 2534, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 80, y: 85, type: "Golem", side: "opponent" }
    ],
    availableCards: ["EliteBarbarians", "Hog", "Balloon", "Miner"],
    optimalSolution: [
      { card: "EliteBarbarians", x: 30, y: 55 }
    ],
    description: "Opponent plays Golem in the back. Punish opposite lane."
  },
  {
    id: 9,
    title: "Rocket Cycle Decision",
    difficulty: "advanced",
    playerElixir: 6,
    opponentElixir: 5,
    playerTowerHealth: { left: 2534, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 500, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 50, y: 50, type: "Princess", side: "opponent" }
    ],
    availableCards: ["Rocket", "Lightning", "Miner", "Log"],
    optimalSolution: [
      { card: "Rocket", x: 25, y: 15 }
    ],
    description: "Low tower HP. Choose between spell cycle or defense."
  },
  {
    id: 10,
    title: "PEKKA Placement",
    difficulty: "intermediate",
    playerElixir: 7,
    opponentElixir: 2,
    playerTowerHealth: { left: 2534, right: 1500, king: 4008 },
    opponentTowerHealth: { left: 2534, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 70, y: 45, type: "Giant", side: "opponent" },
      { id: "2", x: 70, y: 40, type: "Musketeer", side: "opponent" }
    ],
    availableCards: ["PEKKA", "Ewiz", "Zap", "Poison"],
    optimalSolution: [
      { card: "PEKKA", x: 70, y: 65 }
    ],
    description: "Place PEKKA to counter push and defend."
  },
  // Continue adding more scenarios up to 100...
  // For brevity, I'll add a few more varied examples
  {
    id: 11,
    title: "Inferno Tower vs Lava Loon",
    difficulty: "intermediate",
    playerElixir: 5,
    opponentElixir: 1,
    playerTowerHealth: { left: 2534, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 2534, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 30, y: 35, type: "LavaHound", side: "opponent" },
      { id: "2", x: 30, y: 40, type: "Balloon", side: "opponent" }
    ],
    availableCards: ["InfernoTower", "Tornado", "IceSpirit", "Bats"],
    optimalSolution: [
      { card: "InfernoTower", x: 35, y: 60 },
      { card: "Tornado", x: 30, y: 45 }
    ],
    description: "Optimal Inferno Tower placement against Lava Loon."
  },
  {
    id: 12,
    title: "Magic Archer Geometry",
    difficulty: "advanced",
    playerElixir: 4,
    opponentElixir: 3,
    playerTowerHealth: { left: 2534, right: 2534, king: 4008 },
    opponentTowerHealth: { left: 1500, right: 2534, king: 4008 },
    existingTroops: [
      { id: "1", x: 50, y: 45, type: "Knight", side: "opponent" }
    ],
    availableCards: ["MagicArcher", "IceGolem", "Skeletons", "Log"],
    optimalSolution: [
      { card: "MagicArcher", x: 50, y: 75 }
    ],
    description: "Use Magic Archer's piercing to hit tower through troops."
  }
];

// Function to get random puzzles
export const getRandomPuzzles = (count: number, difficulty?: string): PuzzleScenario[] => {
  let filtered = puzzleScenarios;
  
  if (difficulty) {
    filtered = puzzleScenarios.filter(p => p.difficulty === difficulty);
  }
  
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Function to get puzzle by ID
export const getPuzzleById = (id: number): PuzzleScenario | undefined => {
  return puzzleScenarios.find(p => p.id === id);
};

// Function to get puzzles by difficulty
export const getPuzzlesByDifficulty = (difficulty: string): PuzzleScenario[] => {
  return puzzleScenarios.filter(p => p.difficulty === difficulty);
};