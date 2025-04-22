
'use client';

import Link from 'next/link';
import { ShoppingBag, User, MessageSquare, List } from 'lucide-react';

function QuickAccessIcons() {
  return (
    <footer className="sticky bottom-0 bg-black backdrop-blur-md p-4 border-t border-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-around">
        <Link
          href="/profile"
          className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
        >
          <User className="mb-1 text-orange-500" size={20} />
          <span className="text-xs">Perfil</span>
        </Link>
        <Link
          href="/cart"
          className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors relative"
        >
          <ShoppingBag className="mb-1 text-orange-500" size={20} />
          <span className="text-xs">Carrinho</span>
        </Link>
        <Link
          href="/products"
          className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
        >
          <List className="mb-1 text-orange-500" size={20} />
          <span className="text-xs">Produtos</span>
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
  );
}

export default QuickAccessIcons;