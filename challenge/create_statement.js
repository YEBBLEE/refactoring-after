// spread operator로 복사하여 객체를 만들기 보단 클래스로 만드는게
// 어떤 속성을 가진 객체인지 파악하고 관리하는 데 유리함.
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
  get amount() {
    let result = 0;
    switch (this.#play.type) {
      case "tragedy": // 비극
        result = 40000;
        if (this.#audience > 30) {
          result += 1000 * (this.#audience - 30);
        }
        break;
      case "comedy": // 희극
        result = 30000;
        if (this.#audience > 20) {
          result += 10000 + 500 * (this.#audience - 20);
        }
        result += 300 * this.#audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${this.#play.type}`);
    }
    return result;
  }

  get credits() {
    let result = 0;
    result = Math.max(this.#audience - 30, 0);
    if ("comedy" === this.#play.type) result += Math.floor(this.#audience / 5);
    return result;
  }

  get playName() {
    return this.#play.name;
  }

  get audience() {
    return this.#audience;
  }
}

export function createStatement(invoice, plays) {
  const statement = {};
  statement.customer = invoice.customer;
  statement.performances = invoice.performances.map(
    (p) => new Performance(p.audience, plays[p.playID])
  );
  statement.totalAmount = totalAmount(statement.performances);
  statement.totalCredits = totalCredits(statement.performances);
  return statement;

  function totalAmount(performances) {
    return performances.reduce((sum, perf) => sum + perf.amount, 0);
  }
  function totalCredits(performances) {
    return performances.reduce((sum, perf) => sum + perf.credits, 0);
  }
}
