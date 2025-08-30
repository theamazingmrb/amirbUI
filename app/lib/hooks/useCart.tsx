import { useState, createContext, useContext, useEffect, Dispatch, SetStateAction, useRef } from 'react'
import { ProductProps } from '../definitions';
import CheckoutNotification from '@/app/ui/CheckoutNotification';

const CART_STATE_KEY = 'amirb_cart';

type CartProduct = {
    product_id: string;
    quantity: number;
};

type CartState = {
    products: { [key: string]: CartProduct };
};

type CartItem = {
    product_id: string;
    quantity: number;
    pricePerItem: number;
    total: string;
};

const products = [
    { id: 'AB001', price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'The Classic', imageSrc: '/BlackClassics.JPG' },
    { id: 'AB002', price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'The Crown', imageSrc: '/BlackCrown.JPG' },
    { id: 'AB003', price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'Blue Girl Slides', imageSrc: '/BlueGirlSlide.JPG' },
    { id: 'AB004', price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'Green Girl Slides', imageSrc: '/GreenGirlSlide.JPG' },
    { id: 'AB005', price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'Pink Girl Slides', imageSrc: '/PinkGirlSlide.JPG' },
]

type UseCartReturnType = {
    cart: CartState;
    products: ProductProps[];
    cartItems: CartItem[];
    updateCart: Dispatch<SetStateAction<CartState>>;
    totalItems: number;
    totalPrice: number;
    addToCart: ({ product_id }: { product_id: string }) => void;
    subtotal: number;
    checkout: () => void;
    updateItem: ({ product_id, quantity }: { product_id: string, quantity: number }) => void;
    showCheckoutNotification: boolean;
    setShowCheckoutNotification: Dispatch<SetStateAction<boolean>>;
};

const defaultCartState: CartState = {
    products: {}
};

const defaultProducts: ProductProps[] = [
    ...products
];

const defaultCartItems: CartItem[] = [];

const defaultContext: UseCartReturnType = {
    cartItems: defaultCartItems,
    products: defaultProducts,
    cart: defaultCartState,
    updateCart: () => {},
    totalItems: 0,
    totalPrice: 0,
    addToCart: () => {},
    subtotal: 0,
    checkout: () => {},
    updateItem: () => {},
    showCheckoutNotification: false,
    setShowCheckoutNotification: () => {}
};

export const CartContext = createContext(defaultContext);

export function useCartState() {
    // Initialize cart state from localStorage if available
    const [cart, updateCart] = useState<CartState>(() => {
        // Only run this code on the client side
        if (typeof window !== 'undefined') {
            const savedCart = window.localStorage.getItem(CART_STATE_KEY);
            if (savedCart) {
                try {
                    return JSON.parse(savedCart);
                } catch (error) {
                    console.error('Failed to parse cart from localStorage:', error);
                }
            }
        }
        return { products: {} };
    });
    
    // State for checkout notification
    const [showCheckoutNotification, setShowCheckoutNotification] = useState(false);

    // Save to localStorage whenever cart changes
    useEffect(() => {
        const data = JSON.stringify(cart);
        window.localStorage.setItem(CART_STATE_KEY, data);
    }, [cart])

    const cartItems: CartItem[] = Object.keys(cart.products).map(key => {
        const product = products.find(({ id }) => id === key);
        if (!product) return null;

        const quantity = cart.products[key].quantity;
        const pricePerItem = product.price;
        const total = (quantity * pricePerItem).toFixed(2);

        return {
            product_id: key,
            quantity,
            pricePerItem,
            total
        };
    }).filter((item): item is CartItem => item !== null);

    const subtotal = cartItems.reduce((accumulator, { pricePerItem, quantity }) => {
        return accumulator + (pricePerItem * quantity)
    }, 0)

    const totalItems = cartItems.reduce((accumulator, { quantity }) => {
        return accumulator + quantity
    }, 0)

    function checkout() {
        // Show the checkout notification instead of processing the order
        setShowCheckoutNotification(true);
        
        // Don't clear the cart until they acknowledge the notification
        // updateCart({ products: {} });
    }

    // Track if we're currently processing an add to cart operation
    const isAddingRef = useRef<Record<string, boolean>>({});
    
    function addToCart({ product_id }: { product_id: string }) {
        // Prevent double adds by checking if we're already processing this product
        if (isAddingRef.current[product_id]) {
            return;
        }
        
        // Mark this product as being processed
        isAddingRef.current[product_id] = true;
        
        // Use a function to update the cart state to ensure we're working with the latest state
        updateCart(prev => {
            // Create a deep copy of the previous state
            const cartState = JSON.parse(JSON.stringify(prev));
            
            if (cartState.products[product_id]) {
                // If product exists, increment quantity by 1 (not 2)
                cartState.products[product_id].quantity += 1;
            } else {
                // If product doesn't exist, add it with quantity 1
                cartState.products[product_id] = {
                    product_id,
                    quantity: 1
                };
            }
            return cartState;
        });
        
        // Reset the flag after a short delay
        setTimeout(() => {
            isAddingRef.current[product_id] = false;
        }, 500);
    }

    function updateItem({ product_id, quantity }: { product_id: string, quantity: number }) {
        updateCart((prev) => {
            let cart = { ...prev };

            if (cart.products[product_id]) {
                cart.products[product_id].quantity = quantity;
            } else {
                cart.products[product_id] = {
                    product_id,
                    quantity: 1
                }
            }

            return cart;
        })
    }

    return {
        cart,
        products,
        cartItems,
        updateCart,
        totalItems,
        totalPrice: subtotal,
        addToCart,
        subtotal,
        checkout,
        updateItem,
        showCheckoutNotification,
        setShowCheckoutNotification
    }
}

export function useCart(): UseCartReturnType {
    const cart = useContext(CartContext)
    return {
        cartItems: cart.cartItems,
        products: cart.products,
        cart: cart.cart,
        updateCart: cart.updateCart,
        totalItems: cart.totalItems,
        totalPrice: cart.totalPrice,
        addToCart: cart.addToCart,
        subtotal: cart.subtotal,
        checkout: cart.checkout,
        updateItem: cart.updateItem,
        showCheckoutNotification: cart.showCheckoutNotification,
        setShowCheckoutNotification: cart.setShowCheckoutNotification
    }
}