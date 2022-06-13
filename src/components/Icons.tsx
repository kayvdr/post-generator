import React, { FC } from "react";
import Bookmark from "./dist/svg/Bookmark";
import Heart from "./dist/svg/Heart";
import Send from "./dist/svg/Send";
import styles from "./Icons.module.css";

export const Icons: FC = () => (
  <div className={styles["icons-box"]}>
    <div className={styles["icon-container"]}>
      <Heart className={styles.icon} />
    </div>
    <div className={styles["icon-container"]}>
      <Send className={styles.icon} />
    </div>
    <div className={styles["icon-container"]}>
      <Bookmark className={styles.icon} />
    </div>
  </div>
);
