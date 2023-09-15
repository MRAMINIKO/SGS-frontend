"use client";

import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import facebook from "@public/assets/facebook-logo.svg";
import google from "@public/assets/google-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h2 className="text-center fw-bold">¡Bienvenido de vuelta!</h2>
      <Form className={styles.form}>
        <Form.Group>
          <Form.Control
            type="email"
            className="bg-transparent border-2"
            placeholder="Usuario"
          />
        </Form.Group>
        <InputGroup>
          <Form.Control
            type={isVisible ? "text" : "password"}
            className="bg-transparent border-2"
            placeholder="Contraseña"
          />
          <Button variant="secondary" onClick={() => setIsVisible(!isVisible)}>
            <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
          </Button>
        </InputGroup>
      </Form>
      <div className="d-flex w-100 justify-content-center">
        <Button variant="outline-secondary">Iniciar Sesión</Button>
      </div>
      <div>
        <div className="d-flex w-100 align-items-baseline justify-content-center my-5">
          <div className={styles.line} />
          <span>O continua con</span>
          <div className={styles.line} />
        </div>
        <div className="d-flex flex-column align-items-center">
          <Button variant="outline-secondary" className={styles.button}>
            <Image src={facebook} className="me-2" />
            Continuar con Facebook
          </Button>
          <Button variant="outline-secondary" className={styles.button}>
            <Image src={google} className="me-2" />
            Continuar con Google
          </Button>
          <label className={styles.question}>¿No tenés una cuenta?</label>
          <Link href="#" className="text-dark">
            Registrarme
          </Link>
        </div>
      </div>
    </>
  );
}
