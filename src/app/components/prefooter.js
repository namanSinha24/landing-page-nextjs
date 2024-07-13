"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./prefooter.module.css";
export default function Marque() {


  return (
    <div className={styles.prefooter_container}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://assets-global.website-files.com/6538a65cc52e6856c7c41001/654b951c92117b5f50f5e064_Group%201400001830.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}

        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h1>UNLOCK</h1>
        <h2>THE TRUE POTENTIAL OF YOUR BRAND</h2>
        <p>WITH SEO 2.0</p>
        <button className={styles.prefooter_button}>BOOK A CALL</button>
      </div>
    </div>
  );
}
