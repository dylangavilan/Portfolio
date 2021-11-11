import Home from "./components/Home";
import About from "./components/About";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="bg-fondo">
      <Home />
      <About />
      <Skills />
      <Proyectos />
    </div>
  );
}

export default App;
