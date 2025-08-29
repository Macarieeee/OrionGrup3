import { Button } from "@/components/ui/button";
import { ShoppingBag, Zap, Cpu, Wifi } from "lucide-react";
import { useEffect, useRef } from "react";

const Shop = () => {
  const shopRef = useRef<HTMLDivElement>(null);

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

    if (shopRef.current) {
      observer.observe(shopRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      name: "Smart Ceiling Systems",
      description: "AI-powered ceiling fixtures with adaptive brightness and color control",
      icon: Cpu,
      productCount: "25+ Products",
      gradient: "from-primary to-secondary"
    },
    {
      name: "Connected Floor Lamps", 
      description: "WiFi-enabled standing lamps with voice control and mobile integration",
      icon: Wifi,
      productCount: "18+ Products",
      gradient: "from-secondary to-accent"
    }
  ];

  return (
    <section ref={shopRef} className="py-24 section-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="fade-in flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-primary mr-3" />
            <span className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
              Smart Collection
            </span>
          </div>
          
          <h2 className="fade-in text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Next-Gen
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Lighting Systems</span>
          </h2>
          
          <p className="fade-in text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of illumination with our intelligent, 
            connected lighting solutions designed for modern smart environments.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.name} 
                className={`fade-in card-product ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} bg-[var(--gradient-card)] border-primary/20 group`}
              >
                {/* Category Header with Gradient */}
                <div className={`h-80 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-8 left-8">
                    <IconComponent className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="text-sm font-semibold text-white/80 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {category.productCount}
                    </span>
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-1/2 right-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-lg"></div>
                </div>
                
                {/* Category Content */}
                <div className="p-8">                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 w-full px-8 py-4 text-lg font-semibold">
                    Explore Collection
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 fade-in">
          <Button className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:shadow-[var(--shadow-dramatic)] transition-all duration-300 px-12 py-4 text-lg font-semibold">
            View All Smart Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;