import Header from "@/components/Header";
import Footer from "@/components/Footer";
import menu1 from "@/assets/menu1.jpg";
import menu2 from "@/assets/menu2.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="w-full">
          <img 
            src={menu1} 
            alt="Tastebuds Mumbai Menu Page 1" 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="w-full">
          <img 
            src={menu2} 
            alt="Tastebuds Mumbai Menu Page 2" 
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
