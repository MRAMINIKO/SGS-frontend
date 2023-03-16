import { Switch, Route, Router } from "wouter";
import { Logged } from "../pages/Logged";
import { Login } from "../pages/Login";

export default function Navegacion() {
  return (
    <Router>
      <Switch>
        <Route path="/" />
        <Route path="/inscripcion" />
        <Route path="/miPerfil/:id" />
        <Route path="/login" component={Login} />
        <Route path="/logged" component={Logged} />
        <Route path="/about" />
        <Route path="/error" />
        <Route path="/prueba" />
      </Switch>
    </Router>
  );
}
