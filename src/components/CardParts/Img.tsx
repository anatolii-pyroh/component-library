import React from "react";

import styles from "@components/Card/Card.module.scss"

export const Img = ({ src, alt }: { src?: string, alt?: string }) => (
  <img src={src} alt={alt} className={styles.img}/>
);
