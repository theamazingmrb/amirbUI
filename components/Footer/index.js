// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaRegCopyright } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaRegCopyright} from "react-icons/fa";

import styles from './Footer.module.css';

export default function Footer(){
    return (
        <nav>
            <ul  id={styles.nav}>
            <li><a href="/" className={styles.logo}> &copy; 2021 AMIR BLAQ</a></li>
            <li><a href="https://www.facebook.com/Amir-Blaq-109550781374780/"><FaFacebookSquare /></a></li>
            <li><a href="https://www.instagram.com/amirblaq/"><FaInstagramSquare /></a></li>
            </ul>
        </nav>
    )
}