// 피자 나눠 먹기 (1)

function solution(n) {
  if (n / 7 == ~~(n / 7)) {
    return n / 7;
  }
  return n / 7 + 1;
}
