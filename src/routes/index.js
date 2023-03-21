import { Switch, Route, Router } from "wouter";
import Logged from "pages/Logged";
import Inicio from "pages/Inicio";
import Login from "pages/Login";

export default function Navegacion() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Inicio} />
        <Route path="/Login" component={Login} />
        <Route path="/Logged" component={Logged} />
        <Route path="/miPerfil@:id" component="" />
        <Route path="/About" component={Logged} />
        <Route path="/Error" component="" />
      </Switch>
    </Router>
  );
}
