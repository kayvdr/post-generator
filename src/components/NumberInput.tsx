import { FC } from "react";
import styles from "./NumberInput.module.css";

interface Props {
  title: string;
  value: number | undefined;
  setValue: (value: number) => void;
}

export const NumberInput: FC<Props> = ({ title, value, setValue }) => (
  <div className={styles["input-container"]}>
    <label className={styles.label}>{title}</label>
    <input
      type="number"
      className={styles.input}
      name={title}
      value={value}
      onChange={(e) => setValue(+e.target.value)}
    />
  </div>
);
