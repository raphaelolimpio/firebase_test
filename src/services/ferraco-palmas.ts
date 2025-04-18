/**
 * Represents a product from Ferraco Palmas.
 */
export interface Product {
  /**
   * The unique identifier for the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string;
  /**
   * The price of the product.
   */
  price: number;
  /**
   * The URL of the product image.
   */
  imageUrl: string;
}

/**
 * Asynchronously retrieves all products from Ferraco Palmas.
 *
 * @returns A promise that resolves to an array of Product objects.
 */
export async function getProducts(): Promise<Product[]> {
  // TODO: Implement this by calling the Ferraco Palmas API.

  return [
    {
      id: '1',
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 20.49,
      imageUrl: 'https://example.com/product2.jpg',
    },
  ];
}
