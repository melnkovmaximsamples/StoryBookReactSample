import React from 'react';
import { getCell } from './CellElement';
import type { IFieldProps } from '../interfaces/IFieldProps';

export const getField = (props: IFieldProps) => 
    React.createElement(
        "div",
        {
            className: "field",
        },
        ...props.field.reduce((acc, row, y) => {
            return [
                ...acc,
                ...row.map((filled, x) => {
                    return getCell({
                        onClick: props.onClick,
                        filled: filled ? filled : undefined,
                        x,
                        y,
                    })
                }),
                ...(y === props.field.length - 1 ? [] : [React.createElement("br")]),
            ];
        }, [] as React.ReactHTMLElement<HTMLElement>[])
    );