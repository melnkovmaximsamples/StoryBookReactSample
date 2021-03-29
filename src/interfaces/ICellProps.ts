export interface ICellProps {
    filled?: string,
    x?: number,
    y?: number,
    onClick: (x: number, y: number) => void;
}