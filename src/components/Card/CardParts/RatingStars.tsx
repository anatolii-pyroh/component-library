import React from "react";
import { Rating } from "react-simple-star-rating";

import styles from "../Card.module.scss";
import { IconsEnum, SvgIcon } from "@components/SvgIcon";

export const RatingStars = () => {
  return (
    <div className={styles.rating}>
      <Rating
        fillColor='var(--orange)'
        fillIcon={
          <SvgIcon
            src={IconsEnum.star}
            style={{ display: "inline-flex", marginRight: "0.5rem" }}
            size={20}
          />
        }
        emptyIcon={
          <SvgIcon
            src={IconsEnum.star}
            style={{ display: "inline-flex", marginRight: "0.5rem" }}
            size={20}
          />
        }
      />
    </div>
  );
};
