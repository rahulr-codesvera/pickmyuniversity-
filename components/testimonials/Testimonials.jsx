"use client";
import React from "react";
import styles from "./Testimonials.module.css";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          <img
            className={styles.icon}
            src="/assets/testimonialsIcon.png"
            alt="pick my university"
          />
          <p className={styles.titleHeading}>Testimonials</p>
        </div>
        <h3 className={styles.sectionHeading}>
          Stories of success <br />
          from our students
        </h3>
        <p className={styles.textContent}>
          Discover how our students achieved their dreams through determination,
          support, and world-class education abroad.
        </p>
      </div>
      <div className={styles.right}>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className={styles.TestimonialsContainer}>
                        <div className={styles.testimonialsTop}>
                          <div className={styles.userImg}>
                            <Image
                              className={styles.userImage}
                              src="/assets/user1.png"
                              alt="testimonial"
                              fill
                            />
                          </div>
                          <div className={styles.userNameBox}>
                            <h6 className={styles.userName}>John Doe</h6>
                            <p className={styles.userInfo}>Company CEO</p>
                          </div>
                        </div>
                        <div className={styles.rating}>
                          <Image
                            className={styles.stars}
                            src="/assets/stars.png"
                            alt="pick my university"
                            fill
                          />
                        </div>
                        <p className={styles.testimonialsContent}>
                          &quot;I&apos;ve been consistently impressed with the
                          quality of service provided by this website. They have
                          exceeded my expectations and delivered exceptional
                          results. Highly recommended!&quot;
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
