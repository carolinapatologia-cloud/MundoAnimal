import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Galeria from "./pages/Galeria.jsx";
import SobreNos from "./pages/Sobre.jsx";
import Cameras from "./pages/Cameras.jsx";
import Matriculas from "./pages/Matriculas.jsx";
import Eventos from "./pages/Eventos.jsx";
import Novidades from "./pages/Novidades.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/cameras" element={<Cameras/>}/>
        <Route path="/matriculas" element={<Matriculas/>}/>
        <Route path="/eventos" element={<Eventos/>}/>
        <Route path="/novidades" element={<Novidades/>}/>
      </Routes>
    </Router>
  );
}

export default App;
