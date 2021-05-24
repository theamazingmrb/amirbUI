import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import products from '../products.json'
import { useState } from 'react'
import { useCart } from '../hooks/use-cart.js'

export default function Home() {
  const {subtotal, totalItems, addToCart, checkout } = useCart()
  const [filter, setFilter] = useState("All")
  
  const filteredProducts = () => {
    if(filter != "All"){
      return products.filter(product => product.category == filter).map(product => {
        return (
        <li key={product.id}  className={styles.card}>
          <Link href={`/products/${product.id}`}>
            <a>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title}/>
               <p>${product.price.toFixed(2)}</p>
              <p>
                <button className={styles.buttons} onClick={(event) => {
                  event.stopPropagation()
                  event.nativeEvent.stopImmediatePropagation();
  
                  // addToCart({ id: product.id})
  
                }}>Details</button>
              </p>
            </a>
          </Link>
        </li>
        )
        })
    }else {
      return products.map(product => {
        return (
        <li key={product.id}  className={styles.card}>
          <Link href={`/products/${product.id}`}>
            <a>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title}/>
               <p>${product.price.toFixed(2)}</p>
              <p>
                <button className={styles.buttons} onClick={(event) => {
                  event.stopPropagation()
                  event.nativeEvent.stopImmediatePropagation();
  
                  // addToCart({ id: product.id})
  
                }}>Details</button>
              </p>
            </a>
          </Link>
        </li>
        )
        })
    } 
    
  }

  const filterSet = (category) =>{
    setFilter(category)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Amir Blaq</title>
        <link rel="icon" href="/" />
      </Head>
      

      <main className={styles.main}>

      <div id={styles.heroContainer}>
        <img src="/BlackClassics.JPG" alt="Black Crown Slides" className={styles.heroYellow} />
        <div>
          <img src="/BlackCrown.JPG" alt="Black Classic Slide" />
          <img src="/SlideSide.jpg" alt="Black Classic Side view" />
        </div>
      </div>

      <div id="midMenu" className={styles.midMenu}>
        <div onClick={() => filterSet("All")} className={styles.box}>
          ALL
        </div>
        <div onClick={() => filterSet("Adults")} className={styles.box}>
          ADULTS
        </div>
        <div onClick={() => filterSet("Kids")} className={styles.box}>
          KIDS
        </div>
      </div>

        <ul id="grid" className={styles.grid}>
          { filteredProducts() }
        </ul>

          
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
