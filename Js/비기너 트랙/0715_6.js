// 짝수의 합
// function solution(n) {
//   let answer = 0; // answer 변수 초기화
//   for (let i = 0; i <= n; i++) {
//     // i가 n까지 포함되도록 수정
//     if (i % 2 == 0) {
//       // 짝수인지 확인
//       answer += i;
//     }
//   }
//   return answer; // 결과 반환
// }

// about:blank console에서 테스트 해서 최적화 한 코드

function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c);
}
