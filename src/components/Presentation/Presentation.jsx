import React from "react";
import ilustration from "@public/images/ilustracion-portada.svg";
import Image from "next/image";

export const Presentation = ({ onClick }) => {
  return (
    <div className="row px-4 align-items-md-center">
      <div className="col-md-6 d-flex flex-column align-items-center text-center text-md-start">
        <h4>
          Quiero fortalecer mis latidos a través de tu{" "}
          <span className="text-danger">corazón.</span>
        </h4>
        <p className="w-100">
          Registrate y enterate de todas nuestras actividades.
        </p>
        <button
          type="button"
          className="btn btn-outline-dark fw-bold border-2 align-self-md-start"
          onClick={onClick}
        >
          Iniciar
        </button>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <Image
          src={ilustration}
          className="my-4"
          width={330}
          alt="illustration - people draw"
        />
      </div>
    </div>
  );
};
