import React, { useState, useEffect } from 'react';
import styles from './Alunos.module.css';

function Alunos() {
  const [alunos] = useState([
    { id: 1, nome: 'Café' },
    { id: 2, nome: 'Clóvis' },
    { id: 3, nome: 'Shinobu' },
    { id: 4, nome: 'Lulinha' },
    { id: 5, nome: 'Dã' }
  ]);

  return (
    <div className={styles.Container}>
      {alunos.length > 0 ? (
        alunos.map((aluno) => (
          <p key={aluno.id}>{aluno.nome}</p>
        ))
      ) : (
        <p>Nenhum Aluno encontrado.</p>
      )}
    </div>
  );
}

export default Alunos;