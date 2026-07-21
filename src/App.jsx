import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Galeria from "./pages/Galeria.jsx";
import SobreNos from "./pages/Sobre.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/sobre" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}

export default App;
