import styles from "./Botao.module.css";

function Botao() {
  const shoot = () => {
    alert("Miawwwwww!");
  };

  return (
    <button
      className={styles.botao}
      onClick={shoot}
    >
      Deixe Seu AwAw!
    </button>
  );
}

export default Botao;
