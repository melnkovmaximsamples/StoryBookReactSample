import { action } from "@storybook/addon-actions";
import { number, text, withKnobs } from "@storybook/addon-knobs";
import Cell, { getCell } from "./Cell";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Cell component",
  decoratorcs: [withKnobs],
};

export const nonFilled = () => [
  <Cell
    x={number("x", 1)}
    y={number("y", 1)}
    onClick={action("cellClick")}
    key="jsx"
  />,
  getCell({
    x: number("x", 1),
    y: number("y", 1),
    onClick: action("cellClick"),
  }),
];

export const filledWithX = () => [
  <Cell
    content={text("filled with", "X")}
    x={number("x", 1)}
    y={number("y", 1)}
    onClick={action("onCellClicked(jsx)")}
    key="jsx"
  />,
  getCell({
    content: text("filled with", "X"),
    x: number("X", 1),
    y: number("Y", 1),
    onClick: action("onCellClicked"),
  }),
];

export const filledWithY = () => [
  <Cell
    content={text("filled with", "Y")}
    x={number("X", 1)}
    y={number("Y", 1)}
    onClick={action("onCellClicked(jsx)")}
    key="jsx"
  />,
  getCell({
    content: text("filled with", "Y"),
    x: number("X", 1),
    y: number("Y", 1),
    onClick: action("onCellClicked"),
  }),
];
