import React from 'react';

export default function TaskList({tasks,deleteTask}) {
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
                
                
            </li>
        )} 
      </ul>
    )
}