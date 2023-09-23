"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import newImage from "@public/assets/news.svg";

export const News = () => {
  return (
    <Card className="w-75 container">
      <Card.Body className="d-flex flex-column align-items-center justify-content-between">
        <Image src={newImage} alt="" />
        <Card.Title>Noticia #1</Card.Title>
        <div className="w-25 bg-danger my-4" style={{ height: "0.3rem" }}></div>
        <Card.Text className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          dolor massa, pulvinar at lacus quis, porta ultrices risus.
        </Card.Text>
        <Card.Link
          className="border border-info border-2 rounded text-decoration-none px-2 py-1 text-info"
          href="#"
        >
          Más información &gt;
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
