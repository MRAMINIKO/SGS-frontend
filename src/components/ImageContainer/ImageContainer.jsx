import Image from "next/image";
import React from "react";

export const ImageContainer = ({ src, title }) => {
  return (
    <div className="p-3 my-4 rounded d-flex flex-column align-items-center justify-content-between bg-light">
      <Image src={src} className="mb-2" />
      <p className="m-0 fw-bold">{title}</p>
    </div>
  );
};
