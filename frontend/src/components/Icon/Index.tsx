import React from "react";
import styles from "./Icon.module.scss";

// ! id's disponibles en categories.ts
export default function Icon({ id }: any) {
  return (
    <svg className={styles.icon}>
      <use href={`/Icons/sprite.svg#${id}`}></use>
    </svg>
  );
}
