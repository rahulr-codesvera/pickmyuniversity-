import React from "react";
import styles from "./About.module.css";
import Image from "next/image";

const About = () => {
  const statsArray = [
    {
      id: 1,
      url: "/assets/experience.png",
      title: "10+",
      subtitle: "Years of experience",
      alt: "about us",
    },
    {
      id: 2,
      url: "/assets/placed.png",
      title: "15K+",
      subtitle: "Students placed",
      alt: "about us",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          <img
            className={styles.icon}
            src="/assets/aboutUsIcon.png"
            alt="top destinations"
          />
          <p className={styles.titleHeading}>About us</p>
        </div>
        <h3 className={styles.sectionHeading}>
          Why choose Pick My University?
        </h3>
        <p className={styles.textContent}>
          At Pick My University, we are dedicated to helping aspiring medical
          professionals fulfill their dreams. With partnerships across top
          universities in Georgia , Kyrgyzstan, and Russia, we ensure a smooth
          and transparent admission process. Your success is our priority.
        </p>
        <button className={styles.button}>Contact Us</button>
        <div className={styles.statsBox}>
          {statsArray.map((item) => (
            <div className={styles.stat} key={item.id}>
              <img className={styles.statImg} src={item.url} alt="about us" />
              <div className={styles.statData}>
                <h5>{item.title}</h5>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.aboutImg}
          src="/assets/aboutUs.png"
          alt="about us"
          fill
        />
      </div>
    </div>
  );
};

export default About;
