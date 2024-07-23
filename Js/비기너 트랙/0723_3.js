// 특정 문자 제거하기
// 이 코드로 배열 순회 및 filter 감찾기
function solution(my_string, letter) {
  return my_string
    .split('')
    .filter((v) => v !== letter)
    .join('');
}
