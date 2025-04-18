'use client';

import {Product} from '@/services/ferraco-palmas';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {products as productList} from '@/data/products'; // Importing products data
import {Badge} from '@/components/ui/badge';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({products}: FeaturedProductsProps) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // TODO: Fetch cart count from local storage or API
    setCartCount(3);
  }, []);

  const groupedProducts = products.reduce((acc: any, product: Product, index: number) => {
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(product);
    return acc;
  }, []);

  return (
    <div>
      {groupedProducts.map((group: Product[], index: number) => (
        <div key={index} className="flex space-x-4 overflow-x-auto py-4">
          {group.map((product: Product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg shadow-md overflow-hidden w-64 flex-none transition-shadow hover:shadow-lg"
            >
              <Link href={`/product/${product.id}`}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover product-image"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  <p className="mt-2 font-bold text-primary">${product.price}</p>
                  <div className="mt-4 w-full flex justify-between items-center">
                    <button className="bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded transition-colors">
                      Add to Cart
                    </button>
                    {/* Cart Count Badge */}
                    {cartCount > 0 && (
                      <Badge className="rounded-full h-5 w-5 text-xs">
                        {cartCount}
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
