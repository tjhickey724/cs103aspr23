
import {useState,useEffect} from 'react'

import TaskList from '../components/TaskList';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function ToDoList() {
  const [tasklist,setTasklist] = useState('general')
  const [tasks,setTasks] = useState([] )

  const [updates,setUpdates] = useState(0)
  const [debugging,setDebugging]=useState(false);

  useEffect(() => {
        // ask the server to get the tasks from the database 
        const getTasks = async () => {
            const data = await fetcher('/api/tasks?tasklist='+tasklist)
            setTasks(data.tasks)
        }
        getTasks()
  },[tasklist,updates])

  const deleteTask = async (id) => {
    // ask the server to remove a task from the database
        await fetch('/api/task_delete?id='+id)
        setUpdates(updates+1)
        console.log('deleting',id)
  };

  const addTask = async (name,list) => {
    // ask the server to add a task to the database
        const task = {
            tasklist:list,
            description:name
        };
        await fetch('/api/tasks',{
            method:'POST',
            headers: {"Content-Type": "application/json",},
            body:JSON.stringify(task)
        });
        setUpdates(updates+1) //cause page data to update
    }

  return (
    <div className="container">
    <h1 className="p-2 border-bottom border-start border-5 border-primary">
        {tasklist} To Do List
    </h1> 
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <hr/>
      <h1 className="p-2 border-bottom border-start border-5 border-primary">
        Add item to {tasklist} To Do List 
      </h1>
      <input type="text" id="taskname" name="description" placeholder="description"/>
      <button 
        className = "btn btn-sm btn-primary"
        onClick = 
        {() => {
                const taskname = document.getElementById('taskname').value
                addTask(taskname,tasklist)
                document.getElementById('taskname').value=""
                }}>
        add new task to {tasklist}
        </button>
        <br/>
        <input type="text" id="tasklist" placeholder={tasklist}/>        
        <button 
          className = "btn btn-sm btn-primary"
          onClick=
            {() => setTasklist(document.getElementById('tasklist').value)
            }> 
                change tasklist name
        </button>
        <br/>
        <button
           className = "btn btn-sm btn-warning"
           onClick={()=>setDebugging(!debugging)}>
                toggle debugging
        </button>

       {debugging?
         <>
            <h5 className='mt-5'>DEBUGGING: data in JSON form</h5>
            updates: {updates}
            <pre>{JSON.stringify(tasks,null,5)}</pre>
         </>
        :""}
    </div>
  )
}