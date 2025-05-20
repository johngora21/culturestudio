import React from 'react';
import { cn } from '@/lib/utils';

// Import testimonial images
import testimonial1 from '@/assets/images/IMG_9288.JPG';
import testimonial2 from '@/assets/images/IMG_9286.JPG';
import testimonial3 from '@/assets/images/IMG_9284.JPG';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mwangi",
    role: "Fashion Blogger",
    content: "Culture Creatives has transformed my wardrobe with their stunning pieces that celebrate my Tanzanian roots. The quality and attention to detail are unmatched!",
    image: "/src/assets/images/IMG_9288.JPG"
  },
  {
    id: 2,
    name: "David Kimaro",
    role: "Business Executive",
    content: "The custom suit I ordered for my wedding blended traditional patterns with modern tailoring. I've never received so many compliments on an outfit before.",
    image: "/src/assets/images/IMG_9286.JPG"
  },
  {
    id: 3,
    name: "Amina Hassan",
    role: "Event Planner",
    content: "Working with Culture Creatives for our corporate event uniforms was a delight. They captured our brand essence while incorporating beautiful Tanzanian elements.",
    image: "/src/assets/images/IMG_9284.JPG"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Here's what our clients have to say about their experiences with Culture Creatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gold/20",
                index === 1 ? "md:translate-y-4" : ""
              )}
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6092 14.8638H7.86553C7.86553 11.923 8.91593 9.32308 10.9775 8.69233C11.6092 8.40402 11.9236 7.94786 11.9236 7.37287C11.9236 6.79788 11.4919 6.34172 10.8602 6.34172C10.2285 6.34172 9.79673 6.79788 9.79673 7.37287H6.05304C6.05304 5.19745 8.19903 3.59998 10.8602 3.59998C13.5214 3.59998 15.6673 5.19745 15.6673 7.37287C15.6673 8.86421 14.8038 10.1243 13.5214 10.8146C12.3563 11.3896 11.6092 12.6611 11.6092 14.8638ZM6.05304 15.4388H9.79673V18.9213H6.05304V15.4388ZM21.9469 14.8638H18.2032C18.2032 11.923 19.2536 9.32308 21.3151 8.69233C21.9469 8.40402 22.2612 7.94786 22.2612 7.37287C22.2612 6.79788 21.8295 6.34172 21.1978 6.34172C20.5661 6.34172 20.1344 6.79788 20.1344 7.37287H16.3907C16.3907 5.19745 18.5367 3.59998 21.1978 3.59998C23.859 3.59998 26.0049 5.19745 26.0049 7.37287C26.0049 8.86421 25.1415 10.1243 23.859 10.8146C22.694 11.3896 21.9469 12.6611 21.9469 14.8638ZM16.3907 15.4388H20.1344V18.9213H16.3907V15.4388Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="text-charcoal/80 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-charcoal/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
