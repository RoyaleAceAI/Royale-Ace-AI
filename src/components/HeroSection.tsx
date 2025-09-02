import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float animation-delay-2000" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-shimmer bg-gradient-to-r from-transparent via-primary/10 to-transparent bg-[length:200%_100%]">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Clash Royale Coaching</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Master Every Match
          </span>
          <br />
          <span className="text-foreground">
            With AI Analysis
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Upload your gameplay or enter your Supercell ID to get instant, professional-level coaching. 
          Our AI analyzes thousands of matches to identify your mistakes and help you climb the ladder.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/analyze">
            <Button variant="hero" size="lg" className="group">
              Start Analysis
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Trophy, value: "50K+", label: "Players Improved" },
            { icon: Zap, value: "1M+", label: "Matches Analyzed" },
            { icon: Shield, value: "92%", label: "Win Rate Increase" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <Icon className="w-8 h-8 text-primary mb-2" />
              <span className="text-3xl font-bold text-foreground">{value}</span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;