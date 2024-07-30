// 팩토리얼

// 팩토리얼 연산한 값 < n이 되는 가장 큰 값
function solution(n) {
  let i = 1;
  let factorial = 1;

  while (factorial <= n) {
    i += 1;
    factorial *= i;
  }
  return i - 1;
}
