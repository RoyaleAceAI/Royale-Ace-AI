import Navigation from "@/components/Navigation";
import PuzzleBattlefield from "@/components/PuzzleBattlefield";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { 
  Puzzle, 
  Trophy, 
  Target, 
  Zap,
  TrendingUp,
  RotateCcw,
  Filter,
  Brain,
  Sparkles
} from "lucide-react";
import { getRandomPuzzles, PuzzleScenario } from "@/data/puzzleScenarios";
import { useToast } from "@/hooks/use-toast";

const Puzzles = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState<PuzzleScenario | null>(null);
  const [completedPuzzles, setCompletedPuzzles] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [puzzleHistory, setPuzzleHistory] = useState<{ puzzleId: number; score: number }[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadNewPuzzle();
  }, []);

  const loadNewPuzzle = (difficulty?: string) => {
    const puzzles = getRandomPuzzles(1, difficulty || selectedDifficulty || undefined);
    if (puzzles.length > 0) {
      setCurrentPuzzle(puzzles[0]);
    }
  };

  const handlePuzzleComplete = (score: number) => {
    if (!currentPuzzle) return;

    setCompletedPuzzles([...completedPuzzles, currentPuzzle.id]);
    setTotalScore(totalScore + score);
    setPuzzleHistory([...puzzleHistory, { puzzleId: currentPuzzle.id, score }]);

    toast({
      title: "Puzzle Complete!",
      description: `You scored ${score}/100 points`,
      variant: score >= 80 ? "default" : "destructive",
    });
  };

  const averageScore = puzzleHistory.length > 0 
    ? Math.round(puzzleHistory.reduce((acc, h) => acc + h.score, 0) / puzzleHistory.length)
    : 0;

  const stats = {
    completed: completedPuzzles.length,
    averageScore,
    totalScore,
    streak: puzzleHistory.filter(h => h.score >= 80).length
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Strategic Puzzles
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Master real gameplay scenarios with interactive training
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Brain className="w-8 h-8 text-primary" />
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-card/50 border-border">
                <div className="flex items-center gap-3">
                  <Puzzle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="text-2xl font-bold text-foreground">{stats.completed}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 border-border">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Score</p>
                    <p className="text-2xl font-bold text-foreground">{stats.averageScore}%</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 border-border">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                    <p className="text-2xl font-bold text-foreground">{stats.totalScore}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 border-border">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Perfect Streak</p>
                    <p className="text-2xl font-bold text-foreground">{stats.streak}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Difficulty Filter */}
            <div className="flex gap-3 items-center mb-6">
              <span className="text-sm font-medium text-muted-foreground">Difficulty:</span>
              <Button
                variant={selectedDifficulty === null ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedDifficulty(null);
                  loadNewPuzzle();
                }}
              >
                All
              </Button>
              <Button
                variant={selectedDifficulty === "beginner" ? "success" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedDifficulty("beginner");
                  loadNewPuzzle("beginner");
                }}
              >
                Beginner
              </Button>
              <Button
                variant={selectedDifficulty === "intermediate" ? "secondary" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedDifficulty("intermediate");
                  loadNewPuzzle("intermediate");
                }}
              >
                Intermediate
              </Button>
              <Button
                variant={selectedDifficulty === "advanced" ? "destructive" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedDifficulty("advanced");
                  loadNewPuzzle("advanced");
                }}
              >
                Advanced
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Puzzle Area */}
            <div className="lg:col-span-2">
              {currentPuzzle ? (
                <PuzzleBattlefield 
                  puzzle={currentPuzzle} 
                  onComplete={handlePuzzleComplete}
                />
              ) : (
                <Card className="p-8 bg-gradient-card border-primary/30 text-center">
                  <Puzzle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Loading Puzzle...
                  </h3>
                  <p className="text-muted-foreground">
                    Preparing your next challenge
                  </p>
                </Card>
              )}

              {/* Next Puzzle Button */}
              <div className="mt-6 flex justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => loadNewPuzzle()}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Next Puzzle
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <Card className="p-6 bg-gradient-card border-primary/30">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  Your Progress
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Skill Level</span>
                      <span className="text-foreground font-medium">
                        {averageScore >= 80 ? "Expert" : averageScore >= 60 ? "Advanced" : "Learning"}
                      </span>
                    </div>
                    <Progress value={averageScore} className="h-2" />
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Recent Performance</p>
                    <div className="space-y-2">
                      {puzzleHistory.slice(-5).reverse().map((history, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Puzzle #{history.puzzleId}
                          </span>
                          <Badge variant={
                            history.score >= 80 ? "default" : 
                            history.score >= 60 ? "secondary" : 
                            "destructive"
                          } className="text-xs">
                            {history.score}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tips Card */}
              <Card className="p-6 bg-card/50 border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  💡 Pro Tips
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Consider elixir trades in every placement</li>
                  <li>• Place troops to maximize counter-push potential</li>
                  <li>• Use buildings to pull tanks to the center</li>
                  <li>• Save spells for maximum value</li>
                  <li>• Practice kiting techniques with cheap units</li>
                </ul>
              </Card>

              {/* Challenge Mode */}
              <Card className="p-6 bg-gradient-primary text-white">
                <h3 className="text-lg font-bold mb-2">🏆 Daily Challenge</h3>
                <p className="text-sm mb-4 opacity-90">
                  Complete 5 puzzles with 80%+ score
                </p>
                <div className="flex justify-between items-center">
                  <Progress value={(stats.streak / 5) * 100} className="flex-1 mr-3 h-2" />
                  <span className="text-sm font-medium">{stats.streak}/5</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puzzles;