import React, { useState } from "react";
import Input from "../Input";
import styles from "./styles.module.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  required: boolean;
}

function Password(props: InputProps) {
  const [see, setSee] = useState(false);

  return (
    <div className={styles.password}>
      <Input {...props} type={see ? "text" : "password"} />
      <button
        type="button"
        onClick={() => setSee(!see)}
        className={styles.view}
      >
        <i>
          {see ? <AiFillEye size={32} /> : <AiFillEyeInvisible size={32} />}
        </i>
      </button>
    </div>
  );
}

export default Password;
