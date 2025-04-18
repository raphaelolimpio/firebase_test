import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import {ShoppingCart, User} from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ferraco Mobile App',
  description: 'An e-commerce app for Ferraco Palmas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-secondary p-4 text-secondary-foreground shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            {/* Centered Title */}
            <div className="flex-grow text-center">
              <Link href="/" className="text-lg font-bold">
                Ferraco Palmas
              </Link>
            </div>

            {/* Navigation Links on the Right */}
            <nav className="flex items-center space-x-4">
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
        <main className="container mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
