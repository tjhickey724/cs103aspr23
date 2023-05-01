import React,{useState} from 'react';


export default function DebugView({tasks}) {
    const [debugging,setDebugging]= useState(false)
    
    return (
        <div>
            <button className = "btn btn-sm btn-warning"
                onClick={()=>setDebugging(!debugging)}>
             toggle debugging
            </button>

            {debugging?
                <>
                    <h5 className='mt-5'>DEBUGGING: data in JSON form</h5>
                    
                    <pre>{JSON.stringify(tasks,null,5)}</pre>
                </>
                :""}
        </div>  
    )
}