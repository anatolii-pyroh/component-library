import React from "react";

import styles from "./Toggle.module.scss";
import { ToggleProps } from "./Toggle.types";

import { Text, TextVariantsEnum } from "@components/Text";

export const ToggleComponent: React.FC<ToggleProps> = ({
  showLabel,
  labelText,
}) => {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type='checkbox' />
        <div className={styles.slider}></div>
      </label>
      {showLabel && (
        <Text variant={TextVariantsEnum.Body_L} textColor='default'>
          {labelText}
        </Text>
      )}
    </div>
  );
};
