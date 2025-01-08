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
        "Our expert team helps you find the best MBBS programs tailored to your goals, with 25+ university tie-ups across Russia, Georgia, Philippines, Kyrgyzstan, Uzbekistan, and Europe.",
    },
    {
      id: 2,
      url: "/assets/travelAccomodation.png",
      alt: "travel and accomodation",
      iconUrl: "/assets/travelAccomodationIcon.png",
      iconAlt: "travel and accomodation",
      heading: "Travel & Accomodation",
      content:
        "We handle your travel and stay arrangements, from flight bookings to finding safe accommodations, ensuring a hassle-free transition to your university—all services provided conveniently under one roof.",
    },
    {
      id: 3,
      url: "/assets/admissionSupport.png",
      alt: "admission support",
      iconUrl: "/assets/admissionSupportIcon.png",
      iconAlt: "admission support",
      heading: "Admission Support",
      content:
        "We guide you through the admission process, ensuring a seat in top universities abroad. Services include application reviews, offer letters, and reliable admission assistance tailored to your needs.",
    },
    {
      id: 4,
      url: "/assets/visaProcessing.png",
      alt: "visa processing",
      iconUrl: "/assets/visaProcessingIcon.png",
      iconAlt: "visa processing",
      heading: "Visa Processing",
      content:
        "We simplify visa processes by assisting with paperwork, immigration, and approvals, ensuring a smooth and hassle-free application experience handled efficiently by our expert team.",
    },
    {
      id: 5,
      url: "/assets/academicGuidance.png", // Add your image URL
      alt: "academic guidance",
      iconUrl: "/assets/academicGuidanceIcon.png", // Add your icon URL
      iconAlt: "academic guidance",
      heading: "Pre-Departure Guidance",
      content:
        "Our pre-departure sessions cover cultural adjustments, financial management, and university tips, ensuring you adapt smoothly and transition effortlessly to life abroad.",
    },
    {
      id: 6,
      url: "/assets/onCampusAssistance.jpg", // Add your image URL
      alt: "on-campus assistance",
      iconUrl: "/assets/universitySelectionIcon.png", // Add your icon URL
      iconAlt: "on-campus assistance",
      heading: "On-Campus Assistance",
      content:
        "From airport pickups to settling into your accommodation, we ensure you feel supported even after you’ve reached your destination. Our team remains accessible for any assistance you may need.",
    },
    {
      id: 7,
      url: "/assets/loanFinancialGuidance.jpg", // Add your image URL
      alt: "Loan & Financial Guidance",
      iconUrl: "/assets/academicGuidanceIcon.png", // Add your icon URL
      iconAlt: "Loan & Financial Guidance",
      heading: "Loan & Financial Guidance",
      content:
        "We simplify obtaining educational loans for overseas education, helping secure the necessary funds so you can focus on your studies without the financial stress.",
    },
    {
      id: 8,
      url: "/assets/studentMentorship.jpg", // Add your image URL
      alt: "Student Mentorship Programs",
      iconUrl: "/assets/universitySelectionIcon.png", // Add your icon URL
      iconAlt: "Student Mentorship Programs",
      heading: "Student Mentorship Programs",
      content:
        "We simplify obtaining educational loans for overseas education, helping secure the necessary funds so you can focus on your studies without the financial stress.",
    },
  ];
  return (
    <div className={styles.container} id="services">
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
