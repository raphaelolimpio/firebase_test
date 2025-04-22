'use client';
const CartPage = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <p className="text-gray-700">No items in cart.</p>
        {/* Add cart items and functionality here */}
      </div>
    </div>
  );
};

export default CartPage;
