/**
 *
 * @param {*} invoice
 * 테스트 가능하게 함수를 만들고 싶으면
 * 함수 내부에서 의존도를 갖게하는게 아니라
 * (아래 예시에선 console,new Date가 함수 내에 의존성이 있음)
 * 외부에서 주입받도록 만들어야 함.
 * (즉, 인자로 전달받도록 )
 */
export function printOwing(invoice, console, clock) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};

class Clock {
  constructor() {}
  get today() {
    return new Date();
  }
}
printOwing(invoice, console, new Clock());
