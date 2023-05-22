//  < 필드 올리기 >
// 서브클래스에서 동일한 속성을 갖고 있으면
// 동일한 속성을 부모 클래스에서 갖고 있게 하자.
class Employee {
  #name;
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
