import React from "react";

import { Text, TextVariantsEnum } from "@components/Text";

import styles from "./RadioButton.module.scss";
import { RadioButtonProps } from "./RadioButton.types";


export const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  showLabel,
  labelText,
}) => {
  return (
    <div className={styles["radio_button"]}>
      <input type='radio'/>
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
