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

  const products = [
    {
      name: "Colecția de Pendule Moderne",
      description: "Lămpi suspendate elegante, perfecte pentru zone de luat masa și bucătării",
      price: "299 RON",
      image: "/placeholder.svg",
      category: "Pendule"
    },
    {
      name: "Seria de Candelabre din Cristal", 
      description: "Candelabre luxoase din cristal pentru spații grandioase și săli de mese formale",
      price: "1.299 RON",
      image: "/placeholder.svg", 
      category: "Candelabre"
    },
    {
      name: "Iluminat pe Șină cu LED",
      description: "Sisteme de iluminat pe șină versatile, pentru accente și iluminat funcțional",
      price: "199 RON",
      image: "/placeholder.svg",
      category: "Lămpi pe șină"
    },
    {
      name: "Colecția de Aplice de Perete",
      description: "Aplice de perete contemporane, pentru iluminat ambiental și decorativ",
      price: "149 RON",
      image: "/placeholder.svg",
      category: "Aplice"
    }
  ];

  return (
    <section ref={shopRef} className="py-32 section-light relative overflow-hidden">
      {/* Elemente de fundal */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 border border-secondary rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header modern */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div className="flex-1">
            <div className="fade-in inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-semibold text-primary">Colecție de produse</span>
            </div>
            
            <h2 className="fade-in text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Colecție de
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-4">iluminat premium</span>
            </h2>
          </div>
          
          <div className="flex-1 max-w-lg">
            <p className="fade-in text-lg text-muted-foreground leading-relaxed">
              Descoperă colecția noastră selectată de soluții de iluminat premium, 
              care îmbină designul excepțional cu funcționalitatea superioară.
            </p>
          </div>
        </div>

        {/* Grid de produse */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.name} className="fade-in">
              <div className="h-full bg-card rounded-3xl overflow-hidden border border-border group hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-white/90 text-primary hover:bg-white">
                      <ShoppingBag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secțiune CTA de jos */}
        <div className="mt-20 text-center">
          <div className="fade-in max-w-2xl mx-auto bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ești gata să îți transformi spațiul?</h3>
            <p className="text-muted-foreground mb-6">Răsfoiește colecția noastră completă de soluții inteligente de iluminat</p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[var(--shadow-glow)] px-8 py-3">
              Vezi toate produsele
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
