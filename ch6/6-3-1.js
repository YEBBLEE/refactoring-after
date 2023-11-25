// < 변수 추출하기 >
// 너무 긴 표현식,로직이 있다면 단계별로 나누어 의미있는 변수명에 할당해주자.

// 리팩토링 후
export function price(order) {
  let basePrice = order.quantity * order.itemPrice;
  let discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  let shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - discount + shipping;
}
