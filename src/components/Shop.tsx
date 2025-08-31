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
    <section ref={shopRef} className="py-32 section-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 border border-secondary rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Modern Header Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div className="flex-1">
            <div className="fade-in inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-semibold text-primary">Product Collection</span>
            </div>
            
            <h2 className="fade-in text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Revolutionary
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Smart Lighting</span>
            </h2>
          </div>
          
          <div className="flex-1 max-w-lg">
            <p className="fade-in text-lg text-muted-foreground leading-relaxed">
              Discover our cutting-edge collection of AI-powered lighting solutions 
              that seamlessly integrate into your smart ecosystem.
            </p>
          </div>
        </div>

        {/* Masonry-Style Product Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Large Card */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="fade-in h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-8 border border-primary/20 group hover:shadow-[var(--shadow-glow)] transition-all duration-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <Cpu className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-3">AI Smart Ecosystem</h3>
                  <p className="text-muted-foreground text-lg">Complete home automation with machine learning capabilities</p>
                </div>
                <div className="bg-primary/20 rounded-full p-3">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-2xl border border-primary/10">
                  <span className="text-sm text-muted-foreground">Ceiling Systems</span>
                  <span className="text-sm font-semibold text-primary">25+ Products</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-2xl border border-secondary/10">
                  <span className="text-sm text-muted-foreground">Floor Solutions</span>
                  <span className="text-sm font-semibold text-secondary">18+ Products</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-2xl border border-accent/10">
                  <span className="text-sm text-muted-foreground">Wall Fixtures</span>
                  <span className="text-sm font-semibold text-accent">12+ Products</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 py-4">
                Explore Full Ecosystem
              </Button>
            </div>
          </div>

          {/* Category Cards */}
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={category.name} className="fade-in">
                <div className="h-full bg-card rounded-3xl p-6 border border-border group hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {category.productCount}
                    </span>
                    <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="fade-in max-w-2xl mx-auto bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Space?</h3>
            <p className="text-muted-foreground mb-6">Browse our complete collection of smart lighting solutions</p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] px-8 py-3">
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;