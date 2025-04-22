'use client';

import Link from 'next/link';
import {ShoppingCart, User, Sun, Moon} from 'lucide-react';
import {useState, useEffect} from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <>
      <header className="bg-secondary p-4 text-secondary-foreground shadow-md transition-colors duration-300">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-grow text-center">
            <Link href="/" className="text-lg font-bold transition-colors">
              Ferraco Palmas
            </Link>
          </div>

          <nav className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="flex items-center hover:text-primary transition-colors"
            >
              {isDarkMode ? <Sun className="mr-1" size={20} /> : <Moon className="mr-1" size={20} />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Link href="/profile" className="flex items-center hover:text-primary transition-colors">
              <User className="mr-1" size={20} />
              Profile
            </Link>
            <Link href="/cart" className="flex items-center hover:text-primary transition-colors">
              <ShoppingCart className="mr-1" size={20} />
              Cart
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8 transition-colors duration-300">
        {children}
      </main>
    </>
  );
}
