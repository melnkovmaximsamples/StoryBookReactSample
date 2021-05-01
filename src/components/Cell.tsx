import React from "react";
import { CellProps } from "../interfaces/CellProps";
import "../style/Cell.css";

const Cell: React.FC<CellProps> = ({ content, x, y, onClick }) => {
  console.log(content);

  if (content !== undefined && content.length > 0) {
    return <button className="cell cell-filled">{content}</button>;
  }

  return (
    <button className="cell cell-empty" onClick={() => onClick(x, y)}></button>
  );
};

export default Cell;

export function getCell(props: CellProps) {
  return <Cell {...props} />;
}
