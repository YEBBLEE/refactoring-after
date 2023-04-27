// < 변수 캡슐화하기 >
// * 객체는 항상 '참조값'을 전달하기 때문에 내부 데이터 변경이 가능한 객체를 여기저기 전달하는 건 위험!
// 방법 1) 
// spread operator를 이용해 복사한 객체를 반환하기 
//-> 단, 얕은복사의 위험성을 인지하고 사용해야... (객체 안에 객체가 있는 경우엔 적합 X)

// 방법 2)
// 아래처럼 클래스를 이용하자. 
// -> 이렇게 하면 get은 가능하지만 set은 안되서 함부로 바꿀 수 없게됨. 

class Person {
  #firstName;
  #lastName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName () {
    return this.#lastName
  }
  get firstName() {
    return this.#firstName
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}
