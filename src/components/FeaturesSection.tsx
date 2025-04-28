import { Clock, ThumbsUp, Truck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "Fast Delivery",
      description: "Fresh, hot pizza delivered to your door in 30 minutes or less."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-orange-500" />,
      title: "Quality Ingredients",
      description: "We use only the freshest, highest quality ingredients in our pizzas."
    },
    {
      icon: <Truck className="h-10 w-10 text-orange-500" />,
      title: "Free Delivery",
      description: "Free delivery on all orders over $20 within our delivery area."
    }
  ];

  return (
    <section className="py-16 bg-pizza-yellow">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12 text-gray-800">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center p-3 bg-pizza-peach rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
