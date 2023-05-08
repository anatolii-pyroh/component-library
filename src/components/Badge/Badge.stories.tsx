import React from "react";

import { ComponentStory } from "@storybook/react";

import { BadgesContainer, BadgesContainerProps } from "./BadgesContainer";

import styles from "./Badge.module.scss";

export default {
  title: "Components/Badge",
  component: BadgesContainer,
  argTypes: {
    // text: {
    //   control: { type: "text" },
    // },
    // badgeColor: {
    //   name: "badge color",
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
  { id: 1, text: "Badge text", color: "blue" },
  { id: 2, text: "Badge2", color: "green" },
  { id: 3, text: "Text3", color: "orange" },
  { id: 4, text: "Text3312", color: "dark_grey" },
  { id: 5, text: "Text3", color: "dark_green" },
  { id: 6, text: "Text3", color: "light_grey" },
  { id: 7, text: "Text3", color: "red" },
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
