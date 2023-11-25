// < 생성자를 팩터리 함수로 바꾸기 >📌
// 복잡한 생성자를 외부에서 바로 호출하는게 아니라 캡슐화해두고
// 외부에서는 createEngineer같은 팩토리함수를 이용해 간편하게
// 인스턴스를 만들 수 있음.
export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }
  static createEngineer(name) {
    return new Employee(name, "E");
  }
  static createSeniorEngineer(name) {
    return new Employee(name, "SE");
  }
  static createMarketer(name) {
    return new Employee(name, "MK");
  }
}

// 직접적으로 Employee인스턴스만들려면 이름도 알아야하고 타입코드도
// 인자로 넘겨야하는 불편함이 있음
// 이름만 지정해도 인스턴스 만들 수 있게

const employee = Employee.createEngineer("Tom");
