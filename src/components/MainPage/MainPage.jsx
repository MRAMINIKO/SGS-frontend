"use client";

import Image from "next/image";
import React from "react";
import ilustration from "@public/images/ilustracion-portada.svg";
import { CustomCarousel } from "../CustomCarousel/CustomCarousel";
import styles from "./main.module.css";
import { News } from "../News/News";
import { useRouter } from "next/navigation";

export const MainPage = () => {
  const navigation = useRouter();

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
      <button
        className="btn btn-outline-dark fw-bold border-2"
        onClick={() => navigation.push("/login")}
      >
        Iniciar
      </button>
      <Image src={ilustration} className="my-4" width={330} />
      <div className={styles.carouselContainer}>
        <h4 className="text-center text-white">
          Nuestros anteriores encuentros
        </h4>
        <CustomCarousel />
      </div>
      <section className="d-flex flex-column align-items-center container">
        <h4 className="fw-bold mb-4">Últimas novedades</h4>
        <News />
      </section>
    </main>
  );
};
