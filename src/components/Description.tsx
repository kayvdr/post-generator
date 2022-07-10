import React, { FC, Ref } from "react";
import { State } from "../types/types";
import styles from "./Cover.module.css";
import { Layout } from "./Layout";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

const getDescription = (description: string) => {
  const descriptionReplaced = description.replace(/\n/g, "<br />");

  const response = descriptionReplaced.replace(
    /\->/g,
    `<span class="${styles["list-item"]}">&#x261B;</span>`
  );

  return response;
};

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
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: getDescription(state.description),
          }}
        ></div>
      ) : (
        <p>Lorem ipsum dolor sit amet</p>
      )}
      {state.descriptionImage && (
        <img
          src={state.descriptionImage}
          className={styles["content-img"]}
          width={state.imageWidth}
          style={{
            top: state.imagePositionTop,
            left: state.imagePositionLeft,
          }}
        />
      )}
    </div>
  </Layout>
);
