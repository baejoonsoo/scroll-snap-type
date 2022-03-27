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
    - 콘텐츠 간의 간격이 넓을 때 강제로 스냅을 하게 되면 중간 콘텐츠를 건너뛰고 다음 콘텐츠로 이동하는 경우가 발생하니 주의

```css
scroll-snap-type: x proximity;
/* X축 스크롤, snap position 유무에 맞춰 스냅 */
```

<br>

## scroll-snap-align

- nap area 안에서 원하는 정렬 방식을 설정

- none

  - snap position을 지정하지 않음

    <br>

- start

  - 축을 기준으로 snap area의 시작 부분에 맞춰 정렬

    <br>

- end

  - snap area의 끝에 맞춰 정렬

    <br>

- center

  - snap area의 가운데에 맞춰 정렬

    <br>
