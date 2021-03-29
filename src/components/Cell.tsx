import React from 'react';
import { ICellProps } from '../interfaces/ICellProps';
import '../style/Cell.css';

/* interface ICellProps {
    isClicked: boolean;
    content: string;
}

export const Cell : React.FC<ICellProps> = ({isClicked, content}) => {
    return <div className="cell">{isClicked == true ? content : ""}</div>
} */

const Cell: React.FC<ICellProps> = ({ filled, x, y, onClick }) => {
    if (filled) {
        return <span className="cell cell-filled">{filled}</span>
    }

    return (<button className="cell cell-empty" onClick={() => onClick(x || 0, y || 0)}></button>)
}

export default Cell;

export function getCell(props: ICellProps) { return <Cell {...props}/> };