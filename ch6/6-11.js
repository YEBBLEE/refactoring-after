// < 단계 쪼개기 >
// Ellie VER.
export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = calcDiscount(quantity, product);
  const shippingCost = calcShippingCost(basePrice, quantity, shippingMethod);
  return basePrice - discount + shippingCost;
}
function calcDiscount(quantity, product) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}
function calcShippingCost(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  return quantity * shippingPerCase;
}

// 사용 예:
const product_ = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod_ = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product_, 5, shippingMethod_);
console.log(price);

// YEBIN VER.
class Product {
  #basePrice;
  #discountRate;
  #discountThreshold;
  constructor(data) {
    this.#basePrice = data.basePrice;
    this.#discountRate = data.discountRate;
    this.#discountThreshold = data.discountThreshold;
  }
  get basePrice() {
    return this.#basePrice;
  }
  get discountRate() {
    return this.#discountRate;
  }
  get discountThreshold() {
    return this.#discountThreshold;
  }

  calculateBasePrice(quantity) {
    return this.basePrice * quantity;
  }

  calculateDiscount(quantity) {
    const maxDiscountQuantity = Math.max(quantity - this.discountThreshold, 0);
    const result = maxDiscountQuantity * this.basePrice * this.discountRate;
    return result;
  }
}

class Shipping {
  #discountThreshold;
  #feePerCase;
  #discountedFee;
  constructor(data) {
    this.#discountThreshold = data.discountThreshold;
    this.#feePerCase = data.feePerCase;
    this.#discountedFee = data.discountedFee;
  }
  get discountThreshold() {
    return this.#discountThreshold;
  }
  get feePerCase() {
    return this.#feePerCase;
  }
  get discountedFee() {
    return this.#discountedFee;
  }

  shippingPerCase(basePrice) {
    return basePrice > this.discountThreshold
      ? this.discountedFee
      : this.feePerCase;
  }
  shippingCost(quantity, basePrice) {
    return quantity * this.shippingPerCase(basePrice);
  }
}

class Order {
  #product;
  #shippingMethod;
  #quantity;
  constructor(data) {
    this.#product = data.product;
    this.#shippingMethod = data.shippingMethod;
    this.#quantity = data.quantity;
  }

  get product() {
    return this.#product;
  }

  get shippingMethod() {
    return this.#shippingMethod;
  }

  get quantity() {
    return this.#quantity;
  }

  get price() {
    const basePrice = this.product.calculateBasePrice(this.quantity);
    const discount = this.product.calculateDiscount(this.quantity);
    const shippingCost = this.shippingMethod.shippingCost(
      this.quantity,
      basePrice
    );
    const result = basePrice - discount + shippingCost;
    return result;
  }
}

// 사용 예:
const product = new Product({
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
});

const shippingMethod = new Shipping({
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
});

const order = new Order({
  product,
  shippingMethod,
  quantity: 5,
});
const finalPrice = order.price;
console.log(finalPrice);
