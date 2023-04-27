// < 변수 추출하기 >

// < 변수 추출하기 >
// * private 데이터 표현은 '#'을 이용

// 리팩토링 후
export class Order {
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }
  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get price() {
    return this.basePrice -this.discount + this.shipping;
  }
}

// 리팩토링 전
// export class Order {
//   constructor(aRecord) {
//     this._data = aRecord;
//   }

//   get quantity() {
//     return this._data.quantity;
//   }
//   get itemPrice() {
//     return this._data.itemPrice;
//   }

//   get price() {
//     return (
//       this.quantity * this.itemPrice -
//       Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
//       Math.min(this.quantity * this.itemPrice * 0.1, 100)
//     );
//   }
// }
