
import {Product, getProducts} from '@/services/ferraco-palmas';

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

const ProductDetailsPage = async ({params: {id}}: ProductDetailsProps) => {
  const products = await getProducts();
  const product: Product | undefined = products.find((p: Product) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <img src={product.imageUrl} alt={product.name} className="w-64 h-64 object-cover rounded-lg mb-6" />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="mt-2 font-bold text-gray-800">${product.price}</p>
        <button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
