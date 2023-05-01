import React from 'react';


export default function TaskListForm({tasklist,setTasklist}) {
    
    return (
        <div>
            <input type="text" id="tasklist" placeholder={tasklist}/>        
            <button 
            className = "btn btn-sm btn-primary"
            onClick=
                {() => setTasklist(document.getElementById('tasklist').value)
                }> 
                    change tasklist name
            </button>
        </div>  
    )
}