// 함수는 일급 객체이다.
// 객체이므로 프로퍼티를 가질 수 있고, 다른 일반 객체들은 가지고 있지 않은 고유한 프로퍼티를 가진다.

// 1. arguments 프로퍼티
// - 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체
// - 함수 내부에서 지역 변수처럼 사용
// - arguments 프로퍼티는 표준에서는 폐지된 상태 -> 직접 접근하는 것은 권장되지 않음, 함수 내부에서 지역 변수처럼 사용할 수 있는 arguments객체 참조해야함

function someFunc(arg1, arg2) {
  console.log(arguments);
}

someFunc(); // {}
someFunc(1); // {'0': 1 }
someFunc(1, 2); // {'0': 1, '1': 2}
someFunc(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }
// -> 정해진 매개변수 수보다 더 많은 인자를 전달해도 arguments객체에 저장은 되는구나.

// arguments객체의 구성
// key: 인수의 순서, value: 인수

// 가변 인자 함수에 유용하게 사용할 수 없음
function sum() {
  let res = 0;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return 0;
}

// 잠깐만, arguments[i]처럼 배열에 접근이 가능하다? 배열인가?
// -> 유사 배열 객체임. 유사 배열 객체란 length 프로퍼티를 가진 객체로 for문으로 순회할 수 있는 객체.

// ES6 Rest parameter의 도입으로 arguments 객체의 중요성이 이전 같지 않다?
// Rest parameter가 뭐지?

// Rest parameter

// 매개변수 앞에 세개의 점을 붙여서 정의한 매개변수. Rest parameter는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // 인수가 배열에 순서대로 담겨있음
}

function bar(arg1, ...rest) {
  console.log(arg1);
  console.log(rest);
}

foo();
foo(1);
foo("name", 21);

bar();
bar("first argument");
bar("first argument", "rest arguments1", "rest arguments");
