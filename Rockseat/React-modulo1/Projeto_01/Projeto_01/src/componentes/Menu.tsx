import styles from './Menu.module.css'
import fig from '../assets/Clipboard.svg'
import { ChangeEvent, useState } from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import Fit from '../assets/trash.svg'
interface Task {
  id: number
  nameactivity: string
  ischeckd: boolean
}

interface TasksProps {
  exer: Task[]
  handleToggleTaskCompletion: (id : number) => void
  handleRemoveTask:(id: number) => void
}


export function Menu({exer,handleToggleTaskCompletion,handleRemoveTask }: TasksProps) {


  const tasksCompleted = exer.reduce((acc, task) => {
    if(task.ischeckd) {
      return acc + 1
    }
    return acc;
  }, 0);


  function handlUpdate(id: number){
    handleToggleTaskCompletion(id)

  }

  function handlDelete(id: number){
    handleRemoveTask(id)

  }

  return (
    <div className={styles.header}>
      <div className={styles.options}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>{exer.length}</span>
        </div>

        <div className={styles.done}>
          <strong>Concluidas</strong>
          <span>{tasksCompleted} de {exer.length}
          </span>
        </div>
      </div>

        {exer.length != 0 ? (
          exer.map(exer => (
            <div key={exer.id} className={styles.taks} >
              <li>
              <label className={styles.checkbox}>
              <input
                    type="Radio"
                    readOnly
                    checked={exer.ischeckd}
                    onClick={() => handlUpdate(exer.id)}
              
                  />
              </label>

              <p className={exer.ischeckd ? styles.completed : ''} >{exer.nameactivity}</p>
              <button type="button" data-testid="remove-task-button" onClick={() => handlDelete(exer.id)}>
                <img src={Fit}></img>
              </button>
              </li>

            </div>
            
          ))
        ) : (
          <div className={styles.empty}>
            <img src={fig}></img>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      
  
    </div>
  )
}
