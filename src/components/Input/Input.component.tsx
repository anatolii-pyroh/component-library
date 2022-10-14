import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const InputComponent: React.FC<InputProps> = ({ label, type, error }) => {

    const inputClass = classNames(
        styles["input_container"],
        {[styles["input_container_error"]]: error}
    )

  const [inputValue, setInputValue] = useState("")

  return (
      <div className={inputClass}>
        <input type={type ? type : "text"} onChange={(e) => setInputValue(e.target.value)}/>
        <label className={inputValue && styles.filled}>{label}</label>
      </div>
  );
};
