import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/images/IMG_9307.JPG"
                alt="Tanzanian Inspiration" 
                className="rounded-lg shadow-xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-terra rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg font-semibold">Est. 2018</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-title">Our Story &amp; Heritage</h2>
            <div className="w-20 h-1 bg-terra mb-6"></div>
            
            <p className="text-charcoal/80 mb-6">
              Founded in the vibrant city of Dar es Salaam, Culture Creatives began with a simple mission: to celebrate Tanzania's rich cultural tapestry through contemporary fashion. Our designs are more than clothes—they're wearable art that tells the stories of our heritage.
            </p>
            
            <p className="text-charcoal/80 mb-8">
              Each piece we create is inspired by traditional Tanzanian textiles, patterns, and crafts, reimagined for the modern fashion landscape. We work closely with local artisans to preserve ancient techniques while innovating for today's discerning clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif font-semibold text-xl mb-2 text-terra">Artisanal</h3>
                <p className="text-charcoal/70">Handcrafted with care by skilled local artisans</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif font-semibold text-xl mb-2 text-terra">Authentic</h3>
                <p className="text-charcoal/70">True to our Tanzanian roots and cultural heritage</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif font-semibold text-xl mb-2 text-terra">Innovative</h3>
                <p className="text-charcoal/70">Blending tradition with contemporary design</p>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary inline-flex">
              Our Vision
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
