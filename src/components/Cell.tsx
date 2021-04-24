import { stringify } from "node:querystring";
import React from "react";
import { CellProps } from "../interfaces/CellProps";
import "../style/Cell.css";

const Cell: React.FC<CellProps> = ({ content, x, y, onClick }) => {
  console.log(content);

  return (
    <button className="cell cell-empty" onClick={() => onClick(x, y)}></button>
  );
};

export default Cell;
