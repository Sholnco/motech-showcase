
import { useState } from "react";
import LaptopCard, { LaptopProps } from "./LaptopCard";
import { Button } from "./ui/button";

// Sample laptop data
const laptops: LaptopProps[] = [
  {
    id: 1,
    name: "Motech ProBook X1",
    description: "Perfect for professionals with a sleek design and powerful performance",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    specs: {
      processor: "Intel i7-12700H",
      memory: "16GB DDR5",
      storage: "512GB SSD",
      display: "15.6\" 4K OLED"
    }
  },
  {
    id: 2,
    name: "Motech GamerX Elite",
    description: "Dominate the competition with next-gen graphics and ultra-fast performance",
    price: "$1,799",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    specs: {
      processor: "AMD Ryzen 9",
      memory: "32GB DDR5",
      storage: "1TB NVMe SSD",
      display: "17.3\" 240Hz"
    }
  },
  {
    id: 3,
    name: "Motech UltraSlim S3",
    description: "Ultra-portable laptop that doesn't compromise on performance",
    price: "$999",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    specs: {
      processor: "Intel i5-1240P",
      memory: "8GB DDR4",
      storage: "256GB SSD",
      display: "14\" FHD IPS"
    }
  },
  {
    id: 4,
    name: "Motech WorkStation Pro",
    description: "Designed for creators and professionals who need maximum power",
    price: "$2,199",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=800&q=80",
    specs: {
      processor: "Intel i9-12900K",
      memory: "64GB DDR5",
      storage: "2TB NVMe SSD",
      display: "16\" 4K Touch"
    }
  },
  {
    id: 5,
    name: "Motech EduBook",
    description: "Affordable laptop perfect for students and everyday tasks",
    price: "$699 $599 Sale",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    specs: {
      processor: "Intel i3-1215U",
      memory: "8GB DDR4",
      storage: "256GB SSD",
      display: "15.6\" FHD"
    }
  },
  {
    id: 6,
    name: "Motech Business Elite",
    description: "Professional-grade performance in a premium business design",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    specs: {
      processor: "Intel i7-1280P",
      memory: "16GB DDR5",
      storage: "1TB SSD",
      display: "14\" QHD+"
    }
  },
  {
    id: 7,
    name: "Motech Creator Book",
    description: "Designed for creative professionals with color-accurate display",
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    specs: {
      processor: "AMD Ryzen 7",
      memory: "32GB DDR5",
      storage: "1TB NVMe SSD",
      display: "15.6\" 4K 100% AdobeRGB"
    }
  },
  {
    id: 8,
    name: "Motech Everyday Plus",
    description: "Reliable performance for everyday computing needs",
    price: "$849 $749 Sale",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    specs: {
      processor: "Intel i5-1235U",
      memory: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6\" FHD IPS"
    }
  }
];

const categories = [
  "All Laptops",
  "Business",
  "Gaming",
  "Ultrabook",
  "Creator",
  "Student"
];

const LaptopGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Laptops");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredLaptops = laptops.filter(laptop => {
    if (activeCategory === "All Laptops") return true;
    const categoryMap: { [key: string]: (laptop: LaptopProps) => boolean } = {
      "Business": (l) => l.name.includes("Business") || l.name.includes("ProBook") || l.name.includes("WorkStation"),
      "Gaming": (l) => l.name.includes("Gamer") || l.name.includes("Elite"),
      "Ultrabook": (l) => l.name.includes("UltraSlim") || l.name.includes("Slim"),
      "Creator": (l) => l.name.includes("Creator") || l.name.includes("Pro"),
      "Student": (l) => l.name.includes("Edu") || l.price.includes("699"),
    };
    
    return categoryMap[activeCategory] ? categoryMap[activeCategory](laptop) : false;
  });

  const visibleLaptops = filteredLaptops.slice(0, visibleCount);
  const hasMore = visibleLaptops.length < filteredLaptops.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Collection</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-motech-600 hover:bg-motech-700" : ""}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(4);
              }}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleLaptops.map(laptop => (
            <LaptopCard key={laptop.id} laptop={laptop} />
          ))}
        </div>
        
        {hasMore && (
          <div className="flex justify-center mt-8">
            <Button onClick={loadMore} className="bg-motech-600 hover:bg-motech-700">
              Load More
            </Button>
          </div>
        )}

        {visibleLaptops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No laptops found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LaptopGallery;
