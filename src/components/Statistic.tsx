import { FC, Ref } from "react";
import { State } from "../types/types";
import { Layout } from "./Layout";
import styles from "./Statistic.module.css";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

export const Statistic: FC<Props> = ({ elRef, state }) => {
  const splitter = (value: string) => {
    const [firstPoint, ...restPoint] = value.split(".");

    if (firstPoint?.length !== value.length)
      return `<span>${firstPoint}</span>.${restPoint.join(".")}`;

    const [first, ...rest] = value.split(" ");

    return `<span>${first}</span> ${rest}`;
  };

  return (
    <Layout elRef={elRef} state={state}>
      <div className={styles.content}>
        <div className={styles.box}>
          <h3 className={styles["box-title"]}>Version</h3>
          {state.statistic?.version ? (
            <p
              dangerouslySetInnerHTML={{
                __html: splitter(state.statistic.version),
              }}
              className={styles["box-value"]}
            ></p>
          ) : (
            <p className={styles["box-value"]}>
              <span>0</span>.0.0
            </p>
          )}
        </div>
        <div className={styles.box}>
          <h3 className={styles["box-title"]}>Size</h3>
          {state.statistic?.size ? (
            <p
              dangerouslySetInnerHTML={{
                __html: splitter(state.statistic.size),
              }}
              className={styles["box-value"]}
            ></p>
          ) : (
            <p className={styles["box-value"]}>
              <span>000</span> KB
            </p>
          )}
        </div>
        <div className={styles.box}>
          <h3 className={styles["box-title"]}>Stars</h3>
          <p className={styles["box-subtitle"]}>(Github)</p>
          {state.statistic?.stars ? (
            <p
              dangerouslySetInnerHTML={{
                __html: splitter(state.statistic.stars),
              }}
              className={styles["box-value"]}
            ></p>
          ) : (
            <p className={styles["box-value"]}>
              <span>0</span>.0K
            </p>
          )}
        </div>
        <div className={styles.box}>
          <h3 className={styles["box-title"]}>Downloads</h3>
          <p className={styles["box-subtitle"]}>(weekly)</p>
          {state.statistic?.downloads ? (
            <p
              dangerouslySetInnerHTML={{
                __html: splitter(state.statistic.downloads),
              }}
              className={styles["box-value"]}
            ></p>
          ) : (
            <p className={styles["box-value"]}>
              <span>0</span>.0K
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};
