import React from "react";
import MenuHeader from "./MenuHeader";

export default function Header() {
  return (
    <header className="p-2 border border-bottom d-flex w-100 justify-content-between">
      <span>SEJU</span>
      <MenuHeader />
    </header>
  );
}
