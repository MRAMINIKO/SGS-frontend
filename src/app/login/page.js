"use client";

import React, { useState } from "react";
import { FormLogin } from "@/components/FormLogin/FormLogin";
import { AnotherLogin } from "@/components/FormLogin/AnotherLogin";

export default function LoginPage() {
  return (
    <>
      <h2 className="text-center fw-bold">¡Bienvenido de vuelta!</h2>
      <FormLogin />
      <AnotherLogin />
    </>
  );
}
