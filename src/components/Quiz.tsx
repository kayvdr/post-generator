import classnames from "classnames";
import React, { FC, Ref } from "react";
import { State } from "../types/types";
import styles from "./Cover.module.css";
import { Layout } from "./Layout";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

export const Quiz: FC<Props> = ({ elRef, state }) => (
  <Layout elRef={elRef} state={state}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span>Quiz Time</span>
      </h1>
      {state.codeSnippet && (
        <div
          className={classnames(
            styles["code-container"],
            styles["code-container-margin"]
          )}
        >
          <div className={styles["code-content"]}>
            <pre>
              <code>{state.codeSnippet}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  </Layout>
);
