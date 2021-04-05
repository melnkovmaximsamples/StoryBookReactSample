import React from 'react';
import { ICellProps } from '../interfaces/ICellProps';

export const Cell = ({ content, x, y, onClick }: ICellProps) => {
    content 
    ? React.createElement(
        "span",
        {
            className: "cell cell-filled"
        },
        content
    )
    : React.createElement(
        "button",
        {
            className: "cell",
            onClick: onClick(x, y)
        },
    );
}