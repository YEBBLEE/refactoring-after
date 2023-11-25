// 컴포지션(위임)📌
/**
 * 상속의 문제점은
 * "다중 상속이 안된다는 점!"
 * (한개의 슈퍼클래스를 상속하면 다른 클래스는 상속받을 수가 없음)
 * => 그래서, 여러 기능을 상속받고 싶을 땐 "컴포지션을 활용! "
 * => 정말 필요한 상속을 위해 상속은 아껴두고 컴포지션을 활용함
 */
class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }

  print() {
    this.#printerHeader ? this.#printerHeader.print() : console.log("print");
  }
}

class RedPrinterHeader {
  print() {
    console.log("print 🔴");
  }
}

class GreenPrinterHeader {
  print() {
    console.log("print 🟢");
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new GreenPrinterHeader()),
];
printers.map((p) => p.print());
