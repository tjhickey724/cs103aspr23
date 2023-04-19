import React,{useState} from "react";
import "./styles.css";


const initTodos = [
  { key: 1, desc: "eat lunch", completed: false },
  { key: 2, desc: "walk dog", completed: false }
];

export default function App() {
  let [items, setItems] = useState(initTodos);

  function add_item() {
    console.log("adding item");
    const item = document.getElementById("item").value;
    let newItems = items.concat({
      key: items.length,
      desc: item,
      completed: false
    });
    setItems(newItems);
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
    </div>
  );
}
