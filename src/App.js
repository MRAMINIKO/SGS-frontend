import "./App.css";
import Navegacion from "./routes";
import { Header } from "./components/common/Header";

function App() {
  return (
    <div className="App">
      <Navegacion />
      <Header />
      <main>
        <sidebar></sidebar>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
