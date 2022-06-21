import React, { ChangeEvent, FC } from "react";
import { State } from "../types/types";
import styles from "./ImageUpload.module.css";
import { NumberInput } from "./NumberInput";

interface Props {
  state: State;
  item: keyof State;
  setState: (value: State) => void;
}

export const ImageUpload: FC<Props> = ({ state, item, setState }) => {
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      typeof reader.result === "string" &&
        setState({ ...state, [item]: reader.result });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label className={styles.label} htmlFor="upload">
        Image
      </label>
      <div className={styles["upload-container"]} id="upload">
        <input className={styles.upload} type="file" onChange={uploadImage} />
      </div>
      {state[item] && state[item] === "image" && (
        <div className={styles["image-options"]}>
          <NumberInput
            title="Width"
            value={state.imageWidth}
            setValue={(value) => setState({ ...state, imageWidth: value })}
          />
          <NumberInput
            title="Positon Top"
            value={state.imagePositionTop}
            setValue={(value) =>
              setState({ ...state, imagePositionTop: value })
            }
          />
          <NumberInput
            title="Positon Left"
            value={state.imagePositionLeft}
            setValue={(value) =>
              setState({ ...state, imagePositionLeft: value })
            }
          />
        </div>
      )}
    </div>
  );
};
