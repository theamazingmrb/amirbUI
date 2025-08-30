'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ProductProps } from '@/app/lib/definitions';
import { useCart } from '@/app/lib/hooks/useCart';
import { motion } from 'framer-motion';
import styles from './ScrollableBox.module.css';
import CartNotification from '@/app/ui/CartNotification';

const ScrollableBox = () => {
    const { products: items, addToCart } = useCart();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [showNotification, setShowNotification] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);
    
    const handleAddToCart = (e: React.MouseEvent, item: ProductProps) => {
        e.preventDefault();
        e.stopPropagation();
        
        addToCart({ product_id: item.id });
        
        // Show notification and set selected product
        setSelectedProduct(item);
        setShowNotification(true);
    };

    return (
        <div className={styles.scrollableContainer}>
            {/* Cart Notification */}
            <CartNotification 
                isVisible={showNotification}
                onClose={() => setShowNotification(false)}
                productName={selectedProduct?.name || ''}
                productImage={selectedProduct?.imageSrc}
            />
            
            {items.map((item, index) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={styles.productCard}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Link href={`/products/${item.id}`} className={styles.productLink}>
                        <div className={styles.imageContainer}>
                            <img 
                                src={item.imageSrc} 
                                alt={item.name} 
                                className={styles.productImage} 
                            />
                            <motion.button 
                                className={styles.addToCartButton}
                                onClick={(e) => handleAddToCart(e, item)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Add to cart"
                            >
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span>Add to Cart</span>
                            </motion.button>
                        </div>
                        
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{item.name}</h3>
                            <div className={styles.priceRow}>
                                <span className={styles.productPrice}>${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default ScrollableBox;