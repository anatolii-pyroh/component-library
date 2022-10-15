import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const InputComponent: React.FC<InputProps> = ({
  size,
  type,
  withLabel,
  error,
  showErrorText,
}) => {
  const [inputValue, setInputValue] = useState("");

  let customPlaceholder = "";
  let errorText = "";
  switch (type) {
    case "text":
      customPlaceholder = "Введите текст";
      errorText = "Текст ошибки";
      break;
    case "email":
      customPlaceholder = "Введите эл. почту";
      errorText = "Почта введена неверно";
      break;
    case "password":
      customPlaceholder = "Введите пароль";
      errorText = "Пароль введён неверно";
      break;
    case "date":
      customPlaceholder = "Выберите дату";
      errorText = "Дата введена неверно";
      break;
    case "number":
      customPlaceholder = "Введите число";
      errorText = "Число введено неверно";
      break;
  }

  const inputClass = classNames(
    styles["input_container"], 
    {
      [styles[`input_container_size_${size}`]]: size,
      [styles["input_container_error"]]: error,
    });

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!withLabel) e.target.placeholder = customPlaceholder;
  };

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
      <div style={{ margin: "6px 0 0 2px", color: "var(--red)" }}>
        {showErrorText && error && errorText}
      </div>
    </div>
  );
};
