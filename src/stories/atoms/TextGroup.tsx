import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import json from '@/data.json';

type Props = {
  name: string;
};

const TextGroup = ({ name }: Props) => {
  const [data, setData] = useState(
    json.filter((item) => item.name === name)[0]
  );

  if (!data) return null;
  return (
    <>
      <H2>{data.name}</H2>
      <P>{data.text}</P>
      <P>
        {data.start}~{data.end}
      </P>
    </>
  );
};

export default TextGroup;

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #2942e1;
  white-space: nowrap;
`;

const P = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: #333;
  line-height: 1.2;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;
