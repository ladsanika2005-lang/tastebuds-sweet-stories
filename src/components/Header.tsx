import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Tastebuds Mumbai" className="w-12 h-12 rounded-full" />
          <span className="font-bold text-xl hidden sm:inline">Tastebuds Mumbai</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a href="/" className="hover:text-secondary transition-colors">Home</a>
          <a href="/menu" className="hover:text-secondary transition-colors">Menu</a>
          <a href="/customization" className="hover:text-secondary transition-colors">Customization</a>
          <a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a>
          <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
          <a href="#order" className="hover:text-secondary transition-colors">Order Online</a>
        </nav>

        <button className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
