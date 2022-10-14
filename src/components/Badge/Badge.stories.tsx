import React from "react";

import { ComponentStory } from "@storybook/react";

import { Badge, BadgeProps } from ".";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    text: {
      control: { type: "text" },
    },
    badgeColor: {
        name: "badge color",
      control: { type: "select" },
      options: [
        "blue",
        "red",
        "green",
        "dark_green",
        "orange",
        "dark_orange",
        "dark_grey",
      ],
    },
  },
};

const Template: ComponentStory<(Props: BadgeProps) => JSX.Element> = (args) => (
  <Badge {...args} />
);

export const badge = Template.bind({});
badge.args = {
  text: "Badge text",
  badgeColor: "blue",
};
