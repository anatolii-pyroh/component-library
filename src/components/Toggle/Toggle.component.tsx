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
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox'></label>
      {showLabel && (
        <Text textColor='default' variant={TextVariantsEnum.Body_L}>
          {labelText}
        </Text>
      )}
    </div>
  );
};
