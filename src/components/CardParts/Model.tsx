import React from "react";

import styles from "@components/Card/Card.module.scss";
import { Text, TextVariantsEnum } from "@components/Text";

export const Model = ({ model }: { model?: string }) => (
  <Text
    variant={TextVariantsEnum.Caption}
    textColor='dark_grey'
    className={styles.model}
  >
    {model}
  </Text>
);
