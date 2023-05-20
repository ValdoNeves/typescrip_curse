import React from 'react'

// interface
import { ITask } from '../interfaces/Task'

// CSS
import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[]
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => {
          return (
            <div key={task.id}>
              <div>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div>
                <i className='bi bi-pencil'/>
                <i className='bi bi-trash'/>
              </div>
            </div>
          )
        })
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList