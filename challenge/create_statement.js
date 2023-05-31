/**
 * 📗
 * - spread operator로 복사하여 객체를 만들기 보단 클래스로 만드는게
 * 어떤 속성을 가진 객체인지 파악하고 관리하는 데 유리함.
 *
 * - 코드에서 switch 문을 보면 다형성을 이용하기 딱 좋은 상태일지도 모른다는
 * 아이디어를 떠올리자!
 */
class Performance {
  #audience;
  #play;
  constructor(audience, play) {
    this.#audience = audience;
    this.#play = play;
  }

  get play() {
    return this.#play;
  }

  get audience() {
    return this.#audience;
  }
  static create(audience, play) {
    switch (play.type) {
      case "tragedy":
        return new Tragedy(audience, play);
      case "comedy":
        return new Comedy(audience, play);
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }
  }
}

class Tragedy extends Performance {
  get amount() {
    const base = 40000;
    return this.audience > 30 ? base + 1000 * (this.audience - 30) : base;
  }
  get credits() {
    return Math.max(this.audience - 30, 0);
  }
}
class Comedy extends Performance {
  get amount() {
    let result = 30000;
    if (this.audience > 20) {
      result += 10000 + 500 * (this.audience - 20);
    }
    result += 300 * this.audience;
    return result;
  }
  get credits() {
    return Math.max(this.audience - 30, 0) + Math.floor(this.audience / 5);
  }
}

export class Statement {
  #customer;
  #performances;
  constructor(invoice, plays) {
    this.#customer = invoice.customer;
    this.#performances = invoice.performances.map((p) =>
      Performance.create(p.audience, plays[p.playID])
    );
  }

  get customer() {
    return this.#customer;
  }
  get performances() {
    // performances가 Array로 object타입이므로 외부에서 혹시모를
    // 내부 속성을 변경할 여지가 있어서 spread operator로 반환하도록 함
    return [...this.#performances];
  }
  get totalAmount() {
    return this.#performances.reduce((sum, perf) => sum + perf.amount, 0);
  }
  get totalCredits() {
    return this.#performances.reduce((sum, perf) => sum + perf.credits, 0);
  }
}
