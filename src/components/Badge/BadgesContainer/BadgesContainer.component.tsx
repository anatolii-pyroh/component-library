import React from "react";
import classNames from "classnames";

import { BadgesContainerProps } from "./BadgesContainer.types";
import { Badge } from "..";

import styles from "./BadgesContainer.styles.module.scss";

export const BadgesContainerComponent: React.FC<BadgesContainerProps> = ({
  items,
  className,
}) => {
  const containerClassName = classNames(styles.badgesContainer, {}, className);
  return (
    <div className={containerClassName}>
      {items.map((item) => (
        <Badge key={item.id} text={item.text} badgeColor={item.badgeColor} />
      ))}
    </div>
  );
};

BadgesContainerComponent.displayName = "BadgesContainer";
