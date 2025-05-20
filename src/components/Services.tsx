
import React from 'react';
import { Shirt, Image, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    id: 1,
    title: "Custom Design",
    description: "Work directly with our designers to create your dream garment or accessory, perfectly tailored to your vision and preferences.",
    icon: Shirt,
    color: "bg-terra"
  },
  {
    id: 2,
    title: "Fashion Consultation",
    description: "Let our styling experts help you curate a wardrobe that reflects both your personal style and Tanzanian heritage.",
    icon: ShoppingBag,
    color: "bg-gold"
  },
  {
    id: 3,
    title: "Corporate Branding",
    description: "Create unique uniforms and promotional items that incorporate your brand identity with beautiful Tanzanian design elements.",
    icon: Image,
    color: "bg-forest"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-white">Our Services</h2>
          <p className="section-subtitle text-cream/80">
            Our team offers a range of specialized services to help you express your unique style through the rich textile traditions of Tanzania.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {serviceItems.map((service) => (
            <div 
              key={service.id}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className={cn("p-3 rounded-full w-fit mb-6", service.color)}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4">{service.title}</h3>
              <p className="text-cream/70 mb-6">{service.description}</p>
              
              <a href="#contact" className="text-gold hover:text-gold/80 transition-colors font-medium flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-terra/30 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Book a Custom Design Consultation</h3>
              <p className="text-cream/80">
                Ready to bring your fashion vision to life? Book a personal consultation with our design team.
              </p>
            </div>
            
            <a href="#contact" className="whitespace-nowrap bg-white text-charcoal hover:bg-cream transition-colors font-medium py-3 px-6 rounded-md">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
