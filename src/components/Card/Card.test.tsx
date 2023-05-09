import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card, CardProps } from ".";

const deliveryDate = new Date("12.30.2022");
const product: CardProps = {
  imgSrc: "/img/camera.png",
  name: "DS-2CD2821G0 (AC24V/DC12V)",
  model: "SAP123877",
  description: "2Мп IP-камера в стандартном корпусе",
  deliveryDate: deliveryDate,
  price: 20000,
};

test("render Button component", () => {
  render(
    <Card
      imgSrc={product.imgSrc}
      name={product.name}
      model={product.model}
      description={product.description}
      price={product.price}
      deliveryDate={product.deliveryDate}
    />
  );
  const element = screen.getByTestId("Card");
  expect(element).toBeVisible();
});
