import { useState } from 'react';
import styles  from "./Contador.module.css";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className={styles.titulo}>
      <h1> 🐾 Contagem de Fofuras! ❤️ </h1>
      <p>Valor: {contador}</p>
      <button type="button" onClick={() => setContador(contador + 1)}>+</button>
      <button type="button" onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
}
