// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaRegCopyright } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaRegCopyright} from "react-icons/fa";

import styles from './Footer.module.css';

export default function Footer(){
    return (
        <nav>
            <ul  id={styles.nav}>
            <li><a href="/" className={styles.logo}> &copy;{new Date().getFullYear()} AMIR BLAQ</a></li>
            <li className="flex row">
                <a className="mx-2" href="https://www.facebook.com/Amir-Blaq-109550781374780/"><FaFacebook /></a>
                <a className="mx-2" href="https://www.instagram.com/amirblaq/"><FaInstagram /></a>
            </li>
            </ul>
        </nav>
    )
}