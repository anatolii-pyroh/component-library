import React from "react";

import styles from "@components/Card/Card.module.scss"
import { Text, TextVariantsEnum } from "@components/Text";

export const Description= ({ description }: { description?: string }) => (
  <Text
    variant={TextVariantsEnum.Body_M}
    textColor='dark_grey'
    className={styles.description}
  > 
    {description}
  </Text>
);
