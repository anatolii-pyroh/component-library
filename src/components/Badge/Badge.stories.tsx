import React from "react";

import { ComponentStory } from "@storybook/react";

import { Badge, BadgeProps } from ".";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    text: {
        control: {type: "text"}
    },
    badgeColor: {
      control: { type: "select" },
      options: [
        "default",
        "profile_background",
        "grey",
        "dark_grey",
        "light_grey",
        "blue",
        "red",
        "green",
        "orange",
      ],
    },
  },
};

const Template: ComponentStory<(Props: BadgeProps) => JSX.Element> = (args) => (
  <Badge {...args} />
);

export const badge = Template.bind({})
badge.args = {
    text: "Badge text",
    badgeColor: "orange"
}
