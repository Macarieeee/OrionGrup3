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
      title: "Modern Restaurant Ambiance",
      category: "Commercial Dining",
      image: restaurantImage,
      description: "Contemporary pendant lighting creating the perfect dining atmosphere"
    },
    {
      title: "Luxury Hotel Lobby",
      category: "Hospitality Design", 
      image: hotelImage,
      description: "Grand chandelier installation for an upscale hotel entrance"
    },
    {
      title: "Residential Exterior",
      category: "Landscape Lighting",
      image: residentialImage,
      description: "Architectural lighting highlighting modern home design"
    }
  ];

  return (
    <section ref={portfolioRef} className="py-24 section-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="fade-in flex items-center justify-center mb-6">
            <Camera className="w-8 h-8 text-primary mr-3" />
            <span className="text-lg font-semibold text-muted-foreground uppercase tracking-wider ">
              Our Work
            </span>
          </div>
          
          <h2 className="fade-in text-4xl md:text-6xl font-bold mb-6 text-primary">
            Featured
            <span className="block text-primary">Installations</span>
          </h2>
          
          <p className="fade-in text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our lighting solutions have transformed spaces across 
            residential, commercial, and hospitality projects.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.title} className="scale-in group cursor-pointer">
              {/* Project Card */}
              <div className="card-elegant bg-card/10 border-gray-700 backdrop-blur-sm hover:bg-card/20">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button className="btn-hero">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                {/* Project Info */}
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl font-bold mb-3 text-muted-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16 fade-in">
          <Button className="btn-outline-hero border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-primary">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;