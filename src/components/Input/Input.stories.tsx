import { ComponentStory } from "@storybook/react";
import React from "react";

import { Input, InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
};

const Template: ComponentStory<(Props: InputProps) => JSX.Element> = (args) => {
  return <Input {...args} />;
};

export const input = Template.bind({})
input.args = {
    label: "Label text",
    type: "text",
    error: false
}
