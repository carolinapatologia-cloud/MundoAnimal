import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IdiomaContext } from "./IdiomaContext";
import Home from "./pages/Home.jsx";
import Galeria from "./pages/Galeria.jsx";
import SobreNos from "./pages/Sobre.jsx";
import Cameras from "./pages/Cameras.jsx";
import Matriculas from "./pages/Matriculas.jsx";
import Eventos from "./pages/Eventos.jsx";
import Novidades from "./pages/Novidades.jsx";
import BotaoIdioma from "./Components/BotaoIdioma.jsx";

function App() {
  const [idioma, setIdioma] = useState("pt");

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma }}>
      <Router>
        <BotaoIdioma />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/cameras" element={<Cameras />} />
          <Route path="/matriculas" element={<Matriculas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/novidades" element={<Novidades />} />
        </Routes>
      </Router>
    </IdiomaContext.Provider>
  );
}

export default App;