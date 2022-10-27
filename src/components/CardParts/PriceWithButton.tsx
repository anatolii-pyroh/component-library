import React from "react";

import styles from "@components/Card/Card.module.scss"

import { IconsEnum, SvgIcon } from "@components/SvgIcon";
import { Text, TextVariantsEnum } from "@components/Text";
import { Button } from "@components/Button";

export const PriceWithButton = ({ price }: { price?: number }) => {
  return (
    <Text
      variant={TextVariantsEnum.Heading_4}
      className={styles.price}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {price?.toLocaleString("ru-RU")}
        <SvgIcon
          src={IconsEnum.currency}
          size={15}
          style={{ margin: "4px 0 0 6px" }}
        />
      </div>
      <Button text='Добавить' size='sm' />
    </Text>
  );
};
