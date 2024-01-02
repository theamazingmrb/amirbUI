'use client'
import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Cart.module.css'
import { useCart } from '../lib/hooks/useCart';
import Table from '../ui/table';
import { CartItem, Column } from '../lib/definitions';
import clsx from 'clsx';

const columns: Column[] = [
  {
    columnId: 'name',
    header: 'Product Name'
  },
  {
    columnId: 'quantity',
    header: 'Quantity'
  },
  {
    columnId: 'pricePerItem',
    header: 'Price Per Item'
  },
  {
    columnId: 'total',
    header: 'Item Total'
  }
];
export default function Cart() {

  const { products, cartItems, checkout, updateItem } = useCart();

  const data: CartItem[] = cartItems.filter(item => item.quantity != 0).map(({ product_id, quantity, pricePerItem }) => {

    const product = products.find(({ id: pid }) => pid === product_id); // Make sure the `id` property exists on your product items
    const { name } = product || {};

    const Quantity = () => {


      function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const inputs = Array.from(form.elements) as HTMLInputElement[];

        const quantityInput = inputs.find(input => input.name === 'quantity') as HTMLInputElement | undefined;

        if (quantityInput && !isNaN(parseInt(quantityInput.value, 10))) {
          const quantity = parseInt(quantityInput.value, 10);

          updateItem({
            product_id,
            quantity
          });
        }
      }

      return (
        <form className="flex flex-col sm:flex-row items-center justify-center p-4">
          <p className='text-white xs:hidden'>{quantity}</p>
          <input
            name="quantity"
            type="number"
            min={0}
            defaultValue={quantity}
            className="hidden xs:flex w-full sm:w-auto text-center p-2 border border-gray-300 rounded"
          />
          <button
            className="hidden xs:flex bg-blueviolet text-white font-semibold py-2 px-4 rounded mt-2 sm:mt-0 sm:ml-4 shadow bg-purple-700 transition duration-300"
          >
            Update
          </button>
        </form>
      )
    }

    return {
      product_id,
      name,
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