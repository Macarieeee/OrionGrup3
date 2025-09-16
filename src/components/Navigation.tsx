import { Button } from "@/components/ui/button";
import { Lightbulb, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Lightbulb className="w-8 h-8 text-primary drop-shadow-[0_0_10px_hsl(217_91%_60%/0.5)]" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Orion Grup
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Acasa
            </a>
            <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium">
              Magazin
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
              Portfoliu
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              Despre noi
            </a>
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              Contacteaza-ne
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Acasa
              </a>
              <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium">
                Magazin
              </a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
                Portfoliu
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                Despre Noi
              </a>
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 w-fit">
                Contacteaza-ne
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;