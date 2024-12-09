"use client";

import React from "react";
import styles from "./banner.module.css";
import "./embla.css";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import ContactForm from "../contactForm/ContactForm";

const Banner = () => {
  const options = { dragFree: true, loop: true };
  const slides = [
    { id: 1, url: "/assets/slider1.png", alt: "pick my university" },
    { id: 2, url: "/assets/slider2.png", alt: "pick my university" },
    { id: 3, url: "/assets/slider3.png", alt: "pick my university" },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  return (
    <div className={styles.container}>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((item) => (
              <div className="embla__slide" key={item.id}>
                <div className="embla__slide__number">
                  <Image
                    className={styles.bannerImage}
                    src={item.url}
                    alt={item.alt}
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.content}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Banner;
