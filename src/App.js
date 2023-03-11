import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./context/Auth";
import Navegacion from "./routes";
import { Inicio } from "./pages/Inicio";

function App() {
  return (
    <AuthContextProvider>
      <Navegacion />
      <Inicio />
    </AuthContextProvider>
  );
}

export default App;
