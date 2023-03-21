import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation } from "wouter";
import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import { AuthContext } from "context/Auth";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [, navigate] = useLocation();

  const contexto = useContext(AuthContext);

  function handleSubmit() {
    //sacar a hook
    //const form = document.querySelector(login ? "#form-login" : "#form-register");

    contexto.login();

    navigate("/Logged");
  }

  return (
    <div className="vh-100">
      <Card className="w-100 h-100">
        <Card.Header>
          <h1 className="me-4">{login ? "Inicia sesión en la seju" : "Forma parte de la seju"}</h1>
          <p>Para formar parte de la seju, es necesario completar ciertos datos</p>
        </Card.Header>
        <Card.Body className="d-flex flex-column justify-content-between">
          {login ? <LoginForm /> : <RegisterForm />}
          <div className="d-flex flex-column align-items-end">
            <Button onClick={handleSubmit}>{login ? "Iniciar sesión" : "Crear cuenta"}</Button>
            <p className="mt-3">
              {login ? "No eres parte de la seju?" : "Ya eres parte de la seju?"}
              <button className="border-0 bg-white" onClick={() => setLogin(!login)}>
                {login ? "Forma parte!" : "Iniciá sesión!"}
              </button>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
