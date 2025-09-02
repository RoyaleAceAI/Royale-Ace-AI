import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  Zap, 
  Target,
  ChevronRight,
  Download,
  Share2,
  PlayCircle
} from "lucide-react";

const Results = () => {
  // Mock data for demonstration
  const analysisData = {
    playerTag: "#2PP0L9Q8",
    playerName: "ProPlayer123",
    matchesAnalyzed: 10,
    overallScore: 72,
    winRate: 60,
    avgElixirEfficiency: 85,
    placementAccuracy: 68,
    counterPlayRating: 75,
    mistakes: [
      {
        id: 1,
        timestamp: "2:34",
        type: "critical",
        title: "Elixir Overcommitment",
        description: "Spent 12 elixir on offense leaving no defense for counter push",
        suggestion: "Keep at least 4 elixir for defense when pushing",
        impact: -200
      },
      {
        id: 2,
        timestamp: "3:12",
        type: "major",
        title: "Poor Placement",
        description: "Placed Musketeer too close to tower, vulnerable to Fireball",
        suggestion: "Place support units at the corner to avoid spell value",
        impact: -150
      },
      {
        id: 3,
        timestamp: "4:45",
        type: "minor",
        title: "Missed Counter Opportunity",
        description: "Failed to punish opponent's Golem placement",
        suggestion: "Apply pressure opposite lane when opponent plays expensive tank",
        impact: -100
      }
    ],
    improvements: [
      "Focus on elixir counting - track opponent's elixir",
      "Practice split lane pressure techniques",
      "Improve defensive placement patterns",
      "Learn optimal counter combinations for meta decks"
    ]
  };

  const getMistakeColor = (type: string) => {
    switch(type) {
      case "critical": return "destructive";
      case "major": return "accent";
      case "minor": return "secondary";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Analysis Complete
                </h1>
                <p className="text-muted-foreground">
                  Player: <span className="text-primary font-semibold">{analysisData.playerName}</span> • 
                  {" "}{analysisData.matchesAnalyzed} matches analyzed
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="glow" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>
          </div>

          {/* Overall Score Card */}
          <Card className="p-8 mb-8 bg-gradient-card border-primary/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Overall Performance</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {analysisData.overallScore}
                  </div>
                  <div className="text-muted-foreground">
                    <p className="text-sm">Performance</p>
                    <p className="text-sm">Score</p>
                  </div>
                </div>
                <Progress value={analysisData.overallScore} className="h-3 mb-6" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Win Rate</p>
                      <p className="font-bold text-foreground">{analysisData.winRate}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Elixir Efficiency</p>
                      <p className="font-bold text-foreground">{analysisData.avgElixirEfficiency}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Placement</p>
                      <p className="font-bold text-foreground">{analysisData.placementAccuracy}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-success" />
                    <div>
                      <p className="text-sm text-muted-foreground">Counter Play</p>
                      <p className="font-bold text-foreground">{analysisData.counterPlayRating}%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Chart Placeholder */}
              <div className="bg-background/50 rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full border-8 border-primary/30 border-t-primary mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground">Performance visualization</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Mistakes Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              Key Mistakes Identified
            </h2>
            
            <div className="space-y-4">
              {analysisData.mistakes.map((mistake) => (
                <Card key={mistake.id} className="p-6 border-l-4" style={{
                  borderLeftColor: `hsl(var(--${getMistakeColor(mistake.type)}))`
                }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Badge variant={getMistakeColor(mistake.type) as any}>
                        {mistake.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {mistake.timestamp}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{mistake.title}</h3>
                  <p className="text-muted-foreground mb-3">{mistake.description}</p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                    <p className="text-sm text-primary font-medium mb-1">💡 Suggestion</p>
                    <p className="text-sm text-foreground">{mistake.suggestion}</p>
                  </div>
                  
                  <div className="mt-3 text-sm text-destructive font-medium">
                    Impact: {mistake.impact} tower damage
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Improvement Tips */}
          <Card className="p-6 bg-gradient-card border-primary/30">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-success" />
              Personalized Improvement Plan
            </h2>
            
            <div className="space-y-3">
              {analysisData.improvements.map((tip, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <p className="text-foreground flex-1">{tip}</p>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <Button variant="hero" className="flex-1">
                Start Training Mode
              </Button>
              <Button variant="outline" className="flex-1">
                Analyze More Matches
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;