import { FaFacebook, FaInstagram } from "react-icons/fa";

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <nav className="mt-5">
            <hr className="border-t-[0.5px] border-gray-600 my-4" />
            <ul id={styles.nav}>
                <li><a href="/" className={styles.logo}> &copy;{new Date().getFullYear()} AMIR BLAQ</a></li>
                <li className="flex row">
                    <a className="mx-2" href="https://www.facebook.com/Amir-Blaq-109550781374780/"><FaFacebook /></a>
                    <a className="mx-2" href="https://www.instagram.com/amirblaq/"><FaInstagram /></a>
                </li>
            </ul>
        </nav>
    )
}