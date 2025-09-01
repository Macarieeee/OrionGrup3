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
    <section ref={aboutRef} className="py-32 section-light relative overflow-hidden">
      {/* Diagonal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent transform skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-r from-secondary/5 to-transparent transform -skew-x-12 -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Split Hero Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <div className="fade-in inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Users className="w-5 h-5 text-accent mr-2" />
              <span className="text-sm font-semibold text-accent">About Lumina</span>
            </div>
            
            <h2 className="slide-in-left text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Crafting Light,
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Creating Ambiance
              </span>
            </h2>
            
            <div className="slide-in-left space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For over 15 years, we've been at the forefront of lighting design, 
                creating solutions that don't just illuminate—they transform the very essence of space.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="slide-in-right grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">15 Years</h3>
                  <p className="text-muted-foreground text-sm">Leading innovation in professional lighting design</p>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-accent/5 rounded-2xl p-6 border border-secondary/20">
                  <Star className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">4.9★ Rating</h3>
                  <p className="text-muted-foreground text-sm">Trusted by thousands of satisfied customers</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl p-6 border border-primary/20">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">1000+ Projects</h3>
                  <p className="text-muted-foreground text-sm">Successful installations worldwide</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors">
                  <Users className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">500+ Clients</h3>
                  <p className="text-muted-foreground text-sm">From residential to enterprise solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="fade-in text-3xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="fade-in text-muted-foreground max-w-2xl mx-auto">
              The principles that drive our innovation and guide our mission to illuminate the future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Excellence",
                description: "Pushing boundaries with innovative lighting design and quality craftsmanship",
                icon: "🚀"
              },
              {
                title: "Sustainable Design", 
                description: "Energy-efficient solutions that respect our environment",
                icon: "🌱"
              },
              {
                title: "Human-Centered",
                description: "Technology that enhances life and creates meaningful experiences",
                icon: "💡"
              }
            ].map((value, index) => (
              <div key={value.title} className="scale-in group">
                <div className="bg-card rounded-3xl p-8 border border-border group-hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 h-full">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Showcase */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h3 className="text-3xl font-bold text-foreground mb-6">Meet Our Experts</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our team combines decades of design excellence with fresh perspectives 
                on what professional lighting can achieve. From experienced engineers to creative 
                designers, we're united by our passion for illumination.
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] px-8 py-4">
                Meet the Team
              </Button>
            </div>
            
            <div className="slide-in-right">
              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4"></div>
                    <div className="text-sm font-semibold text-foreground">Design Team</div>
                    <div className="text-xs text-muted-foreground">Creative Direction</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4"></div>
                    <div className="text-sm font-semibold text-foreground">Installation</div>
                    <div className="text-xs text-muted-foreground">Field Services</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4"></div>
                    <div className="text-sm font-semibold text-foreground">Engineering</div>
                    <div className="text-xs text-muted-foreground">Technical Solutions</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-4"></div>
                    <div className="text-sm font-semibold text-foreground">Support</div>
                    <div className="text-xs text-muted-foreground">Customer Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern CTA */}
        <div className="fade-in">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border border-primary/20 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Ready to Illuminate Your Vision?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Let's collaborate to create a lighting solution that's perfectly tailored to your space, 
                  your needs, and your vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] px-8 py-4">
                    Start Your Project
                  </Button>
                  <Button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
                    Schedule Call
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-muted-foreground font-semibold">Expert Support</div>
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