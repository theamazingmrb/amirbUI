'use client'
import Head from 'next/head'
import styles from './Products.module.css'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'
import clsx from 'clsx';
import { useCart, useCartState } from '@/app/lib/hooks/useCart';
import { log } from 'console';

export default function Page({ params }: { params: { slug: string } }) {


  const router = useRouter()

  const { addToCart, products: items, cart } = useCart();
  console.log("🚀 ~ file: page.tsx:15 ~ Page ~ cart:", cart)
  
  const item = items.find((item) => item.id === params.slug)
  if (!item) return <div>Item Not Found</div>
  const { id, name, imageSrc, price } = item;



  return (
    <div className={styles.container}>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={clsx(styles.main, 'flex flex-col sm:flex-row')}>
        <div className={clsx(styles.productImage, 'hidden sm:flex')}>
          <img src={imageSrc} alt={name} />
        </div>
        {/* <h1 className='text-3xl sm:text-5xl timeNewRoman leading-tight'>FASHION GRANDEUR</h1>
          <h1 className='text-2xl sm:text-2xl'>Amir Blaq is a fashion product of creative conscious visions representing a new reign and luxury garments.</h1> */}
        <div>
          <h1 className='text-3xl sm:text-5xl timeNewRoman leading-tight'>
            {name}
          </h1>

          <p className='text-2xl sm:text-2xl'>
            {id}
          </p>

          <img src={imageSrc} alt={name} className={clsx(styles.productImage, 'sm:hidden')} />

          <p className='text-2xl sm:text-2xl'>
            ${(price).toFixed(2)}
          </p>

          <p>
            <button className={styles.button} onClick={async () => {
              await addToCart({ product_id: id })
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
