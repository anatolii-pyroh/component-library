import React from "react";

import { CheckboxProps } from "./CheckboxAndToggle.types";
import styles from "./CheckboxAndToggle.module.scss";

import { Text, TextVariantsEnum } from "@components/Text";
import classNames from "classnames";

export const CheckboxAndToggleComponent: React.FC<CheckboxProps> = ({
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
