import { IconsEnum } from "@components/SvgIcon";
import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";

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
      name: "show icon",
    },
    errorText: {
      name: "error text",
    },
    value: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onFocus: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: ComponentStory<(Props: InputProps) => JSX.Element> = (args) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log("Input value:" + inputValue);
  };

  return (
    <Input
      {...args}
      value={inputValue}
      onChange={handleOnChange}
      icon={IconsEnum.eye}
    />
  );
};

export const input = Template.bind({});
input.args = {
  type: "text",
  size: "lg",
  withLabel: true,
  showIcon: true,
  error: false,
  placeholder: "Текст",
  errorText: "Текст ошибки",
};
