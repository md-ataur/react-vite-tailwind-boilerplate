import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl font-bold">Vite + React + Tailwind</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <span>Count is {count}</span>
        </button>
      </div>
    </>
  );
}

export default App;
