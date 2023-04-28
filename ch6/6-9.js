// < 여러 함수를 클래스로 묶기 >
export class Reading {
  #customer;
  #quantity;
  #month;
  #year;

  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }

  get baseRate() {
    return this.year === 2017 && this.month === 5 ? 0.1 : 0.2;
  }
  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }
  get taxableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }
}

const reading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}
