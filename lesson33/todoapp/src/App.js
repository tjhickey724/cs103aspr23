import React from "react";
import "./styles.css";
import { useState } from "react";

const initTodos = [
  { key: 0, desc: "eat lunch", completed: false },
  { key: 1, desc: "walk dog", completed: false }
];

export default function App() {
  let [items, setItems] = useState(initTodos);
  let [numKeys,setNumKeys] = useState(initTodos.length);

  function add_item() {
    console.log("adding item");
    const item = document.getElementById("item").value;
    let newItem = 
    {
      key: numKeys,
      desc: item,
      completed: false
    };
    setNumKeys(numKeys+1);
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <h1>Tim's Todo List</h1>
      {items.map((item) => (
        <li>{item["desc"]}</li>
      ))}

      <h2> new item </h2>
      <input type="text" id="item" placeholder="description" />
      <button onClick={() => add_item()}>add Todo</button>
    
    <h2>Items in JSON</h2>
    <pre>{JSON.stringify(items,null,5)}</pre>

    </div>
  );
}
