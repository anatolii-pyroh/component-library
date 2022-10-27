import React from "react";
import classNames from "classnames";

import { colors } from "@helpers/colors.constants";

import styles from "./Text.module.scss";
import { TextProps } from "./Text.types";
import { tags } from "./Text.constants";

export const TextComponent: React.FC<TextProps> = ({
  variant,
  textColor,
  style,
  children,
  className,
}) => {
  const CustomTag = `${tags[variant]}` as keyof JSX.IntrinsicElements;

  const textClass = classNames(
    styles.text,
    styles[`text_variant_${variant}`],
    className
  );

  const customStyle = {
    ...style,
    color: textColor ? `${colors[textColor]}` : "#10203B",
  };
  return (
    <CustomTag className={textClass} style={customStyle}>
      {children}
    </CustomTag>
  );
};
