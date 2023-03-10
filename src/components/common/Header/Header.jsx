import React from "react";
import "./header.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export function Header() {
  return (
    <header className="">
      <div className=""></div>
      <nav className="">
        <ListGroup>
          <ListGroupItem>Inico</ListGroupItem>
          <ListGroupItem>Sobre la seju</ListGroupItem>
          <ListGroupItem>Iniciar Sesión</ListGroupItem>
        </ListGroup>
      </nav>
    </header>
  );
}
