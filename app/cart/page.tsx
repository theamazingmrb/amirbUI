'use client'
import Head from 'next/head'
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import styles from './Cart.module.css'
import { useCart } from '../lib/hooks/useCart';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import CheckoutNotification from '../ui/CheckoutNotification';

export default function Cart() {
  const { products, cartItems, checkout, updateItem, totalPrice, totalItems, showCheckoutNotification, setShowCheckoutNotification } = useCart();
  
  // Function to handle quantity changes
  const handleQuantityChange = (product_id: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateItem({
        product_id,
        quantity: newQuantity
      });
    }
  };

  // Function to remove item from cart
  const removeItem = (product_id: string) => {
    updateItem({
      product_id,
      quantity: 0
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.container}>
      <CheckoutNotification 
        show={showCheckoutNotification} 
        onClose={() => setShowCheckoutNotification(false)} 
      />
      <Head>
        <title>Shopping Cart - AMIR BLAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.fadeInDown}`}>
          <FaShoppingCart /> Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <motion.div 
            className={styles.emptyCart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaShoppingBag className={styles.emptyCartIcon} />
            <p className={styles.emptyCartMessage}>
              Your cart is empty
              <span>Add some products to your cart and start shopping</span>
            </p>
            <Link href="/">
              <button className={styles.emptyCartButton}>
                Continue Shopping <FaArrowRight />
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className={styles.cartLayout}>
            {/* Cart Items Section */}
            <div className={styles.cartItems}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {cartItems.filter(item => item.quantity > 0).map(({ product_id, quantity, pricePerItem }) => {
                  const product = products.find(({ id }) => id === product_id);
                  if (!product) return null;
                  
                  return (
                    <motion.div
                      key={product_id}
                      variants={itemVariants}
                      className={`${styles.cartItem} ${styles.scaleIn}`}
                    >
                      <div className={styles.itemRow}>
                        <img 
                          src={product.imageSrc} 
                          alt={product.name}
                          className={styles.itemImage}
                        />
                        
                        <div className={styles.itemInfo}>
                          <h3 className={styles.itemName}>{product.name}</h3>
                          <div className={styles.itemMeta}>
                            <span>ID: {product_id}</span>
                          </div>
                        </div>
                        
                        <div className={styles.itemControls}>
                          <div className={styles.controlsWrapper}>
                            <div className={styles.quantityControl}>
                              <button 
                                className={styles.quantityButton}
                                onClick={() => handleQuantityChange(product_id, quantity - 1)}
                                aria-label="Decrease quantity"
                              >
                                <FaMinus size={12} />
                              </button>
                              
                              <input
                                type="text"
                                className={styles.quantityInput}
                                value={quantity}
                                readOnly
                              />
                              
                              <button 
                                className={styles.quantityButton}
                                onClick={() => handleQuantityChange(product_id, quantity + 1)}
                                aria-label="Increase quantity"
                              >
                                <FaPlus size={12} />
                              </button>
                            </div>
                            
                            <button 
                              className={styles.removeButton}
                              onClick={() => removeItem(product_id)}
                              aria-label="Remove item"
                            >
                              <FaTrash size={14} />
                            </button>
                          </div>
                          
                          <div className={styles.itemPrice}>
                            ${(quantity * pricePerItem).toFixed(2)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Trash button moved to quantity controls */}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            
            {/* Cart Summary Section */}
            <div className={styles.cartSummary}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              
              <div className={`${styles.summaryStats} ${styles.fadeIn}`}>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>{totalItems}</div>
                  <div className={styles.statLabel}>Items</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>${totalPrice.toFixed(2)}</div>
                  <div className={styles.statLabel}>Subtotal</div>
                </div>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Tax</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              
              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>${(totalPrice + (totalPrice * 0.08)).toFixed(2)}</span>
              </div>
              
              <div className={`${styles.checkout} ${styles.fadeInUp}`}>
                <button className={styles.checkoutButton} onClick={checkout}>
                  Checkout <FaArrowRight />
                </button>
              </div>
              
              <div className={styles.checkout} style={{ textAlign: 'center' }}>
                <Link href="/" className={styles.continueShoppingLink}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}