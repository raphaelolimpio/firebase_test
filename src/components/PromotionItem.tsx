import React from 'react';

interface PromotionItemProps {
  name: string;
  imageUrl: string;
}

const PromotionItem: React.FC<PromotionItemProps> = ({ name, imageUrl }) => {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-primary/50 flex-none transition-transform duration-300 hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    </div>
  );
};

export default PromotionItem;