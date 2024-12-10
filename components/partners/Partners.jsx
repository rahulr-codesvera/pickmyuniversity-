import React from "react";
import styles from "./Partners.module.css";
import Image from "next/image";

const Partners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingSection}>
        <div className={styles.title}>
          <img
            className={styles.icon}
            src="/assets/partneredWith.png"
            alt="Partnered universities"
          />
          <p className={styles.partneredWith}>Partnered with</p>
        </div>
        <h3 className={styles.sectionHeading}>
          Trusted partnership with leading medical
          <br />
          universities
        </h3>
      </div>
      <div className={styles.map}>
        <img
          className={styles.mapImage}
          src="/assets/map.png"
          alt="partner universities"
        />
      </div>
    </div>
  );
};

export default Partners;
