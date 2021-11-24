import { useState, createContext, useContext, useEffect } from 'react'
import { initiateCheckOut } from '../lib/payments'
const CART_STATE_KEY = 'amirb_cart';

const defaultCart = {
    products: {}
}

export const CartContext = createContext();

export function useCartState() {
    const [cart, updateCart] = useState(defaultCart)
    const [products, updateProducts] = useState([])

    useEffect(() => {

        fetch('https://admirbadmin.herokuapp.com/products/')
            .then((res) => res.json())
            .then((allProducts) => updateProducts(allProducts))

        const stateFromStorage = window.localStorage.getItem(CART_STATE_KEY)
        const data = stateFromStorage && JSON.parse(stateFromStorage);
        if (data) {
            updateCart(data)
        }
    }, [])


    useEffect(() => {
        const data = JSON.stringify(cart);
        window.localStorage.setItem(CART_STATE_KEY, data)
    }, [cart])

    const cartItems = Object.keys(cart.products).map(key => {
        const product = products.find((({ product_id }) => `${product_id}` == `${key}`));
        return {
            ...cart.products[key],
            pricePerItem: product ? parseInt(product.price) : 0
        }

    })

    const subtotal = cartItems.reduce((accumulator, { pricePerItem, quantity }) => {
        return accumulator + (pricePerItem * quantity)
    }, 0)

    const totalItems = cartItems.reduce((accumulator, { quantity }) => {
        return accumulator + quantity
    }, 0)

    function checkout() {
        initiateCheckOut({
            lineItems: cartItems.map(item => {
                return {
                    price: item.product_id,
                    quantity: item.quantity
                }
            })
        })
    }

    function addToCart({ product_id = {} }) {
        updateCart(prev => {
            let cartState = {...prev }

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

    function updateItem({ product_id, quantity }) {
        updateCart((prev) => {
            let cart = {...prev };

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

export function useCart() {
    const cart = useContext(CartContext)
    return cart
}