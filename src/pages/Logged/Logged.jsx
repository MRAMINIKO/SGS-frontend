import React from "react";
import { Header } from "../../components/common/Header";

export function Logged() {
  return (
    <section className="vh-100">
      <Header />
      <div className="flex-grow-1">
        <h1>Bienvenidos a la SEJU</h1>
      </div>
    </section>
  );
}
