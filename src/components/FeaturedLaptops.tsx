
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedLaptops = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Business Solutions",
      description: "Professional laptops designed for productivity and performance",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      link: "/business"
    },
    {
      id: 2,
      title: "Gaming Powerhouses",
      description: "High-performance laptops for immersive gaming experiences",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
      link: "/gaming"
    },
    {
      id: 3,
      title: "Student Essentials",
      description: "Affordable laptops perfect for learning and everyday tasks",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      link: "/student"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Laptops for Every Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of laptops designed for different purposes and users, from business professionals to gamers and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden pt-[56.25%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link to={item.link}>
                  <Button className="group bg-motech-600 hover:bg-motech-700">
                    Explore 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLaptops;
