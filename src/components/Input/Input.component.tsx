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
  customPlaceholder,
  error,
  errorText,
}) => {
  const [inputValue, setInputValue] = useState("");

  const inputClass = classNames(styles["input_container"], {
    [styles[`input_container_size_${size}`]]: size,
    [styles["input_container_error"]]: error,
  });
  const iconClass = classNames(styles.icon, {
    [styles[`icon_size_${size}`]]: size,
    [styles[`icon_rotate`]]: icon === "arrow"
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
        // onFocus={(e) => (e.target.placeholder = "")}
        onBlur={handleOnBlur}
        min={1}
      />

      {withLabel && (
        <label className={inputValue && styles.filled}>
          {customPlaceholder}
        </label>
      )}

      {showIcon && type !== "date" && (
        <div className={iconClass}>
         {icon === "arrow" &&  <SvgIcon src={IconsEnum.arrow} size={20} />}
         {icon === "eye" && <SvgIcon src={IconsEnum.eye} size={20} />}
        </div>
      )}

      <div className={styles.error}>{error && errorText}</div>
    </div>
  );
};
