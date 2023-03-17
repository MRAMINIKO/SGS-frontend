import { useContext } from "react";
import { Switch, Route, Router } from "wouter";
import { Logged } from "../pages/Logged";
import { Login } from "../pages/Login";
import { AuthContext } from "../context/Auth/AuthContext";

export default function Navegacion() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/" component={isAuth ? Logged : Login} />
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
