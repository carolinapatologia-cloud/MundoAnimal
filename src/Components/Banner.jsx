import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className= {styles.titulo}> 
      <h1>Bem-vindo ao Mundo Animal</h1>
      <h2>Seu pet vai amar passar os dias com a nossa turminha.</h2>
      <img ClassName= {styles.image}
        src="https://img.magnific.com/vetores-gratis/animais-selvagens-ao-redor-do-mundo_1308-114760.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Mundo Animal"
        />
    </div>
  );
}
