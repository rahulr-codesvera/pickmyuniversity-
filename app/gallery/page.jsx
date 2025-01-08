"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import styles from "./gallery.module.css";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Gallery() {
  const onInit = () => {
    console.log("LightGallery has been initialized");
  };

  const images = [
    { id: 1, src: "/assets/gallery/img1.webp", alt: "Image 1" },
    { id: 2, src: "/assets/gallery/img2.webp", alt: "Image 2" },
    { id: 3, src: "/assets/gallery/img3.webp", alt: "Image 3" },
    { id: 4, src: "/assets/gallery/img4.webp", alt: "Image 4" },
    { id: 5, src: "/assets/gallery/img5.webp", alt: "Image 5" },
    { id: 6, src: "/assets/gallery/img6.webp", alt: "Image 6" },
    { id: 7, src: "/assets/gallery/img7.webp", alt: "Image 7" },
    { id: 8, src: "/assets/gallery/img8.webp", alt: "Image 8" },
    { id: 9, src: "/assets/gallery/img9.webp", alt: "Image 9" },
    { id: 10, src: "/assets/gallery/img10.webp", alt: "Image 10" },
    { id: 11, src: "/assets/gallery/img11.webp", alt: "Image 11" },
    { id: 12, src: "/assets/gallery/img12.webp", alt: "Image 12" },
    { id: 13, src: "/assets/gallery/img13.webp", alt: "Image 13" },
    { id: 14, src: "/assets/gallery/img14.webp", alt: "Image 14" },
  ];

  return (
    <div className={styles.galleryContainer}>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={styles.galleryGrid} // Add class for grid
      >
        {images.map((image) => (
          <a key={image.id} href={image.src}>
            <img
              className={styles.galleryImg}
              alt={image.alt}
              src={image.src}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

const Page = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionHeading}>
        A glimpse into your future journey
      </h2>
      <div className={styles.gridContainer}>
        <Gallery />
      </div>
    </div>
  );
};

export default Page;
