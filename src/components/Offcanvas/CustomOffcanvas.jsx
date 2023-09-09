"use client";
import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import menu from "@public/asset/menu.svg";
import logo from "@public/img/logo.svg";
import Image from "next/image";
import { CustomAccordion } from "../CustomAccordion/CustomAccordion";
import { options } from "@/mocks/optionsAccordion.js";

export const CustomOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        <Image src={menu} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="justify-content-between" closeButton>
          <a href="/">
            <Image src={logo} />
          </a>
          {/* <Image src={close} /> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CustomAccordion items={options} hasFlush />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
