import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-lighting.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury lighting installation" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="fade-in mb-8">
            <Lightbulb className="w-16 h-16 mx-auto animate-float text-primary-foreground" />
          </div>
          
          {/* Main Heading */}
          <h1 className="fade-in text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Illuminate Your
            <span className="block text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
              Perfect Space
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="fade-in text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of premium lighting solutions. 
            From contemporary chandeliers to minimalist pendants.
          </p>
          
          {/* CTA Buttons */}
          <div className="fade-in flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero group">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-outline-hero">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;