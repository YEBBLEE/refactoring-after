// < 중첩 조건문을 보호 구문으로 바꾸기 >

export function adjustedCapital(instrument) {
  if (!isEligilbeForAdjustedCapital(instrument)) return 0;
  return (
    (instrument.income / instrument.duration) * instrument.adjustmentFactor
  );
}

function isEligilbeForAdjustedCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}

// yebin ver
export function adjustedCapital_t(instrument) {
  if (instrument.capital <= 0) return 0;
  if (instrument.interestRate <= 0 || instrument.duration <= 0) return 0;
  return (
    (instrument.income / instrument.duration) * instrument.adjustmentFactor
  );
}
