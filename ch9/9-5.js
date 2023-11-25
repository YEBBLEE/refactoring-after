// < 값을 참조로 바꾸기 > 📌
// : 앞선 예제에선 인스턴스의 속성이 하나라도 바뀌면 그 내부의 속성을 바꿔주는게 아니라
// 새로운 인스턴스를 만들어서 반환하게 했다면 (참조를 값으로 바꾸기)
// 오히려 값을 참조로 바꾸기가 필요한 경우가 있다.
// 예를 들어, 아래 예제처럼  고객 id하나당 유니크한 인스턴스만 보장하고 싶을때
// 고객의 이름이 바뀐다고 해서 새로운 인스턴스를 만드는게 아니라
// 이 경우는 그 고객의 속성값을 바꿔주는게 더 적합하다.
// (고객인스턴스의 아이디또는 이름이 변경되면 그 인스턴스를 참조하는 다른 곳에서 업뎃된 최신 내용을 보고실을 때
// => 예상되는 변경이니까 이런 경우는 '값을 참조로 바꾸는게' 적합하다. )
// ( 변경사항이 다른 곳에서도 즉각적으로 반영되어야 하는 경우라면 참조를 사용하는게 더 맞음)

// ✨리포지터리 패턴
// : 고유한 id별로 하나의 인스턴스만 존재한다는 걸 보장하고 싶을 때 사용하는 패턴
// => CustomerRepository 클래스를 함 봐바.
// 특정id의 customer인스턴스가 있음 그걸 반환하고 없으면 새로 인스턴스 만들어서 추가시킴.

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
