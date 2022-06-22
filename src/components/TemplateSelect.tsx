import React, { FC } from "react";
import styles from "./TextInput.module.css";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const options = [
  "Cover",
  "Snippet",
  "Description",
  "Statistic",
  "Quiz",
  "BackCover",
];

export const TemplateSelect: FC<Props> = ({ value, setValue }) => (
  <div className={styles["input-container"]}>
    <label className={styles.label}>Template</label>
    <select
      name="template"
      className={styles.input}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
