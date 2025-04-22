'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
}

function ScrollButton({ direction, onClick }: ScrollButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-orange-500 hover:bg-orange-700 shadow transition-colors z-10 ${direction === 'left' ? 'left-2' : 'right-2'} group-hover:block hidden`}
        >
            {direction === 'left' ? <ChevronLeft size={20} className="text-black" /> : <ChevronRight size={20} className="text-black" />}
        </button>
    );
}

export default ScrollButton;