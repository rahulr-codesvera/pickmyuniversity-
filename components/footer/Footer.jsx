import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo.png"
            alt="Pick My University"
            width={80}
            height={100}
          />
        </div>
        <div className={styles.countries}>
          <p className={styles.sectionTitle}>Countries</p>
          <Link className={styles.country} href="/countries/russia">
            Russia
          </Link>
          <Link className={styles.country} href="/countries/georgia">
            Georgia
          </Link>
          <Link className={styles.country} href="/countries/kyrgyzstan">
            Kyrgyzstan
          </Link>
        </div>
        <div className={styles.social}>
          <p className={styles.sectionTitle}>Social</p>
          <span className={styles.socialSpan}>
            <FaFacebookSquare size={20} />
            <a href="#">Facebook</a>
          </span>
          <span className={styles.socialSpan}>
            <FaInstagramSquare size={20} />
            <a href="https://www.instagram.com/pickmyuniversity/">Instagram</a>
          </span>
          <span className={styles.socialSpan}>
            <FaYoutube size={20} />
            <a href="https://www.youtube.com/@PickMyUniversity">Youtube</a>
          </span>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1701402977274!2d78.1485517!3d9.9197841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c51fa131adfd%3A0x3d6002f6240aa81a!2sPick%20My%20University%20-%20Nexus%20Overseas%20Education%20Consultant!5e0!3m2!1sen!2sin!4v1733920619116!5m2!1sen!2sin"
            className={styles.mapFrame}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {date.getFullYear()} All rights reserved | Powered by{" "}
        <a href="https://codesvera.com" target="_blank">
          <p className={styles.codesvera}>Codesvera</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
