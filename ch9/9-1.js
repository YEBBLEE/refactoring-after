// < 변수 쪼개기  >
// - 의미있는 변수를 쓰자!
// - 업데이트가 필요없는 변수라면 const를 사용하자!
// - 인자로 받은 값을 함수내부에서 바로 업데이트 하는건 지양하자.

// 예제 1
// ps) perimeter : 둘레
const perimeter = 2 * (height + width);
const area = height * width;
console.log(perimeter);
console.log(area);

// 예제 2
function distanceTravelled(scenario, time) {
  let result;
  // 가속도(a) = 힘(F) / 질량(m)
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
}

// 예제 3
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}
