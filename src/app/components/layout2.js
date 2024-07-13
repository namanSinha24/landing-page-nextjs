import styles from "./layout2.module.css";
import Link from 'next/link';

export default function Layout2() {
  return (

    <div
      className={styles.layout2_container}
    >
      <head>

      </head>
      <div className={styles.layout2_text}>
        <h1 style={{ lineHeight: 1 }}>SCALE YOUR SALES ORGANICALLY WITH ROI FOCUSED, AI ASSISTED “SEO 2.0”</h1>
        <p>
          Attract more traffic without burning money on ads, convert better and earn more profit… while positioning your brand as the “go-to” authority in your market.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.layout2_button}>BOOK A CALL</button>
          <button className={styles.noLockIn}>No lock-in. Fixed fee. Zero risk.</button>
        </div>


      </div>

    </div>

  );
}



