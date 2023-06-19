import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    setUsuario({
      dni: 12345678,
      nombre: "Ejemplo",
      apellido: "Ejemplo 1",
      mail: "ejemplo@gmail.com",
      usuario: "mraminiko",
      contrasenia: "1234",
      isAuth: false,
      tipoUsuario: 1,
    });
  }, []);

  const login = () => {
    setUsuario({ ...usuario, isAuth: true });
  };

  const loguot = () => {
    setUsuario({ ...usuario, isAuth: false });
  };

  return <AuthContext.Provider value={{ usuario, login, loguot }}>{children}</AuthContext.Provider>;
}
