import React from "react";
import classNames from "classnames";

import { Text, TextVariantsEnum } from "@components/Text";

import styles from "./CheckboxAndToggle.module.scss";
import { CheckboxProps } from "./CheckboxAndToggle.types";

export const CheckboxAndToggleComponent: React.FC<CheckboxProps> = ({
  showLabel,
  labelText,
  type,
  id,
}) => {
  const checkboxClass = classNames({
    [styles.checkbox]: type === "checkbox",
    [styles.toggle]: type === "toggle",
  });

  return (
    <div className={checkboxClass} data-testid='Checkbox'>
      <input type='checkbox' id={id} onChange={() => null} />
      <label htmlFor={id}></label>
      <Text textColor='default' variant={TextVariantsEnum.Body_L}>
        {showLabel && labelText}
      </Text>
    </div>
  );
};
