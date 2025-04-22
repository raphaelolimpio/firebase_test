'use client';

import { useRef } from 'react';
import ScrollButton from "@/components/ScrollButton";
import PromotionItem  from '@/components/PromotionItem';

interface PromotionsSectionProps {
    promotionsContainerRef: React.RefObject<HTMLDivElement>;
    scrollPromotions: (direction: 'left' | 'right') => void;
}

export function PromotionsSection({ promotionsContainerRef, scrollPromotions }: PromotionsSectionProps) {
    return (
        <div className="py-4 group relative">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Promoções</h2>
            <ScrollButton direction="left" onClick={() => scrollPromotions('left')} />
            <div ref={promotionsContainerRef} className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory relative items-center hide-scrollbar">
                <div className="flex">
                    {Array.from({ length: 7 }, (_, i) => i + 1).map(index => (
                        <PromotionItem key={index} name={`Promo ${index}`} imageUrl={`https://placehold.co/200x300/orange/black?text=Promotion${index}`} />
                    ))}
                </div>
            </div>
            <ScrollButton direction="right" onClick={() => scrollPromotions('right')} />
        </div>
    );
}