## 순수함수

mutable한 값을 포함한 연산을 수행하는 함수도 impure 하다라...생각치 못했던 포인트인데 너무 맞는 말이다.

이런 일견 사소해보이는 점이 프로그램 복잡도 증가에 생각보다 많이 기여한다.

### Side effect 란?

Side effect, 부수효과란 도대체 뭘까? 사실 사이트 이펙트 사이드 이펙트 많이 들어보긴 했는데 정작 어떤 것을 사이드 이펙트라고 판단해야 하는지 전혀 모르고 있다.

> A side effect is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.

연산을 하는 도중에 프로그램의 특정 상태를 변경하거나, 외부와 눈에 보이는 상호작용을 하는 것.

예를 들어,

- DB에 데이터 삽입
- http 요청
- 유저에게 인풋을 받는 것
- 시스템 상태 접근

하지만 목록을 보면, 응용 프로그램을 개발할 때 높은 확률로 수행되어야 하는 작업들이 있는데 이걸 다 하지말라는건가?

아니다. 다만, 이런 작업들은 예기치 못한 결과를 낳을 가능성이 있으므로 controlled 한 형태로 작업이 이루어지도록 신경을 써야한다는 소리다.

### 왜이렇게 순수 함수를 강조하는가?

함수라는 개념을 수학에서 배웠을 때를 생각해보자.

> 수학에서 함수(函數, 영어: function) 또는 사상(寫像, 영어: map, mapping)은 어떤 집합의 각 원소를 다른 어떤 집합의 유일한 원소에 대응시키는 이항 관계이다 - 위키백과

함수의 포인트 중 하나는 바로 하나의 원소를 다른 어떤 집합의 `유일한` 원소에 대응시킨다는 점이다.

즉 하나의 함수라는 관계에서, 같은 input은 당연히 output이 될 짝이 정해졌다는 의미가 되겠다.

아하! 그러면 순수함수란 다른 말로 하면 **`수학적 함수`**라고 볼 수도 있구나.

그러면 순수함수(이자 수학적 함수)라는 사랑스러운 귀요미들이 어떤 benefit을 제공할 수 있는지 봐야겠지? 그래야지 이 컨셉을 그렇게 강조하고 코드에 녹여내고자 하는 이유를 알 수 있다.

### 순수함수가 가지는 강점들.

**캐싱이 가능하다.**

순수함수는 언제나 입력값을 기준으로 캐싱이 가능하다. -> 일관된 출력값이 보장되므로.

memoization이라는 테크닉을 활용해서 이를 구현할 수 있음

**Portable / Self-Documenting**

함수 정의만 보고도 어떤 값들을 받아서 어떤 값을 반환해야되는지 알 수 있다.
-> 이를 위해서 최대한 parameter도 명시적으로 정의하는 것이 좋다는 의미일까?

그리고 parameter를 받아서 고정된 처리만 하는 형태로 구현하기 때문에 외부 환경에 영향을 받지 않고, export해서 원하는 곳에서 정해진 값만 전달하면 동일한 동작이 보장된다. 즉, 정해진 기능을 수행하기 위해서 필요한 것은 값을 입력받는 것 뿐, 그 외의 다른 환경 등이 필요하지 않음

**Reasonable, Referential transparency**

참조 투명하다라는 것은, 표현식의 평가 결과로 표현식을 대체해도 프로그램이 동일하게 동작한다는 것이다.

> "참조에 투명한 모든 x에 대해 표현식 f(x)가 참조에 투명하면 함수 f는 순수하다"

왜 이것이 보장될까?

앞서 말했던것처럼 순수함수는 사이드이펙트가 없이, 오직 입력값에 대해서 고정된 연산을 한 동일한 값을 반환하는 형태로만 프로그램에 영향을 준다.

그리고 입력값과 출력값이 한 쌍을 이루므로, 입력값이 참조투명한 값이었다면 이 참조 투명성이 순수함수로 값이 처리된 후에도 유지됨이 보장된다.

이런 원칙을 바탕으로 코드를 작성하면 코드를 이해하는데 도움이 된다고 한다. -> 경험이 더 필요한다.
