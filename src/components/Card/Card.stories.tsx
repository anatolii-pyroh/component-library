import { ComponentStory } from "@storybook/react";
import React from "react";
import { Card, CardProps } from ".";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    imgSrc: {
      name: "link to image",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "lg"],
    },
    deliveryDate: {
      name: "delivery date",
      table: {
        disable: true
      }
    },
  },
};

const Template: ComponentStory<(Props: CardProps) => JSX.Element> = (args) => {
  const deliveryDate = new Date("12.30.2022");

  const product: CardProps = {
    imgSrc: "/img/camera.png",
    name: "DS-2CD2821G0 (AC24V/DC12V)",
    model: "SAP123877",
    description: "2Мп IP-камера в стандартном корпусе",
    deliveryDate: deliveryDate,
    price: 20000,
  };

  return (
    <Card
      imgSrc={product.imgSrc}
      name={product.name}
      model={product.model}
      description={product.description}
      price={product.price}
      deliveryDate={product.deliveryDate}
      {...args}
    />
  );
};

export const card = Template.bind({});
card.args = {
  size: "sm",
};
