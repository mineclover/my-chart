import React from 'react';
import Box from '@/stories/atoms/Block';
import styled from '@emotion/styled';
import json from '@/data.json';

type Props = {
  list?: Date[];
};

type Date = {
  name: string;
  start: string;
  end: string;
};

const dummy: Date[] = json;

const Boxes = ({ list = dummy }: Props) => {
  const fillBoxes = () =>
    list.map((date, index) => (
      <DefaultSize key={`${date.name}${index}`}>
        <Box start={date.start} end={date.end} name={date.name} />
      </DefaultSize>
    ));

  return <Flex>{fillBoxes()}</Flex>;
};

export default Boxes;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 0;
  gap: 8px;
`;

const DefaultSize = styled.div`
  height: 24px;
`;
