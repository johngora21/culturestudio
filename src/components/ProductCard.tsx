
import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ image, name, price, category, isNew = false }: ProductCardProps) => {
  return (
    <div className="group animate-hover">
      <div className="relative overflow-hidden rounded-lg mb-3">
        {isNew && (
          <div className="absolute top-2 left-2 bg-forest text-white text-xs font-medium px-2 py-1 rounded z-10">
            New Arrival
          </div>
        )}
        
        <div className="absolute top-2 right-2 z-10">
          <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-colors">
            <Heart className="h-4 w-4 text-charcoal" />
          </button>
        </div>
        
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent h-1/3 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <button className="bg-white text-charcoal hover:bg-cream transition-colors px-4 py-2 rounded flex items-center gap-2 text-sm font-medium">
            <ShoppingBag className="h-4 w-4" />
            Add to Bag
          </button>
        </div>
      </div>
      
      <div className="px-1">
        <h3 className="font-medium text-lg text-charcoal">{name}</h3>
        <p className="text-sm text-terra mb-1">{category}</p>
        <p className="font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
