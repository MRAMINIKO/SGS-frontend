"use client";

import React from "react";
import { News } from "@comps/News/News";
import { Presentation } from "@comps/Presentation/Presentation";
import { CarouselContainer } from "@comps/CustomCarousel/CarouselContainer";
import { useRouter } from "next/navigation";

export const MainPage = () => {

  const navigation = useRouter();

  return (
    <main className="align-items-center d-flex flex-column w-auto">
      <Presentation onClick={() => navigation.push("/login")} />
      <CarouselContainer />
      <section className="d-flex flex-column align-items-center container">
        <h4 className="fw-bold mb-4">Últimas novedades</h4>
        <News />
      </section>
    </main>
  );
};
