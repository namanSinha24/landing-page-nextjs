"use client"
import styles from "./layout3.0.module.css";
import { useState } from "react";

export default function Layout2() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className={styles.layout3_container}>
      <div className={styles.layout3_text}>
        <div className={styles.text}>
          <h1 style={{ lineHeight: 1 }}>
            Our Clients <span className={styles.highlight}>Love</span> Working With Us
          </h1>
          <div className={styles.buttonContainer}>
            <button className={styles.layout3_button}>BOOK A CALL</button>
            <p className={styles.noLockIn}>No lock-in. Fixed fee. Zero risk.</p>
          </div>
        </div>
      </div>
      {/* <div className={styles.testimonials}>
        <div className={styles.testimonial1}>
          <img src="../../public/Assets/profile_picture.jpg" alt="Profile Picture" className={styles.profileImage} />
          <h1>Boring Marketing team helping make the ‘boring stuff’ more fun to implement.</h1>
          <p>Big thank you to the Boring Marketing team for helping make the ‘boring stuff’ more fun to implement. We should be fending off having too many new clients soon!</p>
          <div className={styles.signature}>
            <p>Ali Agley, Co-founder</p>
            <img src="/Assets/company_logo.png" alt="Company Logo" className={styles.companyLogo} />
          </div>
          <div className={styles.arrow}>
            <span>&#8250;</span>
          </div>
        </div>

      </div> */}
    </div>
  );
}
