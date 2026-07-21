import React from "react";
import "../App.css";
import Footer from "../components/Footer.jsx";
import Wbotao from "../components/Wbotao.jsx";
import styles from "./Galeria.module.css";

export default function Galeria() {
  
  const imagens = [
    "quokka.png",
    "https://placedog.net/400/300",
    "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg",
    "https://i.pinimg.com/236x/10/21/f7/1021f779f177870dceea70dc0f9a6e9c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdQ1v6CyDpPUo_VUSR9gWriEppQdJCs2_Kk0QW_gpUv55jEBGbHSILFk2&s=10",
    "coca.jpg"
  ];

  return (
    <div className="app-container">
      <h1>Galeria de Imagens</h1>
      <div className="galeria-grid">
        {imagens.map((src, index) => (
          <div key={index} className="galeria-item">
            <img src={src} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </div>
      <Footer />
      <Wbotao />
    </div>
  );
}