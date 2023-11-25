// < 함수 인라인하기 >
// * return하는 값이 있는 함수라면 'result'라는 변수명을 이용하자.
// 긴함수가 있다면 의미있는 단위로 나누고 의미있는 이름을 부여해 가독성을 높이고 재사용성, 유지보수성을 높이자.
// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}
