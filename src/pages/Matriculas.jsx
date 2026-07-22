import React from "react";
import "../App.css";
import styles from "./Sobre.module.css";
import Footer from "../components/Footer.jsx";
import Wbotao from "../components/Wbotao.jsx";
import Menu from "../components/Menu.jsx";

export default function Matriculas() {
  return (
      <><Menu /><div className={styles.sobreContainer}>
          <h1 className={styles.titulo}>MATRICULE SEU PET</h1>
          <div className={styles.conteudo}>
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e43Oy0efqbzTdM-iflWm7pzfX-WuRyN-lsTzwUqokp44sgquLFN17aY&s=10"
                  alt="Formando"
                  className={styles.imagem} />
              <p className={styles.texto}>
                  No <strong>Mundo Animal</strong>, acreditamos que aprender pode ser uma aventura cheia de alegria!
                  Nosso espaço é mágico onde cada pet descobre novas brincadeiras, faz amigos e
                  vive momentos inesquecíveis. Aqui, o riso é o som mais ouvido e o carinho é a nossa principal lição.
                  Mande uma mensagem pelo nosso WhatsApp e faça logo a matrícula! PET graduado é PET feliz!
                  🐾✨
              </p>
          </div>
          <Footer />
          <Wbotao />
      </div></>
  );
}