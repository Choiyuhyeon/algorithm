// 배열 두배 만들기

//방법 1
function solution(numbers) {
  var answer = [];
  for (let i in numbers) {
    // of를 쓰면 안됨. of: 배열의 요소 반환. in:배열의 index 반환
    answer[i] = numbers[i] * 2;
  }
  return answer;
}

//방법 2
function solution2(numbers) {
  return numbers.map((number) => number * 2);
}
// map함수를 사용하면 가독성이 좋아짐! map:배열을 순회하는 메서드

//방법 3
function solution2(numbers) {
  return numbers.map(function (mul) {
    return mul * 2;
  });
}
// map함수를 이용하여 콜백함수 선언 및 호출
