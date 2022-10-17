import { ComponentStory } from "@storybook/react";
import React from "react";

import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    type: {
      control: {type: "radio"},
      options: ["checkbox", "toggle"]
    },
    showLabel: {
      name: "show label",
    },
    labelText: {
      name: "label text",
    },
  },
};

const Template: ComponentStory<(Props: CheckboxProps) => JSX.Element> = (
  args
) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
  type: "checkbox",
  showLabel: true,
  labelText: "Label text",
};
