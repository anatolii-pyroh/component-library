import React from "react";

import { ComponentStory } from "@storybook/react";

import { Avatar, AvatarProps } from ".";

import { Text, TextVariantsEnum } from "@components/Text";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    name: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["lg", "md", "sm"],
    },
  },
};

const Template: ComponentStory<(Props: AvatarProps) => JSX.Element> = (
  args
) => {
  return (
    <>
      <Text
        variant={TextVariantsEnum.Heading_4}
        textColor='default'
        style={{ marginBottom: "1rem" }}
      >
        Random text
      </Text>
      <Avatar {...args} />
    </>
  );
};

export const avatar = Template.bind({});
avatar.args = {
  name: "Anatolii Pyroh",
  size: "lg",
};
