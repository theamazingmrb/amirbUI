import '../styles/globals.css'
import { CartContext, useCartState } from '../hooks/use-cart.js'
import NavBar from '../components/NavBar/index'
import Footer from '../components/Footer/index'

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return <CartContext.Provider value={cart} >
        <NavBar />
        <Component {...pageProps} />  
        <Footer />
      </CartContext.Provider>
}

export default MyApp
