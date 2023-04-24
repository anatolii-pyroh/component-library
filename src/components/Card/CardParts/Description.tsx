import React from "react";

import styles from "../Card.module.scss";

import { Text, TextVariantsEnum } from "@components/Text";

export const Description = ({
  description,
  size,
}: {
  description?: string;
  size?: string;
}) => {
  return (
    <Text
      variant={
        size === "lg" ? TextVariantsEnum.Body_L : TextVariantsEnum.Body_M
      }
      textColor='dark_grey'
      className={styles.description}
    >
      {description}
    </Text>
  );
};
