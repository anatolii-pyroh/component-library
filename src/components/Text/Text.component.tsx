import React from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";
import { TextProps } from "./Text.types";
import { tags } from "./Text.constants";

export const TextComponent: React.FC<TextProps> = ({ variant, children }) => {

  const CustomTag = `${tags[variant]}` as keyof JSX.IntrinsicElements
  
  const textClass = classNames(
    styles.text, 
    {[styles[`text_variant_${variant}`]]: variant}
  );

  return (
    <CustomTag className={textClass}>
      {children}
    </CustomTag>
  );
};
