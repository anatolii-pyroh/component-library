import React from "react";

import styles from "./Badge.module.scss";
import { BadgeProps } from "./Badge.types";

// add BadgeColorsEnum
export const BadgeComponent: React.FC<BadgeProps> = ({ badgeColor, text }) => {
  return (
    <div
      className={styles.badge}
      style={{ backgroundColor: `var(--${badgeColor})` }}
    >
      {text}
    </div>
  );
};
