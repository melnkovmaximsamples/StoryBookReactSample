import { action } from "@storybook/addon-actions";
import { object, withKnobs } from "@storybook/addon-knobs";
import Field from "./Field";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Field component",
  decoratorcs: [withKnobs],
};

const size: number = 4;

export const emptyField = () => [
  <Field
    size={size}
    field={object("field", [
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
    ])}
    onClick={action("onClick")}
  />,
];

export const nonEmptyField = () => [
  <Field
    size={size}
    field={object("field", [
      ["", "X", "", ""],
      ["", "", "Y", ""],
      ["X", "", "", ""],
      ["", "", "", ""],
    ])}
    onClick={action("onClick")}
  />,
];
