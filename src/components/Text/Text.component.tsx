import React from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";
import { TextProps } from "./Text.types";

export const TextComponent: React.FC<TextProps> = ({ variant, children }) => {

  const textClass = classNames(
    styles.text, 
    {[styles[`text_variant_${variant}`]]: variant}
  );

  return (
    <p className={textClass}>
      {children}
    </p>
  );
};
