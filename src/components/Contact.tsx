
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Get In Touch</h2>
            <div className="w-20 h-1 bg-terra mb-6"></div>
            <p className="text-charcoal/80 mb-8">
              We'd love to hear from you. Visit our boutique in Dar es Salaam, call us, or fill out the contact form to schedule a consultation or learn more about our services.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-cream p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-terra" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Our Location</h3>
                  <p className="text-charcoal/70">Kinondoni, Dar es Salaam, Tanzania</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cream p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-terra" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone Number</h3>
                  <p className="text-charcoal/70">+255 744 618 772</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cream p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-terra" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Address</h3>
                  <p className="text-charcoal/70">info@culturecreatives.co.tz</p>
                </div>
              </div>
            </div>
            
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-3">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-charcoal/70">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-charcoal/70">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-charcoal/70">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-cream p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal/80 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terra/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terra/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal/80 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terra/50"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terra/50"
                  placeholder="Write your message here..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
