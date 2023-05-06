// < 값을 참조로 바꾸기 >
// : 앞선 예제에선 인스턴스의 속성이 하나라도 바뀌면 그 내부의 속성을 바꿔주는게 아니라
// 새로운 인스턴스를 만들어서 반환하게 했다면 (참조를 값으로 바꾸기)
// 오히려 값을 참조로 바꾸기가 필요한 경우가 있다.
// 예를 들어, 아래 예제처럼  고객 id하나당 유니크한 인스턴스만 보장하고 싶을때
// 고객의 이름이 바뀐다고 해서 새로운 인스턴스를 만드는게 아니라
// 이 경우는 그 고객의 속성값을 바꿔주는게 더 적합하다.
// ( 변경사항이 다른 곳에서도 즉각적으로 반영되어야 하는 경우라면 참조를 사용하는게 더 맞음)

const customerRepository = new CustomerRepository();
const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
);
class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;
  constructor() {
    this.#customers = new Map();
  }
  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }
  findCustomer(id) {
    return this.#customers.get(id);
  }
}
