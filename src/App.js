
import React,  {useState} from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  const validForm = () => {
    let isValid = true
    setError(null)

    if (isEmpty(task)) {
      setError("Must add a task")
      isValid = false
    }
    return isValid
  }

  const addTask = (e) => {
    e.preventDefault()

    if (!validForm()){
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

  const saveTask = (e) => {
    e.preventDefault()

    if (!validForm()){
      return
    }

    //setTasks([ ...tasks, newTask ])
    const editedTasks = tasks.map(item => item.id === id ? {id, name: task} : item)
    setTasks(editedTasks)
    setEditMode(false)
    setTask("")
    setId("")
  }

  const deleteTask = (id) => {
      const filteredTasks = tasks.filter(task=> task.id!==id)
      setTasks(filteredTasks)
  }

  const editTask = (theTask) => {
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
  }



  return (
    <div className="container mt-5">
      <h1>Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks list</h4>
          {
            size(tasks) === 0 ? (
              <li className="list-group-item">NO TASKS ADDED YET</li>
            ) : (
              <ul className="list-group">
                {
                  tasks.map((task) =>(
                    <li className="list-group-item mb-2" key = {task.id}>
                      <span className="lead">{task.name}</span>
                      <button 
                        className="btn btn-danger btn-sm float-right mx-2"
                        onClick ={() => deleteTask(task.id)}>
                        Eliminar
                      </button>
                      <button 
                        className="btn btn-warning btn-sm float-right"
                        onClick ={() => editTask(task)}>
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
          <h4 className="text-center">
            {editMode ? "Edit task" : "New task here"}
          </h4>
          <form onSubmit={editMode ? saveTask : addTask }>            
            {
              error && <span className="text-danger mb-2">{error}</span>
            }
            <input 
              type="text"
              className="form-control mb-2"
              placeholder="Enter task..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />

            <button 
              className={editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"}
              type="submit"
            >
              {editMode ? "Save task" : "Add a new task"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
