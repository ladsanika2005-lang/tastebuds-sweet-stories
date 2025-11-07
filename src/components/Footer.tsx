import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="tel:+918779391601"
            className="btn-outline inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <i className="fas fa-phone"></i>
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/918779391601"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/tastebuds.mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/tastebudsmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
        </div>
        
        <div className="text-center">
          <p className="font-cursive text-2xl mb-2">Made with love, one cake at a time.</p>
          <p className="text-sm opacity-80">© 2025 Tastebuds Mumbai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
