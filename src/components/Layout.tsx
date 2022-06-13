import classnames from "classnames";
import React, { FC, Ref } from "react";
import { State } from "../types/types";
import styles from "./Cover.module.css";
import { Arrow } from "./dist/svg";
import Triangle from "./dist/svg/Triangle";
import { Icons } from "./Icons";
import { Profile } from "./Profile";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ elRef, state, children }) => (
  <div
    ref={elRef}
    className={classnames(styles.post, {
      [styles["code-snippet-center"]]: state.codeSnippetCenter,
    })}
  >
    {state.showArrow && (
      <div className={styles["triangle-top"]}>
        <Triangle />
        <div className={styles.arrow}>
          <Arrow />
        </div>
      </div>
    )}
    {children}
    {state.showBar && (
      <div className={styles.infos}>
        <Icons />
        <Profile />
      </div>
    )}
  </div>
);
