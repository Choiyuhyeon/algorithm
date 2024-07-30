// 가까운 수

function solution(array, n) {
  let 두수의차 = Infinity;
  let result = 0;

  for (let i of array) {
    // of문은 요소를 추출?
    if (Math.abs(n - i) < 두수의차) {
      두수의차 = Math.abs(n - i);
      result = i;
    }
  }
}
