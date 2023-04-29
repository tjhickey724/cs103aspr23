import React from 'react';

export default function TaskList({tasks,deleteTask}) {
    return (
        <ul>
        {tasks.map((item) => 
            <li>
                <button 
                    onClick={()=> deleteTask(item._id)}
                    className="me-2">
                  X
                </button>
                {item.description}
            </li>
        )} 
      </ul>
    )
}