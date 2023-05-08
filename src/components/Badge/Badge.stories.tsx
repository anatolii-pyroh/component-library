import React from "react";

import { ComponentStory } from "@storybook/react";

import { BadgesContainer, BadgesContainerProps } from "./BadgesContainer";

import styles from "./Badge.module.scss";
import { BadgeColorsEnum } from ".";

export default {
  title: "Components/Badge",
  component: BadgesContainer,
  argTypes: {
    // text: {
    //   control: { type: "text" },
    // },
    // badgebadgeColor: {
    //   name: "badge badgeColor",
    //   control: { type: "select" },
    //   options: [
    //     "blue",
    //     "red",
    //     "green",
    //     "dark_green",
    //     "orange",
    //     "dark_orange",
    //     "dark_grey",
    //   ],
    // },
  },
};

const badges = [
  { id: 1, text: "Badge text", badgeColor: BadgeColorsEnum.blue },
  { id: 2, text: "Badge2", badgeColor: BadgeColorsEnum.green },
  { id: 3, text: "Text3", badgeColor: BadgeColorsEnum.orange },
  { id: 4, text: "Text3312", badgeColor: BadgeColorsEnum.dark_grey },
  { id: 5, text: "Text3", badgeColor: BadgeColorsEnum.dark_green },
  { id: 6, text: "Text3", badgeColor: BadgeColorsEnum.light_grey },
  { id: 7, text: "Text3", badgeColor: BadgeColorsEnum.red },
];

const Template: ComponentStory<(Props: BadgesContainerProps) => JSX.Element> = (
  args
) => (
  <div className={styles.card}>
    content content content content content content content content content
    content content content content content content content content content
    content content content content content
    <BadgesContainer items={badges} />
  </div>
);

export const badge = Template.bind({});
badge.args = {};
