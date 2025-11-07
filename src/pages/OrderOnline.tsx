import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AOS from "aos";
import { gsap } from "gsap";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import menu1 from "@/assets/menu1.jpg";
import menu2 from "@/assets/menu2.jpg";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  contact: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  item: z.string().min(1, "Please select an item"),
  quantity: z.string().min(1, "Please specify quantity"),
  specialInstructions: z.string().optional(),
  deliveryDate: z.date({ required_error: "Please select a delivery date" }),
  address: z.string().min(10, "Please provide a complete delivery address"),
});

type FormData = z.infer<typeof formSchema>;

const OrderOnline = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const item = watch("item");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // GSAP button hover animation
    const buttons = document.querySelectorAll(".custom-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Order submitted:", data);
    
    // Create WhatsApp message
    const message = `🎂 *New Order from Tastebuds Mumbai Website*\n\n` +
      `👤 Name: ${data.name}\n` +
      `📞 Contact: ${data.contact}\n` +
      `📧 Email: ${data.email}\n` +
      `🍰 Item: ${data.item}\n` +
      `📦 Quantity: ${data.quantity}\n` +
      `${data.specialInstructions ? `📝 Special Instructions: ${data.specialInstructions}\n` : ''}` +
      `📅 Delivery Date: ${format(data.deliveryDate, 'PPP')}\n` +
      `📍 Address: ${data.address}`;
    
    const whatsappUrl = `https://wa.me/918779391601?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
      setSelectedDate(undefined);
    }, 5000);
  };

  const handleReset = () => {
    reset();
    setSelectedDate(undefined);
  };

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

        {/* Order Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                📝 Place Your Order
              </h2>
              <p className="text-lg text-foreground/80">
                Fill in your details and we'll confirm your order via WhatsApp
              </p>
            </div>

            <div
              className="bg-card rounded-3xl p-8 md:p-12 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {submitted ? (
                <div className="text-center py-12" data-aos="zoom-in">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Order Received!
                  </h3>
                  <p className="text-lg text-foreground/80 mb-6">
                    Thank you for your order! We're opening WhatsApp to confirm the details with you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                      <i className="fas fa-user text-primary"></i>
                      Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Contact Number */}
                  <div>
                    <Label htmlFor="contact" className="flex items-center gap-2 mb-2">
                      <i className="fas fa-phone text-primary"></i>
                      Contact Number *
                    </Label>
                    <Input
                      id="contact"
                      placeholder="10-digit mobile number"
                      {...register("contact")}
                      className={errors.contact ? "border-destructive" : ""}
                    />
                    {errors.contact && (
                      <p className="text-destructive text-sm mt-1">{errors.contact.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <i className="fas fa-envelope text-primary"></i>
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Item Selection */}
                  <div>
                    <Label htmlFor="item" className="flex items-center gap-2 mb-2">
                      <i className="fas fa-cake-candles text-primary"></i>
                      Select Item *
                    </Label>
                    <Select
                      value={item}
                      onValueChange={(value) => setValue("item", value)}
                    >
                      <SelectTrigger className={errors.item ? "border-destructive" : ""}>
                        <SelectValue placeholder="Choose from our menu" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chocolate-cupcake">Chocolate Cupcake</SelectItem>
                        <SelectItem value="red-velvet-cupcake">Red Velvet Cupcake</SelectItem>
                        <SelectItem value="vanilla-cupcake">Vanilla Cupcake</SelectItem>
                        <SelectItem value="chocolate-cake">Chocolate Cake</SelectItem>
                        <SelectItem value="red-velvet-cake">Red Velvet Cake</SelectItem>
                        <SelectItem value="butterscotch-cake">Butterscotch Cake</SelectItem>
                        <SelectItem value="black-forest-cake">Black Forest Cake</SelectItem>
                        <SelectItem value="jar-dessert">Jar Dessert</SelectItem>
                        <SelectItem value="brownie">Brownie</SelectItem>
                        <SelectItem value="blondie">Blondie</SelectItem>
                        <SelectItem value="custom">Custom Order (see Customization page)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.item && (
                      <p className="text-destructive text-sm mt-1">{errors.item.message}</p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <Label htmlFor="quantity" className="flex items-center gap-2 mb-2">
                      <i className="fas fa-hashtag text-primary"></i>
                      Quantity *
                    </Label>
                    <Input
                      id="quantity"
                      placeholder="e.g., 1kg, 6 pieces, 12 cupcakes"
                      {...register("quantity")}
                      className={errors.quantity ? "border-destructive" : ""}
                    />
                    {errors.quantity && (
                      <p className="text-destructive text-sm mt-1">{errors.quantity.message}</p>
                    )}
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <Label htmlFor="specialInstructions" className="flex items-center gap-2 mb-2">
                      <i className="fas fa-comment text-primary"></i>
                      Special Instructions (Optional)
                    </Label>
                    <Textarea
                      id="specialInstructions"
                      placeholder="Any special requests or customizations..."
                      rows={3}
                      {...register("specialInstructions")}
                    />
                  </div>

                  {/* Delivery Date */}
                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <i className="fas fa-calendar text-primary"></i>
                      Delivery Date *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground",
                            errors.deliveryDate && "border-destructive"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            if (date) setValue("deliveryDate", date);
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.deliveryDate && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.deliveryDate.message}
                      </p>
                    )}
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                      Delivery Address *
                    </Label>
                    <Textarea
                      id="address"
                      placeholder="Complete address with landmark"
                      rows={3}
                      {...register("address")}
                      className={errors.address ? "border-destructive" : ""}
                    />
                    {errors.address && (
                      <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      className="custom-btn btn-primary flex-1"
                    >
                      <i className="fab fa-whatsapp mr-2"></i>
                      Send Order via WhatsApp
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleReset}
                      className="custom-btn flex-1"
                    >
                      <i className="fas fa-redo mr-2"></i>
                      Reset Form
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-12 text-center" data-aos="fade-up">
              <p className="text-muted-foreground mb-4">
                Prefer to order directly?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://wa.me/918779391601" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp
                </a>
                <a 
                  href="tel:+918779391601"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <i className="fas fa-phone"></i>
                  Call Us
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
