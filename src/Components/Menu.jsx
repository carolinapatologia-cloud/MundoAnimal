import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      <nav className={styles.nav}>
        <ul className={styles.lista}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre o Mundo Animal</Link></li>
          <li><Link to="/novidades">Matrículas</Link></li>
          <li><Link to="/galeria">Galeria de Imagens</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/novidades">Novidades</Link></li>
          <li><Link to="/novidades">Espie seu PET</Link></li>
         </ul>
      </nav>
    </div>
  );
}
  