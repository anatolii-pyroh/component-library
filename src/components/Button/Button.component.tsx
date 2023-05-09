import React from "react";
import classNames from "classnames";

// import { SvgIcon, IconsEnum } from "@components/SvgIcon";
import { IconsEnum, SvgIcon } from "../SvgIcon";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  id,
  variant = "primary",
  size = "md",
  width = "content",
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  disabled,
  loading,
  style,
  className,
}) => {
  const buttonClass = classNames(
    styles.button,
    {
      [styles[`button_variant_${variant}`]]: variant,
      [styles[`button_size_${size}`]]: size,
      [styles[`button_width_${width}`]]: width,
      [styles[`button_icon_position_${iconPosition}`]]: iconPosition,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={loading || disabled ? () => null : onClick}
      style={style}
      type={type}
      data-testid='Button'
      id={id}
    >
      <span className={styles.loader}>
        <SvgIcon src={IconsEnum.loader} size={30} />
      </span>
      {icon && !disabled && <SvgIcon src={icon} size={20} />}
      {text && <span>{text}</span>}
    </button>
  );
};

ButtonComponent.displayName = "Button";
