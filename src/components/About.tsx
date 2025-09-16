import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, number: "500+", label: "Clienți fericiți" },
    { icon: Award, number: "15", label: "Ani de experiență" },
    { icon: Clock, number: "1000+", label: "Proiecte finalizate" },
    { icon: Star, number: "4.9", label: "Rating mediu" }
  ];

  return (
    <section ref={aboutRef} className="py-32 section-light relative overflow-hidden">
      {/* Elemente de fundal diagonale */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent transform skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-r from-secondary/5 to-transparent transform -skew-x-12 -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Layout split */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <div className="fade-in inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Users className="w-5 h-5 text-accent mr-2" />
              <span className="text-sm font-semibold text-accent">Despre Orion Grup</span>
            </div>
            
            <h2 className="slide-in-left text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Creăm Lumină,
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Construim Ambianță
              </span>
            </h2>
            
            <div className="slide-in-left space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                De peste 25 ani, suntem în fruntea designului de iluminat, 
                creând soluții care nu doar luminează — ci transformă esența fiecărui spațiu.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="slide-in-right grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">25+ Ani</h3>
                  <p className="text-muted-foreground text-sm">Lideri în inovația designului profesional de iluminat</p>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-accent/5 rounded-2xl p-6 border border-secondary/20">
                  <Star className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Rating 4.9★</h3>
                  <p className="text-muted-foreground text-sm">De încredere pentru mii de clienți mulțumiți</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl p-6 border border-primary/20">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">1000+ Proiecte</h3>
                  <p className="text-muted-foreground text-sm">Instalări de succes în toată lumea</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors">
                  <Users className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">500+ Clienți</h3>
                  <p className="text-muted-foreground text-sm">De la soluții rezidențiale până la proiecte enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secțiunea Valori */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">Valorile Noastre</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Principiile care ne inspiră inovația și ne ghidează misiunea de a lumina viitorul.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Excelență în Design", description: "Depășim limitele prin design inovator și măiestrie de calitate", icon: "🚀" },
              { title: "Design Sustenabil", description: "Soluții super eficiente energetic, care respectă mediul înconjurător", icon: "🌱" },
              { title: "Centrat pe Oameni", description: "Tehnologie care îmbunătățește viața și creează experiențe memorabile", icon: "💡" }
            ].map((value) => (
              <div key={value.title}>
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 border border-primary/20">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Echipa */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h3 className="text-3xl font-bold text-foreground mb-6">Lucrăm Cu Branduri De Top</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Echipa noastră combină decenii de excelență în design cu perspective noi 
                despre ce poate realiza iluminatul profesional. De la ingineri cu experiență la designeri creativi, 
                suntem uniți de pasiunea pentru lumină.
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] px-8 py-4">
                Vezi Intreaga Lista
              </Button>
            </div>
            
            <div className="slide-in-right">
              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 border border-primary/20">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-4"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-4"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Modern */}
        <div className="fade-in">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border border-primary/20 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Pregătit să-ți aducem viziunea la lumină?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Hai să colaborăm pentru a crea o soluție de iluminat perfect adaptată spațiului, 
                  nevoilor și viziunii tale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] px-8 py-4">
                    Programează un apel
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-muted-foreground font-semibold">Suport de specialitate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
