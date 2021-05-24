// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaRegCopyright } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaRegCopyright} from "react-icons/fa";

import styles from './Footer.module.css';

export default function Footer(){
    return (
        <nav>
            <ul  id={styles.nav}>
            <li><a href="/"><img src="/logo.PNG" alt="Vercel Logo"  className={styles.logo}/>
            </a> <FaRegCopyright /> 2021 </li>
            <li><a href="facebook.com"><FaFacebookSquare /></a></li>
            <li><a href="facebook.com"><FaInstagramSquare /></a></li>
            <li><a href="facebook.com"><FaTwitterSquare /></a></li>


                    {/* <li><a href="facebook.com">Amir Blaq<FaRegCopyright /> 2021</a></li>
                    <li><a href="facebook.com"><FaFacebookSquare /></a></li>
                    <li><a href="facebook.com"><FaInstagramSquare /></a></li>
                    <li><a href="facebook.com"><FaTwitterSquare /></a></li> */}
            </ul>
        </nav>
    )
}