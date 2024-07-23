// 문자열 뒤집기

// 틀린 예시 : 배열에 map을 사용할 수 있지만, 문자열에는 사용이 불가능하다.
// 따라서 문자열을 배열로 변환하여 배열의 reverse메서드를 사용하거나 다른 방법을 시도해야한다.
// function solution(my_string) {
//   return my_string.map(function (str) {
//     return str.reverse();
//   });
// }

function solution(my_string) {
  return my_string.split('').reverse().join('');
}

// split(''): 문자열을 빈 문자열 기준으로 나누어 배열로 변환
// reverse(): 배열의 요소 순서를 뒤집음
// join(''): 배열을 다시 문자열로 결합
