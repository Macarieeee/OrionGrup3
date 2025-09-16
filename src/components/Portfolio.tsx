import { Button } from "@/components/ui/button";
import { ExternalLink, Camera } from "lucide-react";
import { useEffect, useRef } from "react";
import restaurantImage from "@/assets/portfolio-restaurant.jpg";
import hotelImage from "@/assets/portfolio-hotel.jpg";
import residentialImage from "@/assets/portfolio-residential.jpg";

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in, .scale-in').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Ambianță Modernă pentru Restaurant",
      category: "Spații Comerciale",
      image: restaurantImage,
      description: "Corpuri suspendate contemporane care creează atmosfera perfectă pentru servirea mesei"
    },
    {
      title: "Lobby de Hotel Luxos",
      category: "Design Hotelier",
      image: hotelImage,
      description: "Instalație grandioasă de candelabru pentru o intrare elegantă de hotel"
    },
    {
      title: "Exterior Rezidențial",
      category: "Iluminat Peisagistic",
      image: residentialImage,
      description: "Iluminat arhitectural care evidențiază designul modern al casei"
    }
  ];

  return (
    <section ref={portfolioRef} className="py-32 section-dark bg-[var(--gradient-hero)] relative">
      {/* Fundal grilă animată */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-primary/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header asimetric */}
        <div className="grid lg:grid-cols-5 gap-12 items-end mb-20">
          <div className="lg:col-span-2">
            <div className="fade-in inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Camera className="w-5 h-5 text-secondary mr-2" />
              <span className="text-sm font-semibold text-secondary">Studii de caz</span>
            </div>

            <h2 className="fade-in text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Instalații
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Transformatoare</span>
            </h2>
          </div>

          <div className="lg:col-span-2">
            <p className="fade-in text-lg text-muted-foreground leading-relaxed">
              Proiecte reale, rezultate reale. Vezi cum soluțiile noastre de iluminat profesional
              au transformat spații din diferite industrii și medii.
            </p>
          </div>
        </div>

        {/* Grid tip Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Proiect principal mare */}
          <div className="md:col-span-2 lg:row-span-2">
            <div className="scale-in group relative h-full min-h-[400px] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5 rounded-3xl overflow-hidden border border-primary/20 hover:shadow-[var(--shadow-dramatic)] transition-all duration-500">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-primary/20 rounded-full px-4 py-2 inline-block mb-4 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-white">{projects[0].category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{projects[0].title}</h3>
                <p className="text-white/80 mb-6">{projects[0].description}</p>
                <Button className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vezi Mai Mult
                </Button>
              </div>
            </div>
          </div>

          {/* Proiecte mai mici */}
          {projects.slice(1).map((project, index) => (
            <div key={project.title} className="scale-in">
              <div className="group relative h-64 bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Card de statistici */}
          <div className="scale-in">
            <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl p-6 border border-accent/20 flex flex-col justify-center items-center text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Proiecte Finalizate
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-4"></div>
            </div>
          </div>
          {/* Card CTA - Vezi toate proiectele */}
          <div className="scale-in">
            <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 flex flex-col justify-center items-center text-center hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Vezi toate proiectele noastre
              </h3>
              <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[var(--shadow-glow)]">
                Vezi portofoliul complet →
              </Button>
            </div>
          </div>

        </div>



        {/* Procesul nostru */}
        <div className="fade-in bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Procesul Nostru</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultanță", desc: "Înțelegerea viziunii și cerințelor tale" },
              { step: "02", title: "Design", desc: "Crearea de soluții personalizate de iluminat" },
              { step: "03", title: "Instalare", desc: "Montaj și configurare profesională" },
              { step: "04", title: "Suport", desc: "Întreținere și optimizare continuă" }
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
