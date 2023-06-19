import React from "react";
import { Form } from "react-bootstrap";

export default function RegisterForm() {
  return (
    <Form id="form-register">
      <Form.Group className="row">
        <Form.Group className="col">
          <Form.Label htmlFor="nombre">
            Nombre <small className="text-danger">*</small>
          </Form.Label>
          <Form.Control id="nombre" placeholder="Nombre..." required name="nombre" />
        </Form.Group>
        <Form.Group className="col">
          <Form.Label htmlFor="apellido">
            Apellido <small className="text-danger">*</small>
          </Form.Label>
          <Form.Control id="apellido" placeholder="Apellido..." required name="apellido" />
        </Form.Group>
      </Form.Group>
      <Form.Label htmlFor="email">
        Email <small className="text-danger">*</small>
      </Form.Label>
      <Form.Control id="email" placeholder="Email..." type="email" required name="email" />
      <Form.Label htmlFor="telefono">
        Teléfono <small className="text-danger">(opcional)</small>
      </Form.Label>
      <Form.Control id="telefono" placeholder="Teléfono... " name="telefono" />
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
