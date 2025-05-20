
import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300", 
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
          Culture <span className="text-terra">Creatives</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-charcoal hover:text-terra transition-colors font-medium">Home</a>
          <a href="#about" className="text-charcoal hover:text-terra transition-colors font-medium">About</a>
          <a href="#collections" className="text-charcoal hover:text-terra transition-colors font-medium">Collections</a>
          <a href="#services" className="text-charcoal hover:text-terra transition-colors font-medium">Services</a>
          <a href="#contact" className="text-charcoal hover:text-terra transition-colors font-medium">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-muted/50 rounded-full transition-colors">
            <ShoppingBag className="h-5 w-5 text-charcoal" />
          </button>
          <button className="btn-primary">
            Book Consultation
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2">
          {isMenuOpen ? (
            <X className="h-6 w-6 text-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-charcoal" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 flex flex-col pt-20 px-4",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-6 text-center">
          <a href="#" onClick={toggleMenu} className="text-xl font-medium text-charcoal hover:text-terra transition-colors py-2">Home</a>
          <a href="#about" onClick={toggleMenu} className="text-xl font-medium text-charcoal hover:text-terra transition-colors py-2">About</a>
          <a href="#collections" onClick={toggleMenu} className="text-xl font-medium text-charcoal hover:text-terra transition-colors py-2">Collections</a>
          <a href="#services" onClick={toggleMenu} className="text-xl font-medium text-charcoal hover:text-terra transition-colors py-2">Services</a>
          <a href="#contact" onClick={toggleMenu} className="text-xl font-medium text-charcoal hover:text-terra transition-colors py-2">Contact</a>
        </div>
        <div className="mt-8 flex flex-col space-y-4">
          <button className="p-2 hover:bg-muted/50 rounded-full transition-colors self-center">
            <ShoppingBag className="h-5 w-5 text-charcoal" />
          </button>
          <button className="btn-primary">
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
