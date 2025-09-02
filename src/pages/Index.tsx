import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Features />
    </div>
  );
};

export default Index;