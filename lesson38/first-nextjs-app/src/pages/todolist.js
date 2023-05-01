
import {useState,useEffect} from 'react'

import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskListForm from '../components/TaskListForm';
import DebugView from '../components/DebugView';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function ToDoList() {
  const [tasklist,setTasklist] = useState('general')
  const [tasks,setTasks] = useState([] )
  const [updates,setUpdates] = useState(0)

  useEffect(() => {
        // ask the server to get the tasks from the database 
        const getTasks = async () => {
            const data = await fetcher('/api/tasks?tasklist='+tasklist)
            setTasks(data.tasks)
        }
        getTasks()
  },[tasklist,updates])

  const increment_updates = () => {setUpdates(updates+1);}

  return (
    <div className="container">
      <h1 className="p-2 border-bottom border-start border-5 border-primary">
          {tasklist} To Do List 
      </h1> 
      <TaskList 
            tasks={tasks} 
            increment_updates= {increment_updates}
            />
      <TaskForm 
            tasklist={tasklist} 
            increment_updates= {increment_updates}
            />
      <TaskListForm tasklist={tasklist} setTasklist={setTasklist} />  
      <DebugView tasks={tasks} />
    </div>
  )
}