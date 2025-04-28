import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/Ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pizzas = [
  {
    id: 1,
    name: "Classic Margherita",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    description: "Fresh mozzarella, tomatoes, and basil on our signature crust"
  },
  {
    id: 2,
    name: "Pepperoni Passion",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    description: "Loaded with spicy pepperoni and extra cheese"
  },
  {
    id: 3,
    name: "Veggie Supreme",
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    description: "Bell peppers, onions, mushrooms, olives, and tomatoes"
  },
  {
    id: 4,
    name: "BBQ Chicken",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80",
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro"
  },
];

const PizzaSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === pizzas.length - 1 ? 0 : prevIndex + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pizzas.length - 1 : prevIndex - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-16 bg-pizza-peach">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12 text-gray-800">
          Our Specialty Pizzas
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-xl aspect-[16/9]">
            <div 
              className="relative w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="absolute top-0 left-0 w-full h-full flex">
                {pizzas.map((pizza) => (
                  <div key={pizza.id} className="min-w-full h-full flex-shrink-0">
                    <div className="relative w-full h-full">
                      <img 
                        src={pizza.image} 
                        alt={pizza.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 md:p-8 w-full">
                          <h3 className="text-2xl md:text-3xl font-bold text-white font-poppins mb-2">
                            {pizza.name}
                          </h3>
                          <p className="text-white/90 font-inter mb-4 max-w-md">
                            {pizza.description}
                          </p>
                          <Button className="bg-white text-gray-800 hover:bg-gray-100">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
          
          {/* Indicators */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
            {pizzas.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-orange-500 w-6" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaSlider;
