export interface ICellProps {
    content?: string,
    x: number,
    y: number,
    onClick: (x: number, y: number) => void;
}