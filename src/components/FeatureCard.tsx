import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, gradient }: FeatureCardProps) => {
  return (
    <div className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
      gradient 
        ? "bg-gradient-card border-2 border-primary/30 hover:border-primary shadow-card hover:shadow-neon" 
        : "bg-card border border-border hover:border-primary/50 hover:shadow-glow"
    }`}>
      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-lg mb-4 ${
          gradient ? "bg-primary/20" : "bg-primary/10"
        }`}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      {gradient && (
        <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl" />
      )}
    </div>
  );
};

export default FeatureCard;