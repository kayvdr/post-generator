import React, { FC, Ref } from "react";
import { State } from "../types/types";
import styles from "./Cover.module.css";
import { Layout } from "./Layout";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

export const Description: FC<Props> = ({ elRef, state }) => (
  <Layout elRef={elRef} state={state}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        {state.titleGreen ? (
          <span>{state.titleGreen}</span>
        ) : (
          <span>Description</span>
        )}
      </h1>
      {state.description ? (
        <p className={styles["text-big"]}>{state.description}</p>
      ) : (
        <p className={styles["text-big"]}>Lorem ipsum dolor sit amet</p>
      )}
      {state.descriptionImage && (
        <img src={state.descriptionImage} className={styles["content-img"]} />
      )}
    </div>
  </Layout>
);
