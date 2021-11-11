import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <div>
      <Home></Home>
      <About />
    </div>
  );
}

export default App;
