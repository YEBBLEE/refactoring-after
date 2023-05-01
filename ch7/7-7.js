// < 위임 숨기기 >
class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }

  get manager() {
    return this.department.manager;
  }
  get chargeCode() {
    return this.department.chargeCode;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}
// 🚨 내부적으로 사용하는 용도를 지나치게 외부에 노출한 케이스
// Department를 내부적으로 갖고있도록해서 persnon.manager로 알아낼 수 있는게 더 나음
const person = new Person("Tom", new Department("CTO Kim", "999"));
console.log(person.name);
console.log(person.department.manager); //💩
console.log(person.manager); //💕

console.log(person.department.chargeCode); //💩
console.log(person.chargeCode); //💕
