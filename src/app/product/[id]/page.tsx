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
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src={product.imageUrl} alt={product.name} className="w-64 h-64 object-cover mb-4" />
        <p className="text-gray-600">{product.description}</p>
        <p className="mt-2 font-bold text-gray-700">${product.price}</p>
        <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
