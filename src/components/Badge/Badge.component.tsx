import React from "react";

import { colors } from "@helpers/colors.constants";


import styles from "./Badge.module.scss";
import { BadgeProps } from "./Badge.types";


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
