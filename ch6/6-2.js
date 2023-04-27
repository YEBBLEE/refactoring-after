// < 함수 인라인하기 >
// * return하는 값이 있는 함수라면 'result'라는 변수명을 이용하자.

// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return  result;
}
