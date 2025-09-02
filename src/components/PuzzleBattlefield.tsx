import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Target, 
  Trophy,
  RotateCcw,
  Eye,
  HelpCircle,
  ChevronRight
} from "lucide-react";

interface TroopPosition {
  id: string;
  x: number;
  y: number;
  type: string;
  side: "player" | "opponent";
}

interface PuzzleScenario {
  id: number;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  playerElixir: number;
  opponentElixir: number;
  playerTowerHealth: { left: number; right: number; king: number };
  opponentTowerHealth: { left: number; right: number; king: number };
  existingTroops: TroopPosition[];
  availableCards: string[];
  optimalSolution: { card: string; x: number; y: number }[];
  description: string;
}

interface PuzzleBattlefieldProps {
  puzzle: PuzzleScenario;
  onComplete: (score: number) => void;
}

const PuzzleBattlefield = ({ puzzle, onComplete }: PuzzleBattlefieldProps) => {
  const battlefieldRef = useRef<HTMLDivElement>(null);
  const [draggedCard, setDraggedCard] = useState<string | null>(null);
  const [placedCards, setPlacedCards] = useState<{ card: string; x: number; y: number }[]>([]);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "beginner": return "success";
      case "intermediate": return "secondary";
      case "advanced": return "destructive";
      default: return "default";
    }
  };

  const handleDragStart = (card: string) => {
    setDraggedCard(card);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedCard || !battlefieldRef.current) return;

    const rect = battlefieldRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPlacedCards([...placedCards, { card: draggedCard, x, y }]);
    setDraggedCard(null);
  };

  const calculateScore = () => {
    // Simplified scoring logic
    let totalScore = 0;
    const maxScore = 100;
    
    placedCards.forEach(placed => {
      const optimal = puzzle.optimalSolution.find(sol => sol.card === placed.card);
      if (optimal) {
        const distance = Math.sqrt(
          Math.pow(placed.x - optimal.x, 2) + 
          Math.pow(placed.y - optimal.y, 2)
        );
        const placementScore = Math.max(0, 100 - distance * 2);
        totalScore += placementScore / puzzle.optimalSolution.length;
      }
    });

    const finalScore = Math.round(totalScore);
    setScore(finalScore);
    
    // Generate feedback
    if (finalScore >= 90) {
      setFeedback("Perfect placement! You've mastered this scenario.");
    } else if (finalScore >= 70) {
      setFeedback("Good job! Minor improvements could optimize your defense.");
    } else if (finalScore >= 50) {
      setFeedback("Decent attempt. Consider troop positioning and timing.");
    } else {
      setFeedback("Keep practicing! Watch the optimal solution for tips.");
    }

    onComplete(finalScore);
  };

  const resetPuzzle = () => {
    setPlacedCards([]);
    setScore(null);
    setFeedback("");
    setShowSolution(false);
    setShowHint(false);
  };

  return (
    <div className="space-y-6">
      {/* Puzzle Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{puzzle.title}</h3>
          <p className="text-muted-foreground mt-1">{puzzle.description}</p>
        </div>
        <Badge variant={getDifficultyColor(puzzle.difficulty) as any}>
          {puzzle.difficulty}
        </Badge>
      </div>

      {/* Game State */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-card/50 border-border">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Your Elixir</span>
          </div>
          <div className="text-3xl font-bold text-primary">
            {puzzle.playerElixir}
          </div>
        </Card>
        
        <Card className="p-4 bg-card/50 border-border">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-destructive" />
            <span className="font-medium text-foreground">Opponent Elixir</span>
          </div>
          <div className="text-3xl font-bold text-destructive">
            {puzzle.opponentElixir}
          </div>
        </Card>
      </div>

      {/* Battlefield */}
      <Card className="relative bg-gradient-card border-primary/30 overflow-hidden">
        <div 
          ref={battlefieldRef}
          className="relative h-96 bg-gradient-to-b from-destructive/10 via-transparent to-primary/10"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-9 grid-rows-15 pointer-events-none">
            {Array.from({ length: 135 }).map((_, i) => (
              <div key={i} className="border border-white/5" />
            ))}
          </div>

          {/* Towers */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-24">
            <div className="text-center">
              <div className="w-12 h-12 bg-destructive/20 border-2 border-destructive rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-destructive">
                  {puzzle.opponentTowerHealth.left}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/20 border-2 border-destructive rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-destructive">
                  {puzzle.opponentTowerHealth.king}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-destructive/20 border-2 border-destructive rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-destructive">
                  {puzzle.opponentTowerHealth.right}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-24">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 border-2 border-primary rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-primary">
                  {puzzle.playerTowerHealth.left}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 border-2 border-primary rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-primary">
                  {puzzle.playerTowerHealth.king}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 border-2 border-primary rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-primary">
                  {puzzle.playerTowerHealth.right}
                </span>
              </div>
            </div>
          </div>

          {/* Existing troops */}
          {puzzle.existingTroops.map(troop => (
            <div
              key={troop.id}
              className="absolute w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold animate-pulse-glow"
              style={{
                left: `${troop.x}%`,
                top: `${troop.y}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: troop.side === 'player' ? 'hsl(var(--primary) / 0.8)' : 'hsl(var(--destructive) / 0.8)',
                color: 'white'
              }}
            >
              {troop.type[0]}
            </div>
          ))}

          {/* Placed cards */}
          {placedCards.map((placed, index) => (
            <div
              key={index}
              className="absolute w-10 h-10 bg-accent/80 rounded-lg flex items-center justify-center text-xs font-bold text-accent-foreground shadow-neon"
              style={{
                left: `${placed.x}%`,
                top: `${placed.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {placed.card[0]}
            </div>
          ))}

          {/* Optimal solution overlay */}
          {showSolution && puzzle.optimalSolution.map((solution, index) => (
            <div
              key={index}
              className="absolute w-10 h-10 bg-success/30 border-2 border-success rounded-lg flex items-center justify-center text-xs font-bold text-success animate-pulse"
              style={{
                left: `${solution.x}%`,
                top: `${solution.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {solution.card[0]}
            </div>
          ))}

          {/* Hint overlay */}
          {showHint && !showSolution && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/90 rounded-lg p-4 max-w-xs">
              <p className="text-sm text-foreground">
                💡 Try placing defensive troops near the bridge to maximize counter-push potential
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Available Cards */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-3">Available Cards</h4>
        <div className="flex gap-3 flex-wrap">
          {puzzle.availableCards.map(card => (
            <div
              key={card}
              draggable
              onDragStart={() => handleDragStart(card)}
              className="w-20 h-24 bg-gradient-card border-2 border-primary/30 rounded-lg flex flex-col items-center justify-center cursor-move hover:border-primary hover:shadow-glow transition-all"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs text-foreground font-medium">{card}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions and Feedback */}
      <div className="space-y-4">
        {score !== null && (
          <Card className="p-4 bg-gradient-card border-primary/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">Your Score</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {score}/100
              </span>
            </div>
            <p className="text-muted-foreground">{feedback}</p>
          </Card>
        )}

        <div className="flex gap-3">
          <Button 
            variant="hero" 
            onClick={calculateScore}
            disabled={placedCards.length === 0 || score !== null}
            className="flex-1"
          >
            Submit Solution
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setShowHint(!showHint)}
            disabled={score !== null}
          >
            <HelpCircle className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setShowSolution(!showSolution)}
            disabled={score === null}
          >
            <Eye className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetPuzzle}
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PuzzleBattlefield;
