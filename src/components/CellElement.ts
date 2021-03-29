import { ICellProps } from './../interfaces/ICellProps';
import React from 'react';

export const getCell = ({ onClick, filled, x = 0, y = 0 }: ICellProps) =>
    filled
        ? React.createElement(
            "span",
            {
                className: "cell cell-filled",
            },
            filled
        )
        : React.createElement(
            "button",
            {
                className: "cell cell-empty",
                onClick: () => onClick(x, y),
            },
            " "
        );