import FeatureCard from "./FeatureCard";
import { 
  Video, 
  User, 
  Brain, 
  ChartBar, 
  Target, 
  GraduationCap,
  Sparkles,
  Trophy,
  Puzzle,
  Crown,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Crown,
      title: "Player Stats Lookup",
      description: "Search any player by tag and view detailed statistics, battle history, and achievements.",
      gradient: true,
      onClick: () => navigate('/player-stats')
    },
    {
      icon: Trophy,
      title: "Global Leaderboards",
      description: "Browse top players and clans worldwide, Path of Legends rankings, and regional leaders.",
      gradient: false,
      onClick: () => navigate('/leaderboards')
    },
    {
      icon: Video,
      title: "Video Upload Analysis",
      description: "Upload gameplay recordings and get frame-by-frame breakdown of your plays.",
      gradient: false,
      onClick: () => navigate('/analyze')
    },
    {
      icon: Brain,
      title: "AI Mistake Detection",
      description: "Advanced AI trained on thousands of pro matches identifies tactical errors.",
      gradient: true,
      onClick: () => navigate('/analyze')
    },
    {
      icon: Puzzle,
      title: "Interactive Puzzles",
      description: "Practice with real gameplay scenarios. Drag and drop troops to solve strategic challenges.",
      gradient: true,
      onClick: () => navigate('/puzzles')
    },
    {
      icon: GraduationCap,
      title: "Learning Mode",
      description: "Personalized drills and challenges based on your specific weaknesses.",
      gradient: false,
      onClick: () => navigate('/puzzles')
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-foreground">To Reach Legendary</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of tools analyzes every aspect of your gameplay to help you improve faster than ever.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-card border border-primary/30">
          <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join 50,000+ Players Already Improving
          </h3>
          <p className="text-muted-foreground mb-6">
            Start your journey to becoming a Clash Royale master today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;