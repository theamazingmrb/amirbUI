'use client'
import Head from 'next/head'
import styles from './Products.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import clsx from 'clsx';
import { useCart } from '@/app/lib/hooks/useCart';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import CartNotification from '@/app/ui/CartNotification';

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { addToCart, products: items } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');
  const [showNotification, setShowNotification] = useState(false);

  // Find the product by slug
  const item = items.find((item) => item.id === params.slug);
  if (!item) return <div>Item Not Found</div>;
  
  const { id, name, imageSrc, price } = item;
  
  // Mock data for product details
  const colors = [
    { name: 'Black', value: 'black' },
    { name: 'White', value: 'white' },
    { name: 'Gray', value: 'gray' }
  ];
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  
  // Rating function removed
  
  // Handle quantity change
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    // Only add once, regardless of quantity selection
    // The quantity selector is currently just for display
    addToCart({
      product_id: id
    });
    
    // Show notification
    setShowNotification(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{name} | AMIR BLAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Cart Notification */}
      <CartNotification 
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        productName={name}
        productImage={imageSrc}
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.main}
      >
        {/* Product Image */}
        <div className={styles.productImageContainer}>
          <motion.img 
            src={imageSrc} 
            alt={name} 
            className={styles.productImage}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Product Details */}
        <div className={styles.productDetails}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={styles.productTitle}>{name}</h1>
            <p className={styles.productId}>{id}</p>
            <p className={styles.productPrice}>${(price).toFixed(2)}</p>
            
            <p className={styles.productDescription}>
              This premium {name.toLowerCase()} from AMIR BLAQ represents the pinnacle of luxury fashion. 
              Crafted with meticulous attention to detail and using only the finest materials, 
              this piece embodies our commitment to quality and style.
            </p>
            
            {/* Color Options */}
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className={styles.colorOptions}>
                {colors.map((color) => (
                  <div 
                    key={color.value}
                    className={clsx(
                      styles.colorOption, 
                      selectedColor === color.value && styles.selected
                    )}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            
            {/* Size Options */}
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className={styles.sizeOptions}>
                {sizes.map((size) => (
                  <div 
                    key={size}
                    className={clsx(
                      styles.sizeOption, 
                      selectedSize === size && styles.selected
                    )}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quantity Selector */}
            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className={styles.quantitySelector}>
                <button 
                  className={styles.quantityButton} 
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input 
                  type="text" 
                  className={styles.quantityInput} 
                  value={quantity} 
                  readOnly 
                />
                <button 
                  className={styles.quantityButton} 
                  onClick={increaseQuantity}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex mt-6">
              <button 
                className={styles.addToCartButton}
                onClick={handleAddToCart}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                Add to Cart
              </button>
              
              <button className={styles.wishlistButton}>
                <FontAwesomeIcon icon={faHeart} />
                Wishlist
              </button>
            </div>
            
            {/* Product Meta */}
            <div className={styles.productMeta}>
              <p>SKU: {id}</p>
              <p>Category: Luxury Fashion</p>
              <p>Tags: Designer, Premium, Limited Edition</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Product Tabs */}
      <div className={styles.tabs}>
        <div className={styles.tabList}>
          <div 
            className={clsx(styles.tabItem, activeTab === "description" && styles.active)}
            onClick={() => setActiveTab("description")}
          >
            Description
          </div>
          <div 
            className={clsx(styles.tabItem, activeTab === "details" && styles.active)}
            onClick={() => setActiveTab("details")}
          >
            Details
          </div>
          <div 
            className={clsx(styles.tabItem, activeTab === "reviews" && styles.active)}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </div>
        </div>
        
        <div className={styles.tabContent}>
          {activeTab === "description" && (
            <div>
              <p>AMIR BLAQ is a fashion product of creative conscious visions representing a new reign and luxury garments. 
              This {name.toLowerCase()} exemplifies our commitment to quality and innovative design.</p>
              <p className="mt-4">Each piece is meticulously crafted to ensure the highest standards of quality and comfort, 
              making it a perfect addition to your premium wardrobe collection.</p>
            </div>
          )}
          
          {activeTab === "details" && (
            <div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Premium quality materials</li>
                <li>Handcrafted with attention to detail</li>
                <li>Limited edition design</li>
                <li>Dry clean only</li>
                <li>Made in Italy</li>
              </ul>
            </div>
          )}
          
          {activeTab === "reviews" && (
            <div>
              <p>Customer reviews coming soon.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products Section */}
      <div className={styles.relatedProductsSection}>
        <h2 className={styles.sectionTitle}>You May Also Like</h2>
        <motion.div 
          className={styles.relatedProductsGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {items
            .filter(product => product.id !== id)
            .slice(0, 4)
            .map(product => (
              <motion.div 
                key={product.id}
                className={styles.relatedProductCard}
                whileHover={{ y: -5 }}
              >
                <Link href={`/products/${product.id}`}>
                  <img 
                    src={product.imageSrc} 
                    alt={product.name} 
                    className={styles.relatedProductImage} 
                  />
                  <div className={styles.relatedProductInfo}>
                    <h3 className={styles.relatedProductName}>{product.name}</h3>
                    <p className={styles.relatedProductPrice}>${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </div>
  );
}
