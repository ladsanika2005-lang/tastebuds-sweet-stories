import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Array of 60 placeholder images - replace empty strings with your image paths
  const galleryImages = [
    "", // Image 1 - paste your image path here
    "", // Image 2 - paste your image path here
    "", // Image 3 - paste your image path here
    "", // Image 4 - paste your image path here
    "", // Image 5 - paste your image path here
    "", // Image 6 - paste your image path here
    "", // Image 7 - paste your image path here
    "", // Image 8 - paste your image path here
    "", // Image 9 - paste your image path here
    "", // Image 10 - paste your image path here
    "", // Image 11 - paste your image path here
    "", // Image 12 - paste your image path here
    "", // Image 13 - paste your image path here
    "", // Image 14 - paste your image path here
    "", // Image 15 - paste your image path here
    "", // Image 16 - paste your image path here
    "", // Image 17 - paste your image path here
    "", // Image 18 - paste your image path here
    "", // Image 19 - paste your image path here
    "", // Image 20 - paste your image path here
    "", // Image 21 - paste your image path here
    "", // Image 22 - paste your image path here
    "", // Image 23 - paste your image path here
    "", // Image 24 - paste your image path here
    "", // Image 25 - paste your image path here
    "", // Image 26 - paste your image path here
    "", // Image 27 - paste your image path here
    "", // Image 28 - paste your image path here
    "", // Image 29 - paste your image path here
    "", // Image 30 - paste your image path here
    "", // Image 31 - paste your image path here
    "", // Image 32 - paste your image path here
    "", // Image 33 - paste your image path here
    "", // Image 34 - paste your image path here
    "", // Image 35 - paste your image path here
    "", // Image 36 - paste your image path here
    "", // Image 37 - paste your image path here
    "", // Image 38 - paste your image path here
    "", // Image 39 - paste your image path here
    "", // Image 40 - paste your image path here
    "", // Image 41 - paste your image path here
    "", // Image 42 - paste your image path here
    "", // Image 43 - paste your image path here
    "", // Image 44 - paste your image path here
    "", // Image 45 - paste your image path here
    "", // Image 46 - paste your image path here
    "", // Image 47 - paste your image path here
    "", // Image 48 - paste your image path here
    "", // Image 49 - paste your image path here
    "", // Image 50 - paste your image path here
    "", // Image 51 - paste your image path here
    "", // Image 52 - paste your image path here
    "", // Image 53 - paste your image path here
    "", // Image 54 - paste your image path here
    "", // Image 55 - paste your image path here
    "", // Image 56 - paste your image path here
    "", // Image 57 - paste your image path here
    "", // Image 58 - paste your image path here
    "", // Image 59 - paste your image path here
    "", // Image 60 - paste your image path here
  ];

  return (
    <div className="min-h-screen bg-pastel-pink">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Heading Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">
            Our Gallery
          </h1>
          <p className="font-body text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our collection of beautiful cakes, cupcakes, and desserts crafted with love.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imagePath, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 20}
              className="aspect-square bg-white/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {imagePath ? (
                <img
                  src={imagePath}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <i className="fas fa-image text-4xl mb-2"></i>
                    <p className="text-sm">Image {index + 1}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
