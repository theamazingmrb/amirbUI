"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [mounted, setMounted] = useState(false);
    
    // Only render client-side components after mounting
    useEffect(() => {
        setMounted(true);
    }, []);
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerHeading}>AMIR BLAQ</h3>
                    <p className={styles.footerText}>
                        Luxury fashion representing a new reign of creative conscious visions.
                    </p>
                </div>
                <div className={styles.footerSection} style={{ alignItems: 'flex-end' }}>
                    <h3 className={styles.footerHeading}>Connect With Us</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://www.facebook.com/profile.php?id=100069742852544#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContent}>
                    <p className={styles.copyright}>&copy; {currentYear} AMIR BLAQ. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}