import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
const heroBackground = "/lovable-uploads/35444d47-6dbf-46e4-ac89-7cb4a405e72b.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pt-32 md:pt-24">{/* Increased top padding to avoid nav overlap */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <TrendingUp className="w-4 h-4 mr-2 text-accent" />
            <span className="text-sm font-medium">🏆 20+ Years of Real Estate Excellence – Now Powering a Global Debt Fund</span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="mx-auto w-fit rounded-2xl bg-background/20 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
              Anvita Capital
              <span className="block text-accent">Fund LLC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              With two decades of proven success in delivering high-quality residential and commercial developments like <a href="https://anvitaivana.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors underline">Anvita Ivana</a>, <a href="https://anvitahigh9.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors underline">Anvita High9</a>, <a href="https://anvitaparkside.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors underline">Anvita Parkside</a>, <a href="https://www.anvitagroup.com/anvita-commercial.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors underline">Anvita Commercial</a>, and <a href="https://www.anvitagroup.com/anvita-amari.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors underline">Anvita Amari</a>, Anvita Group is channeling its expertise into Anvita Capital Fund LLC — offering secured, fixed-income investment opportunities backed by real assets worldwide.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#investment-inquiry" className="no-underline">
              <Button size="lg" variant="hero" className="group">
                Start investing today!
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-white/80">SEC Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-accent" />
              <span className="text-white/80">Accredited Investors</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              <span className="text-white/80">Fixed Returns</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;