import { options } from "@/mocks/optionsAccordion.js";
import logo from "@public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { HeaderOptions } from "../HeaderOptions/HeaderOptions";
import { CustomOffcanvas } from "../Offcanvas/CustomOffcanvas";

export const Header = () => {
  return (
    <header className="d-flex align-items-center sticky-top mb-5 mb-md-0 px-2 py-3 text-bg-light">
      <Link
        href="/"
        className="text-decoration-none text-dark d-flex align-items-center"
      >
        <Image src={logo} className="me-3" width={50} alt="SEJu" />
        <h4 className="fw-bold">SeJu</h4>
      </Link>
      <div className="col-md d-none d-md-flex w-100"> {/* Oculta en dispositivos más grandes */}
        <HeaderOptions options={options} />
      </div>
      <div className="col-md d-flex d-md-none justify-content-end w-100">
        <CustomOffcanvas />
      </div>
    </header>
  );
};
