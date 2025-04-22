
'use client';

import Link from 'next/link';
import { ShoppingBag, User, MessageSquare, List } from 'lucide-react';

function QuickAccessIcons() {
  return (
    <footer className="sticky bottom-0 bg-black backdrop-blur-md p-4 border-t border-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-around">
        <Link
          href="/profile"
          className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors"
        >
          <User className="text-primary" size={24} />
          <span className="text-sm mt-1">Perfil</span>
        </Link>
        <Link
          href="/cart"
          className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors relative"
        >
          <ShoppingBag className="text-primary" size={24} />
          <span className="text-sm mt-1">Carrinho</span>
        </Link>
        <Link
          href="/products"
          className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors"
        >
          <List className="text-primary" size={24} />
          <span className="text-sm mt-1">Produtos</span>
        </Link>
        <Link
          href="/support"
          className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors"
        >
          <MessageSquare size={24} />
          <span className="text-sm mt-1">Suporte</span>
        </Link>
      </div>
    </footer>
  );
}

export default QuickAccessIcons;