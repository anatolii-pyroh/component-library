import React from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";
import { TextProps } from "./Text.types";
import { tags } from "./Text.constants";

import { colors } from "@components/colors.constants";

export const TextComponent: React.FC<TextProps> = ({
  variant,
  textColor,
  style,
  children,
}) => {
  const CustomTag = `${tags[variant]}` as keyof JSX.IntrinsicElements;

  const textClass = classNames(styles.text, styles[`text_variant_${variant}`]);

  return (
    <CustomTag className={textClass} style={style}>
      <span style={{ color: `${colors[textColor]}` }}>
      {children}
      </span>
    </CustomTag>
  );
};
