'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';

type ItemProps = {
    name: string;
    imageSrc: string;
    price: number;
    rating: string;
};

const ScrollableBox: React.FC<{ items: ItemProps[] }> = ({ items }) => {
    useTailwindBreakpoint();

    return (
        <div className="flex flex-col sm:flex-row  overflow-x-auto space-y-4 sm:space-x-4 scrollbar-thin scrollbar-thumb-gray-700 hover:scrollbar-thumb-gray-500">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row relative rounded-xl border-[0.5px] border-gray-600   items-center">
                    <img src={item.imageSrc} alt={item.name} className="max-w-full min-h-20 max-h-64 w-full h-auto object-contain p-5" />
                    <div className="border-l-2 sm:h-1/3 border-gray-600"></div>
                    <div className="p-4 text-center sm:text-left">
                        <p className='text-3xl'>{item.name}</p>
                        <p className='text-2xl'>${item.price}</p>
                        <div className='flex justify-center sm:justify-start items-center'>
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} className='h-4' icon={faStar} />
                            ))}
                        </div>
                    </div>
                    {/* Absolutely position the plus icon within the relative container */}
                    <FontAwesomeIcon className='h-6 w-6 absolute bottom-0 right-0 m-4' icon={faPlusCircle} />
                </div>



            ))}
        </div>
    );
};

export default ScrollableBox;



function useTailwindBreakpoint() {
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            let breakpoint = 'xs';

            if (width >= 640) breakpoint = 'sm';
            if (width >= 768) breakpoint = 'md';
            if (width >= 1024) breakpoint = 'lg';
            if (width >= 1280) breakpoint = 'xl';
            if (width >= 1536) breakpoint = '2xl';

            console.log(`Current breakpoint: ${breakpoint}`);
        }

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // No need to return anything for this use-case
}
