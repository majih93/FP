// Pure functions

// 순수함수
// 같은 input에 대해서 항상 같은 output을 반환하는 함수.
// 그러면서 다른 side effect가 없는 함수

// slice vs splice

const arr = [1, 2, 3, 4, 5];

// slice - 순수함수라고 할 수 있음 매번 같은 값 반환
console.log(arr.slice(0, 2)); // [1, 2]
console.log(arr.slice(0, 2)); // [1, 2]
console.log(arr.slice(0, 2)); // [1, 2]

// splice - 순수함수가 아님 -> 매번 다른 값 반환(원본 배열 mutate 함)
console.log(arr.splice(0, 2)); // [1, 2]
console.log(arr.splice(0, 2)); // [3, 4]
console.log(arr.splice(0, 2)); // [5]

// FP에서는 이런 순수함수가 아닌 함수를 위험한 함수로 분류한다.
// 예측 가능성이 떨어지기 때문

// 이해하기 위한 또 하나의 예시

// 순수하지 않은 함수
// 왜?
// 함수의 연산이 mutable한 변수 adultAge에 영향을 받기 때문에, 의도치 않게 adultAge함수가 변경되면 해당 함수는 같은 input에대해서 다른 Output을 반환함
let adultAge = 20;
const checkIsAdult = (age) => age >= adultAge;

// 순수함수 버전

const checkage_pure_version = (age) => {
  const adultAge = 20;
  return age >= adultAge;
};

// 좀 더 나아가서, adultAge 또한 아예 immutable하게 고정시켜버릴 수도 있다. 필요하다면..
const immutableAdultAge = Object.freeze({ adultAge: 20 });

console.log(immutableAdultAge.adultAge); // 20
immutableAdultAge.adultAge = 21; // 재할당을 시도해도 변하지 않는다.
console.log(immutableAdultAge.adultAge); // 20

// mutable한 값을 포함한 연산을 수행하는 함수도 impure 하다라...생각치 못했던 포인트인데 너무 맞는 말이다.
