import React from "react";
import styles from "./Testimonials.module.css";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const YouTubeThumbnail = ({ videoId }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="w-full h-full relative">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <Image
          className="object-cover"
          src={thumbnailUrl}
          fill
          alt="Testimonial"
        />
      </a>
      <div className={styles.videoOverlay}>
        <FaPlay className="text-white" size={40} />
      </div>
    </div>
  );
};

export default YouTubeThumbnail;
