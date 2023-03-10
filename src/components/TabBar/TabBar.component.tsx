import React from "react";

import styles from "./TabBar.module.scss";

import { TabBarProps } from "./TabBar.types";

export const TabBarComponent: React.FC<TabBarProps> = ({
  tabList,
  activeTab,
  onClick,
}) => {
  return (
    <ul className={styles.tabBar}>
      {tabList.map((tab) => (
        <li
          key={tab}
          className={tab === activeTab ? styles.active : ""}
          onClick={() => onClick(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};
