import React from "react";

import styles from "../Card.module.scss";

export const Img = ({ src, alt }: { src?: string; alt?: string }) => {
  return <img src={src} alt={alt} className={styles.img} />;
};
