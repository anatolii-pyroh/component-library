import React from "react";

import styles from "../Card.module.scss";

import { IconsEnum, SvgIcon } from "@components/SvgIcon";
import { Text, TextVariantsEnum } from "@components/Text";
import { Button } from "@components/Button";

export const PriceWithButton = ({
  price,
  size,
}: {
  price?: number;
  size?: string;
}) => {
  return (
    <Text variant={TextVariantsEnum.Heading_4} className={styles.price}>
      <Button text='Добавить' size='sm' />
      {size !== "lg" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          {price?.toLocaleString("ru-RU")}
          <SvgIcon
            src={IconsEnum.currency}
            size={15}
            style={{ margin: "4px 0 0 6px" }}
          />
        </div>
      )}
    </Text>
  );
};
