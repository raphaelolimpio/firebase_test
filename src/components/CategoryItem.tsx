tsx:'use client';

import { Button } from './ui/button';

interface CategoryItemProps {
    category: string;
}

function CategoryItem({ category }: CategoryItemProps) {
    return (
        <Button
            variant="outline"
            size="sm"
            className="text-sm font-medium bg-transparent text-orange-500 hover:bg-orange-900/40 border-orange-500 transition-colors duration-200"
        >
            {category}
        </Button>
    );
}

export default CategoryItem;