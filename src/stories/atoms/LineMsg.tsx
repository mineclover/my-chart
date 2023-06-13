import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import TextGroup from './TextGroup';
import { zero } from '@/unit.json';
import useAutoPos from '@/hooks/useAutoPos';

type Props = {
  name: number;
  y: number;
};

const BlockMsg = ({ name, y }: Props) => {
  const [text, setText] = useState('');
  const [overSize, setOverSize] = useState(0);

  useEffect(() => {
    const date = new Date(zero);
    const cur = date.setDate(date.getDate() + Math.floor(name));
    const one = new Intl.DateTimeFormat('ko-KR').format(cur);
    const two = one.split('.');
    setText(`${two[0]}년 ${two[1]}월 ${two[2]}일`);
  }, [name]);

  // 일단 정상적인 상태에서 스크롤이 없다라는 것을 가정하고 만들어져 있다
  useEffect(() => {
    const root = document.getElementById('root') as HTMLDivElement;
    // 스크롤 되는 크기를 가질만 조건을 충족하고 (사이즈 고정) 컨텐츠들을 감싸고 있는 상위 객체
    const body = document.body;

    const viewportWidth = window.innerWidth; // 현재 뷰포트의 너비

    const documentWidth = Math.max(
      body.scrollWidth,
      body.offsetWidth,
      root.clientWidth,
      root.scrollWidth,
      root.offsetWidth
    ); // 선택된 요소의 전체 너비 중 최대 값

    if (documentWidth > viewportWidth) {
      setOverSize(documentWidth - viewportWidth + 1);
    }
  }, [text]);

  useEffect(() => {
    const date = new Date(zero);
    const cur = date.setDate(date.getDate() + Math.floor(name));
    const one = new Intl.DateTimeFormat('ko-KR').format(cur);
    const two = one.split('.');
    setText(`${two[0]}년 ${two[1]}월 ${two[2]}일`);
  }, [name]);

  return <Msg style={{ top: y, left: -overSize }}>{text}</Msg>;
};

export default BlockMsg;

const Msg = styled.div`
  position: absolute;
  white-space: nowrap;

  z-index: 100;
  background-color: #fff;
  border: 1px solid #ccc;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 8px;
`;
