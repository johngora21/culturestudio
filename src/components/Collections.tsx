import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const categories = ["All", "Dresses", "Accessories", "Menswear", "Footwear"];

const products = [
  {
    id: 1,
    name: "Kitenge Maxi Dress",
    price: "TZS 185,000",
    category: "Dresses",
    image: "/images/IMG_9303.JPG",
    isNew: true
  },
  {
    id: 2,
    name: "Handcrafted Beaded Necklace",
    price: "TZS 75,000",
    category: "Accessories",
    image: "/images/IMG_9300.JPG",
  },
  {
    id: 3,
    name: "Modern Kanga Suit",
    price: "TZS 220,000",
    category: "Menswear",
    image: "/images/IMG_9299.JPG",
    isNew: true
  },
  {
    id: 4,
    name: "Embroidered Leather Sandals",
    price: "TZS 95,000",
    category: "Footwear",
    image: "/images/IMG_9298.JPG",
  },
  {
    id: 5,
    name: "Tribal Print Blazer",
    price: "TZS 165,000",
    category: "Menswear",
    image: "/images/IMG_9297.JPG",
  },
  {
    id: 6,
    name: "Maasai Inspired Clutch",
    price: "TZS 65,000",
    category: "Accessories",
    image: "/images/IMG_9289.JPG",
    isNew: true
  },
];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <section id="collections" className="py-16 md:py-24 pattern-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Collections</h2>
          <p className="section-subtitle">
            Discover our latest creations that blend traditional Tanzanian aesthetics with contemporary designs for the modern fashion enthusiast.
          </p>
        </div>
        
        <div className="flex overflow-x-auto pb-4 mb-8 justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-colors",
                activeCategory === category
                  ? "bg-terra text-white"
                  : "bg-white hover:bg-terra/10 text-charcoal"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
              isNew={product.isNew}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-flex items-center gap-2">
            View All Collections <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collections;
