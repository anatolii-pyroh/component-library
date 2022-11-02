import React from "react";
import classNames from "classnames";

import { SvgIcon } from "@components/SvgIcon";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const InputComponent: React.FC<InputProps> = ({
  value,
  size,
  type,
  icon,
  showIcon,
  withLabel,
  placeholder,
  error,
  errorText,
  onChange,
  onFocus,
  onBlur,
  onClick,
}) => {
  const inputClass = classNames(styles["input_container"], {
    [styles[`input_container_size_${size}`]]: size,
    [styles["input_container_error"]]: error,
  });

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!withLabel && placeholder) e.target.placeholder = placeholder;
    if (onBlur) onBlur(e)
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = "";
    if (onFocus) onFocus(e)
  };

  return (
    <div className={inputClass}>
      <input
        type={type}
        placeholder={withLabel ? "" : placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onClick={onClick}
      />

      {withLabel && (
        <label className={value && styles.filled}>{placeholder}</label>
      )}

      {showIcon && icon && (
        <div className={styles.icon}>
          <SvgIcon src={icon} size={20} />
        </div>
      )}

      {error && <div className={styles.error}>{errorText}</div>}
    </div>
  );
};
