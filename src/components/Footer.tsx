import { Button } from "@/components/ui/button";
import { Lightbulb, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--gradient-hero)] text-foreground py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary drop-shadow-[0_0_10px_hsl(217_91%_60%/0.5)]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LuminaTech
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Next-generation smart lighting solutions for connected homes and intelligent spaces. 
              Revolutionizing illumination through AI-powered technology and innovative design 
              for over 15 years.
            </p>
            <div className="flex space-x-4">
              <Button className="p-3 bg-[var(--gradient-card)] border border-primary/20 hover:shadow-[var(--shadow-glow)] text-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button className="p-3 bg-[var(--gradient-card)] border border-primary/20 hover:shadow-[var(--shadow-glow)] text-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button className="p-3 bg-[var(--gradient-card)] border border-primary/20 hover:shadow-[var(--shadow-glow)] text-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 text-primary mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#shop" className="text-muted-foreground hover:text-primary transition-colors">Smart Collection</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@luminatech.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Tech Boulevard<br />
                  Silicon Valley, CA 94025
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 LuminaTech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;