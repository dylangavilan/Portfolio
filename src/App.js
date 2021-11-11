import Home from "./components/Home";
import About from "./components/About";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="bg-fondo">
      <div className="App max-w-screen-xl m-auto">
        <Home />
        <About />
        <Skills />
        <Proyectos />
      </div>
    </div>
  );
}

export default App;
