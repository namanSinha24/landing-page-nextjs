"use client";
import Image from "next/image";
import logo from '../../../public/Assets/long-logo.png';
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./header.module.css";
import stylesf from "./footer.module.css"; // imported footer btn styles for header button.

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const headerLink = document.querySelector(`.${styles.header_link}`);
      if (window.scrollY > 10) {  // Adjust the scroll threshold as needed
        headerLink.classList.add(styles.hidden);
      } else {
        headerLink.classList.remove(styles.hidden);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.header_closed_position_sticky}>
      <a className={styles.header_link}>Shape Your SEO Strategy in 30 Days. No Strings Attached. -</a>

      <div className={styles.header_inner_div}>
        <div className={styles.logo_div}>
          <Link href="/">
            <Image src={logo} alt="logo" height={36} />
          </Link>
        </div>
        <div className={styles.btn_div}>
          <div className={styles.bottom_div}>
            <a className={styles.btn_link} href="/contact">
              <div className={styles.inner_div}>
                <span className={styles.text}>Free Email Course</span>
              </div>
            </a>
          </div>
          <button>BOOK A CALL</button>
        </div>

      </div>
    </div>
  );
}
