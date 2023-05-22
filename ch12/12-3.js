// < 생성자 본문 올리기 >
/**
 * 하위 클래스에서 공통적으로 사용하는 속성이 있으면
 * 항상 super 클래스에서 공통적인 일을 수행하도록 만들자.
 */
class Party {
  #name;
  constructor(name) {
    this.#name = name;
  }
}

class Employee extends Party {
  #id;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  #staff;
  constructor(name, staff) {
    super(name);
    this.#staff = staff;
  }
}

const ellie = new Employee("엘리", 123, 13);
const department = new Department("개발부서", ellie);
