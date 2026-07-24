import { useState } from 'react';
import styles from "./Favoritecolor.module.css";

export default function Favoritecolor() {
  const [pet, setPet] = useState('Sapo');

  return (
    <div className= {styles.titulo}> 
      <h1>Meu pet favorito é {pet}!</h1>
      <button type="button" onClick={() => setPet('Cachorro')}>Cachorro</button>
      <button type="button" onClick={() => setPet('Gato')}>Gato</button>
      <button type="button" onClick={() => setPet('Porco')}>Porco</button>
      <button type="button" onClick={() => setPet('Vaca')}>Vaca</button>
    </div>
  );
}
