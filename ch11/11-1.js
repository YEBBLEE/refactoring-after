// < 질의 함수와 변경함수 분리하기 >
// 예제 1

function getTotalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  // bill을 보냄
}
// 예제 2
// ps) miscreant : 악당
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people) {
  people.map((p) => {
    if (p === "Don" || p === "John") {
      return p;
    }
    return "";
  });
}
function setOffAlarms(alarm, p) {
  alarm.setOff("Found Miscreant " + p);
}
