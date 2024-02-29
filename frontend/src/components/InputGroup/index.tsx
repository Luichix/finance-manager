import React from "react";
import styles from "./styles.module.scss";

interface InputGroupProps {
  name: string;
  label: string;
  children: React.ReactNode;
  // order: 'columned' | 'rowed';
}

function InputGroup({
  name,
  label,
  children,
  // order = 'columned',
}: InputGroupProps) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={`${styles.label}`}>
        {label}
      </label>
      <div className={styles.group}>
        <div className={styles.input}>{children}</div>
      </div>
    </div>
  );
}

export default InputGroup;
