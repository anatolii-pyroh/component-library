import { ComponentStory } from "@storybook/react";
import React from "react";
import { Card, CardProps } from ".";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "lg"],
    },
  },
};

const Template: ComponentStory<(Props: CardProps) => JSX.Element> = (args) => {
  const product = {
    imgSrc: "/img/camera.png",
    name: "DS-2CD2821G0 (AC24V/DC12V)",
    model: "SAP123877",
    description: "2Мп IP-камера в стандартном корпусе",
    price: 20000,
  };

  return (
    <Card
      imgSrc={product.imgSrc}
      name={product.name}
      model={product.model}
      description={product.description}
      price={product.price}
      {...args}
    />
  );
};

export const card = Template.bind({});
card.args = {
  size: "sm",
};
