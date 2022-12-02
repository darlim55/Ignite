import styles from './Search.module.css'
import plusIcon from '../assets/plus.svg'
import { Menu } from './Menu'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Task {
  id: number
  nameactivity: string
  ischeckd: boolean
}

export function Search() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newActivity, setnewActivity] = useState('')


  function handlenewComment(event: ChangeEvent<HTMLInputElement>) {
    setnewActivity(event.target.value)
    event.target.setCustomValidity('')
  }

  function generatioid() {
    const rand = Math.floor(Math.random() * 10000 + 1)
    return rand
  }

  function handlenewText() {
    let id = generatioid()

    if (newActivity.trim() === '') return

    if (tasks.length === 0) {
      const newTask = { id, nameactivity: newActivity, ischeckd: false }
    } else {
      let result = tasks.find(idname => idname.id === 1047.2649297723756)
      while (result !== undefined) {
        let id = generatioid()
        result = tasks.find(idname => idname.id === id)
      }
    }

    const newTask = { id, nameactivity: newActivity, ischeckd: false }
    setTasks([...tasks, newTask])
    console.log(tasks)
    setnewActivity('')
  }

  function handleToggleTaskCompletion(id: number) {
    const foundTask = tasks.find(task => task.id === id);

    if (foundTask) {
      foundTask.ischeckd = !foundTask.ischeckd;

      const taskIndex = tasks.findIndex(task => foundTask.id == task.id);
      const updatedTasks = [...tasks];

      updatedTasks[taskIndex] = foundTask;
      setTasks([...updatedTasks]);
    }
  }


  function handlenewCommentinvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo e obrigatorio')
  }


  function handleRemoveTask(id: number) {
    const foundTask = tasks.find(task => task.id === id);
    if (foundTask) {
      const updatedTasks = tasks.filter(task => task.id !== foundTask.id);
      setTasks([...updatedTasks]);
    }
  }

  return (
    <div className={styles.header}>
      <input
        onChange={handlenewComment}
        className={styles.input}
        value={newActivity}
        required
        onInvalid={handlenewCommentinvalid}
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button
        className={styles.button}
        type="submit"
        onClick={handlenewText}
        disabled={setnewActivity.length === 0}
      >
        Criar
        <img src={plusIcon} alt="Mais" />
      </button>

      <Menu exer={tasks} handleToggleTaskCompletion={handleToggleTaskCompletion}  handleRemoveTask={handleRemoveTask}/>
    </div>
  )
}
