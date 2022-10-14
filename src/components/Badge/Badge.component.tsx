import React from "react";

import styles from "./Badge.module.scss";
import { BadgeProps } from "./Badge.types";

import { colors } from "@components/colors.constants";

export const BadgeComponent: React.FC<BadgeProps> = ({ badgeColor, text }) => {
  
  return (
    <div
      className={styles.badge}
      style={{ backgroundColor: `${colors[badgeColor]}` }}
    >
      {text}
    </div>
  );
};
