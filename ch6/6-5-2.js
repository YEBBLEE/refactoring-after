// < 함수 선언 바꾸기 >

// 후
export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }
  // 우선순위 높은 고객을 추가하도록 하고싶다면,
  // isPriority가 true면 더 빨리 예약되게하는 ~ 그런
  // -> 결론, boolean으로 뭔가 동작을 다르게하는 함수면
  // true냐 false냐에 따라 다른 동작을 하게 만드는건 좋지 않다. 
  // 정말 필요한 경우라면, 기존 코드에 문제 없게하려면 기본값을 false로 
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}


// 전
// export default class Book {
//   #reservations;
//   constructor() {
//     this.#reservations = [];
//   }

//   addReservation(customer) {
//     this.#reservations.push(customer);
//   }

//   hasReservation(customer) {
//     return this.#reservations.some(
//       (reservedCustomer) => reservedCustomer.id === customer.id
//     );
//   }
// }
