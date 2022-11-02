import { ComponentStory } from "@storybook/react";
import React from "react";

import { CheckboxAndToggle, CheckboxProps } from ".";

export default {
  title: "Components/CheckboxAndToggle",
  component: CheckboxAndToggle,
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
    id: {
      table: {
        disable: true
      }
    }
  },
};

const Template: ComponentStory<(Props: CheckboxProps) => JSX.Element> = (
  args
) => <CheckboxAndToggle {...args} />;

export const checkboxAndToggle = Template.bind({});
checkboxAndToggle.args = {
  type: "checkbox",
  showLabel: true,
  labelText: "Label text",
  id: "myLabel"
};
