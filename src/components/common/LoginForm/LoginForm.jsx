import React from "react";
import { Form } from "react-bootstrap";

export function LoginForm() {
  return (
    <Form id="form-login">
      <Form.Label htmlFor="email">
        Email <small className="text-danger">*</small>
      </Form.Label>
      <Form.Control id="email" placeholder="Email... " required name="email" type="email" />
      <Form.Label htmlFor="contrasenia">
        Contraseña <small className="text-danger">*</small>
      </Form.Label>
      <Form.Control
        id="contrasenia"
        placeholder="Contraseña..."
        type="password"
        required
        name="contrasenia"
      />
    </Form>
  );
}
