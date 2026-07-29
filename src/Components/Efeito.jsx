import React, { useState, useEffect } from "react";
import styles  from "./Efeito.module.css";

function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

   
    return () => clearTimeout(timer); 
  }, [count]);

  return (
    <div className={styles.titulo}>
      <h1> 🐰 Eu já estou nesta página a {count} milhões de minutos e não quero mais sair! ⏱️⏳ </h1>
    </div>
  );
}

export default Contador;