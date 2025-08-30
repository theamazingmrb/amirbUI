"use client";

import React from 'react';
import styles from './Terms.module.css';

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: August 30, 2025</p>
        
        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
            Welcome to AMIR BLAQ. By accessing or using our website, you agree to be bound by these Terms of Service. 
            If you do not agree with any part of these terms, you may not use our website or services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Use of Website</h2>
          <p>
            You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others 
            or restrict their use and enjoyment of the website.
          </p>
          <p>
            Prohibited uses include but are not limited to:
          </p>
          <ul>
            <li>Using the website in any way that breaches applicable laws or regulations</li>
            <li>Using the website to transmit any material that is defamatory, offensive, or otherwise objectionable</li>
            <li>Attempting to gain unauthorized access to our website, server, or any connected database</li>
            <li>Attacking our website via a denial-of-service attack or distributed denial-of-service attack</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Products and Purchases</h2>
          <p>
            All products are subject to availability. We reserve the right to discontinue any product at any time.
          </p>
          <p>
            Prices for our products are subject to change without notice. We reserve the right to refuse any order you place with us.
          </p>
          <p>
            You agree to provide current, complete, and accurate purchase and account information for all purchases made on our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Shipping and Delivery</h2>
          <p>
            Shipping times are estimates and not guaranteed. We are not responsible for delays due to customs processing, 
            natural disasters, or other events outside our control.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Returns and Refunds</h2>
          <p>
            Our return policy allows returns within 30 days of delivery for unworn, unwashed items with original tags attached. 
            Sale items are final sale and cannot be returned.
          </p>
          <p>
            Refunds will be issued to the original payment method once the returned item is received and inspected.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, 
            is the property of AMIR BLAQ and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Limitation of Liability</h2>
          <p>
            AMIR BLAQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
            resulting from your use of or inability to use the website or products.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting 
            on the website. Your continued use of the website after any changes indicates your acceptance of the new terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at:
            <br />
            <a href="mailto:legal@amirblaq.com">legal@amirblaq.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
