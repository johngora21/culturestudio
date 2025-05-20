
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Culture <span className="text-terra">Creatives</span>
            </h2>
            <p className="text-white/70 mb-6">
              Where Tanzanian heritage meets modern fashion. Elegance inspired by our cultural roots.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#collections" className="text-white/70 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Fashion Consultation</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Corporate Branding</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Wedding Attire</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Alterations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates on new collections and exclusive offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 px-4 py-2 rounded-l-md focus:outline-none focus:bg-white/20 flex-grow"
              />
              <button type="submit" className="bg-terra hover:bg-terra/90 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Culture Creatives. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
