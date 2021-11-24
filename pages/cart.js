import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Cart.module.css'
import { useCart } from '../hooks/use-cart.js';
import Table from '../components/Table';

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name'
  },
  {
    columnId: 'quantity',
    Header: 'Quantity'
  },
  {
    columnId: 'pricePerItem',
    Header: 'Price Per Item'
  },
  {
    columnId: 'total',
    Header: 'Item Total'
  }
];
export default function Home() {

  const { products, cartItems, checkout, updateItem } = useCart();

  const data = cartItems.filter(item => item.quantity != 0).map(({ product_id, quantity, pricePerItem }) => {
    const product = products.find(({ product_id: pid }) => pid === product_id);
    const { title } = product || {};

    const Quantity = () => {

      function handleOnSubmit(e) {
        e.preventDefault();

        const { currentTarget } = e;
        const inputs = Array.from(currentTarget.elements);
        const quantity = inputs.find(input => input.name === 'quantity')?.value;

        updateItem({
          product_id,
          quantity: quantity && parseInt(quantity)
        });
      }

      return (
        <form className={styles.cartQuantity} onSubmit={handleOnSubmit}>
          <input name="quantity" type="number" min={0} defaultValue={quantity} />
          <button className={styles.button}>Update</button>
        </form>
      )
    }

    return {
      product_id,
      title,
      quantity: <Quantity />,
      pricePerItem: pricePerItem.toFixed(2),
      total: (quantity * pricePerItem).toFixed(2)
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Cart - Amir Blaq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <FaShoppingCart /> Cart
        </h1>

        <Table className={styles.table} data={data} columns={columns} />

        <p className={styles.checkout}>
          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
        </p>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}