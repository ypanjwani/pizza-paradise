import { Utensils } from 'lucide-react';
import { Button } from "@/components/Ui/button";

interface MenuCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const MenuCategories = ({ activeCategory, onCategoryChange }: MenuCategoriesProps) => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'veg', label: 'Vegetarian' },
    { id: 'non-veg', label: 'Non-Vegetarian' },
    { id: 'special', label: 'Specials' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          className="gap-2"
          onClick={() => onCategoryChange(category.id)}
        >
          <Utensils className="h-4 w-4" />
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default MenuCategories;
