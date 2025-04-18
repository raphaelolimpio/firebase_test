'use client';

import {Product} from '@/services/ferraco-palmas';
import {getProducts} from '@/services/ferraco-palmas';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {ShoppingCart, User, MessageSquare} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {ScrollArea} from '@/components/ui/scroll-area';

const categories = ['Ferro', 'Móveis', 'Telhas', 'Outros'];

async function ProductList() {
  const products = await getProducts();
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
                  <button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/80 py-2 rounded transition-colors">
                    Add to Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function PromotionItem({name, imageUrl}: { name: string, imageUrl: string }) {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-primary/50 flex-none">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    </div>
  );
}

function CategoryItem({category}: { category: string }) {
  return (
    <Badge className="rounded-full px-3 py-1 text-sm font-medium">{category}</Badge>
  );
}

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // TODO: Fetch cart count from local storage or API
    setCartCount(3);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex flex-col w-full flex-1 px-4 py-2 md:px-8">
        {/* Promotions (Stories) */}
        <div className="py-4">
          <ScrollArea className="pb-4">
            <div className="flex space-x-4">
              <PromotionItem name="Promo 1" imageUrl="https://picsum.photos/200/200" />
              <PromotionItem name="Promo 2" imageUrl="https://picsum.photos/201/201" />
              <PromotionItem name="Promo 3" imageUrl="https://picsum.photos/202/202" />
              <PromotionItem name="Promo 4" imageUrl="https://picsum.photos/203/203" />
              <PromotionItem name="Promo 5" imageUrl="https://picsum.photos/204/204" />
              <PromotionItem name="Promo 6" imageUrl="https://picsum.photos/205/205" />
            </div>
          </ScrollArea>
        </div>

        {/* Categories */}
        <div className="py-2">
          <ScrollArea className="pb-4">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <CategoryItem key={category} category={category} />
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Product List */}
        <div className="py-4">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Featured Products</h2>
          <ProductList />
        </div>
      </main>

      {/* Quick Access Icons */}
      <footer className="sticky bottom-0 bg-secondary/80 backdrop-blur-md p-4 border-t border-muted">
        <div className="container mx-auto flex items-center justify-around">
          <Link href="/profile" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <User className="mb-1" size={20} />
            <span className="text-xs">Profile</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors relative">
            <ShoppingCart className="mb-1" size={20} />
            {cartCount > 0 && (
              <Badge className="absolute top-0 right-0 rounded-full h-5 w-5 text-xs">{cartCount}</Badge>
            )}
            <span className="text-xs">Cart</span>
          </Link>
          <Link href="/support" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <MessageSquare className="mb-1" size={20} />
            <span className="text-xs">Support</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
