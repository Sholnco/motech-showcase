
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-motech-600">Motech</span>
            <span className="text-sm font-light">Limited</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-motech-600 transition-colors">
              Home
            </Link>
            <Link to="/laptops" className="text-sm font-medium hover:text-motech-600 transition-colors">
              Laptops
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-motech-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-motech-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-motech-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button className="hidden md:flex bg-motech-600 hover:bg-motech-700">Shop Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
