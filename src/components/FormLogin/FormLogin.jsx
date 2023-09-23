"use client";

import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "./form-login.module.css";

export const FormLogin = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Form className={styles.form}>
        <Form.Group>
          <Form.Control
            type="email"
            className="bg-transparent border-2"
            placeholder="Usuario"
            autoComplete="Username"
          />
        </Form.Group>
        <InputGroup>
          <Form.Control
            type={isVisible ? "text" : "password"}
            className="bg-transparent border-2"
            placeholder="Contraseña"
            autoComplete="current-password"
          />
          <Button variant="secondary" onClick={() => setIsVisible(!isVisible)}>
            <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
          </Button>
        </InputGroup>
      </Form>
      <div className="d-flex w-100 justify-content-center">
        <Button variant="outline-secondary">Iniciar Sesión</Button>
      </div>
    </>
  );
};
