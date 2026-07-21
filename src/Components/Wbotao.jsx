import React from "react";
import styles from "./Wbotao.module.css";

export default function Wbotao() {
  return (
    <div className={styles.wbotao}>
      <nav className={styles.nav}>
        <ul className={styles.lista}>
          <li>Sobre o Mundo Animal</li>
          <li>Matrículas</li>
          <li>Galeria de Imagens</li>
          <li>Eventos</li>
          <li>Novidades</li>
        </ul>
      </nav>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5551999999999" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        💬 Fale conosco via WhatsApp
      </a>
    </div>
  );
}
