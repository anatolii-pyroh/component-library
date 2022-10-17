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
    icon: {
      control: {type: "select"},
      options: ["arrow", "eye", "currency"]
    },
    customPlaceholder: {
      name: "custom placeholder"
    },
    errorText: {
      name: "error text"
    }
  },
};

const Template: ComponentStory<(Props: InputProps) => JSX.Element> = (args) => {
  return <Input {...args} />;
};

export const input = Template.bind({});
input.args = {
  type: "text",
  size: "lg",
  showIcon: true,
  withLabel: true,
  error: false,
  icon: "arrow",
  customPlaceholder: "Текст",
  errorText: "Текст ошибки"
};
