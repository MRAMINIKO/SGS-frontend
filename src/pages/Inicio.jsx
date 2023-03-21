import React, { useContext } from "react";
import { AuthContext } from "context/Auth";
import Logged from "pages/Logged";
import Login from "pages/Login";

export default function Inicio() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Logged /> : <Login />;
}
