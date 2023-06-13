import React from 'react';
import Columns from '../modules/Columns';
import styled from '@emotion/styled';
import Boxes from '../modules/Boxes';

const Box = () => {
  return (
    <Warp>
      <Columns spacing={30} width={1200} />
      <Boxes />
    </Warp>
  );
};

export default Box;

const Warp = styled.div`
  position: relative;
  width: 1200px;
  height: 420px;
`;
