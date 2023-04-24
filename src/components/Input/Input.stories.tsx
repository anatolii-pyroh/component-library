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
    errorText: {
      name: "error text",
    },
    value: {
      table: {
        disable: true,
      },
    },
    icon: {
      control: { type: "select" },
      options: [IconsEnum.eye, IconsEnum.calendar, IconsEnum.currency],
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
    style: {
      table: {
        disable: true,
      },
    },
    inputRef: {
      table: {
        disable: true,
      },
    },
    onIconClick: {
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
  console.log(args);
  return (
    <Input
      {...args}
      value={inputValue}
      onChange={handleOnChange}
      onIconClick={() => console.log("handleIconClick")}
    />
  );
};

export const input = Template.bind({});
input.args = {
  type: "text",
  icon: IconsEnum.eye,
  size: "lg",
  withLabel: true,
  error: false,
  placeholder: "Текст",
  errorText: "Текст ошибки",
};
