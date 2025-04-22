
'use client';

import { Product } from '@/services/ferraco-palmas';
import ProductCard  from './ProductCard';
import ScrollButton  from './ScrollButton';
import React from 'react';

interface ProductListSectionProps {
  products: Product[];
  addToCart: (product: Product) => void;
  productsContainerRef: React.RefObject<HTMLDivElement>;
  scrollProducts: (direction: 'left' | 'right') => void;
}

export function ProductListSection({ products, addToCart, productsContainerRef, scrollProducts }: ProductListSectionProps) {
  return (
    <div className="py-4 group relative">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Produtos em Destaque</h2>
      <ScrollButton direction="left" onClick={() => scrollProducts('left')} />
      <div
        ref={productsContainerRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory relative items-center hide-scrollbar"
      >
        <div className="flex">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <ScrollButton direction="right" onClick={() => scrollProducts('right')} />
    </div>
  );
}