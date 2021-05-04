import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import styles from './Nav.module.css';
import {useCart} from '../../hooks/use-cart.js'
export default function NavBar(){
  const {subtotal, checkout} = useCart();

    return (
        <nav>
        <ul  id={styles.nav}>
          <li><a href="/"><img src="/logo.PNG" alt="Vercel Logo"  className={styles.logo}/>
        </a></li>
          <li><a href="/">MENS</a></li>
          <li><a href="/">WOMENS</a></li>
          <li><a href="/">KIDS</a></li>
          <li><a href="/"><FontAwesomeIcon className={styles.icons} icon={faUser}>Icon</FontAwesomeIcon></a></li>
          <li><a href="/"><FontAwesomeIcon className={styles.icons} icon={faSearch}>Icon</FontAwesomeIcon></a></li>
          <li><a href="/cart"><FontAwesomeIcon className={styles.icons} icon={faShoppingBag}>Icon</FontAwesomeIcon>${subtotal.toFixed(2)}</a></li>
      
        </ul>
      </nav>
    )
}