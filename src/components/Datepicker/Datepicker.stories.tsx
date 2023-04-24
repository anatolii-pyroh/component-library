import { ComponentStory } from "@storybook/react";
import React, { useRef } from "react";
import { Datepicker } from ".";
import { DatepickerProps } from "./Datepicker.types";

export default {
  title: "Components/Datepicker",
  component: Datepicker,
  argTypes: {},
};

const Template: ComponentStory<(Props: DatepickerProps) => JSX.Element> = (
  args
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(inputRef.current?.value);
  };
  return (
    <>
      <Datepicker {...args} inputRef={inputRef} />
    </>
  );
};

export const datepicker = Template.bind({});
