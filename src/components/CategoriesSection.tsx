
'use client';

import  CategoryItem  from './CategoryItem';

interface CategoriesSectionProps {
  categories: string[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Categorias</h2>
      <div className="container mx-auto flex items-center justify-around">
        {categories.map((category) => (
          <CategoryItem key={category} category={category} />
        ))}
      </div>
    </div>
  );
}