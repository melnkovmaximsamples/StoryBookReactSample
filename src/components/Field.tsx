import React from "react";
import Cell from "./Cell";
import { FieldProps } from "../interfaces/FieldProps";
import { FieldState } from "../interfaces/FieldState";
import "../style/InteractiveField.css";

export class Field extends React.Component<FieldProps, FieldState> {
  constructor(props: FieldProps) {
    super(props);

    this.state = {
      size: props.size,
      field: props.field.slice(),
      onClick: props.onClick,
    };

    document.documentElement.style.setProperty(`--columns`, `${props.size}`);
    document.documentElement.style.setProperty(`--rows`, `${props.size}`);
  }

  render() {
    return (
      <div className="field">
        {this.state.field.map((cells, cellsIndex) => [
          ...cells.map((content, contentIndex) => {
            return (
              <Cell
                content={content}
                x={cellsIndex}
                y={contentIndex}
                onClick={this.state.onClick}
              />
            );
          }),
        ])}
      </div>
    );
  }
}

export default Field;
