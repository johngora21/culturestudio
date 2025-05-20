import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-charcoal/40 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/images/IMG_9271.JPG')` }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-0">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
            Where Tanzanian Heritage <br />
            <span className="text-gold">Meets Modern Fashion</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            Culture Creatives designs and customizes exceptional fashion and accessories that 
            celebrate the rich cultural heritage of Tanzania with a contemporary twist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <a href="#collections" className="btn-primary flex items-center justify-center gap-2">
              Explore Collections <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary flex items-center justify-center">
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-16 right-0 w-64 h-64 bg-terra/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
