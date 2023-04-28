// < 매개변수 객체 만들기 >
// * 매개변수 개수는 최대 3개를 넘지말자
// * 넘겨야하는 정보가 많다면 자료구조,클래스같은 collection을 활용하자
export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  get min() {
    return this.#min;
  }
  get max() {
    return this.#max;
  }
  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}
const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operationPlan = new NumberRange(51, 53);

export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

const result = readingsOutsideRange(station, operationPlan);
console.log(result);
