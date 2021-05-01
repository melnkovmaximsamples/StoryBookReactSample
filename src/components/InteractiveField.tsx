import React from "react";
import Field from "./Field";
import { InteractiveFieldProps } from "../interfaces/InteractiveFieldProps";
import { InteractiveFieldState } from "../interfaces/InteractiveFieldState";

export class InteractiveField extends React.Component<
  InteractiveFieldProps,
  InteractiveFieldState
> {
  constructor(props: InteractiveFieldProps) {
    super(props);

    let field = this.getEmptyFieldBySize(props.size);

    this.state = {
      size: props.size,
      field: field,
      lastValue: "",
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(x: number, y: number): void {
    let field = this.state.field.slice();

    field[x][y] = this.state.lastValue === "X" ? "O" : "X";

    this.setState({ field: field, lastValue: field[x][y] });
  }

  getEmptyFieldBySize(size: number): string[][] {
    return Array.from({ length: size }, () =>
      Array.from({ length: size }, () => "")
    );
  }

  render() {
    return (
      <div>
        <Field
          field={this.state.field}
          size={this.state.size}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default InteractiveField;
export const getInteractiveField = (props: InteractiveFieldProps) => (
  <InteractiveField {...props} />
);
