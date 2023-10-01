"use client";
import { options } from "@/mocks/optionsAccordion.js";
import logo from "@public/assets/logo.svg";
import menu from "@public/assets/menu.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { CustomAccordion } from "../CustomAccordion/CustomAccordion";

export const CustomOffcanvas = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleNavigateHome = () => {
    handleClose();
    router.replace("/");
  };

  return (
    <>
      <Button variant="" onClick={handleShow}>
        <Image src={menu} alt="" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="justify-content-between" closeButton>
          <Button onClick={handleNavigateHome} variant="">
            <Image src={logo} width={50} alt="SEJU" />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CustomAccordion
            items={options}
            hasFlush
            closeOffcanvas={handleClose}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
