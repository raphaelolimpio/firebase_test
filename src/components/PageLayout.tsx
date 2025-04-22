
'use client';

import React from 'react';
import QuickAccessIcons from './QuickAccessIcons';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black transition-colors duration-300">
      <main className="flex flex-col w-full flex-1 px-4 py-2 md:px-8">
        {children}
      </main>
      <QuickAccessIcons />
    </div>
  );
}

export default PageLayout;