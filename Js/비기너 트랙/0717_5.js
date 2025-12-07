// 양꼬치

//n은 양꼬치, k는 음료수
function solution(n, k) {
  service = Math.floor(n / 10);

  k = k - service;
  sum = 12000 * n + 2000 * k;

  return sum;
}
