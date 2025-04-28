import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PizzaCard from "@/components/PizzaCard";
import MenuCategories from "@/components/MenuCategories";
import { Pizza } from "@/types/menu";

const MENU_ITEMS: Pizza[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Fresh tomatoes, fresh mozzarella, fresh basil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500",
    category: "veg"
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Fresh pepperoni, mozzarella, tomato sauce",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
    category: "non-veg"
  },
  {
    id: 3,
    name: "Supreme",
    description: "Pepperoni, sausage, bell peppers, onions, olives",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500",
    category: "special"
  },
  // Add more pizzas as needed
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPizzas = MENU_ITEMS.filter(pizza => 
    activeCategory === 'all' || pizza.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-pizza-yellow/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-8 text-center">
          Our Menu
        </h1>
        
        <MenuCategories
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
