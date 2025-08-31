"use client";

import React from 'react';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: August 30, 2025</p>
        
        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
            AMIR BLAQ (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you visit our website 
            or make a purchase.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, shipping address, billing address, phone number.</li>
            <li><strong>Payment Information:</strong> Credit card details, payment service information.</li>
            <li><strong>Order Information:</strong> Products purchased, order history.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information.</li>
            <li><strong>Usage Information:</strong> Pages visited, time spent on site, actions taken.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders</li>
            <li>Improve our website and services</li>
            <li>Send you marketing communications (if you&apos;ve opted in)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience, 
            analyze site traffic, and understand where our visitors are coming from.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the Internet is 100% secure, and we cannot 
            guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to our processing of your personal information</li>
            <li>Request restriction of processing your personal information</li>
            <li>Request transfer of your personal information</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@amirblaq.com">privacy@amirblaq.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
