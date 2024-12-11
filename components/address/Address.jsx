import React from "react";
import styles from "./Address.module.css";
import Image from "next/image";

const Address = () => {
  return (
    <div className={styles.container}>
      <div className={styles.addrContainer}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/assets/addressImg.png"
              alt="Pick my university"
              fill
            />
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Address;
