// < 슈퍼클래스를 위임으로 바꾸기 >
/**
 * 슈퍼클래스를 상속하면
 * 하위클래스에선 노출하고 싶지 않은 슈퍼클래스의 기능들도 노출되어버리는 문제가 있다.
 *
 * => 그래서, 필요한것만 갖도록 컴포지션을 활용하자
 */
class List {}

class Stack {
  // List의 원하는 api들만 외부로 노출할 수 있게
  constructor() {
    this.storage = new List();
  }
  pop() {}
  push() {}
}
