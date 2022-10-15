import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const InputComponent: React.FC<InputProps> = ({
  size,
  type,
  withLabel,
  error,
}) => {
  const [inputValue, setInputValue] = useState("");

  let customPlaceholder: string = ""
  switch(type) {
    case "text": customPlaceholder = "Введите текст"; break;
    case "email": customPlaceholder = "Введите эл. почту"; break;
    case "password": customPlaceholder = "Введите пароль"; break;
    case "date": customPlaceholder = "Выберите дату"; break;
    case "number": customPlaceholder = "Введите число"; break;
  }

  const inputClass = classNames(
    styles["input_container"], 
    {
      [styles[`input_container_size_${size}`]]: size,
      [styles["input_container_error"]]: error,
    }
  );

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!withLabel) e.target.placeholder = customPlaceholder  
  }

  return (
    <div className={inputClass}>
      <input
        type={type}
        placeholder={!withLabel ? customPlaceholder : ""}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={handleOnBlur}
        min={1}
      />
      <label className={inputValue && styles.filled}>
        {withLabel && customPlaceholder}
      </label>
    </div>
  );
};
