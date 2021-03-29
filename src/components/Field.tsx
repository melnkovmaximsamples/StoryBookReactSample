import React from 'react';
import { IFieldProps } from '../interfaces/IFieldProps';
import Cell from '../components/Cell';

const Field: React.FC<IFieldProps> = ({ field, onClick }) => (
    <div className="field">
      {field.map((row, y) => [
        ...row.map((filled: string, x) => (
          <Cell key={`${x}_${y}`} filled={filled} x={x} y={y} onClick={onClick} />
        )),
        y !== row.length - 1 ? <br key={y} /> : null,
      ])}
    </div>
  );

  export default Field;

  export const getField = (props: IFieldProps) => <Field {...props} />;