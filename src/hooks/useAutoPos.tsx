import { useEffect, useState } from 'react';

const useAutoPos = () => {
  const [overSize, setOverSize] = useState(0);

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
    } else {
      setOverSize(0);
    }
  }, []);
  return overSize;
};

export default useAutoPos;
