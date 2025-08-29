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
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "15", label: "Years Experience" },
    { icon: Clock, number: "1000+", label: "Projects Completed" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ];

  return (
    <section ref={aboutRef} className="py-24 section-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="fade-in flex items-center mb-6">
                <Users className="w-8 h-8 text-primary mr-3" />
                <span className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
                  About LuminaTech
                </span>
              </div>
              
              <h2 className="slide-in-left text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Engineering Light,
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Defining Tomorrow</span>
              </h2>
              
              <div className="slide-in-left space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For over 15 years, we've pioneered intelligent lighting solutions that seamlessly 
                  integrate with modern smart homes and commercial spaces. Our passion for innovation 
                  drives us to create lighting that adapts, learns, and enhances every environment.
                </p>
                
                <p>
                  From AI-powered residential systems to enterprise-grade commercial installations, 
                  we collaborate with tech companies, architects, and visionaries to illuminate 
                  the spaces of tomorrow. Quality, innovation, and sustainability guide everything we create.
                </p>
              </div>
              
              <div className="slide-in-left pt-8">
                <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 px-8 py-4 text-lg font-semibold">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className={`fade-in text-center card-elegant ${index % 2 === 0 ? 'slide-in-right' : 'scale-in'} bg-[var(--gradient-card)] border-primary/20`}
                >
                  <div className="mb-6">
                    <Icon className="w-12 h-12 mx-auto text-primary mb-4" />
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-24 text-center">
          <div className="fade-in max-w-4xl mx-auto card-elegant bg-[var(--gradient-card)] border-primary/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Your Space?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let our expert team help you create the perfect smart lighting ecosystem 
              for your project. From concept to installation, we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 px-8 py-4 text-lg font-semibold">
                Get Free Consultation
              </Button>
              <Button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 text-lg font-semibold">
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;