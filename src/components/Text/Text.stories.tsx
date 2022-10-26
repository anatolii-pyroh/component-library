import React from "react";

import { ComponentStory } from "@storybook/react";

import { Text, TextProps, TextVariantsEnum } from ".";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    textColor: {
      name: "text color",
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
    variant: {
      control: { type: "select" },
      options: [
        "heading_1",
        "heading_2",
        "heading_3",
        "heading_4",
        "heading_5",
        "subtitle_m",
        "subtitle_s",
        "body_l",
        "body_m",
        "caption",
      ],
      description: "Text size variants",
    },
    children: {
      name: "label",
    },
  },
};

const Template: ComponentStory<(Props: TextProps) => JSX.Element> = (args) => (
  <Text {...args} />
);

export const text = Template.bind({});
text.args = {
  children: "Random text",
  variant: TextVariantsEnum.Heading_1,
};
