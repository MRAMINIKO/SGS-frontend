"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import image1 from "@public/img/image 3.png";
import image2 from "@public/img/image 3-1.png";
import image3 from "@public/img/image 3-2.png";

export const CustomCarousel = () => {
  return (
    <Carousel indicators={false} controls={false} interval={null}>
      <Carousel.Item>
        <ImageContainer src={image1} title="Peregrinación juvenil a Luján" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={image2} title="Peregrinación juvenil a Luján" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={image3} title="Peregrinación juvenil a Luján" />
      </Carousel.Item>
    </Carousel>
  );
};
