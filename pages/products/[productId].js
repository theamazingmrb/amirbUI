import Head from 'next/head'
import styles from '../../styles/Product.module.css'
import { useRouter } from 'next/router'
import { useCart } from '../../hooks/use-cart.js';

export default function Product({ product }) {
  const router = useRouter()

  const { product_id, title, image, price, description } = product;
  const { addToCart, products } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title } - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.productImage}>
          <img src={ products.find(p=> p.product_id == product_id)?.image} alt={title} />
        </div>

        <div>
          <h1>
            { title }
          </h1>

          <p className={styles.description}>
            { description }
          </p>

          <p className={styles.description}>
            ${ parseInt(price).toFixed(2) }
          </p>

          <p>
            <button className={styles.button} onClick={() => {
                addToCart({ product_id })
                router.push('/cart') 
              }
            }>
              Buy
            </button>
          </p>
        </div>

      </main>
    </div>
  )
}

export async function getStaticProps({ params = {} }) {
  const res = await fetch('https://admirbadmin.herokuapp.com/products/')
  const data = await res.json()

  const product = data.find(({ product_id }) => `${product_id}` === `${params.productId}`);
  
  return {
    props: {
      product
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://admirbadmin.herokuapp.com/products/')
  const data = await res.json()
  const paths = data.map((product) => {
    const { product_id } = product;
    return {
      params: {
         productId:product_id,
      },
    };
  });

  return {
    paths,
    fallback: false
  };
}