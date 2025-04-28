import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Ui/select";
import { Button } from "@/components/Ui/button";
import { Pizza } from "@/types/menu";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const prices = {
    small: pizza.price - 2,
    medium: pizza.price,
    large: pizza.price + 4
  };

  const handleAddToCart = () => {
    addToCart(pizza, selectedSize);
    toast({
      title: "Pizza added to cart!",
      description: `Added ${pizza.name} (${selectedSize}) to your cart`,
      duration: 2000,
    });
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg bg-white hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="p-0">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2 font-poppins">{pizza.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {pizza.description}
        </CardDescription>
      </CardContent>
      
      <div className="absolute inset-x-0 bottom-0 bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-4 mb-3">
          <Select value={selectedSize} onValueChange={(value: 'small' | 'medium' | 'large') => setSelectedSize(value)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
          <span className="font-semibold text-lg">
            ${prices[selectedSize].toFixed(2)}
          </span>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default PizzaCard;
