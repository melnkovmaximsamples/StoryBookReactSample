import React from 'react';
import { isThisTypeNode } from 'typescript';
import Cell from './Cell';
import { IFieldProps } from '../interfaces/IFieldProps';
import { IFieldState } from '../interfaces/IFieldState';


export class Field extends React.Component<IFieldProps, IFieldState> {
    constructor(props: IFieldProps) {
        super(props);

        this.state = {  
            size: props.size,
            field: props.field.slice(),
            onClick: props.onClick
        };
    }
    
    render() {
        return (
        <div className="field">
            {
                this.state.field.map((cells, cellsIndex) => [
                    ...cells.map((content, contentIndex) => {
                        return (<Cell content={content} x={cellsIndex} y={contentIndex} onClick={this.state.onClick} />)
                    }),
                ])
            }
        </div>);
    }

}

export default Field;