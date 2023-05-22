//  < 메서드 올리기 >
// 서브클래스에서 공통으로 쓰이는 함수는 부모클래스로 옮기자
// 예시 1
class Employee {
  get name() {}
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

// 예시 2
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}
class Employee extends Party {}
