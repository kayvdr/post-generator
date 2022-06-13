import React, { FC } from "react";
import styles from "./TextInput.module.css";

interface Props {
  title: string;
  value: string | undefined;
  setValue: (value: string) => void;
}

export const EditorInput: FC<Props> = ({ title, value, setValue }) => {
  return (
    <div className={styles["input-container"]}>
      <label className={styles.label}>{title}</label>
      <textarea
        name={title}
        defaultValue={value}
        className={styles.editor}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Tab" && !e.shiftKey) {
            document.execCommand("insertText", false, "  ");
            e.preventDefault();
          }
        }}
      ></textarea>
    </div>
  );
};
