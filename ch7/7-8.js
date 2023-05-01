// < 중개자 제거하기 >
class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#manager;
  }
  get chargeCode() {
    return this.#chargeCode;
  }
}

const person = new Person("Tom", "CTO Kim", "999");
console.log(person.name);
console.log(person.manager); //💕
console.log(person.chargeCode); //💕
