import { action } from "@storybook/addon-actions";
import { number, text, withKnobs } from "@storybook/addon-knobs";
import { render } from "@testing-library/react";
import React from "react";

import Cell from "./Cell";

export default {
  title: "Cell component",
  decoratorcs: [withKnobs],
};

export const nonFilled = () => (
  <Cell
    x={number("x", 1)}
    y={number("y", 1)}
    onClick={action("cellClick")}
    key="jsx"
  />
);

export const filledWithX = () => (
  <Cell
    content={text("filled with", "X")}
    x={number("x", 1)}
    y={number("y", 1)}
    onClick={action("onCellClicked(jsx)")}
    key="jsx"
  />
);

export const filledWithY = () => (
  <Cell
    content={text("filled with", "Y")}
    x={number("X", 1)}
    y={number("Y", 1)}
    onClick={action("onCellClicked(jsx)")}
    key="jsx"
  />
);
