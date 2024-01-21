// 커링

import { curry } from "./functions/curry.js";

const add = (x) => (y) => x + y;
// const increment = add(1);
// const addTen = add(10);

// 조금 더 직관적인 이해를 위해서 명시적으로 return키워드를 사용해보자.
const add_return = (creatorFuncArgument) => {
  return (returnedFuncArgument) => {
    return creatorFuncArgument + returnedFuncArgument;
  };
};

// 함수 생성자라고 형태를 볼 수도 있겠네 이 코드만 보면. 생성 시에 인자로 조건을 달아서 생성하는

const increment = add_return(1);

// console.log(increment); // function(anonymous)
// console.log(typeof increment); // function

// increment는 (arg) => arg + 1 인 함수
// console.log(increment(10)); // 11
// console.log(increment(2)); // 3

const addFive = add_return(5);

// console.log(addFive(5)); // 10
// console.log(addFive(10)); // 15

// curry 함수를 활용

// const doesMatch = curry((what, s) => s.match(what));
const doesMatch = curry((what, s) => {
  console.log(what, "what"); // /r/g
  console.log(s, "s"); // reminder
  return s.match(what);
});

// const hasLetterR = doesMatch(/r/g);

// console.log(hasLetterR("reminder")); // ['r', 'r']
// console.log(hasLetterR("no mans sky")); // null

// node ch4_currying.js

// curry 함수 구현 목적 및 match 함수 동작하는 방식 이해해보자.

// curry 함수에 전달된 fn은 (what, s) => {return s.match(what)}

const test = (func) => {
  // console.log(func);
  func(); // test실행 시 인자로 전달된 함수가 실행되겠지.
  console.log("func의 length값: ", func.length);
  return function innerFunc(...args) {
    console.log("inner func args: ", ...args);
  };
};

const otherFunc = test((param1, param2, param3) => {
  console.log("otherFunc executed");
  return "otherFunc return value";
});

otherFunc(1, 2, 3);

// test 안에서 innerFunc가 어떻게 값들을 받는지 이해하지 못했는데, 이해했음.

// test(), 즉 test함수 호출 시 innerFunc가 return된다.
// 즉, otherFunc 는 인자를 test()가 반환한 '함수'이고,
// otherFunc를 실행할 때 전달한 인자들을 ...args, rest parameter형태로 받아서 (히히 공부했던거고만.) 함수 안에서 접근이 가능하다.
// test에 전달하는 함수와, test()를 통해서 반환되는 함수를 정확하게 구분하지 못하고 코드 flow를 헷갈려서 이해하지 못했던 것임.
// test 실행 -> test로직 수행 후 innerFunc반환 => otherFunc에 할당 -> otherFunc로직 실행 순서임
