import { IconsEnum, SvgIcon } from "@components/SvgIcon";
import { Text, TextVariantsEnum } from "@components/Text";
import React, { useState } from "react";

import styles from "../Card.module.scss";

export const PriceCalculator = ({ price }: { price?: number }) => {
  const [inputValue, setInputValue] = useState(1);
  let totalPrice;
  if (price) totalPrice = price * inputValue;

  const handleMinusValue = () => {
    if (inputValue !== 1) setInputValue(inputValue - 1);
    return;
  };
  const handlePlusValue = () => {
    setInputValue(inputValue + 1);
  };

  return (
    <Text
      variant={TextVariantsEnum.Heading_4}
      className={styles["price_calculator"]}
    >
      {/* price */}
      <div
        className={styles["price_with_padding"]}
        style={{ fontWeight: "lighter" }}
      >
        {price?.toLocaleString("ru-RU")}
        <SvgIcon
          src={IconsEnum.currency}
          size={15}
          style={{ margin: "4px 0 0 6px" }}
        />
      </div>

      <div className={styles["price_input"]}>
        <span className={styles.minus} onClick={handleMinusValue} />
        <input
          type='number'
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
          min={1}
        />
        <span className={styles.plus} onClick={handlePlusValue} />
      </div>

      <Text
        variant={TextVariantsEnum.Caption}
        style={{ marginLeft: "2.5rem", marginRight: "11px" }}
      >
        Общая стоимость
      </Text>

      {/* price multiplied by value in input */}
      <div
        className={styles["price_with_padding"]}
        style={{ position: "absolute", right: "20px" }}
      >
        {totalPrice?.toLocaleString("ru-RU")}{" "}
        <SvgIcon
          src={IconsEnum.currency}
          size={15}
          style={{ margin: "4px 0 0 6px" }}
        />
      </div>
    </Text>
  );
};
