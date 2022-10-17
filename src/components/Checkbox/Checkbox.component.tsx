import React from "react";

import { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.scss";

import { Text, TextVariantsEnum } from "@components/Text";
import classNames from "classnames";

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  showLabel,
  labelText,
  type,
}) => {

  const checkboxClass = classNames({
    [styles.checkbox]: type === "checkbox",
    [styles.toggle]: type === "toggle",
  });

  return (
    <div className={checkboxClass}>
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
