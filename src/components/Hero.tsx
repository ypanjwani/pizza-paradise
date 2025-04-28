import { Button } from "@/components/Ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Delicious pizza background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 text-gray-800 leading-tight">
            Fresh Hot Pizzas Delivered Fast!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
            Handcrafted with love and the freshest ingredients. From our oven to your door in minutes.
          </p>
          <Link to="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
