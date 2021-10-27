import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Favicon from "./Favicon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Head>
        <Favicon />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.imageContainer}>
            <Image src="/../public/Logo/logo.png" width={100} height={100} />
          </div>
          <button className={styles.navToggle} onClick={navToggle}>
            <FontAwesomeIcon icon={faBars} className={styles.navButton} />
          </button>
          <div className={toggle ? styles.webVmobile : styles.hideDisplay}>
            <ul className={styles.navLinks}>
              <li>
                <Link href="/">
                  <div className={styles.boxButton}>
                    <a
                      className={`${styles.navLink} ${styles.scroolLink}`}
                      onClick={navToggle}
                    >
                      <h4>Home</h4>
                    </a>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className={styles.boxButton}>
                    <a
                      className={`${styles.navLink} ${styles.scroolLink}`}
                      onClick={navToggle}
                    >
                      <h4>Services</h4>
                    </a>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className={styles.boxButton}>
                    <a
                      className={`${styles.navLink} ${styles.scroolLink}`}
                      onClick={navToggle}
                    >
                      <h4>About us</h4>
                    </a>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <div className={styles.boxButton}>
                    <a
                      className={`${styles.navLink} ${styles.scroolLink}`}
                      onClick={navToggle}
                    >
                      <h4>Gallery</h4>
                    </a>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className={styles.boxButton}>
                    <a
                      className={`${styles.navLink} ${styles.scroolLink}`}
                      onClick={navToggle}
                    >
                      <h4>Contact Us</h4>
                    </a>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <ul className={styles.navIcons}>
            <div>
              <li>
                <a
                  href="https://www.instagram.com/glass_express_service/"
                  target="_blank"
                  className={styles.navIcon}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.icon}
                  ></FontAwesomeIcon>
                </a>
              </li>
            </div>
            <div>
              <li>
                <a
                  href="https://www.facebook.com/Malton-GLASS-466922017162109/?ref=page_internal"
                  target="_blank"
                  className={styles.navIcon}
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={styles.icon}
                  ></FontAwesomeIcon>
                </a>
              </li>
            </div>
            <li>
              <a href="mailto:agtaglass@gmail.com" className={styles.navIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles.icon}
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="tel:6475317570" className={styles.navIcon}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className={styles.icon}
                ></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
