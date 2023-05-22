// < 메서드 내리기 >
/**
 * 특정 서브클래스에서만 필요하다면
 * 서블클래스 내에서 특별히 사용하는 걸로 해야 함
 * ( 부모클래스엔 서브클래스에서 모두 공통으로 사용하는 것만 !)
 */
class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}
