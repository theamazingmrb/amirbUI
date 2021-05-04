import {useState, createContext, useContext, useEffect} from 'react'
import products from '../products.json'
import { initiateCheckOut } from '../lib/payments'
const CART_STATE_KEY = 'amirb_cart';

const defaultCart = {
    products: {}
  }

export const CartContext = createContext();

export function useCartState() {
    const [cart, updateCart] = useState(defaultCart)

    useEffect( () => {
        const stateFromStorage = window.localStorage.getItem(CART_STATE_KEY)
        const data = stateFromStorage && JSON.parse(stateFromStorage);
        if(data){
            updateCart(data)
        }
    }, [])


    useEffect( () => {
        const data = JSON.stringify(cart);
        window.localStorage.setItem(CART_STATE_KEY, data)
    }, [cart])

    const cartItems = Object.keys(cart.products).map(key => {
        const product = products.find((({id}) => `${id}` == `${key}`));
        return {
          ...cart.products[key],
          pricePerItem: product.price
        }
      })
    
      const subtotal = cartItems.reduce((accumulator, {pricePerItem, quantity}) => {
        return accumulator + (pricePerItem * quantity)
      }, 0)
    
      const totalItems = cartItems.reduce((accumulator, {quantity}) => {
        return accumulator +  quantity
      }, 0)
    
      function checkout() {
        initiateCheckOut({
          lineItems: cartItems.map(item => {
            return {
              price: item.id,
              quantity: item.quantity
            }
          })
        })
      }
    
      console.log(cart)
      console.log(subtotal)
    
      function addToCart({id = {}}){
        updateCart(prev => {
          let cartState = {...prev}
    
          if( cartState.products[id]){
            cartState.products[id].quantity += 1 
          }else {
            cartState.products[id] = {
              id,
              quantity: 1
            }
          }
          return cartState
    
        })
    
      }

      function updateItem({ id, quantity }) {
        updateCart((prev) => {
          let cart = {...prev};
    
          if ( cart.products[id] ) {
            cart.products[id].quantity = quantity;
          } else {
            cart.products[id] = {
              id,
              quantity: 1
            }
          }
    
          return cart;
        })
      }

      
    return {
        cart, 
        cartItems,
        updateCart,
        totalItems,
        addToCart,
        subtotal,
        checkout,
        updateItem
    }
}

export function useCart(){
    const cart = useContext(CartContext)
    return cart
}