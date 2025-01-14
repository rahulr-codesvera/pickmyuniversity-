import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const loading = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/assets/loading.gif"
        alt="loading"
        width={400}
        height={400}
        unoptimized
      />
    </div>
  );
};

export default loading;
