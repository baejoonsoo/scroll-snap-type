## scroll-snap-type

- scroll container에 스냅 포인트가 얼마나 엄격하게 적용되는지 설정

- scroll snap axis

  - x
    - 수평(가로) 축으로 snap position 지정
  - y
    - 수직(세로) 축으로 snap position 지정
  - block
    - snap area의 block 축으로 지정
  - inline
    - inline 축으로 지정
  - both
    - 두 축의 위치를 개별적으로 스냅
    - 잠재적으로 각 축의 다른 요소에 스냅이 가능

<br>

- scroll snap strictness
  - none
    - 스냅하지 않음
  - proximity (default)
    - nap position을 지정하였다면 해당 설정에 맞춰 스냅
    - 미지정 상태라면 유저 에이전트에 따른다
  - mandatory
    - 항상 스냅
