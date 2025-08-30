"use client"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useCart } from '@/app/lib/hooks/useCart';

import styles from './Nav.module.css';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { totalItems, totalPrice } = useCart();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    setMounted(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Utility function for conditional class names
  const classNames = (...classes: (string | undefined | null | false)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  // Don't render anything meaningful during SSR to avoid hydration mismatches
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 bg-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white text-xl md:text-2xl tracking-wider">AMIR BLAQ</div>
          <div className="flex items-center text-white">
            <span className="mr-2">$0.00</span>
            <div className="relative">
              <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Client-side rendering with full interactivity
  return (
    <nav 
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-black'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={classNames(
          styles.logo,
          'text-white text-xl md:text-2xl tracking-wider transition-all duration-300',
          isScrolled ? 'scale-90' : ''
        )}>AMIR BLAQ</Link>

        {/* Cart */}
        <Link 
          href="/cart" 
          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
        >
          <span className="mr-2">${totalPrice?.toFixed(2) || '0.00'}</span>
          <div className="relative">
            <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}
