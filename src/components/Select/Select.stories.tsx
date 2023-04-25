import { ComponentStory } from "@storybook/react";
import { Select } from ".";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {},
};

const Template: ComponentStory<(Props: {}) => JSX.Element> = (args) => (
  <Select {...args} />
);

export const select = Template.bind({});

select.args = {
  // showLabel: true,
  // labelText: "Label text",
  // name: "inputName"
};
