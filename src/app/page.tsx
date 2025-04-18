'use client';

import {Product} from '@/services/ferraco-palmas';
import Link from 'next/link';
import {Instagram, ShoppingCart, User, MessageSquare, ChevronLeft, ChevronRight} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {ScrollArea} from '@/components/ui/scroll-area';
import FeaturedProducts from '@/components/FeaturedProducts';
import {getProducts} from '@/services/ferraco-palmas'; // Importing products data
import {useRef} from 'react';

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

function ScrollButton({direction, onClick}: { direction: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-secondary/70 text-secondary-foreground hover:bg-secondary shadow transition-colors opacity-0 group-hover:opacity-100 z-10"
    >
      {direction === 'left' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}

export default function Home() {
  const products = [
    {
      id: '1',
      name: 'Ferro Quadrado 5/16" x 6m',
      description: 'Barra de ferro quadrada, ideal para estruturas e construções.',
      price: 29.99,
      imageUrl: 'https://www.arcelormittal.com/siteelements/medias/images/resized/produtos-solucoes/construcao/vergalhao-barra-transfer_400x400.jpg',
    },
    {
      id: '2',
      name: 'Tubo Metalon 50x30 Chapa 18',
      description: 'Tubo de aço carbono retangular, perfeito para diversas aplicações.',
      price: 45.50,
      imageUrl: 'https://img.elo7.com.br/product/original/2F5B3A4/tubo-metalon-50x30-chapa-18-6m-ferro.jpg',
    },
    {
      id: '3',
      name: 'Telha Trapézio Aço Galvalume',
      description: 'Telha de aço galvalume com formato trapezoidal, alta resistência e durabilidade.',
      price: 37.80,
      imageUrl: 'https://cdn.leroymerlin.com.br/products/telha_trapezoidal_galvalume_43x110cm_espessura_0,43mm_precon_1679539822_c7bd_600x600.jpg',
    },
    {
      id: '4',
      name: 'Chapa Aço Carbono #20 (0,90mm)',
      description: 'Chapa de aço carbono para cortes e soldas, diversas utilizações.',
      price: 52.00,
      imageUrl: 'https://static.wixstatic.com/media/e1cb6a_4081c7725b0a44908c05a366ff4169d4~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e1cb6a_4081c7725b0a44908c05a366ff4169d4~mv2.jpg',
    },
    {
      id: '5',
      name: 'Vergalhão 10mm CA-50',
      description: 'Vergalhão de aço para construção civil, alta resistência.',
      price: 68.20,
      imageUrl: 'https://www.ferroviariaonline.com.br/image/cache/catalog/barra-de-ferro-vergalhao-10mm-ca50-6m-500x500.jpg',
    },
    {
      id: '6',
      name: 'Arame Recozido BWG 18',
      description: 'Arame recozido para amarrações e fixações.',
      price: 19.90,
      imageUrl: 'https://m.media-amazon.com/images/I/61W9a9VbAoL._AC_UF1000,1000_QL80_.jpg',
    },
  ];
  const productsContainerRef = useRef<HTMLDivElement>(null);
  const promotionsContainerRef = useRef<HTMLDivElement>(null);

  const scrollProducts = (direction: 'left' | 'right') => {
    if (productsContainerRef.current) {
      const scrollAmount = productsContainerRef.current.offsetWidth * 0.8;
      productsContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const scrollPromotions = (direction: 'left' | 'right') => {
    if (promotionsContainerRef.current) {
      const scrollAmount = promotionsContainerRef.current.offsetWidth * 0.8;
      promotionsContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex flex-col w-full flex-1 px-4 py-2 md:px-8">
        {/* Categories */}
        <div className="py-4">
          <ScrollArea className="pb-4">
            <div className="flex space-x-2">
              {categories.map(category => (
                <CategoryItem key={category} category={category} />
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Promotions (Stories) */}
        <div className="py-4 group relative">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Promotions</h2>
          <div ref={promotionsContainerRef} className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory relative">
            <ScrollButton direction="left" onClick={() => scrollPromotions('left')} className="left-2" />
            <PromotionItem name="Promo 1" imageUrl="https://picsum.photos/200/200" />
            <PromotionItem name="Promo 2" imageUrl="https://picsum.photos/201/201" />
            <PromotionItem name="Promo 3" imageUrl="https://picsum.photos/202/202" />
            <PromotionItem name="Promo 4" imageUrl="https://picsum.photos/203/203" />
            <PromotionItem name="Promo 5" imageUrl="https://picsum.photos/204/204" />
            <PromotionItem name="Promo 6" imageUrl="https://picsum.photos/205/205" />
            <ScrollButton direction="right" onClick={() => scrollPromotions('right')} className="right-2" />
          </div>
        </div>

        {/* Product List */}
        <div className="py-4 group relative">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Featured Products</h2>
          <div ref={productsContainerRef} className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory relative">
            <ScrollButton direction="left" onClick={() => scrollProducts('left')} className="left-2" />
            {products.map(product => (
              <div
                key={product.id}
                className="bg-card rounded-lg shadow-md overflow-hidden w-64 flex-none transition-shadow hover:shadow-lg snap-start"
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
                  </div>
                </Link>
              </div>
            ))}
            <ScrollButton direction="right" onClick={() => scrollProducts('right')} className="right-2" />
          </div>
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
