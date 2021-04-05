import React from 'react';
import Field from './Field';

interface IInteractiveFieldProps {
    size: number;
}

interface IInteractiveFieldState extends IInteractiveFieldProps {
    field: string[][];
    lastValue: string;
}

export class InteractiveField extends React.Component<IInteractiveFieldProps, IInteractiveFieldState> {

    constructor(props: IInteractiveFieldProps) {
        super(props);

        let field = this.getEmptyFieldBySize(props.size);

        this.state = {
            size: props.size,
            field: field,
            lastValue: ''
        };
        this.onClick = this.onClick.bind(this);

    }

    onClick(x: number, y: number): void {
        let field = this.state.field.slice();

        field[x][y] = this.state.lastValue == 'X' ? 'O' : 'X';

        this.setState({ field: field, lastValue: field[x][y] });
    }

    getEmptyFieldBySize(size: number): string[][] {
        return Array.from({length: size}, () => Array.from({length: size}, () => ''));
    }


    render() {
        const stylse: any = {
            display: "grid",
            gridTemplateRows: "repeat(5, 100px)",
            gridTemplateColumns: "repeat(5, 100px)",
        }

        console.log('render interactive field');
        return (<div style={stylse}><Field field={this.state.field} size={this.state.size} onClick={this.onClick}/></div>)
    }

}

export default InteractiveField;