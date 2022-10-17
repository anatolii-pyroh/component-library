import React from "react";

import { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.scss";

import { Text, TextVariantsEnum } from "@components/Text";

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  showLabel,
  labelText,
}) => {

  return (
    <div className={styles.checkbox}>
      <input type='checkbox' id="checkbox"/>
      <label htmlFor="checkbox"></label>
      {showLabel && (
        <Text textColor='default' variant={TextVariantsEnum.Body_L}>
          {labelText}
        </Text>
      )}
    </div>
  );
};
