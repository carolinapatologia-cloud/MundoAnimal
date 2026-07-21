import React from "react";
import styles from "./CardProduto.module.css";

export default function CardProduto({ nome, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <p className={styles.nome}>{nome}</p>
      <button className={styles.botao}>Matricule seu PET</button>
    </div>
  );
}
