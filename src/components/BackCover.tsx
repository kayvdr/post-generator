import React, { FC, Ref } from "react";
import { State } from "../types/types";
import styles from "./Cover.module.css";
import { ComputerGuy } from "./dist/svg";
import { Layout } from "./Layout";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

export const BackCover: FC<Props> = ({ elRef, state }) => (
  <Layout elRef={elRef} state={state}>
    <div className={styles.content}>
      {state.subtitle && (
        <p className={styles["sub-title"]}>{state.subtitle}</p>
      )}
      <h1 className={styles.title}>
        <span>How was it?</span>
      </h1>
      <p className={styles["sub-title"]}>
        Like and comment this post &#128591;
      </p>
      <div className={styles["backcover-img"]}>
        <ComputerGuy />
      </div>
    </div>
  </Layout>
);
