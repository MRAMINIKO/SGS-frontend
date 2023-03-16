import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "wouter";

export function Header() {
  return (
    <header className="p-2 d-flex justify-content-between border border-bottom">
      <div className="">
        <Link to="/prueba">Prueba</Link>
      </div>
      <ListGroup className="list-group-horizontal">
        <ListGroup.Item>
          <Link to="/" className="text-decoration-none text-dark">
            Inicio
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/about" className="text-decoration-none text-dark">
            Sobre la seju
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/login" className="text-decoration-none text-dark">
            Iniciar sesión
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </header>
  );
}
