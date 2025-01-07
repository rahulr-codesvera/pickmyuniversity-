"use client";

import React, { useEffect, useState } from "react";
import styles from "./country.module.css";
import { useParams } from "next/navigation";
import { data } from "@/lib/data";
import University from "@/components/university/University";

const Page = () => {
  const [country, setCountry] = useState(null);
  const [active, setActive] = useState(null); // Active university ID
  const [selectedUni, setSelectedUni] = useState(null); // Selected university object
  const params = useParams();
  const { name } = params;

  useEffect(() => {
    const foundCountry = data.find(
      (item) => item?.name?.toLowerCase() === name?.toLowerCase()
    );
    if (foundCountry) {
      setCountry(foundCountry);
      const firstUniversity = foundCountry.universities[0]; // Default to first university
      setActive(firstUniversity?.id);
      setSelectedUni(firstUniversity);
    }
  }, [name]);

  const handleActive = (id) => {
    setActive(id); // Update active ID
    const uni = country.universities.find((item) => item.id === id);
    setSelectedUni(uni);
  };

  // Render a fallback while country data is loading
  if (!country || !selectedUni) {
    return (
      <div className="h-[60vh] w-full flex items-center justify-center">
        <p className={styles.errMsg}>Please wait!</p>
      </div>
    );
  }

  return (
    country && (
      <div className={styles.container}>
        <div
          className={styles.banner}
          style={{
            background: `url(${country.bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.overlay}></div>
          <h4 className={styles.countryName}>{country?.name.toUpperCase()}</h4>
          <div className={styles.btnContainer}>
            {country?.universities.map((item) => (
              <button
                key={item.id}
                className={
                  item.id === selectedUni?.id
                    ? styles.countryBtnActive
                    : styles.countryBtn
                }
                onClick={() => handleActive(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <University university={selectedUni} />
      </div>
    )
  );
};

export default Page;
