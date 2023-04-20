import React,{useState,useEffect} from "react";
import "./styles.css";



const initTodos = [
  { key: 0, desc: "eat lunch", completed: false },
  { key: 1, desc: "walk dog", completed: false }
];

function getItemsFromLocalStorage() {
  // getting stored value
  const saved = localStorage.getItem("items");
  const initialValue = JSON.parse(saved)||[];
  // relabel the keys from 0 to length-1
  for(let i=0;i<initialValue.length;i++){
    initialValue[i]['key']=i
  }
  return initialValue || [];
}


export default function App() {

  let [items, setItems] = useState(getItemsFromLocalStorage);
  let [numKeys,setNumKeys] = useState(() => items.length)
  let [msg,setMsg] = useState('none');

  function add_item() {
    // add an item to the todolist
    const item = document.getElementById("item").value;
    let newItem = {
      key: numKeys,
      desc: item,
      completed: false
    };
    document.getElementById("item").value = ""
    setNumKeys(numKeys+1)
    setItems([newItem,...items]); // using the spread operator ...
  }

  function deleteItem(key){
    console.log(key)
    const newItems = items.filter((x)=> x['key']!== key)
    setItems(newItems)
    setNumKeys(numKeys-1)
  }

  

  useEffect(() => {
    const getMsg = async () => {
      const response = await fetch('http://localhost:3000/test');
      const result = await response.json();
      setMsg(result);
      console.log('msg =',result);
    }
    getMsg()
  },[msg])


  useEffect(() => {
    // storing items if items changes value
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      add_item();
    }
  };
  return (
    <div className="App">
      <h1>Tim's Todo List</h1>
      {msg}
      <table>
        <tbody>
            {items.map((item) => (
            <tr>
              <td>{item["desc"]}</td>
              <td><button onClick={()=>deleteItem(item["key"])}>X</button></td>
            </tr>
            ))}
        </tbody>
      </table>


      <h2> add new todo item </h2>
      <input type="text" 
             onKeyDown={handleKeyDown}
             id="item" placeholder="description" />
      <button onClick={() => add_item()}>add Todo</button>
      
      <h2> list of items in JSON </h2>
      <pre>
       {JSON.stringify(items, null, 5)}
      </pre>
    </div>

  );
}
