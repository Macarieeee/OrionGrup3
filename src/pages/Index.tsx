import Hero from "@/components/Hero";
import Shop from "@/components/Shop";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Shop Section */}
      <section id="shop">
        <Shop />
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
