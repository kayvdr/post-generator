import classnames from "classnames";
import React, { FC, Ref, useContext } from "react";
import { State, StateContext } from "../types/types";
import { StoreContext } from "./App";
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

export const Layout: FC<Props> = ({ elRef, children }) => {
  const cxt = useContext<StateContext | null>(StoreContext);

  if (!cxt) return null;

  const { state } = cxt;

  return (
    <div
      ref={elRef}
      className={classnames(styles.post, {
        [styles["code-snippet-center"]]: state.codeSnippetCenter,
        [styles["post-full"]]: state.size,
      })}
      style={{
        transform: `matrix(1, 0, 0, 1, ${state.position.x}, ${state.position.y}) scale(${state.scale})`,
      }}
    >
      <div className={styles["triangle-top"]}>
        <Triangle />
        {state.showArrow && (
          <div className={styles.arrow}>
            <Arrow />
          </div>
        )}
      </div>
      {children}
      <div className={styles.infos}>
        <Icons />
        <Profile />
      </div>
      <div className={styles["triangle-bottom"]}>
        <Triangle />
      </div>
    </div>
  );
};
