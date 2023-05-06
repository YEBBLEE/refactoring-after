// < 파생 변수를 질의 함수로 바꾸기 >
// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  // 가변데이터가 있는경우엔, 실시간으로 계산될 수 있도록 질의함수로 만들자
  get production() {
    return this._adjustments.reduc((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
