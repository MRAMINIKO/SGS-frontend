import React from "react";
import "./header.css";
import { ListGroup } from "react-bootstrap";
import { Link } from "wouter";

export function Header() {
  return (
    <header className="p-2 d-flex justify-content-between">
      <div className="">
        <Link to="/prueba">Prueba</Link>
      </div>
      <ListGroup className="list-group-flush">
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
