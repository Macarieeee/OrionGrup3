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
      className="relative min-h-screen overflow-hidden bg-[var(--gradient-hero)]"
    >
      {/* Fundal Geometric */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-20 left-20 opacity-10" width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" className="animate-pulse" />
            <circle cx="100" cy="100" r="60" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" className="animate-pulse animation-delay-500" />
          </svg>
          <svg className="absolute bottom-40 right-20 opacity-10" width="150" height="150" viewBox="0 0 150 150">
            <polygon points="75,10 135,50 135,110 75,140 15,110 15,50" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" className="animate-pulse animation-delay-1000" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      {/* Layout împărțit */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Conținut stânga */}
            <div className="space-y-8">
              <div className="fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Lightbulb className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm font-semibold text-primary">Iluminare profesională</span>
                </div>
              </div>
              
              <h1 className="fade-in text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                Soluții de
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2 pb-4">
                  iluminat premium
                </span>
              </h1>
              
              <p className="fade-in text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transformă-ți spațiul cu soluțiile noastre de iluminat premium, care îmbină 
                designul elegant cu funcționalitatea superioară pentru orice mediu.
              </p>
              
              <div className="fade-in flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero group px-8 py-4">
                  Începe proiectul
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button className="btn-outline-hero px-8 py-4">
                  Vezi demo
                </Button>
              </div>
            </div>

            {/* Vizual dreapta */}
            <div className="fade-in relative">
              <div className="relative w-full max-w-lg mx-auto">
                <img 
                  src={heroImage} 
                  alt="Instalație de iluminat modernă" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-[var(--shadow-dramatic)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Elemente UI plutitoare */}
                <div className="absolute top-8 right-8 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-foreground">Calitate profesională</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-secondary/20 animate-float animation-delay-1000">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">25+</div>
                    <div className="text-xs text-muted-foreground">Ani de experiență</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistici jos */}
      <div className="absolute bottom-0 left-0 right-0 py-8 bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6">
            <div className="fade-in flex flex-wrap justify-center gap-12 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Proiecte</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Clienți fericiți</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Ani de experiență</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
