import React from "react";

import styles from "../Card.module.scss";

import { IconsEnum, SvgIcon } from "@components/SvgIcon";
import { Text, TextVariantsEnum } from "@components/Text";
import { getWordEnding } from "@helpers/getWordEnding";

export const Delivery = ({ deliveryDate }: { deliveryDate: Date }) => {
  const today = new Date();
  const monthsСount =
    deliveryDate.getMonth() -
    today.getMonth() +
    12 * (deliveryDate.getFullYear() - today.getFullYear());
  const months = getWordEnding(monthsСount, "месяц", "месяца", "месяцев");

  return (
    <Text
      variant={TextVariantsEnum.Div}
      textColor='dark_grey'
      className={styles.delivery}
    >
      <SvgIcon src={IconsEnum.delivery} size={15} />
      <div>
        {"Доставка со склада: не позднее " +
          deliveryDate.toLocaleDateString("ru-RU")}{" "}
        <span>
          ({monthsСount} {months})
        </span>
      </div>
    </Text>
  );
};
