
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Motech Pro X Series",
    description: "Ultra-thin design with exceptional performance",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80",
    tag: "New Release"
  },
  {
    id: 2,
    title: "Motech Gamer Elite",
    description: "Ultimate gaming experience with RTX graphics",
    price: "$1,599",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1920&q=80",
    tag: "Best Seller"
  },
  {
    id: 3,
    title: "Motech Ultrabook Air",
    description: "Lightweight powerhouse for professionals on the go",
    price: "$999",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1920&q=80",
    tag: "Limited Edition"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center container">
            <div className="max-w-lg p-4">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-motech-600 rounded-full">
                {slide.tag}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
              <p className="text-lg text-white/80 mb-6">{slide.description}</p>
              <p className="text-2xl font-bold text-white mb-6">{slide.price}</p>
              <div className="flex gap-4">
                <Button className="bg-motech-600 hover:bg-motech-700">Shop Now</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
