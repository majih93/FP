## 이 자료를 보면서 중점적으로 고민해야 되는 부분

아래의 사항들을 구현하기 위해서 FP라는 컨셉이 어떻게 적용되는지?

- 효과적이고(gets the job done) 예측 가능한 프로그램 작성
- 간결하면서도 이해하기 쉬운 코드
- 중복되지 않는 코드

한 가지 생각치 못한 부분은 생각보다 더 명시적으로, 수학의 법칙을 다룬다고 하는 것이다.
-> 수학적인 법칙을 코딩할 때 의식적으로 사용한다는 것에 대해서 전혀 생각해본적이 없었는데, 흥미로운 포인트인듯.

### 공부하면서 생긴 궁금증 -> 추후에 다시 comeback 필요

**함수 네이밍을 특정 데이터에 귀속시키는 것보다는 일반적인 이름으로 부여하는 것이 더 낫다는 주장에 대해 생각해보면..**

코드베이스가 계속 커지다보면 어쩔 수 없이 필요한 함수를 그때 그때 작성해서 사용할텐데, 매번 나한테 필요한 특정한 로직이 함수로 추상화되어 있는지 어떻게 알 수 있을까? 문서화의 영역일까?

그리고 너무 함수를 잘게 쪼개도 문제이지 않나? 재사용성에 도움이 된다고 한들 해당 로직이 사실상 특정 기능에서만 사용되고 다른데서는 사용되지 않는다면 너무 멀리보고 코드를 계속 나누는 것이 오히려 비효율일 수도 있지 않을까?

-> 이에 대해서 나름대로 더 결론을 내리려면 우선 함수형 프로그래밍을 더 공부를 해봐야 할 듯 하다. 함수형 컨셉으로 어느정도 코드를 작성해보는 경험이 필요할 듯.
