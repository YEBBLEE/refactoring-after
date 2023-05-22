// 상속
/**
 * 상속의 문제점은
 * "다중 상속이 안된다는 점!"
 * (한개의 슈퍼클래스를 상속하면 다른 클래스는 상속받을 수가 없음)
 * => 그래서, 여러 기능을 상속받고 싶을 땐 "컴포지션을 활용! "
 */
class Printer {
  print() {
    console.log("print");
  }
}
class Networkc {
  send() {}
}
class RedPrinter extends Printer {
  print() {
    console.log("print 🔴");
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.map((p) => p.print());
