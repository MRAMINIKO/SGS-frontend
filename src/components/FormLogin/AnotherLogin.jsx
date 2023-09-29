import React from "react";
import styles from "./form-login.module.css";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import facebook from "@public/assets/facebook-logo.svg";
import google from "@public/assets/google-logo.svg";

export const AnotherLogin = () => {
  return (
    <div>
      <div className="d-flex w-100 align-items-baseline justify-content-center my-5">
        <div className={styles.line} />
        <span>O continua con</span>
        <div className={styles.line} />
      </div>
      <div className="d-flex flex-column align-items-center">
        <Button variant="outline-secondary" className={styles.button}>
          <Image src={facebook} className="me-2" alt="facebook" />
          Continuar con Facebook
        </Button>
        <Button variant="outline-secondary" className={styles.button}>
          <Image src={google} className="me-2" alt="google" />
          Continuar con Google
        </Button>
        <label className={styles.question}>¿No tenés una cuenta?</label>
        <Link href="#" className="text-dark">
          Registrarme
        </Link>
      </div>
    </div>
  );
};
