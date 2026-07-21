import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.titulo}>MUNDO ANIMAL</h1>
      <p className={styles.subtitulo}>Creche e Hotel para PETS!</p>
    </header>
  );
}