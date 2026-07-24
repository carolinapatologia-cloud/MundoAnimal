import React from "react";
import "../App.css";
import styles from "./Sobre.module.css";
import Footer from "../Components/Footer.jsx";
import Wbotao from "../Components/Wbotao.jsx";
import Menu from "../Components/Menu.jsx";

export default function SobreNos() {
  return (
    <><Menu /><div className={styles.sobreContainer}>
      <h1 className={styles.titulo}>Sobre Nós</h1>
      <div className={styles.conteudo}>
        <img
          src="saladeaula.png"
          alt="Sala de aula Mundo Animal"
          className={styles.imagem} />
        <p className={styles.texto}>
          No <strong>Mundo Animal</strong>, acreditamos que aprender pode ser uma aventura cheia de alegria!
          Nossa sala de aula é um espaço mágico onde cada pet descobre novas brincadeiras, faz amigos e
          vive momentos inesquecíveis. Aqui, o riso é o som mais ouvido e o carinho é a nossa principal lição.
          🐾✨
        </p>
      </div>
      <Footer />
      <Wbotao />
    </div></>
  );
}