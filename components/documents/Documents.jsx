import React from "react";
import styles from "./Documents.module.css";
import Image from "next/image";

const Documents = () => {
  const docuList = [
    "Passport Front & Back Page OR Aadhar Card",
    "12th Mark Sheet (If Available)",
    "10th Marksheet ",
    "Passport Size Photo (PDF, White Background)",
    "NEET Scorecard (If Available)",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/assets/documentsImg.png"
          alt="Pick my university"
          fill
        />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <img
            className={styles.icon}
            src="/assets/aboutUsIcon.png"
            alt="top destinations"
          />
          <p className={styles.titleHeading}>Things to Remember</p>
        </div>
        <h3 className={styles.sectionHeading}>
          Documents Required for Admission
        </h3>
        <ul className={styles.docuList}>
          {docuList.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents;
