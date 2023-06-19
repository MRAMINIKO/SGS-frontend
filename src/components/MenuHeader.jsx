import { AuthContext } from "context/Auth";
import React, { useContext } from "react";
import { Dropdown, ListGroup } from "react-bootstrap";

export default function MenuHeader() {
  const { usuario, logout } = useContext(AuthContext);

  return (
    usuario.isAuth && (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <ListGroup className="list-group-flush">
            <a className="list-group-item list-group-item-action" href={"/miPerfil@" + usuario.dni}>
              Mi perfil
            </a>
            <button onClick={logout} className="list-group-item list-group-item-action">
              Cerrar sesión
            </button>
          </ListGroup>
        </Dropdown.Menu>
      </Dropdown>
    )
  );
}
