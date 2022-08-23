import classnames from "classnames";
import React, { FC, Ref } from "react";
import { State } from "../types/types";
import styles from "./Cover.module.css";
import LinkIcon from "./dist/svg/Link";
import { Layout } from "./Layout";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

export const Link: FC<Props> = ({ elRef, state }) => (
  <Layout elRef={elRef} state={state}>
    <div className={classnames(styles.content, styles["description-content"])}>
      <h1 className={styles.title}>
        {state.titleGreen && <span>{state.titleGreen}</span>}
      </h1>
      {state.link && (
        <div className={styles["link-container"]}>
          <div className={styles["link-icon-container"]}>
            <LinkIcon
              className={classnames(styles.icon, styles["link-icon"])}
            />
          </div>
          {state.link}
        </div>
      )}
      {state.descriptionImage && (
        <img src={state.descriptionImage} className={styles["link-image"]} />
      )}
    </div>
  </Layout>
);
