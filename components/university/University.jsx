"use client";

import React from "react";
import styles from "./University.module.css";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const University = ({ university }) => {
  const colorArray = [
    "#C4DF9D",
    "#FE866A",
    "#6ACADD",
    "#AD9DE2",
    "#FFE384",
    "#F5D4D8",
  ];
  return (
    <div className={styles.uniBox}>
      <div className={styles.container}>
        <div className={styles.uniNameBox}>
          <div className={styles.uniId}>{university.id + 1}</div>
          <h4 className={styles.uniName}>{university.name}</h4>
        </div>
        {university.socials && (
          <div className={styles.socials}>
            {university.socials.map((item) => (
              <a
                className={styles.socialLink}
                key={item.id}
                href={item.link}
                target="_blank"
              >
                <img
                  className={styles.icon}
                  src={item.imgUrl}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </a>
            ))}
          </div>
        )}
        <div
          className={styles.aboutUni}
          style={{ background: `url(${university.imgUrl})` }}
        >
          <div className={styles.overlay}></div>
          <div className={styles.aboutContent}>
            <h6 className={styles.aboutHeading}>About University</h6>
            <p className={styles.aboutText}>{university.about}</p>
          </div>
        </div>
        <div className={styles.rectorsMsgBox}>
          <div className={styles.rectorsImgBox}>
            <Image
              className={styles.rectorsImg}
              src={university.featuredImg}
              alt={university.name}
              fill
            />
          </div>
          <div className={styles.rectorsMsgContent}>
            <h4 className={styles.rectorsHeading}>
              {university.featuredTitle}
            </h4>
            <p className={styles.rectorsMsgText}>{university.featuredMsg}</p>
          </div>
        </div>
      </div>
      <div className={styles.contentBoxes}>
        {university.contentBox.map((item) => (
          <div key={item.id} className={styles.contentBox}>
            <p className={styles.contentBoxTitle}> {item.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.highlights}>
        <h4 className={styles.rectorsHeading}>Highlights</h4>
        <div className={styles.highlightsBox}>
          {university.highlights.map((item) => (
            <div key={item.id} className={styles.highlightCard}>
              <div
                className={styles.highlightCardNum}
                style={{ backgroundColor: `${colorArray[item.id - 1]}` }}
              >
                {item.id}
              </div>
              <div
                className={styles.highlightCardContent}
                style={{ backgroundColor: `${colorArray[item.id - 1]}` }}
              >
                <div className={styles.highlightCardTitle}>{item.title}</div>
                <div className={styles.highlightCardText}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.faqBox}>
        <Accordion type="single" collapsible className="w-full">
          {university.faq.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default University;
