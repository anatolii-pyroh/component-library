import React from "react";

import styles from "../Card.module.scss";

import { Text, TextVariantsEnum } from "@components/Text";

export const Model = ({ model, size }: { model?: string; size?: string }) => {
  return (
    <Text
      variant={
        size === "lg" ? TextVariantsEnum.Heading_4 : TextVariantsEnum.Caption
      }
      textColor={size === "lg" ? "grey" : "dark_grey"}
      className={styles.model}
    >
      {model}
    </Text>
  );
};
