import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/Ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-pizza-yellow/30">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-8 text-center">
            Your Cart
          </h1>
          <div className="text-center text-gray-600">
            Your cart is empty. Go to the menu to add some delicious pizzas!
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-pizza-yellow/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-8 text-center">
          Your Cart
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {items.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex items-center justify-between py-4 border-b last:border-b-0">
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">Size: {item.selectedSize}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.id, item.selectedSize)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
          
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold">${getCartTotal().toFixed(2)}</span>
            </div>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
