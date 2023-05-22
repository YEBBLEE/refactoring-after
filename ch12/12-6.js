// < 타입 코드를 서브클래스로 바꾸기 >
/**
 * type이라는 문자열을 통해 객체를 사용하려는 사람이
 * 어떤 문자열을 보내야하나 고민하지 않고도 사용할 수 있도록 하는게 좋다.
 *
 * 그래서, 각각의 type에 해당하는걸 서브 클래스로 만듦
 */
class Employee {
  #name;
  #type;

  // 💩 : 생성할 때 type이 어떤게 있는지 알아야만 만들수있음. (똥이야)
  // 좋은 코드는 type이 뭐가 있는지 몰라도 만들기 쉬워야 함
  // constructor(name, type) {
  //   this.validateType(type);
  //   this.#name = name;
  //   this.#type = type;
  // }

  // validateType(arg) {
  //   if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
  //     throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  //   }
  // }

  get type() {
    return "employee";
  }
  toString() {
    return `${this.#name} (${this.type})`;
  }

  // 만약, 네트워크에서 가져온 데이터로 객체생성해야 한다면 팩토리함수 이용
  static createEmployee(name, type) {
    Employee.validateType(type);

    switch (type) {
      case "engineer":
        return new Engineer(name, type);
      case "salesPerson":
        return new Salesperson(name, type);
      case "manager":
        return new Manager(name, type);
      default:
        throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}
class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}
const ellie = new Engineer("엘리");
const bob = new Manager("밥");
const kong = new Salesperson("kong");
