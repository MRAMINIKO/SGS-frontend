import Image from "next/image";
import React from "react";
import logo from "@public/assets/logo-blanco.svg";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className="text-bg-dark px-3 py-5 mt-5 mt-auto">
      <div className="text-start d-flex align-items-center w-25">
        <Image src={logo} className="me-3" alt="SEJU" />
        <h4 className="fw-bold m-0">SeJu</h4>
      </div>
      <div className={styles.container_info_adicional}>
        <p>Semana de la Juventud</p>
        <p>Organización sin fines de lucro</p>
        <p>Todos los derechos reservados</p>
      </div>
      <h5 className="fw-bold m-0">Turdera, Buenos Aires</h5>
    </footer>
  );
};
