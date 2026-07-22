import React, { useState } from "react";
import "../App.css";
import styles from './Cameras.module.css'; 
import Footer from "../components/Footer.jsx";
import Wbotao from "../components/Wbotao.jsx";
import Menu from "../components/Menu.jsx";

export default function Cameras() {
  const [primeiraCamAtiva, setPrimeiraCamAtiva] = useState(false);
  const cameras = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
       <><Menu /><div className={styles.webcamContainer}>
          {/* Cachorro espiando posicionado ao fundo */}
          <img
              src="https://static.vecteezy.com/system/resources/previews/050/483/998/non_2x/a-curious-dog-looking-intently-at-the-camera-cut-out-stock-png.png"
              alt="Cachorro curioso"
              className={styles.cachorroFundo} />

          <h1 className={styles.webcamTitulo}>Espie seu Pet 🐾</h1>

          {/* Grid com as 8 câmeras */}
          <div className={styles.camerasGrid}>
              {cameras.map((id) => {
                  if (id === 1) {
                      return (
                          <div
                              key={id}
                              className={`${styles.cameraCard} ${primeiraCamAtiva ? styles.ativa : ''}`}
                              onClick={() => setPrimeiraCamAtiva(true)}
                          >
                              {primeiraCamAtiva ? (
                                  <div className={styles.gatoContainer}>
                                      <img
                                          src="https://i0.statig.com.br/bancodeimagens/9z/q2/xk/9zq2xklp00ik3lhmi84q3yka8.jpg" // URL direta corrigida
                                          alt="Gato espiando"
                                          className={styles.gatoImg} />
                                      <span>Espiando! 🐱</span>
                                  </div>
                              ) : (
                                  <div className={styles.cameraPlaceholder}>
                                      <span className={styles.cameraIcone}>📹</span>
                                      <span>Câmera {id} - Clique para abrir</span>
                                  </div>
                              )}
                          </div>
                      );
                  }

                  return (
                      <div key={id} className={styles.cameraCard}>
                          <div className={styles.cameraPlaceholder}>
                              <span className={styles.cameraIcone}>📹</span>
                              <span>Câmera {id} (Indisponível)</span>
                          </div>
                      </div>
                  );
              })}
          </div>

          <Footer />
          <Wbotao />
      </div></>
  );
}
