import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./context/Auth";
import Navegacion from "./routes";

function App() {
  return (
    <AuthContextProvider>
      <Navegacion />
    </AuthContextProvider>
  );
}

export default App;
