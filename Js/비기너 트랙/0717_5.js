// 양꼬치

function solution(n, k) {
  service = Math.floor(n / 10);

  k = k - service;
  sum = 12000 * n + 2000 * k;

  return sum;
}
