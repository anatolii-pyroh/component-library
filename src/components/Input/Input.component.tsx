import React, { useState } from "react";
import classNames from "classnames";

import { SvgIcon } from "@components/SvgIcon";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const InputComponent: React.FC<InputProps> = ({
  size,
  type,
  icon,
  showIcon,
  withLabel,
  placeholder,
  error,
  errorText,
}) => {
  const [inputValue, setInputValue] = useState("");

  const inputClass = classNames(styles["input_container"], {
    [styles[`input_container_size_${size}`]]: size,
    [styles["input_container_error"]]: error,
  });
  const iconClass = classNames(styles.icon, {
    [styles[`icon_size_${size}`]]: size
  });

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!withLabel && placeholder) e.target.placeholder = placeholder;
  };

  return (
    <div className={inputClass}>
      <input
        type={type}
        placeholder={withLabel ? "" : placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={handleOnBlur}
        min={1}
      />

      {withLabel && (
        <label className={inputValue && styles.filled}>{placeholder}</label>
      )}

      {showIcon && icon && (
        <div className={iconClass}>
          <SvgIcon src={icon} size={20} />
        </div>
      )}

      {error && <div className={styles.error}>{errorText}</div>}
    </div>
  );
};
