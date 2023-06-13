import React from 'react';
import Column from '../atoms/Column';
import { dayToPixel } from '@/unit.json';

type Props = {
  spacing: number;
  width: number;
};

const Columns = ({ spacing, width }: Props) => {
  const fillColumns = () => {
    const columns = [];
    for (let i = 0; i < width; i += spacing * dayToPixel) {
      columns.push(<Column key={i} x={i} />);
    }
    return columns;
  };

  return <>{fillColumns()}</>;
};

export default Columns;
