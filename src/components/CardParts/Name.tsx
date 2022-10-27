import React from "react";

import styles from "@components/Card/Card.module.scss"
import { Text, TextVariantsEnum } from "@components/Text";

export const Name = ({
  name,
  isHovering,
}: {
  name?: string;
  isHovering?: boolean;
}) => {
  return (
    <Text
      variant={TextVariantsEnum.Heading_4}
      textColor={isHovering ? "blue" : ""}
      className={styles.name}
    >
      {name}
    </Text>
  );
};
