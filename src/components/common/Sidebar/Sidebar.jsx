import React from "react";
import { Offcanvas } from "react-bootstrap";

export function Sidebar() {
  return (
    <Offcanvas placement="start">
      <Offcanvas.Header></Offcanvas.Header>
      <Offcanvas.Body></Offcanvas.Body>
    </Offcanvas>
  );
}