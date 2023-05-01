import React from 'react';


export default function TaskForm({tasklist,increment_updates}) {
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
            increment_updates()
            //setUpdates(updates+1) //cause page data to update
        }

    return (
     <div>
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

      </div>  
    )
}