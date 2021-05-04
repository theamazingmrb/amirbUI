import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import products from '../products.json'
import { FAShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import { useCart } from '../hooks/use-cart.js'

export default function Home() {
  const {subtotal, totalItems, addToCart, checkout } = useCart()

 
  return (
    <div className={styles.container}>
      <Head>
        <title>Amir Blaq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>

      <div id={styles.heroContainer}>
        <img src="/hero-yellow.png" alt="Vercel Logo" className={styles.heroYellow} />
        <div>
          <img src="/blaw.jpg" alt="Vercel Logo" />
          <img src="/slip.jpg" alt="Vercel Logo" />
        </div>
      </div>

      <div id={styles.midMenu}>
        <div className={styles.box}>
          MENS
        </div>
        <div className={styles.box}>
          WOMENS
        </div>
        <div className={styles.box}>
          KIDS
        </div>
      </div>

        <ul className={styles.grid}>
          { products.map(product => {
          return (
          <li key={product.id}  className={styles.card}>
            <Link href={`/products/${product.id}`}>
              <a>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title}/>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                <p>
                  <button className={styles.buttons} onClick={() => addToCart({ id: product.id})}>Add to Cart</button>
                </p>
              </a>
            </Link>
          </li>
          )
          })}
        
        </ul>

          
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
