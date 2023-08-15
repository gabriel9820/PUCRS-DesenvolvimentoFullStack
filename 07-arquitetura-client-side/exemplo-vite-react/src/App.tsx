import "./App.css";
import { Button1 } from "./components/Button1";
import { Button2 } from "./components/Button2";
import { Counter } from "./components/Counter";
import { CounterReducer } from "./components/CounterReducer";
import { HelloWorld } from "./components/HelloWorld";
import { HelloWorldColorful } from "./components/HelloWorldColorful";
import { Clock } from "./components/Clock";

function App() {
  function handleClick(event: React.MouseEvent) {
    alert(`Clicou em: ${event.currentTarget.id}`);
  }

  return (
    <div id="divApp" onClick={handleClick}>
      <HelloWorld />
      <HelloWorldColorful name="Gabriel" color="red" />

      <hr />

      <Button1 />
      <br />
      <Button2 />

      <hr />

      <Counter />
      <br />
      <CounterReducer />

      <hr />
      <Clock />
    </div>
  );
}

export default App;
