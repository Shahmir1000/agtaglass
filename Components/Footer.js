import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className={`section ${styles.footer}`}>
      <ul className={styles.footerLinks}>
        <li>
          <Link href="/">
            <a className={`${styles.footerLink} ${styles.scroolLink}`}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a className={`${styles.footerLink} ${styles.scroolLink}`}>
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={`${styles.footerLink} ${styles.scroolLink}`}>
              About us
            </a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a className={`${styles.footerLink} ${styles.scroolLink}`}>
              Gallery
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={`${styles.footerLink} ${styles.scroolLink}`}>
              Contact Us
            </a>
          </Link>
        </li>
      </ul>

      <ul className={styles.footerIcons}>
        <li>
          <a
            href="https://www.instagram.com/glass_express_service/"
            target="_blank"
            className={styles.footerIcon}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.icon}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Malton-GLASS-466922017162109/?ref=page_internal"
            target="_blank"
            className={styles.footerIcon}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className={styles.icon}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="mailto:agtaglass@gmail.com" className={styles.footerIcon}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles.icon}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="tel:6475317570" className={styles.footerIcon}>
            <FontAwesomeIcon
              icon={faPhone}
              className={styles.icon}
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
      <h5 className={styles.copyright}>
        Copyright &copy; aGTAglass. <span id="date"></span> all rights reserved{" "}
      </h5>
    </footer>
  );
};

export default Footer;
