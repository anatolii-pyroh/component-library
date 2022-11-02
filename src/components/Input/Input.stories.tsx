import { IconsEnum } from "@components/SvgIcon";
import { ComponentStory } from "@storybook/react";
import React from "react";

import { Input, InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "date", "number"],
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["lg", "md"],
    },
    withLabel: {
      name: "with label",
    },
    showIcon: {
      name: "show icon"
    },
    errorText: {
      name: "error text"
    }
  },
};

const Template: ComponentStory<(Props: InputProps) => JSX.Element> = (args) => {
  return <Input icon={IconsEnum.eye} {...args} />;
};

export const input = Template.bind({});
input.args = {
  type: "text",
  size: "lg",
  withLabel: true,
  showIcon: true,
  error: false,
  placeholder: "Текст",
  errorText: "Текст ошибки"
};
