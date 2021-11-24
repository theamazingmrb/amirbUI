import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";

import styles from './Nav.module.css';
import {useCart} from '../../hooks/use-cart.js'
export default function NavBar(){
  const {subtotal, checkout} = useCart();

    return (
        <nav  id={styles.nav}>
          <a href="/" className={styles.logo}>AMIR BLAQ</a>
          <div id={styles.list}>
            <a href="/#midMenu">ADULTS</a>
            <a href="/#midMenu">KIDS</a>
            <a href="/#midMenu">ALL</a>
            <a href="/cart"><FontAwesomeIcon className={styles.icons} icon={faShoppingBag}>Icon</FontAwesomeIcon>${subtotal.toFixed(2)}</a>
          </div>
      </nav>
    )
}