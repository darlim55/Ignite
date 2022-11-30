import styles from './Search.module.css'
import plusIcon from '../assets/plus.svg';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
interface Task {
  id: number;
  nameactivity: string;
  ischeckd: boolean;
}

export function Search(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teste, setnewtedte] = useState(['jorge'])
  const [newActivity, setnewActivity] = useState('')


  function handlenewComment(event: ChangeEvent<HTMLInputElement>){
    setnewActivity(event.target.value)
    event.target.setCustomValidity('')
  }

  function handlenewText(){
    setnewtedte([...teste, newActivity]);
    setnewActivity('')
  }

  function handlenewCommentinvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo e obrigatorio')

  }


  return(
    <div className={styles.header}>
      <input
      onChange= {handlenewComment}
      className={styles.input}
      value={newActivity}
      required
      onInvalid={handlenewCommentinvalid}
      placeholder="Adicione uma nova tarefa"></input>
      <button
        className={styles.button}
        type='submit'
        onClick={handlenewText}
        disabled={setnewActivity.length ===0}
       >
      Criar 
      <img src={plusIcon} alt="Mais" /></button>
      
    </div>

    

  );
}
