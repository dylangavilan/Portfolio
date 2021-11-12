import Home from "./components/Home";
import About from "./components/About";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-fondo ">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Proyectos />
    </div>
  );
}

export default App;
