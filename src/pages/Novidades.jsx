import React from "react";
import "../App.css";
import styles from "./Sobre.module.css";
import Footer from "../Components/Footer.jsx";
import Wbotao from "../Components/Wbotao.jsx";
import Menu from "../Components/Menu.jsx";

export default function Eventos() {
  return (
  <><Menu /><div className={styles.sobreContainer}>
          <h1 className={styles.titulo}>Novidades</h1>
          <div className={styles.conteudo}>
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOo6Cqij_I7fPSxGYQOYsQYEy-0Xm925QpZpX6o01dpapouskwlizDqQF1&s=10"
                  alt="Quokka"
                  className={styles.imagem} />
              <p className={styles.texto}>
                  <strong>Os animais mais felizes do mundo</strong>,🔥🎈
                  🐾✨
              </p>
          </div>
          <Footer />
          <Wbotao />
      </div></>
  );
}