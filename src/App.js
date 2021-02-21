
import React,  {useState} from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log("Task empty")
      return
    }

    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([ ...tasks, newTask ])
    console.log("OK")
    setTask("")
  }

  const deleteTask = (id) => {
      const filteredTasks = tasks.filter(task=> task.id!==id)
      setTasks(filteredTasks)
  }

  return (
    <div className="container mt-5">
      <h1>Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks list</h4>
          {
            size(tasks) == 0 ? (
              <h5 className="text-center">NO TASKS ADDED YET</h5>
            ) : (
              <ul className="list-group">
                {
                  tasks.map((task) =>(
                    <li className="list-group-item" key = {task.id}>
                      <span className="lead">{task.name}</span>
                      <button 
                        className="btn btn-danger btn-sm float-right mx-2"
                        onClick ={() => deleteTask(task.id)}>
                        Eliminar
                      </button>
                      <button 
                        className="btn btn-warning btn-sm float-right">
                        Editar
                      </button>
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form onSubmit={addTask}>
            <input 
              type="text"
              className="form-control mb-2"
              placeholder="Enter task..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button 
              className="btn btn-dark btn-block"
              type="submit"
            >
              Add a new task
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
