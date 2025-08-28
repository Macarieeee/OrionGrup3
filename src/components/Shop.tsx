import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import ceilingLights from "@/assets/ceiling-lights.jpg";
import tableFloorLights from "@/assets/table-floor-lights.jpg";

const Shop = () => {
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el, index) => {
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
      name: "Ceiling Fixtures",
      description: "Modern chandeliers, pendant lights, and ceiling-mounted solutions",
      image: ceilingLights,
      productCount: "120+ Products"
    },
    {
      name: "Table & Floor Lamps", 
      description: "Contemporary table lamps, floor lamps, and accent lighting",
      image: tableFloorLights,
      productCount: "85+ Products"
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
              Shop Collection
            </span>
          </div>
          
          <h2 className="fade-in text-4xl md:text-6xl font-bold mb-6 text-primary">
            Premium Lighting
            <span className="block text-muted-foreground">Categories</span>
          </h2>
          
          <p className="fade-in text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of lighting solutions, 
            designed to transform any space with elegance and functionality.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={category.name} 
              className={`fade-in card-product ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
            >
              {/* Category Image */}
              <div className="relative overflow-hidden h-80">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-500"></div>
              </div>
              
              {/* Category Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {category.productCount}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {category.description}
                </p>
                
                <Button className="btn-hero group w-full">
                  Browse {category.name}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 fade-in">
          <Button className="btn-outline-hero">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;