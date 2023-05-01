import { useState } from 'react';


export default function ChangeCounter() {
  const [total, setTotal] = useState(0);

  const handleIncrement = (value) => {
    setTotal(total + value);
  };

  return (
    <div>
      <h1>Change counter</h1>
      <p>Total: {total} cents</p>
      <button onClick={() => handleIncrement(1)}>Penny</button>
      <button onClick={() => handleIncrement(5)}>Nickel</button>
      <button onClick={() => handleIncrement(10)}>Dime</button>
    </div>
  );
}