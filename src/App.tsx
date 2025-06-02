import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import { CounterSetter } from "./components/counterSetter/CounterSetter";

function App() {
  const [counter, setCounter] = useState(0);

  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0) 

  const isMaxValue = counter >= maxValue;
  const isMinValue = counter <= minValue;

  // const incrementCounter = () => {
  //   if (!isMaxValue) {
  //     setCounter(counter + 1);
  //   }
  // };
  // const resetCounter = () => {
  //   setCounter(minValue);
  // };

  return (
    <div className="App" style={{ display: "flex", alignItems: "center" }}>
      <CounterSetter setMaxValue={setMaxValue}
       minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
      />
      <Counter
        counter={counter}
        setCounter={setCounter}
        minValue={minValue}
        maxValue={maxValue}
        isMaxValue={isMaxValue}
        isMinValue={isMinValue}
      />
    </div>
  );
}

export default App;
