import { useEffect } from 'react';

export default function useTailwindBreakpoint() {
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
