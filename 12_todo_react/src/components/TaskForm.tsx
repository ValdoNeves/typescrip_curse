import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

// CSS
import styles from './TaskForm.module.css'

// interface
import { ITask } from '../interfaces/Task'


interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id:number, title:string, difficulty:number): void;
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    } else {

    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // não esta mais recarregando a tela quando acontece o clique no botão
    if (handleUpdate) {
      handleUpdate(id,title,difficulty)

    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty }

      // setTaskList([...taskList, newTask]) // assim ele reclama que pode estar vazio esse valor
      setTaskList!([...taskList, newTask]) // assim forçamos ele a entender que o valor vai vir

      // limpa os campos 
      setTitle("")
      setDifficulty(0)

      console.log(taskList)
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // os valores vem no formato de string    
    if (e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }

    // console.log(title)
    // console.log(difficulty)
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}

        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm