import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleDecrementClick(event: React.MouseEvent) {
    setCounter((old) => old - 1);
    event.stopPropagation();
  }

  function handleIncrementClick(event: React.MouseEvent) {
    setCounter((old) => old + 1);
    event.stopPropagation();
  }

  return (
    <div>
      <button onClick={handleDecrementClick}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrementClick}>+</button>
    </div>
  );
}
