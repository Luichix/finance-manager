import React from "react";
import styles from "./Content.module.scss";
export default function Content({ children, selected, i }: any) {
  return (
    <div className={`${styles.content} ${selected === i ? "active" : ""}`}>
      {children}
    </div>
  );
}
