// < 필드 내리기 >
/**
 * 마찬가지로 특정 서브클래스에서만 사용하는 속성이면
 * 그 서브 클래스에서만 정의하자.
 */
class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  #quota;
}
