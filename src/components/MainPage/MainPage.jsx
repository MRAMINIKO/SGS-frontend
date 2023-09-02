import Image from "next/image";
import React from "react";
import ilustration from "@public/img/portada.svg";
import { CustomCarousel } from "../CustomCarousel/CustomCarousel";
import styles from "./main.module.css";

export const MainPage = () => {
  return (
    <main className="align-items-center d-flex flex-column w-auto">
      <div className="d-flex flex-column">
        <h4 className="text-center fw-bold">
          Quiero fortalecer mis latidos a través de tu{" "}
          <span className="text-danger">corazón.</span>
        </h4>
        <p className="text-center">
          Registrate y enterate de todas nuestras actividades.
        </p>
      </div>
      <button className="btn btn-outline-dark fw-bold border-2">Iniciar</button>
      <Image src={ilustration} className="my-4" width={330} />
      <div className={styles.carouselContainer}>
        <h4 className="text-center text-white">Nuestros anteriores encuentros</h4>
        <CustomCarousel />
        {/* <ImageContainer src={image1} title="Peregrinación juvenil a Luján" /> */}
      </div>
    </main>
  );
};
