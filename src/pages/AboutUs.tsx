import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              data-aos="fade-up"
            >
              💜 About Us
            </h1>
            <p 
              className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Connect & Build Trust
            </p>
          </div>
        </section>

        {/* Intro Paragraph */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div 
            className="bg-card p-8 rounded-2xl shadow-lg text-center"
            data-aos="fade-up"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              At <span className="font-semibold text-primary">Tastebuds Mumbai</span>, every dessert begins in a cozy home kitchen — where recipes are stirred with love, creativity, and a hint of nostalgia.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 flex items-center gap-3">
                <i className="fas fa-book-open"></i>
                Our Story
              </h2>
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <p className="text-lg text-foreground leading-relaxed">
                  What started as one girl's love for baking for family and friends soon grew into a city-wide favorite. Tastebuds Mumbai was born from the idea that desserts should taste like joy — comforting, fresh, and full of heart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Belief */}
        <section className="py-12 bg-card/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 flex items-center gap-3">
                <i className="fas fa-heart"></i>
                Our Belief
              </h2>
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <p className="text-lg text-foreground leading-relaxed">
                  We believe every celebration deserves something personal. That's why we don't mass-produce — we bake in small batches, use premium ingredients, and focus on customization that reflects you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Tastebuds Touch */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3"
              data-aos="fade-up"
            >
              <i className="fas fa-star"></i>
              The Tastebuds Touch
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div 
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🍰</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Freshly Baked to Order</h3>
                    <p className="text-muted-foreground">Every dessert is made fresh when you order it.</p>
                  </div>
                </div>
              </div>

              <div 
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🥚</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">100% Eggless Options</h3>
                    <p className="text-muted-foreground">Delicious desserts for everyone to enjoy.</p>
                  </div>
                </div>
              </div>

              <div 
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎨</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Designed to Match Your Theme</h3>
                    <p className="text-muted-foreground">Custom designs that reflect your style.</p>
                  </div>
                </div>
              </div>

              <div 
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🚚</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Delivered with Care Across Mumbai</h3>
                    <p className="text-muted-foreground">Safe and timely delivery to your doorstep.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ordering Info */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div 
              className="bg-card p-8 rounded-2xl shadow-lg text-center"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 flex items-center justify-center gap-3">
                <i className="fab fa-whatsapp"></i>
                Ordering Info
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                To place an order, simply WhatsApp us with your occasion and flavour. We'll help you customize your dessert and make it memorable.
              </p>
              <a 
                href="https://wa.me/918779391601" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i>
                Order on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* End Note */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div 
              className="max-w-3xl mx-auto"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl font-cursive text-primary mb-6">
                From our oven to your heart 💜
              </h2>
              <p className="text-xl text-foreground leading-relaxed">
                Tastebuds Mumbai is where homemade goodness meets creative craftsmanship.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
