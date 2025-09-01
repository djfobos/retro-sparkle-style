import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import ProductSlider from "@/components/ProductSlider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryShowcase />
      <ProductSlider />
      <Footer />
    </div>
  );
};

export default Index;
