import styled from '@emotion/styled';
import { useState } from 'react';
import LineMsg from './LineMsg';
import { zero, dayToPixel } from '@/unit.json';

type Props = {
  x: number;
};

/** 라인을 그리는 컴포넌트 */
const Column = ({ x }: Props) => {
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(0);
  // return <Line style={{ left: `${x}px` }} />; 생략해도 된다
  // let date = new Date(zero);
  // date = date.setDate(date.getDate() + 400);
  return (
    <Line
      style={{ left: x }}
      onMouseEnter={(e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setHover(true);
        const event = e.target as HTMLDivElement;

        setPosition(e.clientY - event.getBoundingClientRect().top);
      }}
      onMouseLeave={() => setHover(false)}
    >
      <Line2 />
      {hover ? <LineMsg y={position} name={x / dayToPixel} /> : null}
    </Line>
  );
};

export default Column;

// bad 코드 return <Line x={x} />;
// props를 받으면 css가 너무 많이 생성된다
const Line = styled.div`
  position: absolute;

  width: 1px;
  margin: 0 -10px;

  padding: 0 10px;

  height: 100%;
`;

const Line2 = styled.div`
  background-color: #ccc;
  width: 1px;
  height: 100%;
`;
