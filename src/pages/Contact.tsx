import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          {/* Coming soon! Check back for our contact information. */}
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
