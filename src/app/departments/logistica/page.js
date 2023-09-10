import React from "react";
import logisticaIlustration from "@public/images/logistica-ilustration.png";
import Image from "next/image";
import styles from "./logistica.module.css";

export default function LogisticaPage() {
  return (
    <section>
      <h5 className={styles.title}>Logística</h5>
      <Image src={logisticaIlustration} width={300} />
    </section>
  );
}
