// < 어서션 추가하기 >
// 개발단계에서는 assert사용해서 죽는지 확인하고
// 상용에서는 동적으로 내려온 값에 의해 죽지 않도록 처리헤야 함
import { strict as assert } from "node:assert";
class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(10);
// new Customer().applyDiscount(-1);
