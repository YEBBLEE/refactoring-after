// < 예외를 사전확인으로 바꾸기 >
/**
 * 예상할 수 있는 케이스에 대해서가 아니라
 * 정말 예외인 경우에 해야 함.
 * 예) 네트워크 오류..
 */
const values = [];
function getValueForPeriod(periodNumber) {
  // 방법 2
  return values[periodNumber] ?? 0;

  // 방법 1
  // if (periodNumber < 0 || periodNumber >= values.length) {
  //   return 0;
  // }
  // return values[periodNumber];

  // 💩
  // if (!value) {
  //   // 값이 없을 수도 있다는건 예상가능한 거니까 아래코드는 예외처리를 남용하는것임.
  //   throw new Error('value is undefined');
  // }
  // return value;
}

getValueForPeriod(-10);
