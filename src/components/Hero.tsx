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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--gradient-hero)]"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="fade-in mb-8">
            <Lightbulb className="w-16 h-16 mx-auto animate-float text-primary drop-shadow-[0_0_20px_hsl(217_91%_60%/0.5)]" />
          </div>
          
          {/* Main Heading */}
          <h1 className="fade-in text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            Next-Gen
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Illumination Solutions
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="fade-in text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform any space with our cutting-edge smart lighting technology. 
            Experience the future of illumination design.
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
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;