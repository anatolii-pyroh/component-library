import React from "react";

import { ComponentStory } from "@storybook/react";

import { Text } from ".";
import { TextProps, TextVariantsEnum } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    variant: {
      control: { type: "radio" },
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
  children: "Some random text",
  variant: TextVariantsEnum.Heading_1,
};
