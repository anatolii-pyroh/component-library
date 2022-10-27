import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

import {
  Description,
  Img,
  Model,
  Name,
  PriceWithButton,
  RatingStars,
} from "@components/CardParts";


export const CardComponent: React.FC<CardProps> = ({
  size,
  imgSrc,
  name,
  model,
  description,
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
    >
      <Img src={imgSrc} alt='product img' />
      <Name name={name} isHovering={isHovering} />
      <Model model={model} />
      <RatingStars/>
      <Description description={description} />
      <PriceWithButton price={price} />
    </div>
  );
};
