import { useState, createContext, useContext, useEffect, Dispatch, SetStateAction } from 'react'
import { ProductProps } from '../definitions';
import { log } from 'console';
// import { initiateCheckOut } from '../lib/payments'
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
    addToCart: () => {},
    subtotal: 0,
    checkout: () => {},
    updateItem: () => {}
};


export const CartContext = createContext(defaultContext);

export function useCartState() {
    const [cart, updateCart] = useState<CartState>({ products: {} })

    useEffect(() => {
        const data = JSON.stringify(cart);
        window.localStorage.setItem(CART_STATE_KEY, data)
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
        // initiateCheckOut({
        //     lineItems: cartItems.map(item => {
        //         return {
        //             price: item.id,
        //             quantity: item.quantity
        //         }
        //     })
        // })
    }

    function addToCart({ product_id }: { product_id: string }) {
        console.log("🚀 ~ Adding to Cart")
        updateCart(prev => {
            let cartState = { ...prev }

            if (cartState.products[product_id]) {
                cartState.products[product_id].quantity += 1
            } else {
                cartState.products[product_id] = {
                    product_id,
                    quantity: 1
                }
            }
            return cartState

        })

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
        addToCart,
        subtotal,
        checkout,
        updateItem
    }
}

type UseCartReturnType = {
    cartItems: CartItem[];
    products: ProductProps[];
    cart: CartState;
    updateCart: Dispatch<SetStateAction<CartState>>;
    totalItems: number;
    addToCart: ({ product_id }: { product_id: string }) => void;
    subtotal: number;
    checkout: () => void;
    updateItem: ({ product_id, quantity }: { product_id: string, quantity: number }) => void;
};


export function useCart(): UseCartReturnType {
    const cart = useContext(CartContext)
    return {
        cartItems: cart.cartItems,
        products: cart.products,
        cart: cart.cart,
        updateCart: cart.updateCart,
        totalItems: cart.totalItems,
        addToCart: cart.addToCart,
        subtotal: cart.subtotal,
        checkout: cart.checkout,
        updateItem: cart.updateItem
    }
}