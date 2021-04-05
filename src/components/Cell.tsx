import { stringify } from 'node:querystring';
import React from 'react'
import { ICellProps } from '../interfaces/ICellProps'
import '../style/Cell.css'

const Cell: React.FC<ICellProps> = ({content, x, y, onClick }) => {
    console.log(content);
    
    if (content !== '') {
        return (<span className="cell cell-filled">{content}</span>)
    }

    return (<button className="cell cell-empty" onClick={() => onClick(x, y)}></button>);
};

export default Cell;