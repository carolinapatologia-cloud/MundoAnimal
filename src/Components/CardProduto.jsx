import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./CardProduto.module.css";

export default function CardProduto({ nome, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <p className={styles.nome}>{nome}</p>
      {/* Alterado de <button> para <Link> */}
      <Link to="/matriculas" className={styles.botao}>
        Matricule seu PET
      </Link>
    </div>
  );
}
