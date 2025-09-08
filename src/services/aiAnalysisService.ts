import { toast } from "sonner";

export interface AnalysisResult {
  overallScore: number;
  mistakes: Mistake[];
  suggestions: string[];
  elixirEfficiency: number;
  defenseRating: number;
  offenseRating: number;
}

export interface Mistake {
  timestamp: string;
  type: "placement" | "timing" | "elixir" | "counter";
  severity: "minor" | "major" | "critical";
  description: string;
  suggestion: string;
}

export class AIAnalysisService {
  private static API_KEY_STORAGE = 'ai_api_key';

  static async analyzeVideo(file: File): Promise<AnalysisResult> {
    // Simulate video processing and AI analysis
    // In production, this would upload to a server and process with AI
    
    return new Promise((resolve) => {
      // Simulate processing delay
      setTimeout(() => {
        const mockAnalysis: AnalysisResult = {
          overallScore: 72,
          elixirEfficiency: 68,
          defenseRating: 75,
          offenseRating: 71,
          mistakes: [
            {
              timestamp: "0:45",
              type: "placement",
              severity: "major",
              description: "Knight placed too close to the bridge, allowing opponent to activate King Tower",
              suggestion: "Place Knight 2 tiles back from the bridge to avoid King Tower activation"
            },
            {
              timestamp: "1:23",
              type: "elixir",
              severity: "minor",
              description: "Leaked 2 elixir while at full capacity",
              suggestion: "Deploy a cycle card or cheap unit to avoid elixir waste"
            },
            {
              timestamp: "2:15",
              type: "timing",
              severity: "critical",
              description: "Used Fireball too early, missing the Musketeer",
              suggestion: "Wait for troops to clump or predict opponent's placement"
            },
            {
              timestamp: "2:47",
              type: "counter",
              severity: "major",
              description: "Failed to counter Hog Rider efficiently, taking 800+ damage",
              suggestion: "Use building placement or mini tank + support for better trades"
            },
            {
              timestamp: "3:32",
              type: "placement",
              severity: "minor",
              description: "Archers placed in Fireball range with Tower",
              suggestion: "Split archers or place them away from tower to avoid spell value"
            }
          ],
          suggestions: [
            "Focus on elixir management - avoid leaking and maintain steady pressure",
            "Practice defensive building placements in training mode",
            "Work on spell timing - wait for maximum value opportunities",
            "Study opponent's cycle to predict their plays better",
            "Improve troop spacing to minimize spell damage"
          ]
        };

        resolve(mockAnalysis);
      }, 3000);
    });
  }

  static async analyzeWithAI(videoFile: File, apiKey?: string): Promise<AnalysisResult> {
    try {
      // This would be the actual AI API call
      // For demo, we'll use the mock analysis
      
      if (!apiKey) {
        apiKey = localStorage.getItem(this.API_KEY_STORAGE) || '';
      }

      if (!apiKey) {
        toast.error("Please configure your AI API key in settings");
        throw new Error("API key not configured");
      }

      // In production, this would:
      // 1. Upload video to cloud storage
      // 2. Process video frames
      // 3. Send to AI model for analysis
      // 4. Parse and return results

      // For now, return mock data
      return await this.analyzeVideo(videoFile);
      
    } catch (error) {
      console.error("AI Analysis failed:", error);
      throw error;
    }
  }

  static formatTimestamp(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  static calculateImprovementPotential(analysis: AnalysisResult): number {
    const criticalMistakes = analysis.mistakes.filter(m => m.severity === "critical").length;
    const majorMistakes = analysis.mistakes.filter(m => m.severity === "major").length;
    
    const potential = Math.min(100, 
      (100 - analysis.overallScore) + 
      (criticalMistakes * 10) + 
      (majorMistakes * 5)
    );
    
    return potential;
  }
}