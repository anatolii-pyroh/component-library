import React from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";
import { TextProps } from "./Text.types";
import { colors, tags } from "./Text.constants";

export const TextComponent: React.FC<TextProps> = ({ variant, textColor, children }) => {

  const CustomTag = `${tags[variant]}` as keyof JSX.IntrinsicElements
  
  const textClass = classNames(
    styles.text,
    styles[`text_variant_${variant}`]
  );

  return (
    <CustomTag className={textClass} style={{color: `${colors[textColor]}`}}>
      {children}
    </CustomTag>
  );
};
