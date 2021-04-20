import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
export default function NavBar({styles}){
    return (
        <nav >
        <ul id={styles.nav}>
          <li><a href="/"><img src="/logo.PNG" alt="Vercel Logo" className={styles.logo} />
        </a></li>
          <li><a href="/">MENS</a></li>
          <li><a href="/">WOMENS</a></li>
          <li><a href="/">KIDS</a></li>
          <li><a href="/">ACCESSORIES</a></li>
          <li><a href="/">COLLECTIONS</a></li>
          <li><a href="/"><FontAwesomeIcon className={styles.icons} icon={faUser}>Icon</FontAwesomeIcon></a></li>
          <li><a href="/"><FontAwesomeIcon className={styles.icons} icon={faSearch}>Icon</FontAwesomeIcon></a></li>
          <li><a href="/"><FontAwesomeIcon className={styles.icons} icon={faShoppingBag}>Icon</FontAwesomeIcon></a></li>
      
        </ul>
      </nav>
    )
}