// < 변수 인라인하기 >
// 짧고 간결한데 굳이 변수로 추출할 필요는 없음

export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
