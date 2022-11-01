import React from "react";
import { ComponentStory } from "@storybook/react";

import { RadioButton, RadioButtonProps } from ".";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    showLabel: {
      name: "show label",
    },
    labelText: {
      name: "label text",
    },
    name: {
      table: {
        disable: true
      }
    }
  },
};

const Template: ComponentStory<(Props: RadioButtonProps) => JSX.Element> = (
  args
) => <RadioButton {...args} />;

export const radioButton = Template.bind({})
radioButton.args = {
    showLabel: true,
    labelText: "Label text",
    name: "inputName"
}