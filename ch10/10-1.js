// < 조건문 분해하기 >
function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }
  function summerCharge() {
    return quantity * plan.summerRate;
  }
  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}

// yebin ver.
function calculateCharge_t(date, quantity, plan) {
  const isSummerTime =
    !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  const result = isSummerTime //
    ? quantity * plan.summerRate
    : quantity * plan.regularRate + plan.regularServiceCharge;

  return result;
}
