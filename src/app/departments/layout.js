import React from "react";

export default function Layout({ children, departmentName }) {
  return (
    <section>
      {departmentName}
      {children}
    </section>
  );
}
