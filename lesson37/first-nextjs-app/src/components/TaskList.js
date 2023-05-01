import React from 'react';


export default function TaskList({tasks,increment_updates}) {

  const deleteTask = async (id) => {
    // ask the server to remove a task from the database
        await fetch('/api/task_delete?id='+id)
        increment_updates()
  };

  const toggleCompleted = async (id) => {
    // ask the server to remove a task from the database
        await fetch('/api/task_toggle_completed?id='+id)
        increment_updates()
  }
    return (
        <ul>
        {tasks.map((item) => 
            <li>
                {item.description}
                <a 
                    onClick={()=> deleteTask(item._id)}
                    className="ms-2">
                  <i className="bi-trash"></i>
                </a>
                <a className="ms-2"
                   onClick={() => toggleCompleted(item._id)}>
                  {item.completed? 'C': '-'}
                </a>
                
                
            </li>
        )} 
      </ul>
    )
}