import React, { FC, Ref } from "react";
import { State } from "../types/types";
import styles from "./Cover.module.css";
import { Typewriter } from "./dist/svg";
import { Layout } from "./Layout";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

export const Cover: FC<Props> = ({ elRef, state }) => {
  return (
    <Layout elRef={elRef} state={state}>
      <div className={styles.content}>
        {state.subtitle && (
          <p className={styles["sub-title"]}>{state.subtitle}</p>
        )}
        <h1 className={styles.title}>
          {state.title || state.titleGreen ? (
            <>
              <span>{state.titleGreen}</span>
              <br /> {state.title}
            </>
          ) : (
            <>
              <span>Extremely</span>
              <br /> Title
            </>
          )}
        </h1>
        <div className={styles["img-container"]}>
          {state.image ? (
            <img
              src={state.image}
              className={styles.img}
              width={state.imageWidth}
              style={{
                top: state.imagePositionTop,
                left: state.imagePositionLeft,
              }}
            />
          ) : (
            <Typewriter />
          )}
        </div>
      </div>
    </Layout>
  );
};
