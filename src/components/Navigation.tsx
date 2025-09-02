import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, Home, Trophy, BarChart3, Sparkles } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/analyze", label: "Analyze", icon: Sparkles },
    { href: "/puzzles", label: "Puzzles", icon: Trophy },
    { href: "/results", label: "Results", icon: BarChart3 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-primary shadow-neon">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CR Coach AI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === href
                    ? "bg-primary/10 text-primary shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="glow" className="hidden sm:flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Pro</span>
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;