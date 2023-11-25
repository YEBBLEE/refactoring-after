// < 참조를 값으로 바꾸기 > 📌
class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }
  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }
  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }
  // 참조를 통한 업데이트가 아니라, 참조를 값처럼 사용할 수 있도록
  // 하나라도 변경이 되면 새로운 인스턴스를 만듦
  set officeAreaCode(value) {
    return (this.#telephoneNumber = new TelephoneNumber(
      value,
      this.officeNumber
    ));
  }
  get officeNumber() {
    return this.#telephoneNumber.number;
  }
  set officeNumber(value) {
    return (this.#telephoneNumber = new TelephoneNumber(
      this.officeAreaCode,
      value
    ));
  }
}

// 속성이 바뀌면 인스턴스 자체를 만들도록 유도하기 위해
// 내부에 세터를 두지 않도록 하자 (불변성 유지를 위해)
class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }
  get areaCode() {
    return this.#areaCode;
  }
  get number() {
    return this.#number;
  }
  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
