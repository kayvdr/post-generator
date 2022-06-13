import React, { FC } from "react";
import styles from "./TextInput.module.css";

interface Props {
  title: string;
  value: string | undefined;
  setValue: (value: string) => void;
}

export const TextInput: FC<Props> = ({ title, value, setValue }) => (
  <div className={styles["input-container"]}>
    <label className={styles.label}>{title}</label>
    <input
      type="text"
      className={styles.input}
      name={title}
      defaultValue={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);
