import React from "react";
import styles from "./Nav.module.scss";

export default function Nav({ children }: any) {
  return <div className={styles.nav}>{children}</div>;
}
