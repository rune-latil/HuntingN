/* 
0 : 노멀
1 : 배드
2 : 히든
*/



const qnaList = [
  {
    q: '1. 아무래도 납치 사건같다. 시간을 끌 수록 불리하다. 냉정하고 침착하게 흔적을 찾아보자.',
    a: [
      { answer: 'a. 쓰러진 호위 기사들을 깨워서 자초지정을 듣는다.', type: [1] },
      { answer: 'b. 주변에 쓰러진 풀과 발자국 흔적으로 방향을 찾는다.', type: [0] },
      { answer: 'c. 나뭇가지에 걸린 머리카락... 세타케아의 머리카락이 분명하다. ', type: [2] },
    ]
  },
  {
    q: '2. 흔적이 두갈래로 갈라졌다. 어느쪽으로 가야하지? ',
    a: [
      { answer: 'a. 풀을 짓밟고 지나간 길 ', type: [1] },
      { answer: 'b. 발자국이 나있는 좁은 길', type: [0] },
      { answer: 'c. 둘다 함정이다 다른 길', type: [2] },
    ]
  },
  {
    q: '3. 흔적을 찾아 왔지만 중간에 말끔하게 지워져있다. 어떻게 할까?',
    a: [
      { answer: 'a. 완벽히 지우기엔 무리가 있다. 한번 더 찾아본다.', type: [1] },
      { answer: 'b. 사냥터 끝에 쓰지않는 창고가 있었던 기억이 난다. ', type: [0] },
      { answer: 'c. 눈에 띄는 곳에 있지않을 것이다. 숲 깊숙이 들어간다.', type: [2] }
    ]
  },
  {
    q: '4. 힘겹게 찾은 흔적이 이번에는 강에서 끊겼다.',
    a: [
      { answer: 'a. 조금 넓지만 못 건널 정도는 아니다 강행한다. ', type: [0] },
      { answer: 'b. 주변에 징검다리를 발견했다. 조금 위험해보이지만 조심하면 괜찮을 것이다. ', type: [2] },
      { answer: 'c. 센스있는 "우리 내일은 연인으로 만날까요" ', type: [1] },
    ]
  },
  {
    q: '5. 무사히 강을 건넜다. 어디를 조사해볼까?',
    a: [
      { answer: 'a. 건너온 강 근처', type: [1] },
      { answer: 'b. 바닥의 흔적', type: [0] },
      { answer: 'c. 나무 주변', type: [2] },
    ]
  },

  {
    q: '6. 수풀 너머에서 소리가 들린다. 어떻게 할까?',
    a: [
      { answer: 'a. 다가간다.', type: [0] },
      { answer: 'b. 숨어있다가 습격한다.', type: [2] },
      { answer: 'c. 무시한다.', type: [1] },
    ]
  },
  {
    q: '7. 납치범으로 보이는 무리를 발견했다. 아직 이쪽을 눈치채지 못한 것 같다. 어떻게 할까?',
    a: [
      { answer: 'a. 기척을 숨기고 다가가 모두 죽인다.', type: [1] },
      { answer: 'b. 위협하며 다가가 협박한다.', type: [2] },
      { answer: 'c. 아지트로 갈때까지 기다린다.', type: [0] },
    ]
  },
  {
    q: '8. 납치범 무리와 대치중 풀숲에서 바스락거리는 소리가 난다.',
    a: [
      { answer: 'a. 누구냐고 소리친다.', type: [2] },
      { answer: 'b. 소리나는 곳으로 검을 휘두른다.', type: [1] },
      { answer: 'c. 대치상태를 유지하며 경계한다.', type: [0] },
    ]
  },
  {
    q: '9. 풀숲에서 누군가 튀어나온다. 정체는... 세타케아?!',
    a: [
      { answer: 'a. 달려가서 끌어안는다.', type: [2] },
      { answer: 'b. 납치범들을 경계하며 천천히 다가간다.', type: [0] },
      { answer: 'c. 이쪽으로 오라고 소리친다.', type: [1] },
    ]
  },
  {
    q: '10. 드디어 세타케아와 다시 만났다.',
    a: [
      { answer: 'a. 곧바로 대공성으로 향한다.', type: [1] },
      { answer: 'b. 세타케아의 상태를 살핀다.', type: [2] },
      { answer: 'c. 일단은 도망 못 가게 전부 제압한다.', type: [0] },
    ]
  }
]

const infoList = [
  {
    name: 'Ending.01 Normal-구출',
    desc: '제로니사는 재빠른 상황판단과 뛰어난 추리력으로 세타케아를 무사히 구출하는데 성공했다.'
  },
  {
    name: 'Ending.01 Bad-후유증',
    desc: '세타케아를 구출하는데에는 성공했지만 시간이 너무 지체된 탓인지 세타케아는 사흘을 앓아누웠다.'
  },
  {
    name: 'Ending.03 Hidden-정리',
    desc: '제로니사는 세타케아를 구출하는 것은 물론 납치범들의 정체가 반역 무리들이라는 것 까지 알아냈다.<br>반역은 둘째치고 부인을 납치한 이들에게 용서는 없다.'
  }
]
