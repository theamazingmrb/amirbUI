import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/index'
import products from '../products.json'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
  console.log(products)
  return (
    <div className={styles.container}>
      <Head>
        <title>Amir Blaq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>

      <NavBar styles={styles}/>
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

        <div className={styles.grid}>
          { products.map(product => {
          return (
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title}/>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </a>
          )
          })}
        
        </div>

          
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
