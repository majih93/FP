// 함수형 코딩을 적용해서 간단한 코드를 개선하는 flow를 통해 이 책이 무엇에 대한 것인가를 보여주는 코드,
//

// 프로그래밍을 하다보면, 상태와 변할 수 있는 값들을 인간의 두뇌로 추적하면서 코딩하는 것이 굉장히 난해한 일이다.
// 프로그램이 조금만 커지면 아주 복잡해져서 값을 추적하기가 정말 힘들어짐

// 간략하게 functional한 방식으로 작성되고 코드를 개선해보자.
// const conjoin = (flockX, flockY) => flockX + flockY;
// 기능을 보면 더하는 함수
const add = (flockX, flockY) => flockX + flockY;
// const breed = (flockX, flockY) => flockX * flockY;
// 기능을 보면 곱하는 함수
const multiply = (flockX, flockY) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;
// const result = conjoin(
//   breed(flockB, conjoin(flockA, flockC)),
//   breed(flockA, flockB)
// );
// const result = add(
//   multiply(flockB, add(flockA, flockC)),
//   multiply(flockA, flockB)
// );

// 이 result를 계산하는 부분이 한 눈에 들어오지 않으므로 간단하게 리팩토링 해보자.

// flockC의 값은 0이므로, add(flockA, flockC)는 flockA + 0 = flockA이다.
// const result = add(
//   multiply(flockB, flockA),
//   multiply(flockA, flockB)
// );

// 그리고 분배 법칙을 적용하면 더 간략하게 작성이 가능하다.
const result = multiply(flockB, add(flockA, flockA));
