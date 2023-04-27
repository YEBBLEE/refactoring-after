// < 변수 추출하기 >

// 리팩토링 후
export function price(order) {
  let basePrice = order.quantity * order.itemPrice;
  let discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  let shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  
  return basePrice - discount + shipping;
}


// 리팩토링 전
// export function price(order) {
//   // 가격(price) = 기본가격 - 수량할인 + 배송비
//   return (
//     order.quantity * order.itemPrice -
//     Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
//     Math.min(order.quantity * order.itemPrice * 0.1, 100)
//   );
// }
