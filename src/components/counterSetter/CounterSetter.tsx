import { Button } from "../button/Button";
import s from "./CounterSetter.module.css";
export function CounterSetter() {
  return (
    <div className={s.container}>
      <div className={s.counter}>
        <div className={s.valueWrapper}>
          <p>max value:</p>
          <input type="number" />
        </div>

        <div className={s.valueWrapper}>
          <p>min value:</p>
          <input type="number" />
        </div>
      </div>
      <div className={s.btnWrap}>
        <Button
          title={"set"}
        />
      </div>
    </div>
  );
}
