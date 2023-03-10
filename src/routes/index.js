import { Switch, Route, Router } from "wouter";

export default function Navegacion() {
  return (
    <Router>
      <Switch>
        <Route path="/" />
        <Route path="/inscripcion" />
        <Route path="/miPerfil/:id" />
        <Route path="/login" />
        <Route path="/error" />
      </Switch>
    </Router>
  );
}
