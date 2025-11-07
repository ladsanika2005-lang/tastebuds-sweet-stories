import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import menu1 from "@/assets/menu1.jpg";
import menu2 from "@/assets/menu2.jpg";

const OrderOnline = () => {
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
              🛒 Order Online
            </h1>
            <p 
              className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Choose your favorite treats and place your order through WhatsApp
            </p>
            <div 
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a 
                href="https://wa.me/918779391601" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i>
                Order via WhatsApp
              </a>
              <a 
                href="tel:+918779391601"
                className="btn-primary inline-flex items-center gap-2"
              >
                <i className="fas fa-phone"></i>
                Call to Order
              </a>
            </div>
          </div>
        </section>

        {/* Menu Images */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
              data-aos="fade-up"
            >
              Our Menu
            </h2>
            
            <div className="space-y-8">
              <div 
                className="bg-card rounded-2xl shadow-lg overflow-hidden"
                data-aos="fade-up"
              >
                <img 
                  src={menu1} 
                  alt="Tastebuds Mumbai Menu - Cupcakes, Cakes, Brownies & Blondies" 
                  className="w-full h-auto"
                />
              </div>
              
              <div 
                className="bg-card rounded-2xl shadow-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img 
                  src={menu2} 
                  alt="Tastebuds Mumbai Menu Page 2" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How to Order */}
        <section className="py-12 bg-card/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
              data-aos="fade-up"
            >
              How to Order
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div 
                className="bg-card p-6 rounded-2xl shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="text-5xl mb-4">1️⃣</div>
                <h3 className="text-xl font-semibold text-primary mb-3">Choose Your Item</h3>
                <p className="text-muted-foreground">
                  Browse our menu and select your favorite desserts
                </p>
              </div>

              <div 
                className="bg-card p-6 rounded-2xl shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="text-5xl mb-4">2️⃣</div>
                <h3 className="text-xl font-semibold text-primary mb-3">Contact Us</h3>
                <p className="text-muted-foreground">
                  Send us a message on WhatsApp at 8779391601
                </p>
              </div>

              <div 
                className="bg-card p-6 rounded-2xl shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-5xl mb-4">3️⃣</div>
                <h3 className="text-xl font-semibold text-primary mb-3">Enjoy!</h3>
                <p className="text-muted-foreground">
                  We'll prepare and deliver your order fresh
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Order Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div 
              className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl font-cursive text-primary mb-6">
                Ready to Order? 🎂
              </h2>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                For more images and designs, please visit our page on Facebook or Instagram @tastebuds.mumbai or WhatsApp on 8779391601.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://wa.me/918779391601" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp Us
                </a>
                <a 
                  href="https://www.facebook.com/tastebudsmumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <i className="fab fa-facebook"></i>
                  Facebook
                </a>
                <a 
                  href="https://instagram.com/tastebuds.mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <i className="fab fa-instagram"></i>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderOnline;
