import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PizzaSlider from "@/components/PizzaSlider";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PizzaSlider />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
