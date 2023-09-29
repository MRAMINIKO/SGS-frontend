"use client";
import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import menu from "@public/assets/menu.svg";
import logo from "@public/assets/logo.svg";
import Image from "next/image";
import { CustomAccordion } from "../CustomAccordion/CustomAccordion";
import { options } from "@/mocks/optionsAccordion.js";
import { useRouter } from "next/navigation";

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