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
  const faq = [
    {
      question:
        "Which country is the best for studying MBBS abroad at low fees?",
      answer: "Russia and Kyrgyzstan are some of the best options.",
    },
    {
      question: "Can I pursue MBBS abroad within a budget of 20 lakhs?",
      answer:
        "Yes, it is possible to pursue an MBBS degree abroad within a budget of 20 lakhs, with universities offering fees starting as low as 2 lakhs per year.",
    },
    {
      question: "What are the NEET marks required for MBBS abroad?",
      answer: "The minimum qualifying marks in NEET are sufficient.",
    },
    {
      question: "Can I study MBBS abroad with an education loan?",
      answer: "Yes, education loans are available for studying MBBS abroad.",
    },
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
          style={{
            background: `url(${university.imgUrl})`,
          }}
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
        {university.feeStructure && (
          <div className={styles.feeContainer}>
            <h3 className={styles.uniName}>Fee Structure</h3>
            {university.feeImg && (
              <div className={styles.feeImgContainer}>
                <Image
                  className={styles.feeImg}
                  src={university.feeImg}
                  alt="pick my university"
                  fill
                />
              </div>
            )}
            <div className={styles.feeBox}>
              <ul className="flex flex-col w-full rounded-2xl bg-[#a9d2fb] p-6 gap-4 md:gap-0">
                {university.feeStructure.map((item, index) => (
                  <li key={index} className={styles.feeListItem}>
                    <p className={styles.key}>{item.year}:</p>
                    <p className={styles.value}>{item.fee}</p>
                  </li>
                ))}
              </ul>
              {university.hostelFee && (
                <ul className="flex flex-col w-full rounded-2xl bg-[#a9d2fb] p-6 gap-4 md:gap-0">
                  {university.hostelFee.map((item, index) => (
                    <li key={index} className={styles.feeListItem}>
                      <p className={styles.key}>{item.key}:</p>
                      <p className={styles.value}>{item.fee}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {university.notes && (
              <div className="flex flex-col gap-1">
                <h3 className={styles.rectorsHeading}>Notes</h3>
                <ul>
                  {university.notes.map((item, index) => (
                    <li key={index} className={styles.feeListItem}>
                      <p className={styles.noteText}>
                        <span className="mr-1">{index + 1}.</span>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
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
          {faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
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
