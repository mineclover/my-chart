# 발생한 문제 정리

## 가독성과 실제 실제 수치 면적의 딜레마

시간을 표로 표현할 때
가독성을 위해서 달 단위의 열을 가지는데
나는 그 기간을 표시하기 위해서 일 단위의 절대적 수치를 크기와 위치로 치환했다
100일 = 100px
그러나 그려진 선들의 위치 값을 날짜로 치환한 것의 날짜가 패턴 없이 다르게 된다는 문제가 발생했다
간격은 30일 간격인데 실제 요일은 간격 값에 변동이 있어서
어떤 선은 12/14 다음 선은 1/13 , 2/12 3/10 이런식이 되어버렸다

날짜를 1로 맞춘다면 도형의 width와 날짜간에 위치가 정확히 맞지 않게 되는 문제가 발생함

- 현재 간격은 가변적으로 설정 가능한 상태인데 이것을 고정적으로 월단위로 한 뒤 일단위는 n/m 으로 바꾸는 방법이 있다
- 차트 간격 차이를 30일 단위가 아닌 월단위로 바꾸는 방법이 있다 ( 간격이 서로 다른 것은 무시 )

## 웹 사이트 사이즈 변경 인식 Hooks 생성 실패

브라우저 영역 밖을 빠져나가면서 메시지가 생성될 경우 안쪽으로 들어가게끔 구현했는데 이 기능을 Hooks로 분리하는 것에 실패했다
이벤트리스너를 root 에 넣어서 resize 이벤트를 받아보려했는데 실패함
아마도 가상돔에 있는 root에 이벤트 리스너가 심어진 것으로 추정된다

### 확인해볼만 한 것

- Body에 시도해보기
- Props 로 ref 받아서 추정하기