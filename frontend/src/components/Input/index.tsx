import React from "react";
import styles from "./styles.module.scss";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  required: boolean;
}

const Input = ({
  name,
  type,
  placeholder,
  value,
  changeHandler = () => {},
  disabled = false,
  required = true,
}: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className={styles.input}
      onChange={changeHandler}
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;
