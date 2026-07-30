import { useContext } from 'react';
import { IdiomaContext } from '../IdiomaContext';
import styles from './BotaoIdioma.module.css';
import brasil from '../assets/brasil.png';
import eua from '../assets/eua.png';


function BotaoIdioma() {
  const { idioma, setIdioma } = useContext(IdiomaContext);

  const trocarIdioma = () => {
    setIdioma(idioma === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className={styles.wbotao}>
      <button onClick={trocarIdioma}>
        <img src={idioma === 'pt' ? eua : brasil} alt="Trocar idioma" width={30} />
      </button>
    </div>
  );
}

export default BotaoIdioma;