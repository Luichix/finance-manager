import React from "react";
import styles from "./Icon.module.scss";

// ! id's disponibles en categories.ts
export default function Icon({
  id,
  color,
}: {
  id: number | string;
  color?: string;
}) {
  return (
    <svg className={`${styles.icon}`} style={{ fill: color, color: color }}>
      <use href={`/Icons/sprite.svg#${id}`}></use>
    </svg>
  );
}
