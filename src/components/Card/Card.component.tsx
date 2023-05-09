import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

import {
  Delivery,
  Description,
  Img,
  Model,
  Name,
  PriceCalculator,
  PriceWithButton,
  RatingStars,
} from "./CardParts";
import { Badge } from "@components/Badge";

export const CardComponent: React.FC<CardProps> = ({
  size,
  imgSrc,
  name,
  model,
  description,
  deliveryDate,
  price,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const cardClass = classNames(styles.card, {
    [styles[`card_size_${size}`]]: size,
  });

  return (
    <div
      className={cardClass}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      data-testid='Card'
    >
      <Badge text='Text' badgeColor='orange' />
      <Img src={imgSrc} alt='product img' />
      <Name name={name} isHovering={isHovering} size={size} />
      <Model model={model} size={size} />
      <RatingStars />
      <Description description={description} size={size} />
      {size === "lg" && deliveryDate && (
        <Delivery deliveryDate={deliveryDate} />
      )}
      <PriceWithButton price={price} size={size} />
      {size === "lg" && <PriceCalculator price={price} />}
    </div>
  );
};
