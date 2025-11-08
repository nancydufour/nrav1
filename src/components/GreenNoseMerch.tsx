// src/components/MerchCard.tsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface MerchItemProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

const MerchCard: React.FC<MerchItemProps> = ({ image, name, price, description }) => {
  return (
    <div className="group bg-cream rounded-2xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl text-deep-purple mb-2">{name}</h3>
        <p className="font-lato text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-montserrat font-bold text-lg text-earth-green">{price}</span>
          <button className="bg-earth-green text-white px-4 py-2 rounded-full font-montserrat font-semibold text-sm hover:bg-opacity-80 transition-all transform hover:scale-105">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;
