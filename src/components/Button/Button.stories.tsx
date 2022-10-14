import React, { useState } from "react";

import { ComponentStory } from "@storybook/react";

import { Button, ButtonProps, ButtonVariantEnum } from ".";

import { IconsEnum } from "@components/SvgIcon";
import { Text, TextVariantsEnum } from "@components/Text";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    width: {
      control: {
        type: "select",
      },
      options: ["content", "full"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "outlined", "text"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    iconPosition: {
      name: "icon position",
      control: {
        type: "radio",
      },
      options: ["left", "right"],
    },
  },
};

const Template: ComponentStory<(Props: ButtonProps & {showIcon: boolean}) => JSX.Element> = ({
  showIcon,
  ...args
}) => {const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setCounter(counter + 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <>
      <Text variant={TextVariantsEnum.Heading_4} textColor="default">Counter: {counter}</Text>
      <Button
        onClick={handleClick}
        loading={isLoading}
        icon={showIcon ? IconsEnum.search : null}
        {...args}
      />
    </>
  );
};

export const button = Template.bind({});
button.args = {
  text: "Click me",
  variant: ButtonVariantEnum.primary,
  size: "md",
  disabled: false,
  width: "content",
  showIcon: true,
  iconPosition: "left",
};
