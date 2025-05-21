import "./App.css";
import Counter from "./components/counter/Counter";
import { CounterSetter } from "./components/counterSetter/CounterSetter";

function App() {
 

  return (
    <div className="App" style={{display: 'flex', alignItems: 'center'}}>
    <CounterSetter />
    <Counter />
    </div>
  );
}

export default App;
