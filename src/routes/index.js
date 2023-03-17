import { Switch, Route, Router } from "wouter";
import { Logged } from "../pages/Logged";
import { Login } from "../pages/Login";
import Inicio from "../pages/Inicio/Inicio";

export default function Navegacion() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Inicio} />
        <Route path="/miPerfil/:id" />
        <Route path="/login" component={Login} />
        <Route path="/logged" component={Logged} />
        <Route path="/about" />
        <Route path="/error" />
      </Switch>
    </Router>
  );
}
