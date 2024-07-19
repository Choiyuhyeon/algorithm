// 몫 구하기
function solution(num1, num2) {
  result = ~~(num1 / num2);
  return result;
}

//방법 2
function solution(num1, num2) {
  result = Math.floor(num1 / num2);
  return result;
}
