import { useState } from 'react';
import { Button } from "@/components/Ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold font-poppins text-gray-800">
            <span className="text-orange-500">Pizza</span> Paradise
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium font-inter text-gray-700 hover:text-orange-500 transition-colors">
            Home
          </Link>
          <Link to="/menu" className="font-medium font-inter text-gray-700 hover:text-orange-500 transition-colors">
            Menu
          </Link>
          <Link to="/contact" className="font-medium font-inter text-gray-700 hover:text-orange-500 transition-colors">
            Contact Us
          </Link>
          <Link to="/cart">
            <Button variant="ghost" className="ml-2 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {getCartCount()}
              </span>
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium font-inter text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="font-medium font-inter text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className="font-medium font-inter text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link to="/cart" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {getCartCount()}
                </span>
              </Button>
              <span className="ml-2 font-medium font-inter text-gray-700">Cart</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
