import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CheckboxAndToggle } from ".";

test("render Button component", () => {
  render(<CheckboxAndToggle />);
  const element = screen.getByTestId("Checkbox");
  expect(element).not.toBeChecked();
});
