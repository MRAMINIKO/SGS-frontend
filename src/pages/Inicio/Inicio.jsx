import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Logged } from "../Logged";
import { Login } from "../Login";

export function Inicio() {
  const { usuario } = useContext(AuthContext);

  return usuario.isAuth ? <Logged /> : <Login />;
}
