// Chapter2. First class functions

// 이해 안되는 부분에 대해서 분석

// this line
ajaxCall((json) => callback(json));

// is the same as this line
ajaxCall(callback);

// so refactor getServerStuff
const getServerStuff = (callback) => ajaxCall(callback);

// ...which is equivalent to this
const getServerStuff = ajaxCall; // <-- look mum, no ()'s

// 함수에 전달인자로 함수를 전달 () => callback(json)
// 아하 컨텍스트에서 이게 빠져있어서 이해가 안됐구나.
// json 은 보통 ajaxCall 함수에서 callback 함수가 보통 인자로 async 호출의 response를
// 전달한다는 점을 이용해서 그냥 callback만 전달해도 된다는 의미구나.

// 그러면 당연히 이제
// getServerStuff(someCallbackFunc)
// => (someCallbackFunc) => ajaxCall(someCallbackFunc)
// ajaxCall(someCallback)

// 결국 getServerStuff에 굳이 또 함수를 하나 래핑해서 할당할 필요 없이 ajaxCall함수를 할당하고 호출 시에
// callback 함수를 전달하면 된다.
