import React from "react";
import classNames from "classnames";

import styles from "./Avatar.module.scss";
import { AvatarProps } from "./Avatar.types";


export const AvatarComponent: React.FC<AvatarProps> = ({ name, size }) => {
  let initials = name
    .split(" ")
    .map((element) => element.slice(0, 1))
    .join("");

  const avatarClass = classNames(
    styles.avatar, 
    {[styles[`avatar_size_${size}`]]: size}
    );

    return (
      <div className={avatarClass}>
        {initials[0] + initials[1]}
      </div>
    );
};
