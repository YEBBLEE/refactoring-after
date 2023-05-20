// < 질의함수를 매개변수로 바꾸기 >
targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
// 💕
function targetTemperature(aPlan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}

// 💩
function targetTemperature_t(aPlan) {
  // 아래처럼 함수 내부에서 thermostat이라는 전역변수이거나
  // 다른 객체에 직접 접근하는건 똥 (너무 다른 모듈과 커플링되어있음)
  // 외부 의존성이 필요한경우엔 매개변수로 가져오자
  currentTemperature = thermostat.currentTemperature;
  // ...
}
