import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from ".";

test("render Avatar component", () => {
  render(<Avatar name='Anatolii Pyroh' size='lg' />);
  const element = screen.getByText(/AP/i);
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("class", "avatar avatar_size_lg");
});
