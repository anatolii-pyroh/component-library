import React from "react";

import styles from "@components/Card/Card.module.scss";

import { Text, TextVariantsEnum } from "@components/Text";

export const Name = ({
  name,
  isHovering,
  size,
}: {
  name?: string;
  isHovering?: boolean;
  size?: string;
}) => {

  
  return (
    <Text
      variant={size === "lg" ? TextVariantsEnum.Heading_3 : TextVariantsEnum.Heading_4}
      textColor={isHovering ? "blue" : ""}
      className={styles.name}
    >
     {size === "lg" ? name?.split(" ")[0] : name}
    </Text>
  );
};
