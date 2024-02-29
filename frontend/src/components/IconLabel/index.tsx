import React from "react";
import styles from "./styles.module.scss";

interface IconLabelProps {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  iconType: "success" | "error" | "warning" | "info" | "normal";
}

export const IconLabel = ({
  label,
  handleClick,
  children,
  iconType = "normal",
}: IconLabelProps) => {
  return (
    <div className={styles.iconLabel}>
      <span className={styles.label}>{label}</span>
      <button
        type="button"
        className={`${styles.icon} ${styles[iconType]}`}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};

export default IconLabel;
