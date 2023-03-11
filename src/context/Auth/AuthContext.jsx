import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  dni: -1,
  nombre: "",
  apellido: "",
  mail: "",
  usuario: "",
  contrasenia: "",
  isAuth: false,
  tipoUsuario: 1,
});

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
      isAuth: true,
      tipoUsuario: 1,
    });
  }, []);

  return <AuthContext.Provider value={{ usuario }}>{children}</AuthContext.Provider>;
}
