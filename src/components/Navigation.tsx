import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-elegant" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="/" className="flex items-center space-x-3 rounded-xl bg-background/80 backdrop-blur-sm ring-1 ring-border px-2 md:px-3 py-1" aria-label="Anvita Capital home">
            <img
              src="/lovable-uploads/89343412-3f23-4f7b-a630-9fac8175f2a0.png"
              alt="Anvita Capital logo — Building Happiness"
              width="160"
              height="60"
              className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
              loading="eager"
              decoding="sync"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              size="sm" 
              className={isScrolled ? "" : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary"}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-primary hover:text-accent font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;