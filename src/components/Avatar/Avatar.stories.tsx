import React from "react";

import { ComponentStory } from "@storybook/react";

import { Avatar } from ".";
import { AvatarProps } from "./Avatar.types";

import { Text, TextVariantsEnum } from "@components/Text";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    name: {
      control: { type: "text" },
    },
    size: {
      control: { type: "radio" },
      options: ["lg", "md", "sm"],
    },
  },
};

const Template: ComponentStory<(Props: AvatarProps) => JSX.Element> = (
  args
) => {
  return (
    <>
      <Text variant={TextVariantsEnum.Heading_4}>Random text</Text>
      <Avatar {...args} />
    </>
  );
};

export const avatar = Template.bind({});
avatar.args = {
  name: "Anatolii Pyroh",
  size: "lg",
};
