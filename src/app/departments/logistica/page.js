import React from "react";
import logisticaIlustration from "@public/images/ilustracion-logistica.svg";
import Image from "next/image";
import styles from "./logistica.module.css";

export default function LogisticaPage() {
  return (
    <section>
      <h5 className={styles.title}>Logística</h5>
      <Image src={logisticaIlustration} width={300} alt="logistic - logistic illustration" />
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in.
      </p>
    </section>
  );
}
