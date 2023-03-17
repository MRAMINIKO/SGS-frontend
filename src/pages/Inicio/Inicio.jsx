import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Logged } from "../Logged";
import { Login } from "../Login";

export default function Inicio() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Logged /> : <Login />;
}
