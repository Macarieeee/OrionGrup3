import { Button } from "@/components/ui/button";
import { Lightbulb, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Lightbulb className="w-8 h-8 text-primary-foreground" />
            <span className="text-xl font-bold text-primary-foreground">
              LuxLight
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary-foreground hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#shop" className="text-primary-foreground hover:text-gray-300 transition-colors">
              Shop
            </a>
            <a href="#portfolio" className="text-primary-foreground hover:text-gray-300 transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-primary-foreground hover:text-gray-300 transition-colors">
              About
            </a>
            <Button className="bg-primary-foreground text-primary hover:bg-gray-200 transition-colors">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-primary-foreground hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="#shop" className="text-primary-foreground hover:text-gray-300 transition-colors">
                Shop
              </a>
              <a href="#portfolio" className="text-primary-foreground hover:text-gray-300 transition-colors">
                Portfolio
              </a>
              <a href="#about" className="text-primary-foreground hover:text-gray-300 transition-colors">
                About
              </a>
              <Button className="bg-primary-foreground text-primary hover:bg-gray-200 transition-colors w-fit">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;