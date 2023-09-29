import React from "react";
import styles from "./carousel.module.css";
import { CustomCarousel } from "./CustomCarousel";

export const CarouselContainer = () => {
  return (
    <div className={styles.carouselContainer}>
      <h4 className="text-center text-white">Nuestros anteriores encuentros</h4>
      <CustomCarousel />
    </div>
  );
};
