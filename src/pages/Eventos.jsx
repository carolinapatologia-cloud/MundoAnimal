import React from "react";
import "../App.css";
import styles from "./Sobre.module.css";
import Footer from "../components/Footer.jsx";
import Wbotao from "../components/Wbotao.jsx";
import Menu from "../components/Menu.jsx";

export default function Eventos() {
  return (
    <><Menu /><div className={styles.sobreContainer}>
          <h1 className={styles.titulo}>Eventos</h1>
          <div className={styles.conteudo}>
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xRgMl_lBQZJTV6CGM9fpLnqY_MKp7cyj_casp4__CQ&s"
                  alt="Barraca da mordida"
                  className={styles.imagem} />
              <p className={styles.texto}>
                  <strong>São João Mundo Animal</strong>,🔥🎈
                  🐾✨
              </p>
          </div>
          <Footer />
          <Wbotao />
      </div></>
  );
}