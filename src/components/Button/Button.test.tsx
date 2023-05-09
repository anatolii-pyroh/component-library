import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from ".";

test("render Button component", () => {
  render(<Button text='Button' disabled />);
  const element = screen.getByTestId("Button");
  expect(element).toBeDisabled();
  expect(element).not.toBeEnabled();
});
