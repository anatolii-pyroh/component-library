import React from "react";
import classNames from "classnames";

import { Text, TextVariantsEnum } from "@components/Text";

import styles from "./CheckboxAndToggle.module.scss";
import { CheckboxProps } from "./CheckboxAndToggle.types";


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
      <input type='checkbox' id={type} name={type} />
      <label htmlFor={type}></label>
      <Text textColor='default' variant={TextVariantsEnum.Body_L}>
        {showLabel && labelText}
      </Text>
    </div>
  );
};
