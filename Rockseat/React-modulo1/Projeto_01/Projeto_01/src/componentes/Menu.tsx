import styles from './Menu.module.css'
import fig from '../assets/Clipboard.svg';
import { ChangeEvent, useState } from 'react';

interface Task {
  id: string;
  checked: boolean;
  atividade: string;
}

export function Menu(){
  return(
    <div className={styles.header}>
      <div className={styles.options}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.done}>
          <strong>Concluidas</strong>
          <span>0</span>
          </div>
      </div>
      <div className={styles.empty}>
            <img src={fig}></img>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>

  );
}