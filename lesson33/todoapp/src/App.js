import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

const initTodos = [
  { key: 0, desc: "eat lunch", completed: false },
  { key: 1, desc: "walk dog", completed: false }
];

export default function App() {
  let [items, setItems] = useState(() =>getItems());
  let [numKeys,setNumKeys] = useState(items.length);

  useEffect( () => {
    // update local storage each time items changes ...
    const storeItems = async () => {
      items = await localStorage.setItem('items',items)
    };
    storeItems();
  },
    [items]);

  function getItems(){
    let items = localStorage.getItem('items');
    return(items || []);
  }
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

  function delete_item(itemKey) {
    console.log('to be deleted:', itemKey);
    const newItems = items.filter((item) => item.key !== itemKey);
    setItems(newItems);
  }

  function toggle_completed(key) {
    console.log("toggling completed");
    let newItems = items.map((item) => {
      if (item.key === key) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>Tim's Todo List</h1>
      {items.map((item) => (
        <li>
           <button onClick={() => toggle_completed(item.key)}>{item.completed ? "c" : "+"}</button>
           <button onClick={() => delete_item(item.key)}>X</button>
          {item["desc"]}
        </li>
      ))}

      <h2> new item </h2>
      <input type="text" id="item" placeholder="description" />
      <button onClick={() => add_item()}>add Todo</button>
    
    <h2>Items in JSON</h2>
    <pre>{JSON.stringify(items,null,5)}</pre>

    </div>
  );
}
