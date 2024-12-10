import React from "react";
import styles from "./Services.module.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.title}>
          <img
            className={styles.icon}
            src="/assets/servicesIcon.png"
            alt="our services"
          />
          <p className={styles.titleHeading}>Our Services</p>
        </div>
        <h3 className={styles.sectionHeading}>
          Simplifying your MBBS journey across borders
        </h3>
        <p className={styles.textContent}>
          Explore opportunities in Russia, Georgia, and Kyrgyzstan, where
          world-class education meets affordability and cultural diversity.{" "}
        </p>
      </div>
      <div className={styles.carouselBox}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
