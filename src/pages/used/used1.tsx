import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount((cnt) => cnt + 1)}>increment</button>
        <button onClick={() => setCount((cnt) => cnt - 1)}>decrement</button>
      </div>
    </div>
  );
}
