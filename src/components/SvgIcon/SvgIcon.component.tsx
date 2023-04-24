import React from "react";
import { ReactSVG } from "react-svg";
import classNames from "classnames";

import styles from "./SvgIcon.module.scss";
import { SvgIconProps } from "./SvgIcon.types";

export const SvgIconComponent: React.FC<SvgIconProps> = ({
  src,
  size = 24,
  color = "inherit",
  rotate,
  className,
  error,
  style,
  onClick,
  defaultStroke,
}) => {
  const svgIconClass = classNames(
    styles.svgIcon,
    {
      [styles[`svgIcon_rotate_${rotate}`]]: rotate,
      [styles.defaultStroke]: defaultStroke,
      [styles.error]: error,
    },
    className
  );

  const stroke = defaultStroke
    ? {}
    : {
        stroke: `var(--${color})`,
      };

  const customStyles = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
    ...stroke,
  };

  return (
    <ReactSVG
      src={src}
      className={svgIconClass}
      onClick={onClick}
      style={customStyles}
    />
  );
};

SvgIconComponent.displayName = "SvgIcon";
