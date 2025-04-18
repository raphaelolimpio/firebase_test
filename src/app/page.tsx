'use server';

import {Product} from '@/services/ferraco-palmas';
import Link from 'next/link';
import {Instagram, ShoppingCart, User, MessageSquare} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {ScrollArea} from '@/components/ui/scroll-area';
import FeaturedProducts from '@/components/FeaturedProducts';
import {getProducts} from '@/services/ferraco-palmas'; // Importing products data

const categories = ['Móveis', 'Ferro', 'Telhas', 'Outros'];

function PromotionItem({name, imageUrl}: { name: string; imageUrl: string }) {
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

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex flex-col w-full flex-1 px-4 py-2 md:px-8">
        {/* Categories */}
        <div className="py-2">
          <ScrollArea className="pb-4">
            <div className="flex space-x-2">
              {categories.map(category => (
                <CategoryItem key={category} category={category} />
              ))}
            </div>
          </ScrollArea>
        </div>

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

        {/* Product List */}
        <div className="py-4">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Featured Products</h2>
          <FeaturedProducts products={products} />
        </div>
      </main>

      {/* Quick Access Icons */}
      <footer className="sticky bottom-0 bg-secondary/80 backdrop-blur-md p-4 border-t border-muted">
        <div className="container mx-auto flex items-center justify-around">
          <Link
            href="/profile"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <User className="mb-1" size={20} />
            <span className="text-xs">Profile</span>
          </Link>
          <Link
            href="/cart"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors relative"
          >
            <ShoppingCart className="mb-1" size={20} />
            <span className="text-xs">Cart</span>
          </Link>
          <Link
            href="/support"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageSquare className="mb-1" size={20} />
            <span className="text-xs">Support</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
