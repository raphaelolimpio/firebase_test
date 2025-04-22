'use client';

import { Product } from '@/services/ferraco-palmas';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <Card className="w-64 flex-none transition-shadow duration-300 hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
        />
        <CardContent className="p-4 bg-black">
          <CardTitle className="text-lg font-semibold text-white">{product.name}</CardTitle>
          <CardDescription className="text-sm text-gray-400 line-clamp-2">
            {product.description}
          </CardDescription>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xl font-bold text-orange-500">R$ {product.price.toFixed(2)}</p>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between p-4 bg-black">
        <Button
          onClick={() => addToCart(product)}
          className="transition-colors duration-200 bg-orange-500 hover:bg-orange-700 text-black"
        >
          Adicionar
        </Button>
        <Link
          href={`/product/${product.id}`}
          className="text-sm text-orange-500 hover:underline transition-colors duration-200"
        >
          Ver Detalhes
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;