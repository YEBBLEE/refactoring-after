// < 제어 플래그를 탈출문으로 바꾸기 >
// 최대한 boolean타입의 플래그를 사용하지 않도록 break나 continue를 활용하자
for (const p of people) {
  if (p === "Don") {
    sendAlert();
    break;
  }
}
