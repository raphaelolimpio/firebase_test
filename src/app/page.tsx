'use client';

import {Product} from '@/services/ferraco-palmas';
import Link from 'next/link';
import {
  Instagram,
  ShoppingBag,
  User,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {getProducts} from '@/services/ferraco-palmas';
import {useRef, useState, useEffect, useCallback} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const categories = ['Móveis', 'Ferro', 'Telhas', 'Outros'];

function PromotionItem({name, imageUrl}: { name: string; imageUrl: string }) {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-primary/50 flex-none transition-transform duration-300 hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    </div>
  );
}

function CategoryItem({category}: { category: string }) {
  return (
    <Button variant="outline" size="sm" className="category-button">{category}</Button>
  );
}

function ScrollButton({direction, onClick}: { direction: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-secondary/70 text-secondary-foreground hover:bg-secondary shadow transition-colors z-10 ${
        direction === 'left' ? 'left-2' : 'right-2'
      }`}
    >
      {direction === 'left' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}

function ProductCard({ product, addToCart }: { product: Product; addToCart: (product: Product) => void }) {
  return (
    <Card className="w-64 flex-none transition-shadow duration-300 hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
        />
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </CardDescription>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xl font-bold text-primary">R$ {product.price.toFixed(2)}</p>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between p-4">
        <Button onClick={() => addToCart(product)} className="transition-colors duration-200 hover:bg-primary/80">
          Adicionar
        </Button>
        <Link href={`/product/${product.id}`} className="text-sm text-primary hover:underline transition-colors duration-200">
          Ver Detalhes
        </Link>
      </CardFooter>
    </Card>
  );
}

async function ProductList() {
  const products = await getProducts();

  const productsContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast()

  const addToCart = (product: Product) => {
    toast({
      title: "Adicionado ao carrinho!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  const scrollProducts = (direction: 'left' | 'right') => {
    if (productsContainerRef.current) {
      const scrollAmount = productsContainerRef.current.offsetWidth * 0.8;
      productsContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="py-4 group relative">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Produtos em Destaque</h2>
      <ScrollButton direction="left" onClick={() => scrollProducts('left')} />
      <div
        ref={productsContainerRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory relative items-center hide-scrollbar"
      >
        <div className="flex">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <ScrollButton direction="right" onClick={() => scrollProducts('right')} />
    </div>
  );
}

export default function Home() {
  const promotionsContainerRef = useRef<HTMLDivElement>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const { toast } = useToast();

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

    const scrollPromotions = useCallback((direction: 'left' | 'right') => {
        if (promotionsContainerRef.current) {
            const scrollAmount = promotionsContainerRef.current.offsetWidth * 0.8;
            promotionsContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    }, []);

    const handleAddToCart = (product: Product) => {
        toast({
            title: "Adicionado ao carrinho!",
            description: `${product.name} foi adicionado ao seu carrinho.`,
        });
    };

  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      <main className="flex flex-col w-full flex-1 px-4 py-2 md:px-8">

        {/* Categories */}
        <div className="py-4">
          <div className="flex justify-start space-x-2 overflow-x-auto">
            {categories.map(category => (
              <CategoryItem key={category} category={category} />
            ))}
          </div>
        </div>

        {/* Promotions (Stories) */}
        <div className="py-4 group relative">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Promoções</h2>
          <ScrollButton direction="left" onClick={() => scrollPromotions('left')} />
          <div ref={promotionsContainerRef} className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory relative items-center hide-scrollbar">
            <div className="flex">
              {/* Replace placeholder images with actual promotion images */}
              <PromotionItem name="Promo 1" imageUrl="https://picsum.photos/200/300" />
              <PromotionItem name="Promo 2" imageUrl="https://picsum.photos/201/301" />
              <PromotionItem name="Promo 3" imageUrl="https://picsum.photos/202/302" />
              <PromotionItem name="Promo 4" imageUrl="https://picsum.photos/203/303" />
              <PromotionItem name="Promo 5" imageUrl="https://picsum.photos/204/304" />
              <PromotionItem name="Promo 6" imageUrl="https://picsum.photos/205/305" />
            </div>
          </div>
          <ScrollButton direction="right" onClick={() => scrollPromotions('right')} />
        </div>

        {/* Product List */}
        <div className="py-4 group relative">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Produtos em Destaque</h2>
          <ScrollButton direction="left" onClick={() => scrollPromotions('left')} />
          <div ref={promotionsContainerRef} className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory relative items-center hide-scrollbar">
            <div className="flex">
              {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
              ))}
            </div>
          </div>
          <ScrollButton direction="right" onClick={() => scrollPromotions('right')} />
        </div>
      </main>

      {/* Quick Access Icons */}
      <footer className="sticky bottom-0 bg-secondary/80 backdrop-blur-md p-4 border-t border-muted transition-colors duration-300">
        <div className="container mx-auto flex items-center justify-around">
          <Link
            href="/profile"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <User className="mb-1" size={20} />
            <span className="text-xs">Perfil</span>
          </Link>
          <Link
            href="/cart"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors relative"
          >
            <ShoppingBag className="mb-1" size={20} />
            <span className="text-xs">Carrinho</span>
          </Link>
          <Link
            href="/support"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageSquare className="mb-1" size={20} />
            <span className="text-xs">Suporte</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
