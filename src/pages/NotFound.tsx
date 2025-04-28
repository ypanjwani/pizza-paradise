import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/Ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-pizza-peach py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold font-poppins mb-4 text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-8 font-inter">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link to="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
