import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-black dark:bg-white flex items-center justify-center shadow-lg">
                <span className="text-white dark:text-black font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-black dark:text-white">Cable & Net Services</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Lightning-fast internet for modern living. Connect to what matters most.
            </p>
            <a href="tel:855-661-0984" className="flex items-center space-x-2 text-foreground hover:text-black dark:hover:text-white transition-all">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(855) 661-0984</span>
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-muted-foreground hover:text-black dark:hover:text-white transition-all text-sm font-medium">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Cable & Net Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
