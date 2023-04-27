// < 변수 인라인하기 >

// 리팩토링 후
export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}

// 리팩토링 전
// export function isDeliveryFree(anOrder) {
//   let basePrice = anOrder.basePrice;
//   return basePrice > 1000;
// }
