
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export type LaptopProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  specs: {
    processor: string;
    memory: string;
    storage: string;
    display: string;
  };
};

const LaptopCard = ({ laptop }: { laptop: LaptopProps }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden pt-[56.25%]">
        <img
          src={laptop.image}
          alt={laptop.name}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {laptop.price.includes("Sale") && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
            SALE
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{laptop.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{laptop.description}</p>
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="flex flex-col">
            <span className="text-gray-500">Processor</span>
            <span className="font-medium">{laptop.specs.processor}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Memory</span>
            <span className="font-medium">{laptop.specs.memory}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Storage</span>
            <span className="font-medium">{laptop.specs.storage}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Display</span>
            <span className="font-medium">{laptop.specs.display}</span>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xl font-bold text-motech-600">{laptop.price}</p>
          <Button size="sm" className="bg-motech-600 hover:bg-motech-700">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LaptopCard;
