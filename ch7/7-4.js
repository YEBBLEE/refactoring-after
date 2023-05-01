// < 임시 변수를 질의 함수로 바꾸기 >
class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }
  get basePrice() {
    return this.#quantity * this.#item.price;
  }
  get discountFactor() {
    return this.basePrice > 1000 ? 0.95 : 0.98;
  }
  get price() {
    return this.basePrice * this.discountFactor;
  }
}
const order = new Order(5, { price: 1000 });
console.log(order.price);
