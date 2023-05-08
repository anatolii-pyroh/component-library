import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BadgesContainer } from "./BadgesContainer";
import { BadgeColorsEnum } from "./Badge.types";

const badges = [
  { id: 1, text: "Badge text", badgeColor: BadgeColorsEnum.blue },
  { id: 2, text: "Badge2", badgeColor: BadgeColorsEnum.green },
  { id: 3, text: "Text3", badgeColor: BadgeColorsEnum.orange },
  { id: 4, text: "Text3312", badgeColor: BadgeColorsEnum.dark_grey },
  { id: 5, text: "Text3", badgeColor: BadgeColorsEnum.dark_green },
  { id: 6, text: "Text3", badgeColor: BadgeColorsEnum.light_grey },
  { id: 7, text: "Text3", badgeColor: BadgeColorsEnum.red },
];

test("render Badge components", () => {
  render(<BadgesContainer items={badges} />);
  const elements = screen.getAllByText(/text/i);
  expect(elements[0]).toHaveTextContent("Badge");
});
