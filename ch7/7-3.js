// < 기본형을 객체로 바꾸기 >
export class Order {
  #priority;
  constructor(data) {
    this.#priority = data.priority;
  }
  get priority() {
    return this.#priority;
  }
  get isHighPriority() {
    return this.priority === "high" || this.priority === "rush" ? true : false;
    // return this.priority.higherThan("normal");
  }
}
// class Priority {
//   #value;
//   constructor(value) {
//     if (Priority.legalValues().includes(value)) {
//       this.#value = value;
//     } else {
//       throw new Error(`${value} is invalid for Priority`);
//     }
//   }

//   get index() {
//     return Priority.legalValues().indexOf(this.#value);
//   }
//   equals(other) {
//     return this.index === other.index;
//   }

//   higherThan(other) {
//     return this.index > other.index;
//   }
//   static legalValues() {
//     return ["low", "normal", "high", "rush"];
//   }
// }
const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highCount = orders.filter((o) => o.isHighPriority).length;
console.log(highCount);
