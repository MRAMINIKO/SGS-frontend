import Image from "next/image";
import React from "react";
import logo from "@public/assets/logo.svg";
import { CustomOffcanvas } from "../Offcanvas/CustomOffcanvas";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between sticky-top mb-5 mb-md-0 px-2 py-3 text-bg-light">
      <Link
        href="/"
        className="text-decoration-none text-dark d-flex align-items-center"
      >
        <Image src={logo} className="me-3" width={50} alt="SEJu" />
        <h4 className="fw-bold">SeJu</h4>
      </Link>
      <CustomOffcanvas />
    </header>
  );
};