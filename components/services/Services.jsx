import React from "react";
import styles from "./Services.module.css";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const slidesData = [
    {
      id: 1,
      url: "/assets/universitySelection.png",
      alt: "university selection",
      iconUrl: "/assets/universitySelectionIcon.png",
      iconAlt: "university selection",
      heading: "University Selection",
      content:
        "Find the perfect MBBS program tailored to your goals and budget.",
    },
    {
      id: 2,
      url: "/assets/travelAccomodation.png",
      alt: "travel and accomodation",
      iconUrl: "/assets/travelAccomodationIcon.png",
      iconAlt: "travel and accomodation",
      heading: "Travel & Accomodation",
      content:
        "Assistance with travel bookings and  secure housing near your university.",
    },
    {
      id: 3,
      url: "/assets/admissionSupport.png",
      alt: "admission support",
      iconUrl: "/assets/admissionSupportIcon.png",
      iconAlt: "admission support",
      heading: "Admission Support",
      content: "Step-by-step guidance to ensure a smooth application process.",
    },
    {
      id: 4,
      url: "/assets/visaProcessing.png",
      alt: "visa processing",
      iconUrl: "/assets/visaProcessingIcon.png",
      iconAlt: "visa processing",
      heading: "Visa Processing",
      content:
        "Expert assistance to help you secure your student visa hassle-free.",
    },
    {
      id: 5,
      url: "/assets/academicGuidance.png", // Add your image URL
      alt: "academic guidance",
      iconUrl: "/assets/academicGuidanceIcon.png", // Add your icon URL
      iconAlt: "academic guidance",
      heading: "Academic Guidance",
      content: "Personalized support to help you excel in your MBBS journey.",
    },
  ];
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
          From application to arrival, experience a smooth transition with
          expert guidance tailored for aspiring MBBS students.
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
            {slidesData.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex-col gap-3 aspect-square items-center justify-center p-2 bg">
                      <div className={styles.imgContainer}>
                        <Image
                          className={styles.carouselImg}
                          src={item.url}
                          alt={item.alt}
                          fill
                        />
                      </div>
                      <div className={styles.carouselIconContainer}>
                        <img
                          className={styles.carouselIcon}
                          src={item.iconUrl}
                          alt={item.iconAlt}
                        />
                      </div>
                      <div className={styles.carouselContent}>
                        <h5 className={styles.carouselHeading}>
                          {item.heading}
                        </h5>
                        <p className={styles.carouselDesc}>{item.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className={styles.carouselButtons}>
            <span>
              <CarouselPrevious />
              <CarouselNext />
            </span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
