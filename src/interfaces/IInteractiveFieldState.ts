import { IInteractiveFieldProps } from '../interfaces/IInteractiveFieldProps';

export interface IInteractiveFieldState extends IInteractiveFieldProps {
    field: string[][];
    lastValue: string;
}