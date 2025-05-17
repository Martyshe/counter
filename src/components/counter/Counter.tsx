import { useState } from 'react'
import { Button } from '../button/Button';
import s from './Counter.module.css'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const minValue = 0; // минимально допустимое число
    const maxValue = 5; // максимально допустимое число
  
    const isMaxValue = counter >= maxValue;
    const isMinValue = counter <= minValue;

    const incrementCounter = () => {
      if (!isMaxValue) {
        setCounter(counter + 1);
      }
    };
    const resetCounter = () => {
        setCounter(minValue);
    };
  
  return (
    <div className={s.container}>
    <div className={`${s.counter} ${isMaxValue ? s.maxCounter : undefined}`}>
      {counter}
    </div>
    <div className={s.btnWrap}>
      <Button
        disabled={isMaxValue}
        title={"inc"}
        onClick={incrementCounter}
      />
      <Button
        disabled={isMinValue}
        title={"reset"}
        onClick={resetCounter}
      />
    </div>
  </div>
  )
}
