// < 함수 선언 바꾸기 >
// * 함수 안에서 "정말 필요한 데이터만 매개변수로" 받아오게하자.
export function inNewEngland(state) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"] //
    .includes(state);
}
