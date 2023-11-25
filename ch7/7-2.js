// < 컬렉션 캡슐화하기 >
// 🚨 컬렉션 자체에 push를 하고 delete를 할 수 있는건 위험해!
// (외부에서 컬랙션을 맘대로 조작하도록 두면 안됨 )
// => 컬렉션(리스트 같은것들)을 외부에서 직접노출되지 않도록 하자.
// 그래서 아래 예시코드에서도 get courses에 바로 this.#courses노출한게 아니라
// spread operator로 한번 감싸서 새로운 배열이 리턴 되도록 함.

export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }
  get name() {
    return this.#name;
  }
  get courses() {
    return [...this.#courses];
  }
  addCourse(course) {
    this.#courses.push(course);
  }
  removeCourse(course, runIfAbsent) {
    const idx = this.#courses.indexOf(course);
    if (idx === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(idx, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }
  get name() {
    return this.#name;
  }
  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");
// 💩
ellie.courses.push(new Course("리팩토링", true));
// 💕
const course = new Course("TDD", true);
ellie.addCourse(course);
console.log(ellie.courses.length); // output: 1
ellie.removeCourse(course, () => {
  console.log("해당 course는 존재하지 않습니다.");
});
console.log(ellie.courses.length); // output: 0
