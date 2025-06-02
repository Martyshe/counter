import { ChangeEvent, useState } from "react";
import { Button } from "../button/Button";
import s from "./CounterSetter.module.css";

type Props = {
  setMaxValue: (value: number) => void;
  setMinValue: (value: number) => void;
  maxValue: number;
  minValue: number;
};

export function CounterSetter({
  setMaxValue,
  maxValue,
  minValue,
  setMinValue,
}: Props) {
  const disableCondition = !!(minValue > 0) && !!(minValue > maxValue);

  const [buttonDisable, setButtonDisable] = useState(disableCondition);
  const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
    console.log("max value  ", maxValue, disableCondition);
  };
  const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value > 0) {
      setMinValue(+e.currentTarget.value);
    }
    console.log("min value  ", minValue, disableCondition);
  };

  return (
    <div className={s.container}>
      <div className={s.counter}>
        <div className={s.valueWrapper}>
          <p>max value:</p>
          <input type="number" onChange={onMaxChangeHandler} value={maxValue} />
        </div>

        <div className={s.valueWrapper}>
          <p>min value:</p>
          <input type="number" onChange={onMinChangeHandler} value={minValue} />
        </div>
      </div>
      <div className={s.btnWrap}>
        <Button title={"set"} disabled={buttonDisable} />
      </div>
    </div>
  );
}
