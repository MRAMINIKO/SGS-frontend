import { Switch, Route, Router } from "wouter";
import Logged from "pages/Logged";
import Inicio from "pages/Inicio";
import Login from "pages/Login";
import Error from "pages/Error";
import MiPerfil from "pages/MiPerfil";
import Header from "components/Header";
import { AuthContext } from "context/Auth";
import { useContext } from "react";

export default function Navegacion() {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      {usuario.isAuth && <Header />}
      <Router>
        <Switch>
          <Route path="/" component={Inicio} />
          <Route path="/Login" component={Login} />
          <Route path="/Logged" component={Logged} />
          <Route path="/miPerfil@:id" component={MiPerfil} />
          <Route path="/About" component={Logged} />
          <Route path="/Error" component={Error} />
        </Switch>
      </Router>
    </>
  );
}
