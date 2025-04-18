import {Product} from '@/services/ferraco-palmas';
import {getProducts} from '@/services/ferraco-palmas';
import Link from 'next/link';

async function ProductList() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Link href={`/product/${product.id}`}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-2 font-bold text-gray-700">${product.price}</p>
              <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2 bg-background">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-2xl font-bold">Ferraco Palmas Products</h1>
        <ProductList />
      </main>
    </div>
  );
}
