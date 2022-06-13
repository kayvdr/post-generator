import { FC } from "react";
import styles from "./Checkbox.module.css";

interface Props {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

export const Checkbox: FC<Props> = ({ label, value, setValue }) => (
  <div className={styles["checkbox-container"]}>
    <input
      type="checkbox"
      className={styles.checkbox}
      name={label}
      id={label}
      checked={value}
      onChange={() => setValue(!value)}
    />
    <label className={styles.label} htmlFor={label}>
      {label}
    </label>
  </div>
);
