import { InteractiveFieldProps } from "../interfaces/InteractiveFieldProps";

export interface InteractiveFieldState extends InteractiveFieldProps {
  field: string[][];
  lastValue: string;
}
