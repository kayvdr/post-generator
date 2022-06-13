import React, { FC } from "react";
import styles from "./Profile.module.css";

export const Profile: FC = () => (
  <div className={styles.profile}>
    <img
      className={styles["profile-img"]}
      src="./profile-img.jpg"
      alt="Profile Image"
    />
    <div className={styles["profile-text"]}>
      <p className={styles["profile-name"]}>@on3k.dev</p>
      <p className={styles["profile-follow"]}>Follow now</p>
    </div>
  </div>
);
