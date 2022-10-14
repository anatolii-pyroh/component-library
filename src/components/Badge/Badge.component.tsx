import React from "react";
import classNames from "classnames";

import styles from "./Badge.module.scss";
import { BadgeProps } from "./Badge.types";

import { colors } from "@components/colors.constants";

export const BadgeComponent: React.FC<BadgeProps> = ({ badgeColor, text }) => {

  const badgeClass = classNames(styles.badge);

  return (
    <div className={styles.card} >
      <div
        className={badgeClass}
        style={{ backgroundColor: `${colors[badgeColor]}` }}
      >
        {text}
      </div>
    </div>
  );
};
