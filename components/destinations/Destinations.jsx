import styles from "./Destinations.module.css";
import React from "react";
import { CgArrowRight } from "react-icons/cg";
import Link from "next/link";

const Destinations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          <img
            className={styles.icon}
            src="/assets/destinations.png"
            alt="top destinations"
          />
          <p className={styles.titleHeading}>Countries</p>
        </div>
        <h3 className={styles.sectionHeading}>Top MBBS destinations</h3>
        <p className={styles.textContent}>
          Explore opportunities in Russia, Georgia, and Kyrgyzstan, where
          world-class education meets affordability and cultural diversity.{" "}
        </p>
        <div className={styles.linksContainer}>
          <Link className={styles.countryLink} href="/countries/russia">
            <p>Russia</p>
            <CgArrowRight />
          </Link>
          <Link className={styles.countryLink} href="/countries/georgia">
            <p>Georgia</p>
            <CgArrowRight />
          </Link>
          <Link className={styles.countryLink} href="/countries/kyrgyzstan">
            <p>Kyrgyzstan</p>
            <CgArrowRight />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.laptopScreen}>
          <video
            className={styles.video}
            src="/assets/destinations.mp4"
            autoPlay
          />
          <img
            className={`${styles.laptopBase} max-w-none`}
            src="/assets/laptopBase.png"
            alt="countries"
          />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
