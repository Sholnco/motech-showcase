
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Motech Limited</h3>
            <p className="text-gray-400 mb-4">
              Providing premium laptops for professionals, gamers, creators, and students since 2023.
            </p>
            <p className="text-gray-400">© 2023 Motech Limited. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/laptops" className="text-gray-400 hover:text-white transition-colors">
                  All Laptops
                </Link>
              </li>
              <li>
                <Link to="/gaming" className="text-gray-400 hover:text-white transition-colors">
                  Gaming Laptops
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-400 hover:text-white transition-colors">
                  Business Laptops
                </Link>
              </li>
              <li>
                <Link to="/student" className="text-gray-400 hover:text-white transition-colors">
                  Student Laptops
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Warranty
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Designed and built with ❤️ by Motech Team
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
