/**
 *
 * @param {*} invoice
 * @param {*} plays
 * @returns
 *
 * 출력포맷에 관한 함수를 따로 분리하고 싶음
 */
export function statement(invoice, plays) {
  const customer = invoice.customer;
  const invoiceTotalAmount = totalAmount();
  const invoiceVolumeCredits = volumeCredits();
  const result =
    printInvoiceTitle(customer) +
    printAmountPerPerformance() +
    printTotalAmount(invoiceTotalAmount) +
    printVolumeCredits(invoiceVolumeCredits);
  return result;

  // 공연별 가격을 리턴
  function amountFor(perf) {
    const playType = plays[perf.playID].type;
    const baseAmount =
      playType === "tragedy"
        ? 40000
        : playType === "comedy"
        ? 30000 + 300 * perf.audience
        : 0;

    let extraAmount = 0;
    switch (playType) {
      case "tragedy":
        if (perf.audience > 30) {
          extraAmount = 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        if (perf.audience > 20) {
          extraAmount = 10000 + 500 * (perf.audience - 20);
        }
        break;
      default:
        throw new Error(`unknown type: ${playType}`);
    }
    return baseAmount + extraAmount;
  }

  // 총액을 계산하여 리턴함
  function totalAmount() {
    const result = invoice.performances.reduce(
      (total, perf) => (total += amountFor(perf)),
      0
    );
    return result;
  }

  // 적립포인트를 계산하여 리턴
  function volumeCredits() {
    const result = invoice.performances.reduce((volumeCredit, perf) => {
      const play = plays[perf.playID];
      volumeCredit += Math.max(perf.audience - 30, 0);
      if ("comedy" === play.type) {
        volumeCredit += Math.floor(perf.audience / 5);
      }
      return volumeCredit;
    }, 0);
    return result;
  }

  // 공연별 청구내역을 출력함

  function printAmountPerPerformance() {
    let result = "";
    invoice.performances.forEach((perf) => {
      const play = plays[perf.playID];
      const thisAmount = amountFor(perf);
      result += printAmount(play.name, thisAmount, perf.audience);
    });
    return result;
  }
}

function usd(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number);
}

function printInvoiceTitle(customer) {
  return `청구 내역 (고객명: ${customer})\n`;
}
function printAmount(playName, thisAmount, audience) {
  return `  ${playName}: ${usd(thisAmount / 100)} (${audience}석)\n`;
}
function printTotalAmount(totalAmount) {
  return `총액: ${usd(totalAmount / 100)}\n`;
}
function printVolumeCredits(volumeCredits) {
  return `적립 포인트: ${volumeCredits}점\n`;
}

// 사용예:
const playsJSON = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

const invoicesJSON = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  },
];

const result = statement(invoicesJSON[0], playsJSON);
const expected =
  "청구 내역 (고객명: BigCo)\n" +
  "  Hamlet: $650.00 (55석)\n" +
  "  As You Like It: $580.00 (35석)\n" +
  "  Othello: $500.00 (40석)\n" +
  "총액: $1,730.00\n" +
  "적립 포인트: 47점\n";
console.log(result);
console.log(result === expected);
