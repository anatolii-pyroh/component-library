import { ComponentStory } from "@storybook/react";
import React from "react";
import { Toggle } from ".";
import { ToggleProps } from "./Toggle.types";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    showLabel: {
      name: "show label",
    },
    labelText: {
      name: "label text",
    },
  },
};

const Template: ComponentStory<(Props: ToggleProps) => JSX.Element> = (
  args
) => <Toggle {...args} />;

export const toggle = Template.bind({});
toggle.args = {
  showLabel: true,
  labelText: "Label text",
};
