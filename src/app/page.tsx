'use client';

import { Product } from '@/services/ferraco-palmas';
import { getProducts } from '@/services/ferraco-palmas';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CategoriesSection } from "/home/user/studio/src/components/CategoriesSection";
import {PromotionsSection} from '@/components/PromotionsSection';
import {ProductListSection} from '@/components/ProductListSection';
import PageLayout from '@/components/PageLayout';


const categories = ['Móveis', 'Containers', 'Ferro'];


export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const promotionsContainerRef = useRef<HTMLDivElement>(null);
    const productsContainerRef = useRef<HTMLDivElement>(null);

    const { toast } = useToast();


    useEffect(() => {
        async function loadProducts() {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        }

        loadProducts();
    }, []);

    const handleAddToCart = (product: Product) => {
        toast({
            title: "Adicionado ao carrinho!",
            description: `${product.name} foi adicionado ao seu carrinho.`,
        });
    };

    const scrollPromotions = useCallback((direction: 'left' | 'right') => {
        if (promotionsContainerRef.current) {
            const scrollAmount = promotionsContainerRef.current.offsetWidth * 0.8;
            promotionsContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    }, []);

    const scrollProducts = useCallback((direction: 'left' | 'right') => {
        if (productsContainerRef.current) {
            const scrollAmount = productsContainerRef.current.offsetWidth * 0.8;
            productsContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    }, []);
    return (<PageLayout>
        <CategoriesSection categories={categories} />
        <PromotionsSection promotionsContainerRef={promotionsContainerRef} scrollPromotions={scrollPromotions} />
        <ProductListSection products={products} addToCart={handleAddToCart} productsContainerRef={productsContainerRef} scrollProducts={scrollProducts} />
    </PageLayout>);
}
