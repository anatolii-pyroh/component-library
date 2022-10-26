import React, { useState } from "react";
import classNames from "classnames";

import { IconsEnum, SvgIcon } from "@components/SvgIcon";

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
    if (!withLabel) e.target.placeholder = placeholder;
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

      {showIcon && type !== "date" && (
        <div className={iconClass}>
          {icon === "eye" && <SvgIcon src={IconsEnum.eye} size={20} />}
          {icon === "currency" && (
            <SvgIcon src={IconsEnum.currency} size={20} />
          )}
        </div>
      )}

      {error && <div className={styles.error}>{errorText}</div>}
    </div>
  );
};
