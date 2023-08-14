import { useReducer } from "react";

interface IState {
  counter: number;
}

interface IAction {
  type: "increment" | "decrement";
  value?: number;
}

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + (action.value || 1) };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      throw new Error(`Unknow action: ${action.type}`);
  }
}

export function CounterReducer() {
  const initialState: IState = { counter: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleDecrementClick(event: React.MouseEvent) {
    dispatch({ type: "decrement" });
    event.stopPropagation();
  }

  function handleIncrementClick(event: React.MouseEvent) {
    dispatch({ type: "increment", value: 2 });
    event.stopPropagation();
  }

  return (
    <div>
      <button onClick={handleDecrementClick}>-</button>
      <span>{state.counter}</span>
      <button onClick={handleIncrementClick}>+</button>
    </div>
  );
}
