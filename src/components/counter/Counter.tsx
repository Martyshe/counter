import { useState } from "react";
import { Button } from "../button/Button";
import s from "./Counter.module.css";

type Props = {
  counter: number;
  setCounter: (value: number) => void;
  minValue: number;
  maxValue: number;
  isMaxValue: boolean;
  isMinValue: boolean;
};

export default function Counter(props: Props) {
  const { counter, setCounter, minValue, maxValue, isMaxValue, isMinValue } =
    props;

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
        <Button disabled={isMinValue} title={"reset"} onClick={resetCounter} />
      </div>
    </div>
  );
}
