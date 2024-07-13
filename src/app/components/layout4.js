"use client"
import styles from "./layout4.module.css";
export default function Footer() {
    return (
        <div className={styles.layout4_outer_container}>
            <div className={styles.layout4_container}>
                <h2>If you're still thinking about it, your best bet is to book a call.</h2>
                <p>We’ll answer any questions you have about how we can help you unlock organic growth.</p>
                <p>There’s zero hard selling because we only work with brands who’re ready to grow the “boring” way. And we only work with a handful of clients at any time. Your brand is unique and we take the time to craft the right SEO strategy for you. This isn’t fake “scarcity”, but the philosophy behind Boring Marketing.</p>
                <p><i className={styles.boldItalic}>Click the button below and let us show you:</i></p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>BOOK A CALL</button>
                    <p className={styles.noLockIn}>No lock-in. Fixed fee. Zero risk.</p>
                </div>
            </div>
        </div>
    );
}