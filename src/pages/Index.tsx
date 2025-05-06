
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturedLaptops from "@/components/FeaturedLaptops";
import LaptopGallery from "@/components/LaptopGallery";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <FeaturedLaptops />
        <LaptopGallery />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
