import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-background/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-black dark:bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white dark:text-black font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-black dark:text-white">Cable & Net Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="tel:888-890-0043" className="flex items-center text-foreground hover:text-black dark:hover:text-white transition-all" title="Call (888) 890-0043">
              <Phone className="w-5 h-5" />
            </a>
            <Link to="/" className="text-foreground hover:text-black dark:hover:text-white transition-all font-medium" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-black dark:hover:text-white transition-all font-medium" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-black dark:hover:text-white transition-all font-medium" onClick={handleLinkClick}>
              Services
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-black dark:hover:text-white transition-all font-medium" onClick={handleLinkClick}>
              Pricing
            </Link>
            <Link to="/contact" className="text-foreground hover:text-black dark:hover:text-white transition-all font-medium" onClick={handleLinkClick}>
              Contact
            </Link>
            <Button asChild className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 font-semibold shadow-lg rounded-full">
              <a href="tel:888-890-0043">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="tel:888-890-0043" className="flex items-center justify-center py-2 text-foreground hover:text-black dark:hover:text-white transition-all border-b border-border" title="Call (888) 890-0043">
              <Phone className="w-5 h-5" />
            </a>
            <Link
              to="/"
              className="block text-foreground hover:text-black dark:hover:text-white transition-all font-medium"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-black dark:hover:text-white transition-all font-medium"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-foreground hover:text-black dark:hover:text-white transition-all font-medium"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="block text-foreground hover:text-black dark:hover:text-white transition-all font-medium"
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover:text-black dark:hover:text-white transition-all font-medium"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 font-semibold shadow-lg rounded-full">
              <a href="tel:888-890-0043">
                Get Started
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
