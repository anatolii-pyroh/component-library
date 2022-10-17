import React from "react";

import { Text, TextVariantsEnum } from "@components/Text";

import styles from "./RadioButton.module.scss";
import { RadioButtonProps } from "./RadioButton.types";


export const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  showLabel,
  labelText,
  name
}) => {
  return (
    <div className={styles["radio_button"]}>
      <input type='radio' name={name}/>
      <Text
        textColor='default'
        variant={TextVariantsEnum.Body_L}
        style={{ marginLeft: "2rem" }}
      >
        {showLabel && labelText}
      </Text>
    </div>
  );
};
