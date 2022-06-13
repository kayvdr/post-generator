import React, { FC, Ref } from "react";
import { State } from "../types/types";
import styles from "./Cover.module.css";
import { Layout } from "./Layout";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

export const Snippet: FC<Props> = ({ elRef, state }) => (
  <Layout elRef={elRef} state={state}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        {state.titleGreen && <span>{state.titleGreen}</span>}
      </h1>
      {state.description && <p>{state.description}</p>}
      {state.codeSnippet && (
        <div className={styles["code-container"]}>
          {state.codeHeader && (
            <div className={styles["code-header"]}>{state.codeHeader}</div>
          )}
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
