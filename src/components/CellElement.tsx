import React from "react";
import { CellProps } from "../interfaces/CellProps";

export const getCell = ({ content, x, y, onClick }: CellProps) => {
  content
    ? React.createElement(
        "span",
        {
          className: "cell cell-filled",
        },
        content
      )
    : React.createElement("button", {
        className: "cell",
        onClick: onClick(x, y),
      });
};
