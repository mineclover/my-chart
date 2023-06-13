import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { zero, dayToPixel } from '@/unit.json';
import BlockMsg from '@/stories/atoms/BlockMsg';

import { DayMath } from '@/functions/dayMath';
import { randomColor } from '@/functions/randomHue';

type Props = {
  start: string;
  end: string;
  name: string;
};

const Block = ({ start, end, name }: Props) => {
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(0);
  const [color, setColor] = useState(randomColor());
  const [width, setWidth] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    if (start === '0000' || start < zero) {
      setX(0);
      const endDiff = new Date(end).getTime() - new Date(zero).getTime();
      setWidth(DayMath(endDiff));
    } else if (end === '0000') {
      const startDiff = new Date(start).getTime() - new Date(zero).getTime();
      setX(DayMath(startDiff));

      const endDiff = Date.now() - new Date(start).getTime();
      setWidth(DayMath(endDiff));
    } else {
      const diff = new Date(end).getTime() - new Date(start).getTime();
      setWidth(DayMath(diff));
      const startDiff = new Date(start).getTime() - new Date(zero).getTime();
      setX(DayMath(startDiff));
    }
  });

  return (
    <Box
      style={{ width: width, left: x, backgroundColor: color }}
      onMouseEnter={(e) => {
        setHover(true);
        setPosition(e.clientX - x);
      }}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setHover(false);
      }}
    >
      {name}
      {hover ? <BlockMsg name={name} x={position} /> : null}
    </Box>
  );
};

export default Block;

const Box = styled.div`
  position: absolute;
  height: 24px;
  border-radius: 8px;

  box-sizing: border-box;
  padding: 0 16px;

  line-height: 24px;
  font-size: 0.8rem;
  font-weight: 700;

  text-overflow: ellipsis;
  white-space: nowrap;
`;
