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

// 이해했다고 생각하지만, 막상 또 코드 작성하면 비슷하게 불필요한 함수 레이어를 추가하는 경우가
// 발생할 수 있음 -> 내재화해서 이해하는 과정이 필요

// 하나의 프로젝트 내에서 특정 concept에 대해서 여러가지 이름을 부여하는 것은
// 흔한 혼란과 낭비의 예시이다.

// 이번에 내가 작성한 특정 기능에 관련된 함수도 어떻게 보면 더 general한 컨셉들을 분리해내서
// 공통함수로 빼거나 할 수도 있지 않았을까?
// 그런데 한편으로는 그러면 너무 쪼개지지 않나? 모르겠네..

// specific to our current blog
const validArticles = articles =>
  articles.filter(article => article !== null && article !== undefined),

// vastly more relevant for future projects
// 일반적인, 해당 기능이 수행하는 바에 대한 이름을 부여하면 이제 더 general한, 
// 같은 컨셉에 대한 중복 코드 가능성을 줄일 수 있는 함수가 되겠지.
const compact = xs => xs.filter(x => x !== null && x !== undefined);

